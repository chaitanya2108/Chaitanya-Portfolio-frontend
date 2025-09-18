import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Chaitanya - AI/ML Engineer & Full Stack Developer",
    template: "%s | Chaitanya Portfolio",
  },
  description:
    "AI/ML Engineer & Full Stack Developer with expertise in building intelligent systems and full-stack applications. Currently pursuing Master's in AI/ML at Drexel University.",
  keywords: [
    "AI Engineer",
    "Machine Learning",
    "Full Stack Developer",
    "React",
    "Python",
    "LangGraph",
    "LangChain",
    "Portfolio",
    "Software Engineer",
    "Drexel University",
  ],
  authors: [{ name: "Chaitanya" }],
  creator: "Chaitanya",
  publisher: "Chaitanya",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://chaitanya-portfolio.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://chaitanya-portfolio.vercel.app",
    title: "Chaitanya - AI/ML Engineer & Full Stack Developer",
    description:
      "AI/ML Engineer & Full Stack Developer with expertise in building intelligent systems and full-stack applications.",
    siteName: "Chaitanya Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Chaitanya Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chaitanya - AI/ML Engineer & Full Stack Developer",
    description:
      "AI/ML Engineer & Full Stack Developer with expertise in building intelligent systems and full-stack applications.",
    images: ["/og-image.jpg"],
    creator: "@chaitanya",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ea580c" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Chaitanya",
              jobTitle: "AI/ML Engineer & Full Stack Developer",
              description:
                "AI/ML Engineer & Full Stack Developer with expertise in building intelligent systems and full-stack applications.",
              url: "https://chaitanya-portfolio.vercel.app",
              image: "https://chaitanya-portfolio.vercel.app/og-image.jpg",
              sameAs: [
                "https://github.com/chaitanya2108",
                "https://linkedin.com/in/chaitanya",
              ],
              worksFor: {
                "@type": "Organization",
                name: "Spinabot",
              },
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "Drexel University",
              },
              knowsAbout: [
                "Artificial Intelligence",
                "Machine Learning",
                "Full Stack Development",
                "Python",
                "React",
                "LangGraph",
                "LangChain",
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
