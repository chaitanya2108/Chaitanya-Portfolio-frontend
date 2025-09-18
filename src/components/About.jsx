"use client";

import React from "react";
import { Code, Database, Brain, Cloud } from "lucide-react";

const About = ({ profile }) => {
  if (!profile) return null;

  const highlights = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI/ML Expertise",
      description:
        "Specialized in building intelligent systems with LangGraph, LangChain, and modern ML frameworks",
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Full Stack Development",
      description:
        "Proficient in both frontend and backend technologies, from React to .NET Core and Flask",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Backend Systems",
      description:
        "Expert in designing scalable backend architectures and optimizing database performance",
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud & DevOps",
      description:
        "Experienced with GCP, AWS, Docker, and CI/CD pipelines for reliable deployments",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-orange-600 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Passionate About Building Intelligent Solutions
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                I'm a Software Engineer with a strong focus on AI/ML and
                full-stack development. Currently pursuing my Master's in AI/ML
                at Drexel University while working as an AI Developer at
                Spinabot, where I build intelligent automation systems that
                drive real business value.
              </p>
              <p>
                My journey spans from traditional backend development to
                cutting-edge AI applications. I've worked across various
                industries including finance, e-commerce, and analytics, always
                focusing on creating scalable, efficient solutions that solve
                real-world problems.
              </p>
              <p>
                What drives me is the intersection of technology and impact -
                building systems that not only work well technically but also
                create meaningful value for users and businesses.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <div className="text-2xl font-bold text-orange-600 mb-1">
                  3+
                </div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <div className="text-2xl font-bold text-orange-600 mb-1">
                  20+
                </div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
            </div>
          </div>

          {/* Right Column - Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 rounded-xl hover:bg-orange-50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                <div className="text-orange-600 mb-4">{highlight.icon}</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {highlight.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
