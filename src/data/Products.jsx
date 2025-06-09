import WirelessHeadset from '../assets/WirelessHeadset.jpeg'
import smartwatch from '../assets/smartwatch.jpeg'
import gamingkeyboard from '../assets/gamingkeyboard.jpeg'
import bluetoothspeaker from '../assets/bluetoothspeaker.jpeg'
import monitor from '../assets/monitor.png'
import HDD from '../assets/HDD.jpeg'
import phoneholder from '../assets/phoneholder.jpeg'
import wirelesscharger from '../assets/wirelesscharger.jpeg'
import vrheadset from '../assets/vrheadset.jpeg'
import laptopstand from '../assets/laptopstand.jpeg'
import USBC from '../assets/USBC.jpeg'
import homecamera from '../assets/homecamera.jpeg'
import lessmicrophone from '../assets/lessmicrophone.jpeg'
import powerbank from '../assets/powerbank.jpeg'
import smartbulb from '../assets/smartbulb.jpeg'
import digitalCamera from '../assets/digitalCamera.jpeg'
import fitnesstracker from '../assets/fitnesstracker.jpeg'
import smartdoorlock from '../assets/smartdoorlock.jpeg'
import earbud from '../assets/earbud.jpeg'
import streaming from '../assets/streaming.jpeg'
import thermostat from '../assets/thermostat.jpeg'
import actioncamera from '../assets/actioncamera.jpeg'
import earphone from '../assets/earphone.jpeg'
import desktop from '../assets/desktop.jpeg'
import presenter from '../assets/presenter.jpeg'
import smartplug from '../assets/smartplug.jpeg'
import dashcam from '../assets/dashcam.jpeg'
import cleaner from '../assets/cleaner.jpeg'
import detector from '../assets/detector.jpeg'
import cablemgt from '../assets/cablemgt.jpeg'


const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 20000.99,
    image: WirelessHeadset,
    description: "High-quality wireless headphones with noise cancellation."
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 30000.99,
    image: smartwatch,
    description: "Track your fitness and health metrics with style."
  },
  {
    id: 3,
    name: "Gaming Keyboard",
    price: 3000.99,
    image: gamingkeyboard,
    description: "RGB mechanical keyboard for fast and responsive gaming."
  },
  {
    id: 4,
    name: "Bluetooth Speaker",
    price: 180000.99,
    image: bluetoothspeaker,
    description: "Portable speaker with high-quality sound."
  },
  {
    id: 5,
    name: "Monitor",
    price: 100000.00,
    image: monitor,
    description: "Ultra HD monitor for immersive viewing experience."
  },
  {
    id: 6,
    name: "External Hard Drive",
    price: 10000.00,
    image: HDD,
    description: "2TB portable external hard drive."
  },
  {
    id: 7,
    name: "Smartphone Holder",
    price: 10000.00,
    image: phoneholder,
    description: "Adjustable holder for smartphones and tablets."
  },
  {
    id: 8,
    name: "Wireless Charger",
    price: 30000.00,
    image: wirelesscharger,
    description: "Fast wireless charging pad compatible with all Qi-enabled devices."
  },
  {
    id: 9,
    name: "VR Headset",
    price: 18000.99,
    image: vrheadset,
    description: "Virtual reality headset for immersive gaming."
  },
  {
    id: 10,
    name: "Laptop Stand",
    price: 19000.00,
    image: laptopstand,
    description: "Ergonomic stand to improve your workstation."
  },
  {
    id: 11,
    name: "USB-C Hub",
    price: 180000.00,
    image: USBC,
    description: "Multi-port USB-C hub with HDMI, USB, and SD card slots."
  },
  {
    id: 12,
    name: "Smart Home Camera",
    price: 69999.99,
    image: homecamera,
    description: "Security camera with night vision and motion detection."
  },
  {
    id: 13,
    name: "Wireless Microphone",
    price: 48800.00,
    image: lessmicrophone,
    description: "Handheld wireless microphone for live performances."
  },
  {
    id: 14,
    name: "Itel Power Bank",
    price: 29999.99,
    image: powerbank,
    description: "10000mAh power bank for on-the-go charging."
  },
  {
    id: 15,
    name: "Smart Light Bulb",
    price: 14500.00,
    image: smartbulb,
    description: "Wi-Fi enabled color LED light bulb."
  },
  {
    id: 16,
    name: "Canon Digital Camera",
    price: 349999.99,
    image: digitalCamera,
    description: "High-resolution digital camera for photography enthusiasts."
  },
  {
    id: 17,
    name: "Fitness Tracker",
    price: 7000.00,
    image: fitnesstracker,
    description: "Track your daily activity and sleep patterns."
  },
  {
    id: 18,
    name: "Smart Door Lock",
    price: 127000.00,
    image: smartdoorlock,
    description: "Keyless smart door lock for enhanced security."
  },
  {
    id: 19,
    name: "Wireless Earbuds",
    price: 30000.00,
    image: earbud,
    description: "Comfortable earbuds with noise isolation."
  },
  {
    id: 20,
    name: "Streaming Device",
    price: 50000.00,
    image: streaming,
    description: "Stream your favorite shows in 4K."
  },
  {
    id: 21,
    name: "Smart Thermostat",
    price: 19000.00,
    image: thermostat,
    description: "Control your home temperature remotely."
  },
  {
    id: 22,
    name: "Action Camera",
    price: 79999.99,
    image: actioncamera,
    description: "Capture your adventures in 4K."
  },
  {
    id: 23,
    name: "Noise Cancelling Earphones",
    price: 4999.99,
    image: earphone,
    description: "In-ear headphones with active noise cancelling."
  },
  {
    id: 24,
    name: "Smart Window Blinds",
    price: 249.99,
    image: "https://via.placeholder.com/200x150",
    description: "Automated blinds controlled via app."
  },
  {
    id: 25,
    name: "Desktop Computer",
    price: 500000.00,
    image: desktop,
    description: "Powerful desktop PC for work and gaming."
  },
  {
    id: 26,
    name: "Wireless Presenter",
    price: 22999.99,
    image: presenter,
    description: "Control your presentations remotely."
  },
  {
    id: 27,
    name: "Smart Plug",
    price: 39999.99,
    image: smartplug,
    description: "Turn appliances on/off remotely."
  },
  {
    id: 28,
    name: "Dash Cam",
    price: 38500.00,
    image: dashcam,
    description: "Record your drives with HD quality."
  },
  {
    id: 29,
    name: "Samsung Robot Vacuum Cleaner",
    price: 149000.00,
    image: cleaner,
    description: "Automated vacuum for effortless cleaning."
  },
  {
    id: 30,
    name: "Smart Smoke Detector",
    price: 32000.00,
    image: detector,
    description: "Detect smoke and alert your phone."
  },
  {
    id: 31,
    name: "Cable Management System",
    price: 200000.00,
    image: cablemgt,
    description: "Keep your cables organized and tidy."
  },
  {
    id: 32,
    name: "Streaming Webcam",
    price: 17000.00,
    image: streamcam,
    description: "High-definition webcam for streaming and video calls."
  },
  {
    id: 33,
    name: "Smart Garage Opener",
    price: 229.99,
    image: "https://via.placeholder.com/200x150",
    description: "Open and close your garage remotely."
  },
  {
    id: 34,
    name: "Wireless Gaming Mouse",
    price: 59.99,
    image: "https://via.placeholder.com/200x150",
    description: "High-precision mouse for gaming."
  },
  {
    id: 35,
    name: "LED Strip Lights",
    price: 29.99,
    image: "https://via.placeholder.com/200x150",
    description: "Colorful LED strip for ambiance."
  },
  {
    id: 36,
    name: "Smart Water Bottle",
    price: 39.99,
    image: "https://via.placeholder.com/200x150",
    description: "Hydrate smarter with LED reminders."
  },
  {
    id: 37,
    name: "Wireless Car Charger",
    price: 34.99,
    image: "https://via.placeholder.com/200x150",
    description: "Charge your phone on the go."
  },
  {
    id: 38,
    name: "Smart Alarm Clock",
    price: 79.99,
    image: "https://via.placeholder.com/200x150",
    description: "Wake up with your favorite tunes."
  },
  {
    id: 39,
    name: "Smart Pet Feeder",
    price: 149.99,
    image: "https://via.placeholder.com/200x150",
    description: "Automatically feed your pets."
  },
  {
    id: 40,
    name: "Wireless Office Keyboard",
    price: 49.99,
    image: "https://via.placeholder.com/200x150",
    description: "Ergonomic wireless keyboard for work."
  }
];

export default products;