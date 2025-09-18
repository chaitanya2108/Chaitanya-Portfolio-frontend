"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import LoadingSpinner from "./LoadingSpinner";

// Lazy load heavy components
export const LazyBlog = dynamic(() => import("./Blog"), {
  loading: () => <LoadingSpinner />,
  ssr: false,
});

export const LazyBlogPost = dynamic(() => import("./BlogPost"), {
  loading: () => <LoadingSpinner />,
  ssr: false,
});

export const LazyProjects = dynamic(() => import("./Projects"), {
  loading: () => <LoadingSpinner />,
  ssr: false,
});

export const LazyContact = dynamic(() => import("./Contact"), {
  loading: () => <LoadingSpinner />,
  ssr: false,
});

// Lazy load with custom loading component
export const LazyPortfolio = dynamic(() => import("./Portfolio"), {
  loading: () => (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <LoadingSpinner />
        <p className="mt-4 text-gray-600">Loading portfolio...</p>
      </div>
    </div>
  ),
  ssr: true, // Keep SSR for SEO
});

// Wrapper component for Suspense
export const SuspenseWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <Suspense fallback={<LoadingSpinner />}>{children}</Suspense>;
};

export default {
  LazyBlog,
  LazyBlogPost,
  LazyProjects,
  LazyContact,
  LazyPortfolio,
  SuspenseWrapper,
};
