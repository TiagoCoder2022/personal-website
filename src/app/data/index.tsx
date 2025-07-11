import { Github, Instagram, Linkedin, Twitter, Mail } from "lucide-react";

export const projects = [
  {
    id: 1,
    slug: "fsw-store",
    date: "November 2023",
    title: "FSW Store",
    subtitle: "Full-Stack Project",
    description:
      "FSW Store is a modern e-commerce platform focused on high-quality computer peripherals. Users can easily browse and shop for items like keyboards, mouses, headsets, monitors, and more through a seamless and intuitive interface.",
    overview:
      "Developed with a full-stack architecture using Next.js and TypeScript, FSW Store offers a dynamic and scalable shopping experience. The project integrates Prisma ORM with a PostgreSQL database to ensure robust data handling, while Tailwind CSS and Shadcn enhance the UI with clean and responsive design components. Google login via Auth.js simplifies authentication, and Stripe API is used for secure payment processing, supporting a complete purchase flow from browsing to checkout.",
    features: [
      {
        title: "Google Authentication:",
        description:
          "Secure and seamless login using Google OAuth for quick access.",
      },
      {
        title: "Product Discounts & Promotions:",
        description:
          "Highlighted offers and markdowns to enhance user engagement.",
      },
      {
        title: "Interactive Shopping Cart:",
        description:
          "Real-time cart updates with quantity adjustments and visual feedback.",
      },
      {
        title: "Stripe Payment Integration:",
        description:
          "Smooth and secure checkout flow using Stripe’s modern payment API.",
      },
      {
        title: "Responsive UI with Shadcn Components:",
        description:
          "Consistent experience across all screen sizes using reusable and accessible UI blocks.",
      },
      {
        title: "Prisma ORM with PostgreSQL:",
        description:
          "Strong and scalable data management powered by relational schema and Prisma tooling.",
      },
      {
        title: "Code Modularity & Reusability:",
        description:
          "Well-structured components and service layers for scalable development and maintenance.",
      },
    ],
    tags: [
      "React.js",
      "Next.js",
      "Typescript",
      "Tailwindcss",
      "Shadcn",
      "Prisma",
      "Postgresql",
      "Stripe",
      "Auth.js",
    ],
    imgSrc: "/assets/img/fsw-store.jpg",
    imgCover: "/assets/img/project-1.png",
    links: [
      { title: "Live Demo", url: "https://fsw-store-beta.vercel.app" },
      { title: "GitHub", url: "https://github.com/TiagoCoder2022/fsw-store" },
    ],
  },
  {
    id: 2,
    slug: "find-trips",
    date: "August 2023",
    title: "Find Trips",
    subtitle: "Full-Stack Project",
    description:
      "Find Trips is a travel and accommodation booking platform that allows users to explore destinations, reserve stays, and plan trips with ease.",
    overview:
      "Built with Next.js and TypeScript, Find Trips delivers a smooth search and booking experience. It uses Prisma ORM with PostgreSQL for robust data management, Tailwind CSS for responsive design, and integrates the Stripe API for secure payments.",
    features: [
      {
        title: "Google Authentication:",
        description:
          "Secure and seamless login using Google OAuth for quick access.",
      },
      {
        title: "Category Navigation:",
        description:
          "Easy-to-use navigation categories for quick access to different travel categories.",
      },
      {
        title: "Advanced Search Bar:",
        description: "Efficient search for locations and accommodations.",
      },
      {
        title: "Stripe Payment Integration:",
        description: "Secure and seamless payment processing with Stripe.",
      },
      {
        title: "Responsive Design:",
        description:
          "Seamless experience across all devices with responsive design.",
      },
      {
        title: "Stripe Payment Integration:",
        description: "Secure and seamless payment processing with Stripe.",
      },
      {
        title: "Prisma ORM with PostgreSQL:",
        description:
          "Strong and scalable data management powered by relational schema and Prisma tooling.",
      },
      {
        title: "Code Modularity & Reusability:",
        description:
          "Well-structured components and service layers for scalable development and maintenance.",
      },
    ],
    tags: [
      "React.js",
      "Next.js",
      "Typescript",
      "Tailwindcss",
      "Shadcn",
      "Prisma",
      "Postgresql",
      "Stripe",
      "Auth.js",
    ],
    imgSrc: "/assets/img/find-trips.png",
    imgCover: "/assets/img/project-3.png",
    links: [
      { title: "Live Demo", url: "https://fsw-trips-one.vercel.app" },
      { title: "GitHub", url: "https://github.com/TiagoCoder2022/fsw-trips" },
    ],
  },
  {
    id: 3,
    slug: "fsw-foods",
    date: "November 2024",
    title: "FSW Foods",
    subtitle: "Full-Stack Project",
    description:
      "FSW Foods is a food delivery e-commerce platform inspired by apps like iFood, allowing users to browse restaurants and place orders conveniently.",
    overview:
      "Developed using Next.js and TypeScript, FSW Foods integrates Prisma ORM with PostgreSQL for data handling, Tailwind CSS for modern UI design, and Stripe API for secure transactions. It emphasizes user experience through an intuitive and responsive interface.",
    features: [
      {
        title: "Google Authentication:",
        description:
          "Secure and seamless login using Google OAuth for quick access.",
      },
      {
        title: "Navigation Categories:",
        description:
          "Easy-to-use navigation categories for quick access to different travel categories.",
      },
      {
        title: "Favorite Restaurants:",
        description: "Effortlessly save and access your favorite dining spots.",
      },
      {
        title: "Products Discounts:",
        description:
          "Highlighted offers and markdowns to enhance user engagement.",
      },
      {
        title: "Shopping Cart Management:",
        description:
          "Real-time cart updates with quantity adjustments and visual feedback.",
      },
      {
        title: "Stripe Payment Integration:",
        description: "Secure and seamless payment processing with Stripe.",
      },
      {
        title: "Responsive Design:",
        description:
          "Seamless experience across all devices with responsive design.",
      },
    ],
    tags: [
      "React.js",
      "Next.js",
      "Typescript",
      "Tailwindcss",
      "Shadcn",
      "Prisma",
      "Postgresql",
      "Stripe",
      "Auth.js",
    ],
    imgSrc: "/assets/img/fsw-foods.png",
    imgCover: "/assets/img/project-2.png",
    links: [
      { title: "Live Demo", url: "https://fsw-foods-chi.vercel.app" },
      { title: "GitHub", url: "https://github.com/TiagoCoder2022/FSW-Foods" },
    ],
  },
  {
    id: 4,
    slug: "finance-ai",
    date: "February 2025",
    title: "Finance AI",
    subtitle: "Full-Stack Project",
    description:
      "Finance AI is a financial management SaaS application that helps users organize their finances and gain valuable insights through artificial intelligence.",
    overview:
      "Finance AI is a financial management SaaS application that helps users organize their finances and gain valuable insights through artificial intelligence.",
    features: [
      {
        title: "Intelligent Reporting:",
        description: "AI-powered reporting to provide valuable insights.",
      },
      {
        title: "Stripe Integration:",
        description: "Secure and seamless payment processing with Stripe.",
      },
      {
        title: "Secure Authentication:",
        description: "Google and Clerk authentication for secure access.",
      },
      {
        title: "Presentational Home Page:",
        description: "Highlight key features to engage users.",
      },
      {
        title: "Plans Management:",
        description: "Flexible plans to meet different user needs.",
      },
      {
        title: "Responsive Design:",
        description:
          "Seamless experience across all devices with responsive design.",
      },
      {
        title: "Code Modularity & Reusability:",
        description:
          "Well-structured components and service layers for scalable development and maintenance.",
      },
    ],
    tags: [
      "React.js",
      "Next.js",
      "Typescript",
      "Tailwindcss",
      "Shadcn",
      "Prisma",
      "Postgresql",
      "Stripe",
      "Clerk",
    ],
    imgSrc: "/assets/img/finance.png",
    imgCover: "/assets/img/project-4.png",
    links: [
      { title: "Live Demo", url: "https://finance-ai-v2.vercel.app" },
      { title: "GitHub", url: "https://github.com/TiagoCoder2022/finance-ai" },
    ],
  },
  {
    id: 5,
    slug: "doctor-flow",
    date: "June 2025",
    title: "Doctor Flow",
    subtitle: "Full-Stack Project",
    description:
      "Doctor Flow is a modern, responsive SaaS platform designed for clinics to efficiently manage appointments, doctors, and patient data. It enables users to register new clinics, schedule appointments, and maintain structured medical records — all through an intuitive and accessible interface.",
    overview:
      "Developed with Next.js and TypeScript, Doctor Flow integrates Prisma ORM with PostgreSQL for seamless database management, and leverages Tailwind CSS alongside Shadcn UI for a clean, responsive UI. Session handling is optimized with Redis, and form validation is handled using Zod. The system prioritizes performance, accessibility, and a developer-friendly architecture, making it a scalable solution for healthcare workflows.",
    features: [
      {
        title: "Appointment Scheduling:",
        description:
          "Intuitive interface to book, view, and manage appointments.",
      },
      {
        title: "Patient and Doctor Registration:",
        description: "Centralized organization of information.",
      },
      {
        title: "Medical Records Management:",
        description: "Secure storage and easy access to patient history.",
      },
      {
        title: "Notifications and Reminders:",
        description:
          "Optimize the time of both patients and healthcare professionals.",
      },
      {
        title: "Reports and Dashboards:",
        description: "Visualize key data to support decision-making.",
      },
    ],
    tags: [
      "React.js",
      "Next.js",
      "Typescript",
      "Tailwindcss",
      "Shadcn",
      "Postgresql",
      "Zod",
      "Better-auth",
    ],
    imgSrc: "/assets/img/doctor-flow-dash.png",
    imgCover: "/assets/img/project-5.png",
    links: [
      { title: "Live Demo", url: "https://doctor-flow.vercel.app" },
      { title: "GitHub", url: "https://github.com/TiagoCoder2022/doctor-flow" },
    ],
  },
  {
    id: 6,
    slug: "task-manager",
    date: "March 2024",
    title: "Task Manager",
    subtitle: "Full-Stack Project",
    description:
      "Task Manager is a full-stack application that helps users efficiently manage tasks with features like creation, editing, deletion, and marking tasks as important or completed.",
    overview:
      "Developed with Next.js and TypeScript, Task Manager uses Prisma ORM with PostgreSQL, Style Components for UI design, and Clerk for secure authentication. It offers a clean and responsive user experience.",
    features: [
      {
        title: "User Registration:",
        description: "Easy sign-up process for task management.",
      },
      {
        title: "Task Creation:",
        description: "Create and manage tasks with ease.",
      },
      {
        title: "Task Editing:",
        description: "Edit tasks with ease.",
      },
      {
        title: "Task Deletion:",
        description: "Delete tasks with ease.",
      },
    ],
    tags: [
      "React.js",
      "Next.js",
      "Typescript",
      "Style Components",
      "Prisma",
      "Postgresql",
      "Axios",
      "Clerk",
    ],
    imgSrc: "/assets/img/project-6.png",
    imgCover: "/assets/img/project-6.png",
    links: [
      { title: "Live Demo", url: "https://task-manager-app-mocha.vercel.app" },
      {
        title: "GitHub",
        url: "https://github.com/TiagoCoder2022/task-manager-app/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: 1,
    icon: <Github />,
    link: "https://github.com/TiagoCoder2022",
  },
  {
    id: 2,
    icon: <Instagram />,
    link: "https://www.instagram.com/_tiagoalves/",
  },
  {
    id: 3,
    icon: <Linkedin />,
    link: "https://www.linkedin.com/in/tiago-dev/",
  },
  {
    id: 4,
    icon: <Twitter />,
    link: "https://x.com/TiagoCoder2022",
  },
  {
    id: 5,
    icon: <Mail />,
    link: "mailto:tiagodev.alves@gmail.com",
  },
];
