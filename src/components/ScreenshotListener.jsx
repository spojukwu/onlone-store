import { useEffect } from "react";
import html2canvas from "html2canvas";

const ScreenshotListener = () => {
  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      console.warn("SpeechRecognition not supported in this browser.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.lang = "en-US";

    let isListening = false;

    recognition.onstart = () => {
      isListening = true;
      console.log("Voice recognition started...");
    };

    recognition.onend = () => {
      isListening = false;
      console.log("Recognition ended, restarting...");
      if (!isListening) {
        try {
          recognition.start();
        } catch (err) {
          console.error("Error restarting recognition:", err);
        }
      }
    };

    recognition.onerror = (err) => {
      console.error("Speech recognition error:", err);
      recognition.stop();
    };

    recognition.onresult = (event) => {
      const transcript = event.results[event.results.length - 1][0].transcript.toLowerCase();
      console.log("Heard:", transcript);
      if (transcript.includes("take screenshot")) {
        html2canvas(document.documentElement, {
          width: window.innerWidth,
          height: window.innerHeight,
          windowWidth: window.innerWidth,
          windowHeight: window.innerHeight,
          scrollX: window.scrollX,
          scrollY: window.scrollY
        }).then((canvas) => {
          // Crop to viewport
          const croppedCanvas = document.createElement("canvas");
          croppedCanvas.width = window.innerWidth;
          croppedCanvas.height = window.innerHeight;
          const ctx = croppedCanvas.getContext("2d");
          ctx.drawImage(
            canvas,
            window.scrollX,
            window.scrollY,
            window.innerWidth,
            window.innerHeight,
            0,
            0,
            window.innerWidth,
            window.innerHeight
          );
          const link = document.createElement("a");
          link.download = "screenshot.png";
          link.href = croppedCanvas.toDataURL();
          link.click();
        });
      }
    };

    try {
      recognition.start();
    } catch (err) {
      console.error("Recognition start error:", err);
    }

    return () => {
      if (isListening) recognition.stop();
    };
  }, []);

  return null;
};

export default ScreenshotListener;