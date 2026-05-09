import { Zap, Rocket, Crown, CheckCircle2, Shield, Cpu, Globe, Users, Layout, MessageSquare } from 'lucide-react';

export interface PackageFeature {
  text: string;
  icon: any;
}

export interface Package {
  slug: string;
  name: string;
  price: string;
  basePrice: number | null; // numeric value for conversion
  tagline: string;
  description: string;
  icon: any;
  features: PackageFeature[];
  bestFor: string;
  whyChoose: string;
  technicalSpecs: string[];
  deliveryTime: string;
  color: string;
}

export const packages: Package[] = [
  {
    slug: "starter-growth",
    name: "Growth Starter",
    price: "From $2,500",
    basePrice: 2500,
    tagline: "Perfect for Small Businesses & Startups",
    description: "Establish your digital presence with a high-performance, conversion-optimized platform built for immediate impact.",
    icon: Zap,
    color: "from-blue-500 to-cyan-400",
    features: [
      { text: "Custom 5-Page Responsive Website", icon: Layout },
      { text: "Basic SEO Optimization", icon: Globe },
      { text: "Essential AI Chatbot Integration", icon: MessageSquare },
      { text: "Contact Form & CRM Sync", icon: Users },
      { text: "1 Month Post-Launch Support", icon: Shield }
    ],
    bestFor: "Individual entrepreneurs and small local businesses looking to professionalize their online presence and start collecting leads automatically.",
    whyChoose: "This isn't just a website; it's a lead generation machine. We focus on the core features that drive ROI without the bloat of unnecessary systems.",
    technicalSpecs: [
      "Vite + React Frontend",
      "Tailwind CSS Layouts",
      "Mobile-First Architecture",
      "SSL Certificate Setup",
      "Basic Analytics Integration"
    ],
    deliveryTime: "2-3 Weeks"
  },
  {
    slug: "business-scale",
    name: "Business Scale",
    price: "From $7,500",
    basePrice: 7500,
    tagline: "The Ultimate Tool for Established SMEs",
    description: "Scale your operations with custom workflows, advanced AI assistant integrations, and enterprise-grade security.",
    icon: Rocket,
    color: "from-brand-orange to-orange-400",
    features: [
      { text: "Everything in Starter", icon: CheckCircle2 },
      { text: "Custom Web or Mobile Application", icon: Cpu },
      { text: "Advanced AI Data Processing", icon: Zap },
      { text: "Payment Gateway Integration", icon: Globe },
      { text: "Inventory or Client Management System", icon: Layout },
      { text: "3 Months Technical Support", icon: Shield }
    ],
    bestFor: "Growing businesses with 10-50 employees that are struggling with manual processes and need automated internal or external tools to scale.",
    whyChoose: "We solve complex bottlenecks. This package is about efficiency and freeing up your time so you can focus on strategy rather than spreadsheets.",
    technicalSpecs: [
      "Node.js Backend Integration",
      "Supabase or Firebase Database",
      "Rest API Development",
      "Dynamic Dashboard UI",
      "Automated Email/SMS Triggers"
    ],
    deliveryTime: "6-8 Weeks"
  },
  {
    slug: "enterprise-elite",
    name: "Enterprise Elite",
    price: "Custom Pricing",
    basePrice: null,
    tagline: "High-End Solutions for Global Leaders",
    description: "Deep-tech integration involving custom LLMs, blockchain, or complex multi-platform ecosystems for massive scale.",
    icon: Crown,
    color: "from-purple-600 to-pink-500",
    features: [
      { text: "Full Ecosystem Development", icon: Globe },
      { text: "Custom LLM / AI Model Training", icon: MessageSquare },
      { text: "Advanced Cybersecurity Audit", icon: Shield },
      { text: "Global Infrastructure Setup", icon: Rocket },
      { text: "Dedicated Project Manager", icon: Users },
      { text: "Lifetime Security Patches", icon: Shield }
    ],
    bestFor: "Mid-to-large corporations requiring bespoke software that handles high-concurrency, complex data relationships, and strict security compliance.",
    whyChoose: "This is for the visionaries. When off-the-shelf solutions fail, we build the impossible. Perfect for legacy modernization or disruptive startups.",
    technicalSpecs: [
      "Microservices Architecture",
      "Kubernetes Deployment",
      "End-to-End Encryption",
      "Machine Learning Pipeline",
      "Cross-Platform Native Development"
    ],
    deliveryTime: "12+ Weeks"
  }
];
