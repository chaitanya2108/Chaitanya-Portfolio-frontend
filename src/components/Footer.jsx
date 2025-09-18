"use client";

import React from "react";
import { Github, Linkedin, Mail, Heart, Code } from "lucide-react";

const Footer = ({ profile }) => {
  const currentYear = new Date().getFullYear();

  if (!profile) return null;

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: `https://${profile.github}`,
      label: "GitHub",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: `https://${profile.linkedin}`,
      label: "LinkedIn",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: `mailto:${profile.email}`,
      label: "Email",
    },
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-orange-500 mb-4">
              {profile.name}
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              AI/ML Engineer & Full Stack Developer passionate about building
              intelligent solutions that create real-world impact. Let's connect
              and build something amazing together!
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 rounded-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-110"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-orange-500 transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3 text-gray-300">
              <div>
                <a
                  href={`mailto:${profile.email}`}
                  className="hover:text-orange-500 transition-colors duration-300"
                >
                  {profile.email}
                </a>
              </div>
              <div>
                <a
                  href={`tel:${profile.phone}`}
                  className="hover:text-orange-500 transition-colors duration-300"
                >
                  {profile.phone}
                </a>
              </div>
              <div className="text-gray-400">{profile.location}</div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center text-gray-400 mb-4 md:mb-0">
              <span>
                © {currentYear} {profile.name}. Made with
              </span>
              <Heart
                className="w-4 h-4 text-red-500 mx-2"
                fill="currentColor"
              />
              <span>and</span>
              <Code className="w-4 h-4 text-orange-500 mx-2" />
              <span>in React</span>
            </div>
            <div className="text-gray-400 text-sm">
              Designed & Developed with passion for innovation
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
