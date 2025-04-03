import React from "react";

const Loading = () => {
    return (
      <div className="flex justify-center items-center h-full space-x-2">
      <div className="w-4 h-4 bg-black rounded-full animate-bounce"></div>
      <div className="w-4 h-4 bg-black rounded-full animate-bounce delay-150"></div>
      <div className="w-4 h-4 bg-black rounded-full animate-bounce delay-300"></div>
  </div>
    );
};

export default Loading;