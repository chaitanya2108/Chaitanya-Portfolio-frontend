/**
 * Fresh Data Utility
 * Ensures fresh API calls on every page load
 */

// Clear all caches to force fresh data
export const clearAllCaches = async () => {
  if (typeof window === "undefined") return;

  try {
    // Clear localStorage cache
    localStorage.removeItem("portfolio_backup");
    localStorage.removeItem("portfolio_backup_timestamp");

    // Clear sessionStorage
    sessionStorage.clear();

    // Clear browser cache
    if ("caches" in window) {
      const cacheNames = await caches.keys();
      await Promise.all(
        cacheNames.map((cacheName) => caches.delete(cacheName))
      );
    }

    // Clear any service worker cache
    if ("serviceWorker" in navigator) {
      const registrations = await navigator.serviceWorker.getRegistrations();
      await Promise.all(
        registrations.map((registration) => registration.unregister())
      );
    }

    console.log("✅ All caches cleared for fresh data");
  } catch (error) {
    console.error("❌ Error clearing caches:", error);
  }
};

// Generate cache-busting timestamp
export const getCacheBuster = () => {
  return new Date().getTime();
};

// Create cache-busting URL
export const addCacheBuster = (url) => {
  const separator = url.includes("?") ? "&" : "?";
  return `${url}${separator}_t=${getCacheBuster()}`;
};

// Force page reload with cache clearing
export const forceFreshReload = async () => {
  await clearAllCaches();

  // Add cache-busting parameter to current URL
  const currentUrl = new URL(window.location.href);
  currentUrl.searchParams.set("_t", getCacheBuster());

  // Reload with cache-busting
  window.location.href = currentUrl.toString();
};

// Check if we should force fresh data (e.g., on page load)
export const shouldForceFreshData = () => {
  if (typeof window === "undefined") return false;

  // Force fresh data on page load
  const urlParams = new URLSearchParams(window.location.search);
  const forceFresh = urlParams.get("fresh") === "true";

  // Force fresh data if localStorage is empty
  const hasCachedData = localStorage.getItem("portfolio_backup");

  return forceFresh || !hasCachedData;
};

export default {
  clearAllCaches,
  getCacheBuster,
  addCacheBuster,
  forceFreshReload,
  shouldForceFreshData,
};
