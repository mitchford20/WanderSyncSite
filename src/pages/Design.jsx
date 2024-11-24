import React, { useState } from 'react';

function Design() {
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

  const toggleDescription = () => {
    setIsDescriptionVisible(!isDescriptionVisible);
  };

  return (
    <div className="flex flex-col space-y-8">
      <h2 className="text-3xl font-bold text-blue-600">Design & Architecture</h2>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4">Architectural Overview</h3>
        <p className="mb-4">
          WanderSync is built on a modern, scalable architecture that leverages microservices and cloud technologies to ensure high performance and reliability.
        </p>
        <p>
          Our system is designed with a focus on modularity, allowing for easy updates and feature additions without disrupting the core functionality.
        </p>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4">Key Design Patterns</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Model-View-Controller (MVC) for clear separation of concerns</li>
          <li>Observer pattern for real-time updates across collaborators</li>
          <li>Factory method for flexible itinerary item creation</li>
          <li>Strategy pattern for customizable travel planning algorithms</li>
        </ul>
      </div>
      <div className="flex">
        <div className="relative flex-shrink-0">
          <div className="bg-gray-100 p-4 rounded-lg shadow-inner w-full max-w-2xl">
            <img 
              src="/domainmodel.png?height=400&width=600" 
              alt="UML Diagram" 
              className="w-full h-auto rounded transition-transform duration-300 hover:scale-105 cursor-pointer"
              onClick={toggleDescription}
            />
          </div>
          <div 
            className={`absolute top-0 left-full ml-4 bg-white p-4 rounded-lg shadow-md transition-all duration-300 ease-in-out ${
              isDescriptionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full pointer-events-none'
            }`}
            style={{ width: '300px' }}
          >
            <h4 className="text-lg font-semibold mb-2">UML Diagram Description</h4>
            <p>
              This UML diagram illustrates the core components of WanderSync's architecture. It showcases the relationships between key classes such as User, Itinerary, TravelActivity, and Collaboration. The diagram helps visualize how these components interact to provide a seamless travel planning experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Design;

