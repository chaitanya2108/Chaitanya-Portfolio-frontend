// Backup data service for offline functionality
// This ensures the portfolio works even when the backend is unavailable

export const backupData = {
  profile: {
    id: 1,
    name: "Chaitanya",
    title: "AI/ML Engineer & Full Stack Developer",
    email: "chaitanya@example.com",
    phone: "+1 (555) 123-4567",
    location: "Philadelphia, PA",
    github: "github.com/chaitanya2108",
    linkedin: "linkedin.com/in/chaitanya",
    resumeUrl: "/resume.pdf",
    summary:
      "Passionate AI/ML Engineer with expertise in building intelligent systems and full-stack applications. Currently pursuing Master's in AI/ML at Drexel University while working as an AI Developer at Spinabot.",
    image: "/api/placeholder/400/400",
  },

  experience: [
    {
      id: 1,
      title: "AI Developer",
      company: "Spinabot",
      location: "Remote",
      period: "February 2025 - Present",
      type: "Full-time",
      description: [
        "Built Flask-PostgreSQL CRM backend with LangGraph automation",
        "Developed AI agents for lead scoring, follow-ups, and reporting",
        "Implemented CI/CD workflows and process improvements",
        "Deployed containerized solutions on GCP",
      ],
      technologies: [
        "Python",
        "Flask",
        "PostgreSQL",
        "LangGraph",
        "GCP",
        "Docker",
        "CI/CD",
      ],
    },
    {
      id: 2,
      title: "Software Engineer Junior Associate",
      company: "DLB Associates",
      location: "New Jersey, USA",
      period: "June 2024 - January 2025",
      type: "Full-time",
      description: [
        "Built C#/.NET Core backend services and integrated Python-LangChain AI assistant",
        "Designed and deployed Flask-PostgreSQL CRM backend with LangGraph automation",
        "Led GCP containerized deployments and optimized CI/CD",
        "Enhanced system performance and reliability",
      ],
      technologies: [
        "C#",
        ".NET Core",
        "Python",
        "LangChain",
        "Flask",
        "PostgreSQL",
        "GCP",
      ],
    },
    {
      id: 3,
      title: "Full Stack Software Developer",
      company: "Zysk Technologies",
      location: "Bengaluru, India",
      period: "June 2021 - July 2023",
      type: "Full-time",
      description: [
        "Developed backend services and reusable UI components for web/mobile apps",
        "Optimized RESTful APIs and implemented GCP infrastructure and CI/CD",
        "Enhanced testing and monitoring for high-traffic applications",
        "Collaborated with cross-functional teams using Agile methodologies",
      ],
      technologies: [
        "JavaScript",
        "React",
        "Node.js",
        "Python",
        "GCP",
        "REST APIs",
      ],
    },
  ],

  education: [
    {
      id: 1,
      degree:
        "Master of Science in Artificial Intelligence and Machine Learning",
      school: "Drexel University",
      location: "Philadelphia, PA",
      period: "Sep 2023 - Jun 2025",
      gpa: "3.93/4.0",
      relevant: [
        "Deep Learning",
        "Natural Language Processing",
        "Computer Vision",
        "Data Mining",
      ],
    },
    {
      id: 2,
      degree: "Bachelor of Engineering in Computer Science",
      school: "JSS Academy Of Technical Education",
      location: "Bengaluru, India",
      period: "Aug 2018 - Mar 2022",
      gpa: "3.5/4.0",
      relevant: [
        "Data Structures",
        "Algorithms",
        "Database Systems",
        "Software Engineering",
      ],
    },
  ],

  skills: {
    "Programming Languages": [
      "Python",
      "C#",
      "JavaScript/TypeScript",
      "Java",
      "C++",
      "SQL",
      "HTML/CSS",
    ],
    "Frameworks & Libraries": [
      ".NET Core",
      "ASP.NET",
      "Flask",
      "React",
      "Node.js",
      "NestJS",
      "pandas",
      "NumPy",
      "scikit-learn",
      "LangChain",
      "LangGraph",
    ],
    Databases: ["PostgreSQL", "MySQL", "SQL Server", "Supabase"],
    "Cloud & DevOps": [
      "GCP",
      "AWS",
      "Azure DevOps",
      "Docker",
      "Terraform",
      "GitHub Actions",
      "CI/CD",
    ],
    "AI/ML Tools": [
      "TensorFlow",
      "PyTorch",
      "scikit-learn",
      "Matplotlib",
      "Jupyter",
      "OpenAI API",
    ],
    "Software Engineering": [
      "REST APIs",
      "Microservices",
      "Design Patterns",
      "Agile/Scrum",
      "Version Control",
    ],
  },

  projects: [
    {
      id: 1,
      title: "Voice Agent",
      description:
        "Advanced voice-based AI assistant with natural language processing capabilities and real-time speech recognition.",
      technologies: [
        "Python",
        "OpenAI API",
        "Speech Recognition",
        "NLP",
        "Flask",
      ],
      github: "https://github.com/chaitanya2108/Voice-Agent",
      liveUrl: "https://voice-agent-demo.vercel.app",
      features: [
        "Real-time voice processing",
        "Natural language understanding",
        "Multi-platform support",
      ],
      status: "Active",
    },
    {
      id: 2,
      title: "AI-Powered CRM System",
      description:
        "Intelligent customer relationship management system with automated lead scoring and personalized recommendations.",
      technologies: [
        "Python",
        "Flask",
        "PostgreSQL",
        "LangGraph",
        "GCP",
        "Docker",
      ],
      github: "https://github.com/chaitanya2108/AI-CRM",
      liveUrl: "https://ai-crm-demo.vercel.app",
      features: [
        "AI-powered lead scoring",
        "Automated follow-ups",
        "Real-time analytics",
      ],
      status: "Active",
    },
    {
      id: 3,
      title: "Full Stack E-commerce Platform",
      description:
        "Modern e-commerce platform with React frontend and .NET Core backend, featuring real-time inventory management.",
      technologies: [
        "React",
        "TypeScript",
        ".NET Core",
        "SQL Server",
        "Azure",
        "Docker",
      ],
      github: "https://github.com/chaitanya2108/Ecommerce-Platform",
      liveUrl: "https://ecommerce-demo.vercel.app",
      features: [
        "Real-time inventory",
        "Payment integration",
        "Admin dashboard",
      ],
      status: "Completed",
    },
    {
      id: 4,
      title: "Machine Learning Model Deployment",
      description:
        "End-to-end ML pipeline for sentiment analysis with automated model training and deployment on GCP.",
      technologies: [
        "Python",
        "TensorFlow",
        "GCP",
        "Docker",
        "Kubernetes",
        "CI/CD",
      ],
      github: "https://github.com/chaitanya2108/ML-Deployment",
      liveUrl: "https://ml-sentiment-demo.vercel.app",
      features: [
        "Automated training",
        "Model versioning",
        "Real-time predictions",
      ],
      status: "Active",
    },
    {
      id: 5,
      title: "Real-time Chat Application",
      description:
        "Scalable chat application with WebSocket support, file sharing, and message encryption.",
      technologies: [
        "Node.js",
        "Socket.io",
        "React",
        "MongoDB",
        "Redis",
        "AWS",
      ],
      github: "https://github.com/chaitanya2108/Chat-App",
      liveUrl: "https://chat-app-demo.vercel.app",
      features: ["Real-time messaging", "File sharing", "Message encryption"],
      status: "Completed",
    },
    {
      id: 6,
      title: "Data Visualization Dashboard",
      description:
        "Interactive dashboard for business intelligence with real-time data processing and custom visualizations.",
      technologies: [
        "React",
        "D3.js",
        "Python",
        "FastAPI",
        "PostgreSQL",
        "Docker",
      ],
      github: "https://github.com/chaitanya2108/Data-Dashboard",
      liveUrl: "https://data-dashboard-demo.vercel.app",
      features: [
        "Real-time updates",
        "Custom visualizations",
        "Export functionality",
      ],
      status: "Active",
    },
  ],

  achievements: [
    {
      id: 1,
      title: "Dean's List - Drexel University",
      description: "Maintained 3.93/4.0 GPA in Master's program",
      date: "2023-2024",
      type: "Academic",
      organization: "Drexel University",
    },
    {
      id: 2,
      title: "AI Innovation Award",
      description:
        "Recognized for outstanding contribution to AI-powered CRM system",
      date: "2024",
      type: "Professional",
      organization: "Spinabot",
    },
    {
      id: 3,
      title: "Hackathon Winner",
      description:
        "First place in university hackathon for voice-based AI assistant",
      date: "2023",
      type: "Competition",
      organization: "Drexel University",
    },
    {
      id: 4,
      title: "Technical Speaker",
      description:
        "Presented on 'Building Scalable AI Systems' at tech conference",
      date: "2024",
      type: "Speaking",
      organization: "AI/ML Conference",
    },
    {
      id: 5,
      title: "Open Source Contributor",
      description: "Active contributor to LangChain and LangGraph projects",
      date: "2024",
      type: "Community",
      organization: "Open Source Community",
    },
    {
      id: 6,
      title: "Certified Cloud Architect",
      description: "Google Cloud Professional Cloud Architect certification",
      date: "2023",
      type: "Professional",
      organization: "Google Cloud",
    },
  ],

  blogPosts: [
    {
      id: 1,
      title: "Building Intelligent AI Agents with LangGraph",
      excerpt:
        "Learn how to create sophisticated AI agents that can reason, plan, and execute complex tasks using LangGraph framework.",
      content: "This is a comprehensive guide to building AI agents...",
      date: "2024-01-15",
      tags: ["AI/ML", "LangGraph", "Python", "Automation"],
      featured: true,
      readTime: "8 min read",
    },
    {
      id: 2,
      title: "Scaling Machine Learning Models in Production",
      excerpt:
        "Best practices for deploying and scaling ML models in production environments with real-world examples.",
      content: "Production ML deployment requires careful consideration...",
      date: "2024-01-10",
      tags: ["Machine Learning", "Production", "DevOps", "GCP"],
      featured: true,
      readTime: "12 min read",
    },
    {
      id: 3,
      title: "Modern Full-Stack Development with React and .NET Core",
      excerpt:
        "Building scalable web applications using React frontend and .NET Core backend with best practices.",
      content: "Full-stack development has evolved significantly...",
      date: "2024-01-05",
      tags: ["React", ".NET Core", "Full Stack", "Web Development"],
      featured: false,
      readTime: "10 min read",
    },
    {
      id: 4,
      title: "The Future of AI in Software Engineering",
      excerpt:
        "Exploring how AI is transforming software development and what developers need to know.",
      content: "AI is revolutionizing how we build software...",
      date: "2023-12-28",
      tags: ["AI/ML", "Software Engineering", "Future Tech", "Career"],
      featured: false,
      readTime: "6 min read",
    },
    {
      id: 5,
      title: "Building Real-time Applications with WebSockets",
      excerpt:
        "A deep dive into creating real-time applications using WebSockets and modern web technologies.",
      content: "Real-time applications are becoming the standard...",
      date: "2023-12-20",
      tags: ["WebSockets", "Real-time", "Node.js", "React"],
      featured: false,
      readTime: "9 min read",
    },
    {
      id: 6,
      title: "Data Visualization Best Practices",
      excerpt:
        "Creating effective data visualizations that tell compelling stories and drive decision-making.",
      content: "Good data visualization is both art and science...",
      date: "2023-12-15",
      tags: [
        "Data Visualization",
        "D3.js",
        "Business Intelligence",
        "Analytics",
      ],
      featured: false,
      readTime: "7 min read",
    },
  ],
};

// Function to get backup data
export const getBackupData = () => {
  return backupData;
};

// Function to save data to localStorage as backup
export const saveDataToBackup = (data) => {
  try {
    localStorage.setItem("portfolio_backup", JSON.stringify(data));
    localStorage.setItem(
      "portfolio_backup_timestamp",
      new Date().toISOString()
    );
    console.log("Portfolio data backed up to localStorage");
  } catch (error) {
    console.error("Failed to save backup data:", error);
  }
};

// Function to load data from localStorage backup
export const loadDataFromBackup = () => {
  try {
    const backupData = localStorage.getItem("portfolio_backup");
    const timestamp = localStorage.getItem("portfolio_backup_timestamp");

    if (backupData) {
      console.log("Loading portfolio data from backup (saved:", timestamp, ")");
      return JSON.parse(backupData);
    }
  } catch (error) {
    console.error("Failed to load backup data:", error);
  }

  // Return default backup data if localStorage fails
  return getBackupData();
};

// Function to check if backup data is recent (within 24 hours)
export const isBackupDataRecent = () => {
  try {
    const timestamp = localStorage.getItem("portfolio_backup_timestamp");
    if (!timestamp) return false;

    const backupTime = new Date(timestamp);
    const now = new Date();
    const hoursDiff = (now - backupTime) / (1000 * 60 * 60);

    return hoursDiff < 24; // Consider backup recent if less than 24 hours old
  } catch (error) {
    console.error("Failed to check backup data age:", error);
    return false;
  }
};

export default backupData;
