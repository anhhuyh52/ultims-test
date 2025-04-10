import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
    const projects = [
      {
        title: "123RF",
        description: "A digital media marketplace for stock photography, videos, music and more",
        technologies: ["ReactJS", "NextJS", "Redux", "Tailwind", "Laravel", "Express", "AWS"],
        image: "/api/placeholder/400/240"
      },
      {
        title: "RakuRaku",
        description: "Integration and conversion of Android business to Angular application",
        technologies: ["ReactJS", "Java", "Kotlin"],
        image: "/api/placeholder/400/240"
      },
      {
        title: "Cybord Scheduler",
        description: "A task scheduling and management application with Power BI integration",
        technologies: ["Python", "Node.JS", "ReactJS", "NextJS", "Redux", "Webpack", "SCSS"],
        image: "/api/placeholder/400/240"
      },
      {
        title: "Hello My Ticket",
        description: "Ticket management platform with advanced search capabilities",
        technologies: ["ReactJS", "NextJS", "Redux", "Tailwind", "NestJS", "ElasticSearch", "AWS"],
        image: "/api/placeholder/400/240"
      }
    ];
  
    return (
      <section id="projects" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>
    );
};

export default Projects;
