import React from 'react';

function Conclusions() {
  return (
    <div className="flex flex-col space-y-8">
      <h2 className="text-3xl font-bold text-blue-600">Conclusions and Reflections</h2>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4">Project Outcomes</h3>
        <p className="mb-4">
          WanderSync has successfully delivered a robust and user-friendly travel management system that addresses the needs of both solo travelers and groups. Our platform streamlines the planning process and enhances the overall travel experience.
        </p>
        <p>
          Key achievements include real-time collaboration features, integration with popular travel services, and a highly intuitive user interface that has received positive feedback from our beta testers.
        </p>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4">Challenges and Learnings</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Overcoming real-time synchronization issues in collaborative planning</li>
          <li>Balancing feature richness with simplicity in the user interface</li>
          <li>Integrating multiple third-party APIs for a comprehensive travel service</li>
          <li>Ensuring data privacy and security across all aspects of the application</li>
        </ul>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4">Future Directions</h3>
        <p>
          Moving forward, we plan to expand WanderSync's capabilities by incorporating AI-driven travel recommendations, enhancing offline functionality, and developing mobile applications for iOS and Android platforms.
        </p>
      </div>
    </div>
  );
}

export default Conclusions;
