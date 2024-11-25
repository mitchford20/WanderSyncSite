import React from 'react';

function Conclusions() {
  return (
    <div className="flex flex-col space-y-8">
      <h2 className="text-3xl font-bold text-blue-600">Conclusions and Reflections</h2>
      <div className="rounded-lg shadow-md p-6 bg-indigo-200">
        <h3 className="text-xl font-semibold mb-4">Project Outcomes</h3>
        <p className="mb-4">
          As a team we delivered WanderSync successfully as a robust and user-friendly travel management system that addresses the needs of both solo travelers and groups. Moreover, we hold details such as diagrams that allow others to see how this project was developed over the semester.
        </p>
      </div>
      <div className="rounded-lg shadow-md p-6 bg-indigo-200">
        <h3 className="text-xl font-semibold mb-4">Challenges and Learnings</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Dealing with last-minute issues like branch and git difficulties that were not directly related to the application's functionalities. This allowed our team to gain a deeper understanding of git workflow and team cooperation.</li>
          <li>Firebase management issues that led to difficulties in connecting Model and View components.</li>
          <li>Team communication and consistency troubles with sticking to roles that we first assigned prior to beginning each Sprint. These difficulties forced us into having stronger cooperation to reach the goals of this project.</li>
        </ul>
      </div>
      <div className="rounded-lg shadow-md p-6 bg-indigo-200">
        <h3 className="text-xl font-semibold mb-4">Future Directions</h3>
        <p>
          Moving forward, we plan to expand WanderSync's capabilities by enhancing offline functionality and developing WanderSync's mobile application for iOS.
        </p>
      </div>
    </div>
  );
}

export default Conclusions;
