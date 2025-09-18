"use client";

import React from "react";
import { Trophy, Award, Users, Mic, Star, Calendar } from "lucide-react";

const Achievements = ({ achievements = [] }) => {
  if (!achievements || achievements.length === 0) {
    return (
      <section id="achievements" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Achievements & Recognition
          </h2>
          <p className="text-gray-600">Loading achievements...</p>
        </div>
      </section>
    );
  }

  const getAchievementIcon = (type) => {
    switch (type) {
      case "Competition":
        return <Trophy className="w-6 h-6" />;
      case "Academic":
        return <Award className="w-6 h-6" />;
      case "Professional":
        return <Star className="w-6 h-6" />;
      case "Community":
        return <Users className="w-6 h-6" />;
      case "Speaking":
        return <Mic className="w-6 h-6" />;
      default:
        return <Award className="w-6 h-6" />;
    }
  };

  const getAchievementColor = (type) => {
    switch (type) {
      case "Competition":
        return "bg-yellow-100 text-yellow-800 border-yellow-300";
      case "Academic":
        return "bg-blue-100 text-blue-800 border-blue-300";
      case "Professional":
        return "bg-green-100 text-green-800 border-green-300";
      case "Community":
        return "bg-purple-100 text-purple-800 border-purple-300";
      case "Speaking":
        return "bg-pink-100 text-pink-800 border-pink-300";
      default:
        return "bg-orange-100 text-orange-800 border-orange-300";
    }
  };

  return (
    <section id="achievements" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Achievements & Recognition
          </h2>
          <div className="w-20 h-1 bg-orange-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Notable accomplishments and recognition throughout my professional
            journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.id || index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-start mb-4">
                <div
                  className={`p-3 rounded-lg mr-4 ${getAchievementColor(
                    achievement.type
                  )}`}
                >
                  {getAchievementIcon(achievement.type)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${getAchievementColor(
                        achievement.type
                      )}`}
                    >
                      {achievement.type}
                    </span>
                  </div>
                </div>
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {achievement.title}
              </h3>

              <div className="flex items-center text-orange-600 mb-3">
                <Calendar className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">{achievement.date}</span>
              </div>

              <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                {achievement.description}
              </p>

              <div className="text-sm font-medium text-gray-800">
                {achievement.organization}
              </div>
            </div>
          ))}
        </div>

        {/* Achievement Stats */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Achievement Highlights
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-yellow-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">1st</div>
              <div className="text-sm text-gray-600">Place in Hackathon</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">3.93</div>
              <div className="text-sm text-gray-600">Master's GPA</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">40%</div>
              <div className="text-sm text-gray-600">ROI Improvement</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">500+</div>
              <div className="text-sm text-gray-600">GitHub Stars</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
