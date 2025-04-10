const ExperienceCard = ({ company, position, period, technologies, responsibilities }) => {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex flex-col md:flex-row justify-between mb-4">
          <div>
            <h3 className="text-xl font-semibold">{position}</h3>
            <p className="text-blue-600 font-medium">{company}</p>
          </div>
          <div className="text-gray-500 mt-2 md:mt-0">{period}</div>
        </div>
        <div className="mb-4">
          <p className="font-medium text-gray-700 mb-2">Technologies:</p>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span key={index} className="px-2 py-1 bg-gray-200 rounded-md text-sm text-gray-700">{tech}</span>
            ))}
          </div>
        </div>
        <div>
          <p className="font-medium text-gray-700 mb-2">Responsibilities:</p>
          <ul className="list-disc pl-5 space-y-1 text-gray-600">
            {responsibilities.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

export default ExperienceCard;  