import axios from "axios";
import { saveDataToBackup, loadDataFromBackup } from "./backupData";

const BACKEND_URL =
  process.env.REACT_APP_BACKEND_URL ||
  "https://chaitanya-portfolio-backend.onrender.com";
const API_BASE = `${BACKEND_URL}/api`;

// Configure axios defaults
const api = axios.create({
  baseURL: API_BASE,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor for logging
api.interceptors.request.use(
  (config) => {
    console.log(`API Request: ${config.method?.toUpperCase()} ${config.url}`);
    return config;
  },
  (error) => {
    console.error("API Request Error:", error);
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => {
    console.log(`API Response: ${response.status} ${response.config.url}`);
    return response;
  },
  (error) => {
    console.error("API Response Error:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);

// API service functions
export const portfolioAPI = {
  // Profile
  getProfile: async () => {
    try {
      const response = await api.get("/profile");
      // Save successful response to backup
      const backupData = loadDataFromBackup();
      backupData.profile = response.data;
      saveDataToBackup(backupData);
      return response.data;
    } catch (error) {
      console.error("Error fetching profile:", error);
      console.log("Falling back to backup data for profile");
      const backupData = loadDataFromBackup();
      return backupData.profile;
    }
  },

  updateProfile: async (profileData) => {
    try {
      const response = await api.put("/profile", profileData);
      return response.data;
    } catch (error) {
      console.error("Error updating profile:", error);
      throw error;
    }
  },

  // Experience
  getExperience: async () => {
    try {
      const response = await api.get("/experience");
      // Save successful response to backup
      const backupData = loadDataFromBackup();
      backupData.experience = response.data;
      saveDataToBackup(backupData);
      return response.data;
    } catch (error) {
      console.error("Error fetching experience:", error);
      console.log("Falling back to backup data for experience");
      const backupData = loadDataFromBackup();
      return backupData.experience;
    }
  },

  createExperience: async (experienceData) => {
    try {
      const response = await api.post("/experience", experienceData);
      return response.data;
    } catch (error) {
      console.error("Error creating experience:", error);
      throw error;
    }
  },

  // Education
  getEducation: async () => {
    try {
      const response = await api.get("/education");
      // Save successful response to backup
      const backupData = loadDataFromBackup();
      backupData.education = response.data;
      saveDataToBackup(backupData);
      return response.data;
    } catch (error) {
      console.error("Error fetching education:", error);
      console.log("Falling back to backup data for education");
      const backupData = loadDataFromBackup();
      return backupData.education;
    }
  },

  createEducation: async (educationData) => {
    try {
      const response = await api.post("/education", educationData);
      return response.data;
    } catch (error) {
      console.error("Error creating education:", error);
      throw error;
    }
  },

  // Skills
  getSkills: async () => {
    try {
      const response = await api.get("/skills");
      // Save successful response to backup
      const backupData = loadDataFromBackup();
      backupData.skills = response.data;
      saveDataToBackup(backupData);
      return response.data;
    } catch (error) {
      console.error("Error fetching skills:", error);
      console.log("Falling back to backup data for skills");
      const backupData = loadDataFromBackup();
      return backupData.skills;
    }
  },

  updateSkills: async (skillsData) => {
    try {
      const response = await api.put("/skills", { categories: skillsData });
      return response.data;
    } catch (error) {
      console.error("Error updating skills:", error);
      throw error;
    }
  },

  // Projects
  getProjects: async () => {
    try {
      const response = await api.get("/projects");
      // Save successful response to backup
      const backupData = loadDataFromBackup();
      backupData.projects = response.data;
      saveDataToBackup(backupData);
      return response.data;
    } catch (error) {
      console.error("Error fetching projects:", error);
      console.log("Falling back to backup data for projects");
      const backupData = loadDataFromBackup();
      return backupData.projects;
    }
  },

  createProject: async (projectData) => {
    try {
      const response = await api.post("/projects", projectData);
      return response.data;
    } catch (error) {
      console.error("Error creating project:", error);
      throw error;
    }
  },

  // Achievements
  getAchievements: async () => {
    try {
      const response = await api.get("/achievements");
      // Save successful response to backup
      const backupData = loadDataFromBackup();
      backupData.achievements = response.data;
      saveDataToBackup(backupData);
      return response.data;
    } catch (error) {
      console.error("Error fetching achievements:", error);
      console.log("Falling back to backup data for achievements");
      const backupData = loadDataFromBackup();
      return backupData.achievements;
    }
  },

  createAchievement: async (achievementData) => {
    try {
      const response = await api.post("/achievements", achievementData);
      return response.data;
    } catch (error) {
      console.error("Error creating achievement:", error);
      throw error;
    }
  },

  // Blog
  getBlogPosts: async () => {
    try {
      const response = await api.get("/blog");
      // Save successful response to backup
      const backupData = loadDataFromBackup();
      backupData.blogPosts = response.data;
      saveDataToBackup(backupData);
      return response.data;
    } catch (error) {
      console.error("Error fetching blog posts:", error);
      console.log("Falling back to backup data for blog posts");
      const backupData = loadDataFromBackup();
      return backupData.blogPosts;
    }
  },

  getBlogPost: async (postId) => {
    try {
      const response = await api.get(`/blog/${postId}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching blog post:", error);
      console.log("Falling back to backup data for blog post");
      const backupData = loadDataFromBackup();
      return backupData.blogPosts.find((post) => post.id === parseInt(postId));
    }
  },

  createBlogPost: async (postData) => {
    try {
      const response = await api.post("/blog", postData);
      return response.data;
    } catch (error) {
      console.error("Error creating blog post:", error);
      throw error;
    }
  },

  // Contact
  submitContact: async (contactData) => {
    try {
      const response = await api.post("/contact", contactData);
      return response.data;
    } catch (error) {
      console.error("Error submitting contact form:", error);
      throw error;
    }
  },

  getContacts: async () => {
    try {
      const response = await api.get("/contacts");
      return response.data;
    } catch (error) {
      console.error("Error fetching contacts:", error);
      throw error;
    }
  },
};

export default portfolioAPI;
