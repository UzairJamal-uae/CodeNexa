import { Globe, Smartphone, Cpu, Layout, Shield, Zap } from 'lucide-react';
import p1 from '../assets/p1.png';
import p2 from '../assets/p2.png';
import p3 from '../assets/p3.png';
import p4 from '../assets/p4.png';
import p5 from '../assets/p5.png';
import p6 from '../assets/p6.png';
import p7 from '../assets/p7.png';
import p8 from '../assets/p8.png';
import p9 from '../assets/p9.png';
import p10 from '../assets/p10.png';
import p11 from '../assets/p11.png';
import p12 from '../assets/p12.png';
import p13 from '../assets/p13.png';
import p14 from '../assets/p14.png';
import p15 from '../assets/p15.png';
import p16 from '../assets/p16.png';
import p17 from '../assets/p17.png';
import p18 from '../assets/p18.png';
import p19 from '../assets/p19.png';
import p20 from '../assets/p20.png';

export interface Project {
  id: string;
  title: string;
  liveUrl: string
  category: "Web" | "Mobile" | "AI" | "Enterprise";
  image: string;
  desc: string;
  fullDesc: string;
  tags: string[];
  client: string;
  rating: number;
  results: string[];
  features: string[];
  challenge: string;
  solution: string;
}

export const projects: Project[] = [
  {
    id: "Hamnawa Travels",
    title: "Hamnawa Travels",
    liveUrl: "https://hamnawatravel.netlify.app/",
    category: "Web",
    image: p3,
    desc: "Automated lead generation platform that uses machine learning to identify and qualify International Tourists.",
    fullDesc: "GrowthEngine AI leverages advanced machine learning models to scrape and analyze International Market at scale. It identifies patterns in successful conversions and automatically qualifies leads based on custom business parameters, allowing sales teams to focus only on high-probability opportunities.",
    tags: ["React", "Node.js", "Redis"],
    client: "Hamnawa Travels",
    rating: 5,
    results: [
      "250% Increase in Page Load Speed",
      "40% Boost in Mobile Conversion",
      "Support for 50k+ Concurrent Users"
    ],
    features: [
      "AI-Powered Personalized Recommendations",
      "Real-time Inventory Synchronization",
      "Multi-Currency & Multi-Language Support",
      "Advanced Fraud Prevention System"
    ],
    challenge: "The client was losing 30% of their revenue due to slow checkout times and system crashes during flash sales on their legacy Shopify store.",
    solution: "We migrated their stack to a headless architecture using React and a custom Node.js backend, implementing aggressive caching and edge computing."
  },
  {
    id: "BF 101 LLC",
    title: "BF 101 LLC",
    liveUrl: "https://www.bf101ilog.com/",
    category: "Web",
    image: p1,
    desc: "A centralized operating system for logistics and supply chain management, optimizing fleet tracking and driver dispatching workflows.",
    fullDesc: "BF101 LLC's OS was built to solve the fragmentation in logistics management. By integrating real-time GPS tracking, automated driver dispatching, and a robust billing engine, we reduced operational overhead by 35% for our initial partners. The system handles thousands of concurrent data points and provides a seamless interface for both dispatchers and fleet owners.",
    tags: ["Python", "OpenAI", "React"],
    client: "BF 101 LLC",
    rating: 5,
    results: [
      "80% Routine Inquiries Automated",
      "Save $150k+/Year in Support Costs",
      "95% Customer Satisfaction Rate"
    ],
    features: [
      "Dynamic Knowledge Base Integration",
      "Sentiment Analysis for Human Handoff",
      "Predictive Trend Forecasting",
      "Visual Data Insights Dashboard"
    ],
    challenge: "Handling 10,000+ daily support tickets manually was leading to high burn-out rates and slow response times.",
    solution: "We implemented a custom RAG (Retrieval-Augmented Generation) pipeline that allows the AI to answer complex, company-specific questions with 99% accuracy."
  },
  {
    id: "RFC Fas Food",
    title: "RFC Fas Food",
    liveUrl: "https://www.rfcjhang.pk/",
    category: "Web",
    image: p7,
    desc: "A youth-focused Fast Food Restaurant Website.",
    fullDesc: "In this project, we aimed to create a clean and modern website for the RFC brand that perfectly captures the theme and feel of RFS. We also targeted a young audience, so we used a funky style throughout the website.",
    tags: ["React Native", "Firebase", "NextJS"],
    client: "RFC Fas Food",
    rating: 5,
    results: [
      "100k+ Downloads in 3 Months",
      "4.9 Star Rating on App Store",
      "Top 10 Health App Ranking"
    ],
    features: [
      "Biometric Wearable Sync",
      "Personalized Nutrition Coaching",
      "Mental Wellness Tracking",
      "Community Social Feed"
    ],
    challenge: "Existing health apps were too clinical and complex, leading to low user retention for wellness initiatives.",
    solution: "Focusing on UX psychology, we built a gamified experience that encourages daily engagement through micro-wins and community support."
  },
  {
    id: "Dezlee LLC",
    title: "Dezlee LLC",
    liveUrl: "https://dezlee.us/",
    category: "Web",
    image: p4,
    desc: "High-conversion Freight Brokerage infrastructure designed for 7-figure international company, featuring custom checkout optimizations.",
    fullDesc: "This project focused on re-engineering the standard Website experience for high-volume international Freight Brokers. We implemented custom liquid templates, headless commerce elements for speed, and a multi-region Transport management system that supports global scaling without performance degradation.",
    tags: ["Next.js", "PostgreSQL", "Docker"],
    client: "Dezlee LLC",
    rating: 5,
    results: [
      "30% Operational Waste Reduction",
      "Real-time Tracking of 1m+ Assets",
      "Zero Downtime During Migration"
    ],
    features: [
      "Automated Route Optimization",
      "Financial Reporting Hub",
      "Workforce Shift Planning",
      "IoT Sensor Integration"
    ],
    challenge: "Using disconnected spreadsheets and legacy software led to massive data silos and $2m/year in preventable logistical errors.",
    solution: "We unified their entire operation into a single source of truth dashboard, implementing automated alerts and real-time asset tracking."
  },
  {
    id: "Ajaz Faisal",
    title: "Ajaz Faisal",
    liveUrl: "https://ajazfaisal.com/",
    category: "AI",
    image: p5,
    desc: "A premium fashion catalog website to showcase the work of Faisal Ajaz to the world.",
    fullDesc: "Ajaz Faisal is a fashion store built for our client Ajaz. The goal of this project was to create a store with a unique interface that conveys their art in the right way to the world.",
    tags: ["NextJS", "Go", "C++"],
    client: "Ajaz Faisal",
    rating: 5,
    results: ["15% Alpha Generation", "99.9% Strategy Execution Rate", "0.5ms Average Latency"],
    features: ["Backtesting Engine", "Risk Management AI", "Real-time Sentiment Analysis"],
    challenge: "Traditional trading algorithms couldn't adapt to rapid market changes and social media sentiment spikes.",
    solution: "We built a hybrid system that combines technical indicators with real-time NLP (Natural Language Processing) on news feeds."
  },
  {
    id: "VibeGYM",
    title: "VibeGYM",
    liveUrl: "https://dha.vibegym.pk/",
    category: "Mobile",
    image: p10,
    desc: "AI-driven personal trainer in your pocket.",
    fullDesc: "VibeGYM uses computer vision to analyze form during workouts and provides real-time posture correction via the mobile app.",
    tags: ["React Native", "CoreML", "AWS"],
    client: "VibeGYM",
    rating: 5,
    results: ["300k Monthly Active Users", "4.8 App Store Rating", "20% Increase in Workout Consistency"],
    features: ["Pose Estimation AI", "Plan Customization", "AR Workout Overlays"],
    challenge: "Users were often performing exercises incorrectly, leading to injuries and lack of progress.",
    solution: "We integrated on-device pose estimation to provide immediate feedback, similar to having a personal trainer."
  },
  {
    id: "Savagelyfe LLC",
    title: "Savagelyfe LLC",
    liveUrl: "https://666savage.com/",
    category: "Enterprise",
    image: p6,
    desc: "Last-mile delivery optimization for global retailers.",
    fullDesc: "A complete fleet management system that optimizes routes for thousands of delivery drivers in real-time.",
    tags: ["Node.js", "Google Maps API", "Kubernetes"],
    client: "Savagelyfe LLC.",
    rating: 5,
    results: ["15% Fuel Cost Reduction", "25% Faster Deliveries", "Real-time Fleet Visibility"],
    features: ["Dynamic Route Grouping", "Driver Performance CRM", "Digital Proof of Delivery"],
    challenge: "Inefficient routing was causing drivers to criss-cross paths, leading to high fuel costs and delayed shipments.",
    solution: "We applied genetic algorithms for route optimization, saving the client millions in annual operational expenses."
  },
  {
    id: "MKM Vault",
    title: "MKM Vault",
    liveUrl: "https://mkmvault.com/",
    category: "Web",
    image: p2,
    desc: "Custom CRM and communication layer for US trucking operations, reducing dispatch response times by 40%.",
    fullDesc: "Dispatch Flow Pro is a specialized communication tool designed for the fast-paced US trucking industry. It centralizes driver communications, load boards, and document management into a single, real-time dashboard, significantly reducing the friction between dispatchers and drivers.",
    tags: ["React", "MQTT", "Grafana"],
    client: "MKM Vault LLC",
    rating: 5,
    results: ["12% Energy Savings", "Improved Emergency Response", "City-wide Data Transparency"],
    features: ["IoT Device Management", "Historical Trend Analysis", "Automated Fault Alerts"],
    challenge: "City utilities were managed through fragmented, outdated systems that didn't talk to each other.",
    solution: "We created a central integration layer that speaks multiple IoT protocols and visualizes data in a high-density dashboard."
  },
  {
    id: "Movies Any Where",
    title: "Movies Any Where",
    liveUrl: "https://moviesanywhere.com/home",
    category: "Web",
    image: p11,
    desc: "Next-gen social network focused on high-quality content creator tools.",
    fullDesc: "Lumina provides creators with advanced analytics and direct monetization features missing from traditional platforms.",
    tags: ["Next.js", "Tailwind", "Supabase"],
    client: "Movies Any Where",
    rating: 5,
    results: ["500k Creators Joined", "High Engagement Rates", "Robust API for Developers"],
    features: ["In-browser Video Editor", "NFT Integration", "Community DAOs"],
    challenge: "Existing platforms took high commissions and didn't offer deep analytics to niche creators.",
    solution: "We built a low-fee platform with an 'Analytics-First' approach, giving power back to the content owners."
  },
  {
    id: "R&Y Autos",
    title: "R&Y Autos",
    liveUrl: "https://ryautotransport.com/",
    category: "Web",
    image: p12,
    desc: "A transport management system for a rising brokerage company.",
    fullDesc: "R&Y Transportation LLC was looking for a professional TMS system that could integrate with all of their ERP and CRM systems to make their workflow smoother and more efficient.",
    tags: ["Wix", "CSS", "HTML"],
    client: "R&Y Autos",
    rating: 5,
    results: ["99.9% Threat Detection", "Auto-recovery in Seconds", "Reduced False Positives by 60%"],
    features: ["Behavioral Anomaly Detection", "One-click Remediation", "Compliance Monitoring"],
    challenge: "The manual security ops team couldn't keep up with the volume of automated attacks on their cloud assets.",
    solution: "We implemented an AI-driven 'Self-Healing' network architecture that identifies and isolates threats without human intervention."
  },
  {
    id: "Pink Pelican",
    title: "Pink Pelican",
    liveUrl: "https://www.pinkpelicanpcb.com/",
    category: "Mobile",
    image: p8,
    desc: "A soft-vibe website for Pink Pelican Ice Cream Parlor.",
    fullDesc: "When we started this project, our goal was to create a website with cool and cozy vibes that completely reflected the name and quality of the Pink Pelican Ice Cream Parlor. So, we built the project to meet its standards.",
    tags: ["NextJS", "JASON", "Stellar"],
    client: "Pink Pelican",
    rating: 5,
    results: ["Transaction Fees < 0.1%", "Instant Settlement", "1m+ Active Wallets"],
    features: ["Biometric Secure Auth", "Crypto-to-Fiat Bridge", "Peer-to-Peer Loans"],
    challenge: "Remittance costs in certain regions were as high as 10%, hurting migrant workers and families.",
    solution: "By utilizing a stablecoin architecture, we reduced transfer costs and time significantly, making it accessible to anyone with a smartphone."
  },
  {
    id: "Johnson Freight",
    title: "Johnson Freight",
    liveUrl: "https://johnsonfreighttransportation.com/",
    category: "Enterprise",
    image: p13,
    desc: "A clean and freight-oriented WordPress website.",
    fullDesc: "Johnson Freight Transportation is a WordPress project built according to the client’s requirements and is completely shipper-oriented. It is designed to engage long-term shippers.",
    tags: ["WordPress", "CSS", "HTML"],
    client: "Johnson",
    rating: 5,
    results: ["20% Water Usage Reduction", "15% Higher Crop Yields", "Automated Soil Health Reports"],
    features: ["Satellite VRT Mapping", "IoT Soil Probes", "Weather Risk Analytics"],
    challenge: "Farmers were over-using fertilizers and water because they lacked data on which specific areas of their fields needed attention.",
    solution: "We created a Variable Rate Technology (VRT) system that tells machinery exactly where to deploy resources based on real-time data."
  },
  {
    id: "Sweet & Cream",
    title: "Sweet & Cream",
    liveUrl: "https://sweetcreme.com.pk/",
    category: "Web",
    image: p9,
    desc: "A clean and professional website for the Sweet & Cream ice cream brand.",
    fullDesc: "In this project, we didn’t just build a website; we created a complete sales engine for Sweet & Cream that uses AI to track customer locations and offer deals and products accordingly, improving the overall user experience.",
    tags: ["Vue.js", "NextJS", "AI"],
    client: "LiveLink",
    rating: 5,
    results: ["Lag-free Global Streaming", "Support for 100k+ Viewers", "Seamless Ticket Integration"],
    features: ["Interactive Fan Chat", "Multi-angle Switching", "VOD Monetization"],
    challenge: "Standard streaming services were too generic and didn't offer the branding or ticketing features event organizers needed.",
    solution: "We built a specialized low-latency engine that supports 4K streaming with interactive overlay features for a truly immersive experience."
  },
  {
    id: "Wave Lane",
    title: "Wave Lane",
    liveUrl: "https://www.wavelanefreight.com/",
    category: "AI",
    image: p14,
    desc: "Adaptive Freight shipping platform that adjusts curriculum in real-time based on shipper's needs.",
    fullDesc: "Wave Lane Transportation uses cognitive modeling to identify Shipping gaps and re-route the shipment path for optimal retention.",
    tags: ["React", "Node.js", "PyTorch"],
    client: "Wave Lane",
    rating: 5,
    results: ["40% Faster Learning Progress", "90% Course Completion Rate", "Personalized for 50+ Languages"],
    features: ["Dynamic Content Generation", "Progress Predictive AI", "Gamified Learning Paths"],
    challenge: "Generic online courses have high dropout rates because they don't adapt to individual learning speeds or styles.",
    solution: "Our adaptive engine constantly monitors every interaction, adjusting difficulty and content format (video vs. text vs. quiz) automatically."
  },
  {
    id: "PrimeGate",
    title: "PrimeGate",
    liveUrl: "https://primegateskill.netlify.app/",
    category: "Web",
    image: p15,
    desc: "Advanced Website and ERP System for PrimeGate Skill Institute.",
    fullDesc: "An advanced website for PrimeGate Skill Institute to professionally manage their student enrollment system. We built a complete backend ERP, CRM, and website solution for them.",
    tags: ["Java", "ROS", "PostgreSQL"],
    client: "PrimeGate",
    rating: 5,
    results: ["50% Increase in Order Throughput", "99.99% Inventory Accuracy", "Reduced Workplace Injuries"],
    features: ["Pathfinding Algorithms", "Inventory Heatmaps", "Real-time Machine Diagnostics"],
    challenge: "Manual picking was too slow for the e-commerce boom, leading to massive backlogs and shipping delays.",
    solution: "We implemented a swarm-logic orchestration system that directs robots to the most efficient paths, minimizing congestion and travel time."
  },
  {
    id: "Compass RealEstate",
    title: "Compass RealEstate",
    liveUrl: "https://www.compass.com/",
    category: "Web",
    image: p19,
    desc: "A decentralized Website for high-end digital Real Estate Agency.",
    fullDesc: "Compass allows users to buy, sell, and lease virtual land and structures with verified ownership records on public ledgers.",
    tags: ["React", "Hardhat", "IPFS"],
    client: "Compass RealEstate",
    rating: 5,
    results: ["$10M+ in Transaction Volume", "Verified Asset Scarcity", "Global User Base"],
    features: ["3D Property Tours", "Smart Contract Escrow", "Dynamic Price Index UI"],
    challenge: "Potential buyers were afraid of fraudulent listings and lack of transparent pricing in virtual worlds.",
    solution: "We built a trust-less marketplace where every transaction is immutable and asset history is fully transparent for all participants."
  },
  {
    id: "Z&I Trucking",
    title: "Z&I Trucking",
    liveUrl: "https://zilogisticsllc.com/",
    category: "Enterprise",
    image: p16,
    desc: "Blockchain-based supply chain transparency for fair-trade products.",
    fullDesc: "Z&I allows consumers to trace products back to their origin using QR codes linked to an immutable supply chain ledger.",
    tags: ["Solidity", "Go", "React"],
    client: "Z&I Trucking",
    rating: 5,
    results: ["100% Traceability", "15% Uplift in Brand Trust", "Support for 200+ Global Suppliers"],
    features: ["QR Traceability Portal", "Supplier Compliance Audits", "Real-time Shipping Sensors"],
    challenge: "Proving 'Fair Trade' status was difficult for retailers due to lack of visibility in deep multi-tier supply chains.",
    solution: "We implemented a tokenized supply chain where every hand-off is recorded by authorized participants, creating a digital audit trail."
  },
  {
    id: "TrueCar",
    title: "TrueCar",
    liveUrl: "https://www.truecar.com/",
    category: "Mobile",
    image: p18,
    desc: "Next-gen car sharing and fleet management application.",
    fullDesc: "TrueCar Auto provides a seamless, keyless experience for car rentals and corporate pool cars using smartphone-based BLE connectivity.",
    tags: ["React Native", "Bluetooth Low Energy", "Firebase"],
    client: "TrueCar",
    rating: 5,
    results: ["20% Higher Vehicle Utilization", "Reduced Car Theft by 95%", "Seamless User Journey"],
    features: ["Digital Key Technology", "Geo-fencing Alerts", "Automated Billing & Tolls"],
    challenge: "Key management and physical hand-offs were the biggest bottleneck for growing the business.",
    solution: "We integrated hardware-linked BLE encryption, allowing users to unlock and start cars directly from their personal mobile device."
  },
  {
    id: "Orange Coast",
    title: "Orange Coast",
    liveUrl: "https://orangecoastcollege.edu/",
    category: "AI",
    image: p20,
    desc: "Orange Coast for early detection of telepsychiatry in medical imaging.",
    fullDesc: "Insight Orange Coast radiologists by flagging potential anomalies in X-rays, MRIs, and CT scans with high sensitivity.",
    tags: ["PyTorch", "DICOM", "Docker"],
    client: "Orange Coast",
    rating: 5,
    results: ["25% Faster Diagnostic Times", "Reduced Human Oversight Errors", "HIPAA Compliant Cloud"],
    features: ["Anomaly Heatmapping", "Automated Reporting", "Radiologist Validation Loop"],
    challenge: "Radiologists are overwhelmed by scan volume, leading to fatigue and potential missed early-stage diagnoses.",
    solution: "Our AI acts as a 24/7 'second set of eyes', prioritizing urgent cases and highlighting suspect regions for immediate human review."
  },
  {
    id: "LFL Logistics",
    title: "LFL Logistics",
    liveUrl: "https://lfllogistics.com/",
    category: "Web",
    image: p17,
    desc: "A decentralized Website for high-end digital Freight Brokerage.",
    fullDesc: "LFL Logistics was looking for the perfect website to showcase their experience and portfolio in hazmat loads, so we built this website for them.",
    tags: ["React", "Plaid API", "Node.js"],
    client: "O'Dell Longs.",
    rating: 5,
    results: ["Users Save $2k+/Year on Avg", "200% Growth in First Year", "Top-tier Data Encryption"],
    features: ["Smart Budgeting Engine", "Subscription Cancellation Tool", "AI Investment Advice"],
    challenge: "Traditional banking apps are clunky and don't help users actually reach their long-term financial goals.",
    solution: "We combined Plaid's data connectivity with a powerful behavioral psychology-driven interface that makes saving rewarding."
  }
];
