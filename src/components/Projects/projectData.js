import nar1 from "../../assets/projects/nar/1.png";
import nar2 from "../../assets/projects/nar/2.png";
import nar3 from "../../assets/projects/nar/3.png";
import nar4 from "../../assets/projects/nar/4.png";
import nar5 from "../../assets/projects/nar/5.png";

import real1 from "../../assets/projects/realestate/6.png";
import real2 from "../../assets/projects/realestate/7.png";
import real3 from "../../assets/projects/realestate/8.png";
import real4 from "../../assets/projects/realestate/9.png";

export const projects = [
  {
    id: 1,
    number: "01",
    title: "NAR LifeSaver",
    description:
      "An emergency response platform designed to help users report accidents, share live location, and quickly connect with emergency services through a secure and user-friendly interface.",

    tech: [
      "Django",
      "Python",
      "HTML",
      "CSS",
      "JavaScript",
      "SQLite",
    ],

    features: [
      "Emergency Response",
      "Live Location",
      "Secure Login",
      "Dashboard",
    ],

   github: "https://github.com/naziya2006/CrashAidProject",

    images: [nar1, nar2, nar3, nar4, nar5],
  },

  {
    id: 2,
    number: "02",
    title: "Real Estate Management",
   description:
  "A modern real estate management platform built with React and Django REST API for seamless property listing, customer management, visit scheduling, and administrative operations.",
tech: [
  "React",
  "Django",
  "REST API",
  "Python",
  "HTML",
  "CSS",
  "JavaScript",
],

features: [
  "Property Listing",
  "Customer Management",
  "Visit Scheduling",
  "Responsive UI",
],

   github: "https://github.com/naziya2006/realestate_project",

    images: [real1, real2, real3, real4],
  },
];