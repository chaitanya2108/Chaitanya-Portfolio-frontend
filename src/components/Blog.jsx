"use client";

import React from "react";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Link from "next/link";

const Blog = ({ blogPosts = [] }) => {
  if (!blogPosts || blogPosts.length === 0) {
    return (
      <section id="blog" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Latest Blog Posts
          </h2>
          <p className="text-gray-600">Loading blog posts...</p>
        </div>
      </section>
    );
  }

  const featuredPosts = blogPosts.filter((post) => post.featured);
  const recentPosts = blogPosts.slice(0, 4);

  const handlePostClick = (postId) => {
    // In a real app, this would navigate to the blog post
    console.log(`Navigate to blog post ${postId}`);
  };

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Latest Blog Posts
          </h2>
          <div className="w-20 h-1 bg-orange-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Thoughts and insights on AI/ML, software engineering, and technology
            trends
          </p>
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Featured Articles
            </h3>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <Card
                  key={post.id || index}
                  className="hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105 border-0 shadow-lg"
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center text-orange-600 text-sm">
                        <Calendar className="w-4 h-4 mr-2" />
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </div>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900 hover:text-orange-600 transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 3).map((tag, idx) => (
                          <Badge
                            key={idx}
                            variant="secondary"
                            className="bg-orange-100 text-orange-800 text-xs"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-orange-600 hover:text-orange-700 hover:bg-orange-50"
                        onClick={() => handlePostClick(post.id)}
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Recent Posts Grid */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Recent Posts
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {recentPosts.map((post, index) => (
              <Card
                key={post.id || index}
                className="hover:shadow-lg transition-all duration-300 cursor-pointer border-l-4 border-orange-600"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center text-orange-600 text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })}
                    </div>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900 hover:text-orange-600 transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4 line-clamp-2">
                    {post.excerpt}
                  </CardDescription>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {post.tags.slice(0, 2).map((tag, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="bg-gray-100 text-gray-700 text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-orange-600 hover:text-orange-700 hover:bg-orange-50 px-2"
                      onClick={() => handlePostClick(post.id)}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* View All Posts Button */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-8 py-3"
          >
            View All Posts
            <ArrowRight className="ml-2" size={18} />
          </Button>
        </div>

        {/* Blog Categories */}
        <div className="mt-16 bg-gray-50 rounded-xl p-8">
          <h3 className="text-xl font-bold text-gray-900 text-center mb-6">
            Topics I Write About
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "AI/ML",
              "Software Engineering",
              "Backend Development",
              "Python",
              "Technology Trends",
              "Career",
              "Cloud Computing",
              "Data Science",
            ].map((topic, idx) => (
              <Badge
                key={idx}
                variant="outline"
                className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white cursor-pointer transition-colors px-4 py-2"
              >
                <Tag className="w-3 h-3 mr-1" />
                {topic}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
