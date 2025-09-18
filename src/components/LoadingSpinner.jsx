"use client";

import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-orange-50">
      <div className="text-center">
        {/* Animated spinner */}
        <div className="relative">
          <div className="w-20 h-20 border-4 border-orange-200 border-t-orange-600 rounded-full animate-spin mx-auto mb-4"></div>
          <div
            className="absolute inset-0 w-20 h-20 border-4 border-transparent border-l-orange-400 rounded-full animate-spin mx-auto"
            style={{ animationDirection: "reverse", animationDuration: "1.5s" }}
          ></div>
        </div>

        {/* Loading text */}
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Loading Portfolio
        </h3>
        <p className="text-gray-600">
          Please wait while we fetch the latest content...
        </p>

        {/* Loading dots animation */}
        <div className="flex justify-center mt-4 space-x-1">
          <div
            className="w-2 h-2 bg-orange-600 rounded-full animate-bounce"
            style={{ animationDelay: "0s" }}
          ></div>
          <div
            className="w-2 h-2 bg-orange-600 rounded-full animate-bounce"
            style={{ animationDelay: "0.1s" }}
          ></div>
          <div
            className="w-2 h-2 bg-orange-600 rounded-full animate-bounce"
            style={{ animationDelay: "0.2s" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
