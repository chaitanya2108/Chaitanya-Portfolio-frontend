// Data Manager - Handles data initialization and backup management
import {
  getBackupData,
  saveDataToBackup,
  loadDataFromBackup,
  isBackupDataRecent,
} from "./backupData";

// Initialize backup data if it doesn't exist
export const initializeBackupData = () => {
  try {
    const existingBackup = localStorage.getItem("portfolio_backup");

    if (!existingBackup) {
      console.log("Initializing backup data for the first time");
      const defaultData = getBackupData();
      saveDataToBackup(defaultData);
      return defaultData;
    }

    return loadDataFromBackup();
  } catch (error) {
    console.error("Failed to initialize backup data:", error);
    return getBackupData();
  }
};

// Check if we should use backup data (when backend is unavailable)
export const shouldUseBackupData = () => {
  // For now, we'll always try the API first and fall back to backup
  // This could be enhanced to check network status or backend health
  return false;
};

// Get data with fallback strategy
export const getDataWithFallback = async (apiFunction, dataKey) => {
  try {
    // Try to get data from API
    const data = await apiFunction();

    // If successful, update backup
    const backupData = loadDataFromBackup();
    backupData[dataKey] = data;
    saveDataToBackup(backupData);

    return data;
  } catch (error) {
    console.log(`API failed for ${dataKey}, using backup data`);
    const backupData = loadDataFromBackup();
    return backupData[dataKey];
  }
};

// Clear old backup data (older than 7 days)
export const clearOldBackupData = () => {
  try {
    const timestamp = localStorage.getItem("portfolio_backup_timestamp");
    if (!timestamp) return;

    const backupTime = new Date(timestamp);
    const now = new Date();
    const daysDiff = (now - backupTime) / (1000 * 60 * 60 * 24);

    if (daysDiff > 7) {
      console.log("Clearing old backup data (older than 7 days)");
      localStorage.removeItem("portfolio_backup");
      localStorage.removeItem("portfolio_backup_timestamp");

      // Reinitialize with fresh backup data
      const defaultData = getBackupData();
      saveDataToBackup(defaultData);
    }
  } catch (error) {
    console.error("Failed to clear old backup data:", error);
  }
};

// Get backup data status
export const getBackupDataStatus = () => {
  try {
    const timestamp = localStorage.getItem("portfolio_backup_timestamp");
    const hasBackup = !!localStorage.getItem("portfolio_backup");

    if (!hasBackup) {
      return {
        hasBackup: false,
        lastUpdated: null,
        isRecent: false,
      };
    }

    const lastUpdated = timestamp ? new Date(timestamp) : null;
    const isRecent = isBackupDataRecent();

    return {
      hasBackup: true,
      lastUpdated,
      isRecent,
    };
  } catch (error) {
    console.error("Failed to get backup data status:", error);
    return {
      hasBackup: false,
      lastUpdated: null,
      isRecent: false,
    };
  }
};

// Force refresh backup data from API
export const refreshBackupData = async (portfolioAPI) => {
  try {
    console.log("Refreshing backup data from API...");

    const [
      profile,
      experience,
      education,
      skills,
      projects,
      achievements,
      blogPosts,
    ] = await Promise.all([
      portfolioAPI.getProfile(),
      portfolioAPI.getExperience(),
      portfolioAPI.getEducation(),
      portfolioAPI.getSkills(),
      portfolioAPI.getProjects(),
      portfolioAPI.getAchievements(),
      portfolioAPI.getBlogPosts(),
    ]);

    const freshData = {
      profile,
      experience,
      education,
      skills,
      projects,
      achievements,
      blogPosts,
    };

    saveDataToBackup(freshData);
    console.log("Backup data refreshed successfully");

    return freshData;
  } catch (error) {
    console.error("Failed to refresh backup data:", error);
    throw error;
  }
};

export default {
  initializeBackupData,
  shouldUseBackupData,
  getDataWithFallback,
  clearOldBackupData,
  getBackupDataStatus,
  refreshBackupData,
};
