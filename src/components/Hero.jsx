
export const Hero = () => {
    return (
      <div className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">Front-end Developer</h1>
              <p className="text-xl text-gray-300 mb-8">Building responsive, user-friendly web applications with modern technologies</p>
              <div className="flex space-x-4">
                <a href="#contact" className="px-6 py-3 bg-blue-600 rounded-md text-white font-medium hover:bg-blue-700 transition-colors">Contact Me</a>
                <a href="#experience" className="px-6 py-3 bg-gray-800 border border-gray-600 rounded-md text-white font-medium hover:bg-gray-700 transition-colors">View Experience</a>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-blue-500">
                <img src="/api/placeholder/256/256" alt="Nguyen Anh Huy" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default Hero;