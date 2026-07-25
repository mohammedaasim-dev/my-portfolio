import heatshield from "../assets/projects/heatshield.png";
import smartassist from "../assets/projects/smartassist.png";
import prerana from "../assets/projects/prerana.png";

const projects = [
  {
    image: heatshield,
    title: "HeatShield AI",
    description:
      "AI-powered Urban Heat Island prediction system using Machine Learning.",
    tech: ["React", "FastAPI", "Python", "Scikit-learn"],
    github: "https://github.com/mohammedaasim-dev/HeatShield-AI",
    live: "https://heat-shield-ai-two.vercel.app/",
  },

  {
    image: smartassist,
    title: "SmartAssist AI",
    description:
      "AI chatbot with authentication and intelligent responses.",
    tech: ["Python", "Streamlit", "SQLite"],
    github: "https://github.com/mohammedaasim-dev/SmartAssist",
    live: "https://smartassist-ai-customer-support-603433613725.asia-southeast1.run.app/",
  },

  {
    image: prerana,
    title: "Prerana Website",
    description:
      "Official event website with registrations and QR generation.",
    tech: ["React", "Supabase"],
    github: "https://github.com/mohammedaasim-dev/prerana-2026",
    live: "https://prerana-2026-zeta.vercel.app/",
  },
];

export default projects;