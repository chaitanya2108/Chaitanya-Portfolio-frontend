// Analytics and performance monitoring utilities

interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

// Extend Window interface to include gtag
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

// Google Analytics 4 configuration
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

// Initialize Google Analytics
export const initGA = () => {
  if (typeof window !== "undefined" && GA_TRACKING_ID) {
    // Load Google Analytics script
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: unknown[]) {
      window.dataLayer?.push(args);
    }
    gtag("js", new Date());
    gtag("config", GA_TRACKING_ID, {
      page_title: document.title,
      page_location: window.location.href,
    });

    // Make gtag available globally
    window.gtag = gtag;
  }
};

// Track page views
export const trackPageView = (url: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Track custom events
export const trackEvent = ({
  action,
  category,
  label,
  value,
}: AnalyticsEvent) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track portfolio interactions
export const trackPortfolioInteraction = (action: string, section: string) => {
  trackEvent({
    action,
    category: "Portfolio",
    label: section,
  });
};

// Track download events
export const trackDownload = (fileName: string) => {
  trackEvent({
    action: "download",
    category: "File",
    label: fileName,
  });
};

// Track external link clicks
export const trackExternalLink = (url: string, linkText: string) => {
  trackEvent({
    action: "click",
    category: "External Link",
    label: `${linkText} - ${url}`,
  });
};

// Performance monitoring
export const trackPerformance = () => {
  if (typeof window !== "undefined" && "performance" in window) {
    window.addEventListener("load", () => {
      setTimeout(() => {
        const navigation = performance.getEntriesByType(
          "navigation"
        )[0] as PerformanceNavigationTiming;

        if (navigation) {
          const metrics = {
            // Page load time
            pageLoadTime: navigation.loadEventEnd - navigation.fetchStart,
            // Time to first byte
            ttfb: navigation.responseStart - navigation.fetchStart,
            // DOM content loaded
            domContentLoaded:
              navigation.domContentLoadedEventEnd - navigation.fetchStart,
            // First contentful paint (if available)
            fcp: 0,
            // Largest contentful paint (if available)
            lcp: 0,
          };

          // Get FCP and LCP if available
          const paintEntries = performance.getEntriesByType("paint");
          const fcpEntry = paintEntries.find(
            (entry) => entry.name === "first-contentful-paint"
          );
          if (fcpEntry) {
            metrics.fcp = fcpEntry.startTime;
          }

          // Track performance metrics
          trackEvent({
            action: "performance",
            category: "Page Load",
            label: "metrics",
            value: Math.round(metrics.pageLoadTime),
          });

          // Log performance metrics in development
          if (process.env.NODE_ENV === "development") {
            console.log("Performance Metrics:", metrics);
          }
        }
      }, 0);
    });
  }
};

// Error tracking
export const trackError = (error: Error, context?: string) => {
  trackEvent({
    action: "error",
    category: "JavaScript Error",
    label: context || "Unknown",
  });

  // Log error details in development
  if (process.env.NODE_ENV === "development") {
    console.error("Tracked Error:", error, "Context:", context);
  }
};

// Initialize analytics on app start
export const initializeAnalytics = () => {
  initGA();
  trackPerformance();
};

export default {
  initGA,
  trackPageView,
  trackEvent,
  trackPortfolioInteraction,
  trackDownload,
  trackExternalLink,
  trackPerformance,
  trackError,
  initializeAnalytics,
};
