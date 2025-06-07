// src/components/Loading.jsx
const Loading = () => {
  return (
    <div className="flex justify-center items-center py-20">
      <div className="animate-spin rounded-full h-8 w-8 border-t-4 border-blue-500 border-solid mr-2"></div>
      <span className="text-gray-700 font-medium text-lg">Loading...</span>
    </div>
  );
};

export default Loading;