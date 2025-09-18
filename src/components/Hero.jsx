"use client";

import React from "react";
import { Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { Button } from "./ui/button";

const Hero = ({ profile }) => {
  if (!profile) return null;

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-orange-50 pt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          {/* Profile Image */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white text-4xl font-bold shadow-xl">
              {profile.name.charAt(0)}
            </div>
          </div>

          {/* Main Content */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            <span className="block">Hi, I'm</span>
            <span className="block text-orange-600 bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
              {profile.name}
            </span>
          </h1>

          <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-700 mb-8 font-medium">
            {profile.title}
          </h2>

          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            {profile.bio}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              onClick={scrollToContact}
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Mail className="mr-2" size={20} />
              Get In Touch
            </Button>
            <Button
              variant="outline"
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105"
              onClick={() =>
                window.open(profile.resumeUrl || profile.resume_url, "_blank")
              }
            >
              <Download className="mr-2" size={20} />
              Download Resume
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href={`https://${profile.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:bg-orange-50"
            >
              <Github
                size={24}
                className="text-gray-700 hover:text-orange-600"
              />
            </a>
            <a
              href={`https://${profile.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:bg-orange-50"
            >
              <Linkedin
                size={24}
                className="text-gray-700 hover:text-orange-600"
              />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:bg-orange-50"
            >
              <Mail size={24} className="text-gray-700 hover:text-orange-600" />
            </a>
          </div>

          {/* Location */}
          <div className="flex items-center justify-center mt-8 text-gray-600">
            <MapPin size={18} className="mr-2" />
            <span>{profile.location}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
