import SkillCategory from "./SkillCategory";
import { Code, Server, Database, Layers } from "lucide-react";

const Skills = () => {
    return (
      <section id="skills" className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SkillCategory 
              title="Frontend Development" 
              icon={<Code className="text-blue-600" size={24} />}
              skills={["JavaScript", "HTML5", "CSS3", "ReactJS", "NextJS", "VueJS", "Redux", "Webpack", "Babel", "Tailwind CSS", "SCSS"]} 
            />
            <SkillCategory 
              title="Backend Development" 
              icon={<Server className="text-green-600" size={24} />}
              skills={["PHP", "NodeJS", "ExpressJS", "NestJS", "Laravel"]} 
            />
            <SkillCategory 
              title="Database & Tools" 
              icon={<Database className="text-purple-600" size={24} />}
              skills={["MySQL", "MongoDB", "ElasticSearch", "Github", "Gitlab", "AWS"]} 
            />
            <SkillCategory 
              title="Soft Skills" 
              icon={<Layers className="text-orange-600" size={24} />}
              skills={["Time-management", "Teamwork", "English Communication", "Problem Solving", "Client Collaboration"]} 
            />
          </div>
          
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-center mb-6">Education</h3>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex flex-col md:flex-row justify-between">
                <div>
                  <h4 className="text-xl font-semibold">Da Nang University Of Education</h4>
                  <p className="text-gray-700">Bachelor's Degree in Information Technology</p>
                  <p className="text-blue-600">GPA: 3.52/4.0</p>
                </div>
                <div className="text-gray-500 mt-2 md:mt-0">August 2018 - May 2023</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Skills;