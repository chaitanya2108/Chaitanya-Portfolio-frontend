#!/usr/bin/env node

/**
 * Environment Variables Debug Script
 * Helps debug environment variable issues in Next.js
 */

console.log("🔍 Environment Variables Debug");
console.log("================================");

console.log("\n📋 Current Environment Variables:");
console.log("NODE_ENV:", process.env.NODE_ENV);
console.log("NEXT_PUBLIC_BACKEND_URL:", process.env.NEXT_PUBLIC_BACKEND_URL);
console.log("REACT_APP_BACKEND_URL:", process.env.REACT_APP_BACKEND_URL);

console.log("\n🌐 Backend URL Resolution:");
const BACKEND_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL ||
  process.env.REACT_APP_BACKEND_URL ||
  "https://chaitanya-portfolio-backend.onrender.com";

console.log("Resolved BACKEND_URL:", BACKEND_URL);
console.log("API_BASE:", `${BACKEND_URL}/api`);

console.log("\n🔧 Recommendations:");
if (!process.env.NEXT_PUBLIC_BACKEND_URL) {
  console.log("❌ NEXT_PUBLIC_BACKEND_URL is not set");
  console.log("   Add this to your .env.local file:");
  console.log(
    "   NEXT_PUBLIC_BACKEND_URL=https://chaitanya-portfolio-backend.onrender.com"
  );
} else {
  console.log("✅ NEXT_PUBLIC_BACKEND_URL is set correctly");
}

if (!process.env.REACT_APP_BACKEND_URL) {
  console.log(
    "⚠️  REACT_APP_BACKEND_URL is not set (this is expected in Next.js)"
  );
} else {
  console.log("ℹ️  REACT_APP_BACKEND_URL is set (legacy support)");
}

console.log("\n📝 Next.js Environment Variable Rules:");
console.log("• Client-side variables must start with NEXT_PUBLIC_");
console.log("• Server-side variables can have any name");
console.log("• .env.local is loaded automatically");
console.log("• Variables are embedded at build time");

console.log("\n🚀 Quick Test:");
const axios = require("axios");
const API_BASE = `${BACKEND_URL}/api`;

axios
  .get(`${API_BASE}/profile`, { timeout: 10000 })
  .then((response) => {
    console.log("✅ Backend API is accessible");
    console.log("Status:", response.status);
    console.log(
      "Data preview:",
      JSON.stringify(response.data).substring(0, 100) + "..."
    );
  })
  .catch((error) => {
    console.log("❌ Backend API is not accessible");
    console.log("Error:", error.message);
    if (error.response) {
      console.log("Status:", error.response.status);
      console.log("Response:", error.response.data);
    }
  });
