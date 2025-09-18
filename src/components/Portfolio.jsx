"use client";

import React, { useState, useEffect } from "react";
import { portfolioAPI } from "../services/api";
import {
  initializeBackupData,
  clearOldBackupData,
} from "../services/dataManager";
import {
  initializeAnalytics,
  trackPortfolioInteraction,
} from "../lib/analytics";
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";
import Education from "./Education";
import Achievements from "./Achievements";
import Blog from "./Blog";
import Contact from "./Contact";
import Footer from "./Footer";
import LoadingSpinner from "./LoadingSpinner";
import OfflineIndicator from "./OfflineIndicator";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [portfolioData, setPortfolioData] = useState({
    profile: null,
    experience: [],
    education: [],
    skills: {},
    projects: [],
    achievements: [],
    blogPosts: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPortfolioData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Initialize backup data and clear old backups
        initializeBackupData();
        clearOldBackupData();

        // Initialize analytics
        initializeAnalytics();

        // Fetch all portfolio data concurrently
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

        setPortfolioData({
          profile,
          experience,
          education,
          skills,
          projects,
          achievements,
          blogPosts,
        });
      } catch (err) {
        console.error("Error fetching portfolio data:", err);
        setError("Failed to load portfolio data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolioData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "experience",
        "projects",
        "skills",
        "education",
        "achievements",
        "blog",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            if (activeSection !== section) {
              setActiveSection(section);
              // Track section view
              trackPortfolioInteraction("view_section", section);
            }
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8">
          <div className="text-red-600 text-xl mb-4">{error}</div>
          <button
            onClick={() => window.location.reload()}
            className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="portfolio">
      <OfflineIndicator />
      <Header activeSection={activeSection} />
      <main>
        <Hero profile={portfolioData.profile} />
        <About profile={portfolioData.profile} />
        <Experience experience={portfolioData.experience} />
        <Projects projects={portfolioData.projects} />
        <Skills skills={portfolioData.skills} />
        <Education education={portfolioData.education} />
        <Achievements achievements={portfolioData.achievements} />
        <Blog blogPosts={portfolioData.blogPosts} />
        <Contact profile={portfolioData.profile} />
      </main>
      <Footer profile={portfolioData.profile} />
    </div>
  );
};

export default Portfolio;
