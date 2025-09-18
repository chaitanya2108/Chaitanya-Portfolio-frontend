"use client";

import React from "react";
import { Code, Database, Cloud, Brain, Wrench, GitBranch } from "lucide-react";
import { Badge } from "./ui/badge";

const Skills = ({ skills = {} }) => {
  if (!skills || Object.keys(skills).length === 0) {
    return (
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Technical Skills
          </h2>
          <p className="text-gray-600">Loading skills...</p>
        </div>
      </section>
    );
  }

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      color: "bg-blue-100 text-blue-800",
      skills: skills["Programming Languages"] || [],
    },
    {
      title: "Frameworks & Libraries",
      icon: <Wrench className="w-6 h-6" />,
      color: "bg-green-100 text-green-800",
      skills: skills["Frameworks & Libraries"] || [],
    },
    {
      title: "Databases",
      icon: <Database className="w-6 h-6" />,
      color: "bg-purple-100 text-purple-800",
      skills: skills["Databases"] || [],
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="w-6 h-6" />,
      color: "bg-orange-100 text-orange-800",
      skills: skills["Cloud & DevOps"] || [],
    },
    {
      title: "AI/ML Tools",
      icon: <Brain className="w-6 h-6" />,
      color: "bg-pink-100 text-pink-800",
      skills: skills["AI/ML Tools"] || [],
    },
    {
      title: "Software Engineering",
      icon: <GitBranch className="w-6 h-6" />,
      color: "bg-indigo-100 text-indigo-800",
      skills: skills["Software Engineering"] || [],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-orange-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive toolkit spanning multiple programming languages,
            frameworks, and technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-orange-100 rounded-lg text-orange-600 mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    className={`${category.color} hover:scale-105 transition-transform cursor-default`}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skill Highlights */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Core Competencies
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-orange-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                AI/ML Engineering
              </h4>
              <p className="text-gray-600 text-sm">
                Specialized in building intelligent systems with LangGraph,
                LangChain, and modern ML frameworks
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-orange-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Full Stack Development
              </h4>
              <p className="text-gray-600 text-sm">
                End-to-end development with React, .NET Core, Flask, and modern
                web technologies
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cloud className="w-8 h-8 text-orange-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Cloud Architecture
              </h4>
              <p className="text-gray-600 text-sm">
                Scalable cloud solutions with GCP, AWS, Docker, and automated
                CI/CD pipelines
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
