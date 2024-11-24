import React, { useState } from 'react';

function Design() {
  const [activeDescription, setActiveDescription] = useState(null);

  const toggleDescription = (index) => {
    setActiveDescription(activeDescription === index ? null : index);
  };

  const diagrams = [
    {
      title: "System Architecture",
      description: "This diagram illustrates the overall system architecture of WanderSync, showcasing how different components interact to provide a seamless travel planning experience.",
      image: "/domainmodel.png?height=400&width=600&text=Domain Model"
    },
    {
      title: "Data Flow",
      description: "The data flow diagram demonstrates how information moves through WanderSync, from user input to storage and retrieval, ensuring efficient data management.",
      image: "/bigdcd.png?height=400&width=600&text=Design Class Diagram"
    },
    {
      title: "Class Diagram",
      description: "Our class diagram outlines the structure of WanderSync's object-oriented design, showing the relationships between key classes such as User, Itinerary, and TravelActivity.",
      image: "/SDfordcd.png?height=400&width=600&text=Sequence Diagram 1"
    },
    {
      title: "Sequence Diagram",
      description: "This sequence diagram visualizes the interactions between different objects in WanderSync during a typical user session, helping to understand the system's behavior over time.",
      image: "/othersd.png?height=400&width=600&text=Sequence Diagram 2"
    }
  ];

  return (
    <div className="flex flex-col space-y-8">
      <h2 className="text-3xl font-bold text-blue-600">Design & Architecture</h2>
      <div className="rounded-lg shadow-md p-6 bg-indigo-200">
        <h3 className="text-xl font-semibold mb-4 ">Architectural Overview</h3>
        <p className="mb-4">
          WanderSync is built on a modern, scalable architecture that leverages microservices and cloud technologies to ensure high performance and reliability.
        </p>
        <p>
          Our system is designed with a focus on modularity, allowing for easy updates and feature additions without disrupting the core functionality.
        </p>
      </div>
      <div className="rounded-lg shadow-md p-6 bg-indigo-200">
        <h3 className="text-xl font-semibold mb-4">Key Design Patterns</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Model-View-Controller (MVC) for clear separation of concerns</li>
          <li>Observer pattern for real-time updates across collaborators</li>
          <li>Factory method for flexible itinerary item creation</li>
          <li>Strategy pattern for customizable travel planning algorithms</li>
        </ul>
      </div>
      {diagrams.map((diagram, index) => (
        <div key={index} className="flex">
          <div className="relative flex-shrink-0">
            <div className="p-4 rounded-lg shadow-inner w-full max-w-2xl bg-indigo-200">
              <img 
                src={diagram.image}
                alt={diagram.title}
                className="w-full h-auto rounded transition-transform duration-300 hover:scale-105 cursor-pointer"
                onClick={() => toggleDescription(index)}
              />
            </div>
            <div 
              className={`absolute top-0 left-full ml-4 p-4 rounded-lg shadow-md transition-all duration-300 ease-in-out bg-indigo-200 ${
                activeDescription === index ? 'opacity-100 translate-x-50' : 'opacity-0 -translate-x-full pointer-events-none'
              }`}
              style={{ width: '300px' }}
            >
              <h4 className="text-lg font-semibold mb-2">{diagram.title}</h4>
              <p>{diagram.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Design;