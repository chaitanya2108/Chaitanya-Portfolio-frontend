"use client";

import React, { useState, useEffect } from "react";
import { Wifi, WifiOff } from "lucide-react";

const OfflineIndicator = () => {
  const [isOnline, setIsOnline] = useState(true);
  const [showIndicator, setShowIndicator] = useState(false);

  useEffect(() => {
    // Check initial online status
    setIsOnline(navigator.onLine);

    // Listen for online/offline events
    const handleOnline = () => {
      setIsOnline(true);
      setShowIndicator(false);
    };

    const handleOffline = () => {
      setIsOnline(false);
      setShowIndicator(true);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // Show indicator if we're using backup data (check localStorage)
    const checkBackupUsage = () => {
      try {
        const backupTimestamp = localStorage.getItem(
          "portfolio_backup_timestamp"
        );
        if (backupTimestamp) {
          const backupTime = new Date(backupTimestamp);
          const now = new Date();
          const hoursDiff = (now - backupTime) / (1000 * 60 * 60);

          // If backup is older than 1 hour, show indicator
          if (hoursDiff > 1) {
            setShowIndicator(true);
          }
        }
      } catch (error) {
        console.error("Error checking backup usage:", error);
      }
    };

    checkBackupUsage();

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  if (!showIndicator) return null;

  return (
    <div className="fixed top-4 right-4 z-50">
      <div
        className={`flex items-center space-x-2 px-4 py-2 rounded-lg shadow-lg transition-all duration-300 ${
          isOnline
            ? "bg-yellow-100 text-yellow-800 border border-yellow-300"
            : "bg-red-100 text-red-800 border border-red-300"
        }`}
      >
        {isOnline ? (
          <>
            <Wifi className="w-4 h-4" />
            <span className="text-sm font-medium">Using cached data</span>
          </>
        ) : (
          <>
            <WifiOff className="w-4 h-4" />
            <span className="text-sm font-medium">Offline mode</span>
          </>
        )}
      </div>
    </div>
  );
};

export default OfflineIndicator;
