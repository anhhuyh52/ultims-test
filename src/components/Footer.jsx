import React from 'react';
import { Github, Linkedin } from 'lucide-react';
export const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="text-xl font-bold">Nguyen Anh Huy</span>
              <p className="text-gray-400 mt-1">© 2025 All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/huy-anh262125184/" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  };