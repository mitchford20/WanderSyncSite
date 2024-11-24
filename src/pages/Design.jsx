import React from 'react';

function Design() {
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
      <div className="bg-gray-100 p-4 rounded-lg shadow-inner">
        <img src="/placeholder.svg?height=400&width=600" alt="UML Diagram" className="mx-auto rounded transition-transform duration-300 hover:scale-105" />
      </div>
    </div>
  );
}

export default Design;
