"use client";

import React, { useState } from "react";
import { Github, ExternalLink, Code, Star } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const Projects = ({ projects = [] }) => {
  const [filter, setFilter] = useState("All");

  if (!projects || projects.length === 0) {
    return (
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600">Loading projects...</p>
        </div>
      </section>
    );
  }

  const categories = ["All", "AI/ML", "Full Stack", "Backend", "Frontend"];

  const getProjectCategory = (technologies) => {
    const techString = technologies.join(" ").toLowerCase();
    if (
      techString.includes("ai") ||
      techString.includes("ml") ||
      techString.includes("tensorflow") ||
      techString.includes("openai")
    ) {
      return "AI/ML";
    } else if (
      techString.includes("react") &&
      (techString.includes("flask") || techString.includes("node"))
    ) {
      return "Full Stack";
    } else if (
      techString.includes("react") ||
      techString.includes("typescript")
    ) {
      return "Frontend";
    } else {
      return "Backend";
    }
  };

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter(
          (project) => getProjectCategory(project.technologies) === filter
        );

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-orange-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of my work spanning AI/ML, full-stack development, and
            innovative solutions
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              onClick={() => setFilter(category)}
              className={`${
                filter === category
                  ? "bg-orange-600 hover:bg-orange-700 text-white"
                  : "border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
              } transition-all duration-300`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.id || index}
              className="hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0 shadow-lg"
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="text-xl font-bold text-gray-900 line-clamp-2">
                    {project.title}
                  </CardTitle>
                  <div className="flex items-center space-x-2 flex-shrink-0">
                    {project.status === "Active" && (
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                        <span className="text-xs text-green-600 font-medium">
                          Active
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                <CardDescription className="text-gray-600 line-clamp-3">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                {/* Features */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">
                    Key Features:
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {project.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Star className="w-3 h-3 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="bg-orange-100 text-orange-800 text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge
                        variant="secondary"
                        className="bg-gray-100 text-gray-600 text-xs"
                      >
                        +{project.technologies.length - 4}
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
                    onClick={() => window.open(project.github, "_blank")}
                  >
                    <Github className="w-4 h-4 mr-1" />
                    Code
                  </Button>
                  {project.liveUrl && (
                    <Button
                      size="sm"
                      className="flex-1 bg-orange-600 hover:bg-orange-700"
                      onClick={() => window.open(project.liveUrl, "_blank")}
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Live
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Projects Button */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-8 py-3"
            onClick={() =>
              window.open(`https://github.com/chaitanya2108`, "_blank")
            }
          >
            <Code className="mr-2" size={18} />
            View More on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
