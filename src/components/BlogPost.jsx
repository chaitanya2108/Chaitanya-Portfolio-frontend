"use client";

import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Tag, User } from "lucide-react";
import { blogPosts } from "../data/mock";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === parseInt(id));

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Post not found
          </h1>
          <Link href="/">
            <Button>Back to Portfolio</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gray-50 border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link href="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Button>
          </Link>
        </div>
      </header>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Article Header */}
        <header className="mb-12">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag, idx) => (
              <Badge
                key={idx}
                variant="secondary"
                className="bg-orange-100 text-orange-800"
              >
                <Tag className="w-3 h-3 mr-1" />
                {tag}
              </Badge>
            ))}
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            {post.title}
          </h1>

          <div className="flex items-center space-x-6 text-gray-600">
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              <span>Chaitanya Shashi Kumar</span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <span>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <div className="text-xl text-gray-700 leading-relaxed mb-8">
            {post.excerpt}
          </div>

          <div className="space-y-6 text-gray-800 leading-relaxed">
            <p>
              This is a placeholder for the full blog post content. In a real
              application, this would contain the complete article content,
              possibly stored in a content management system or markdown files.
            </p>

            <p>
              The blog post would cover topics related to the title and tags,
              providing valuable insights and practical knowledge for readers
              interested in AI/ML, software engineering, and technology.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Key Takeaways
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Detailed technical insights and best practices</li>
              <li>Real-world examples and case studies</li>
              <li>Practical implementation tips</li>
              <li>Future trends and considerations</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Conclusion
            </h2>
            <p>
              This blog post would conclude with a summary of the main points
              and encourage readers to engage with the content through comments
              or social media sharing.
            </p>
          </div>
        </div>

        {/* Article Footer */}
        <footer className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, idx) => (
                <Badge
                  key={idx}
                  variant="outline"
                  className="border-orange-600 text-orange-600"
                >
                  {tag}
                </Badge>
              ))}
            </div>
            <Link href="/#blog">
              <Button variant="outline">View All Posts</Button>
            </Link>
          </div>
        </footer>
      </article>
    </div>
  );
};

export default BlogPost;
