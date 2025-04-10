import React from 'react';
import ExperienceCard from './ExperienceCard';

const Experience = () => {
    const experiences = [
      {
        company: "RikkeiSoft",
        position: "Front-end Developer",
        period: "May 2024 - Present",
        technologies: ["ReactJS", "NextJS", "Redux", "Webpack", "Tailwind", "Babel", "Laravel", "Express", "AWS"],
        responsibilities: [
          "Maintain code quality and consistency",
          "Build user interfaces from provided designs and logic behavior",
          "Integrate REST APIs for seamless backend communication",
          "Collaborate with clients to gather requirements and offer solutions",
          "Implement logic for dynamic UI interactions",
          "Design and develop backend systems using Laravel and Express",
          "Optimize application performance and scalability",
          "Manage server-side logic and database interactions"
        ]
      },
      {
        company: "24hdev",
        position: "Front-end Developer",
        period: "April 2021 - May 2024",
        technologies: ["ReactJS", "NextJS", "Redux", "Webpack", "Tailwind", "SCSS", "Python", "Node.JS", "NestJS", "ElasticSearch", "AWS"],
        responsibilities: [
          "Review code contributed by team members to maintain quality",
          "Build responsive user interfaces based on designs",
          "Integrate REST APIs to ensure communication with backend systems",
          "Engage with clients to understand requirements and provide solutions",
          "Implement logic for UI interactions and user experience",
          "Work on implementing Power BI integration",
          "Convert monolithic architecture to micro frontend",
          "Collaborate with team members to ensure smooth project execution"
        ]
      }
    ];
  
    return (
      <section id="experience" className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">Work Experience</h2>
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </div>
      </section>
    );
  };
  
export default Experience;