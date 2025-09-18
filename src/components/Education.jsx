"use client";

import React from "react";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";
import { Badge } from "./ui/badge";

const Education = ({ education = [] }) => {
  if (!education || education.length === 0) {
    return (
      <section id="education" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Education</h2>
          <p className="text-gray-600">Loading education data...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-orange-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Academic foundation in Computer Science and specialized training in
            AI/ML
          </p>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <div
              key={edu.id || index}
              className="bg-gradient-to-r from-gray-50 to-orange-50 rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border-l-4 border-orange-600"
            >
              <div className="grid lg:grid-cols-3 gap-6 items-start">
                {/* Left Column - Degree Info */}
                <div className="lg:col-span-2">
                  <div className="flex items-center mb-3">
                    <GraduationCap className="w-6 h-6 text-orange-600 mr-3" />
                    <span className="text-orange-600 font-medium">
                      {edu.degree.includes("Master")
                        ? "Master's Degree"
                        : "Bachelor's Degree"}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {edu.degree}
                  </h3>

                  <h4 className="text-lg font-semibold text-orange-600 mb-4">
                    {edu.school}
                  </h4>

                  <div className="grid sm:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      {edu.period}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-2" />
                      {edu.location}
                    </div>
                  </div>

                  {/* Relevant Coursework */}
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">
                      Relevant Coursework:
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {edu.relevant.map((course, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="bg-orange-100 text-orange-800 hover:bg-orange-200 transition-colors"
                        >
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column - GPA and Achievement */}
                <div className="lg:col-span-1">
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <div className="text-center">
                      <Award className="w-8 h-8 text-orange-600 mx-auto mb-3" />
                      <div className="text-3xl font-bold text-orange-600 mb-1">
                        {edu.gpa}
                      </div>
                      <div className="text-sm text-gray-600 font-medium">
                        GPA
                      </div>
                      {parseFloat(edu.gpa) >= 3.9 && (
                        <div className="mt-3 text-xs text-green-600 font-medium bg-green-50 px-3 py-1 rounded-full">
                          Magna Cum Laude
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Academic Highlights */}
        <div className="mt-16 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-orange-50 rounded-lg">
            <div className="text-2xl font-bold text-orange-600 mb-2">3.93</div>
            <div className="text-sm text-gray-600">Current Master's GPA</div>
          </div>
          <div className="text-center p-6 bg-orange-50 rounded-lg">
            <div className="text-2xl font-bold text-orange-600 mb-2">2025</div>
            <div className="text-sm text-gray-600">Expected Graduation</div>
          </div>
          <div className="text-center p-6 bg-orange-50 rounded-lg">
            <div className="text-2xl font-bold text-orange-600 mb-2">AI/ML</div>
            <div className="text-sm text-gray-600">Specialization Focus</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
