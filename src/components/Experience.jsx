"use client";

import React from "react";
import { Calendar, MapPin, Briefcase } from "lucide-react";
import { Badge } from "./ui/badge";

const Experience = ({ experience = [] }) => {
  if (!experience || experience.length === 0) {
    return (
      <section id="experience" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Professional Experience
          </h2>
          <p className="text-gray-600">Loading experience data...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-orange-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My journey through various roles in software engineering, AI
            development, and full-stack development
          </p>
        </div>

        <div className="space-y-8">
          {experience.map((job, index) => (
            <div
              key={job.id || index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border-l-4 border-orange-600"
            >
              <div className="grid lg:grid-cols-3 gap-6">
                {/* Left Column - Job Details */}
                <div className="lg:col-span-1">
                  <div className="flex items-center mb-2">
                    <Briefcase className="w-5 h-5 text-orange-600 mr-2" />
                    <span className="text-orange-600 font-medium text-sm">
                      {job.type}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {job.title}
                  </h3>
                  <h4 className="text-lg font-semibold text-orange-600 mb-3">
                    {job.company}
                  </h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {job.period}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {job.location}
                    </div>
                  </div>
                </div>

                {/* Right Column - Description and Technologies */}
                <div className="lg:col-span-2">
                  <div className="mb-6">
                    <h5 className="font-semibold text-gray-900 mb-3">
                      Key Responsibilities:
                    </h5>
                    <ul className="space-y-2">
                      {job.description.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">
                      Technologies Used:
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="bg-orange-100 text-orange-800 hover:bg-orange-200 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
