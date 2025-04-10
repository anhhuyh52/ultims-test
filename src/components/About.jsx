import { Briefcase, User, Mail, Phone, MapPin, Calendar, Github, Linkedin, Layers, Code, Server, Database } from 'lucide-react';

const About = () => {
    return (
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <div className="flex flex-col space-y-4">
                <div className="flex items-center">
                  <User className="mr-2 text-blue-600" />
                  <span>Nguyen Anh Huy</span>
                </div>
                <div className="flex items-center">
                  <Briefcase className="mr-2 text-blue-600" />
                  <span>Front-end Developer</span>
                </div>
                <div className="flex items-center">
                  <Mail className="mr-2 text-blue-600" />
                  <span>anhhuyd3v@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="mr-2 text-blue-600" />
                  <span>+84 829228150</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="mr-2 text-blue-600" />
                  <span>Date of Birth: 05/09/2000</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-2 text-blue-600" />
                  <span>Da Nang, Vietnam</span>
                </div>
              </div>
            </div>
            <div className="md:w-2/3 md:pl-8">
              <p className="text-gray-600 mb-4">
                I am a skilled full-stack developer with over 4 years of experience and a strong foundation in UI/UX design and web/app development principles. Passionate about continuously learning new programming languages and technologies, I strive to stay at the forefront of industry trends.
              </p>
              <p className="text-gray-600 mb-4">
                Known for being a collaborative team player, I enjoy assisting others and thrive in social and professional settings. My expertise spans across various technologies including ReactJS, NextJS, VueJS, and backend frameworks like ExpressJS and Laravel.
              </p>
              <p className="text-gray-600">
                I am currently seeking new opportunities to contribute my skills and grow further in my career as a developer.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  export default About;
  