"use client";

import React, { useState } from "react";
import { RefreshCw } from "lucide-react";
import { clearAllCaches } from "../utils/freshData";

const RefreshButton = ({ onRefresh }) => {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = async () => {
    setIsRefreshing(true);

    try {
      // Clear all caches
      await clearAllCaches();

      // Call the refresh callback if provided
      if (onRefresh) {
        await onRefresh();
      } else {
        // Default: reload the page
        window.location.reload();
      }
    } catch (error) {
      console.error("Error refreshing data:", error);
    } finally {
      setIsRefreshing(false);
    }
  };

  return (
    <button
      onClick={handleRefresh}
      disabled={isRefreshing}
      className="fixed bottom-4 left-4 z-50 bg-orange-600 hover:bg-orange-700 disabled:bg-orange-400 text-white p-3 rounded-full shadow-lg transition-all duration-200 flex items-center justify-center"
      title="Refresh data from server"
    >
      <RefreshCw className={`w-5 h-5 ${isRefreshing ? "animate-spin" : ""}`} />
    </button>
  );
};

export default RefreshButton;
