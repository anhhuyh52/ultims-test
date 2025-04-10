
const SkillCategory = ({ title, skills, icon }) => {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 h-full">
        <div className="flex items-center mb-4">
          {icon}
          <h3 className="text-xl font-semibold ml-2">{title}</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span key={index} className="px-3 py-2 bg-gray-100 rounded-md text-gray-700 hover:bg-blue-100 transition-colors">
              {skill}
            </span>
          ))}
        </div>
      </div>
    );
  };
  
  export default SkillCategory;