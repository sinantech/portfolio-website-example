"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

//about data
const about = {
  title: "About Me",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse aliquam corrupti tempora accusantium excepturi repellendus nemo officiis.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Luke Coleman",
    },
    {
      fieldName: "Phone",
      fieldValue: " 1234567789",
    },
    {
      fieldName: "Experience",
      fieldValue: "12 years",
    },
    {
      fieldName: "Skype",
      fieldValue: "luke001",
    },
    {
      fieldName: "Nationality",
      fieldValue: "jamaica",
    },
    {
      fieldName: "Email",
      fieldValue: "Luke@coleeman.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English",
    },
  ],
};

//experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse aliquam corrupti tempora accusantium excepturi repellendus nemo officiis.",
};

const Resume = () => {
  return <div>resume page</div>;
};

export default Resume;
