import React, { useState } from 'react';

function Design() {
  const [activeDescription, setActiveDescription] = useState(null);

  const toggleDescription = (index) => {
    setActiveDescription(activeDescription === index ? null : index);
  };

  const diagrams = [
    {
      title: "Domain Model",
      description: "This diagram was made in the earlier stages of developing the application, playing a key role in helping our group visualize connections between classes at a core level.",
      image: "./domainmodel.png?height=400&width=600&text=Domain Model"
    },
    {
      title: "Design Class Diagram",
      description: "This diagram essentially offers a detailed overlook of our app's development, displaying how all classes, except activities, connect with each other that allow WanderSync to function smoothly. If you take a closer look, you'll notice what methods and variables in particular are shared between each classes.",
      image: "./bigdcd.png?height=400&width=600&text=Design Class Diagram"
    },
    {
      title: "Sequence Diagram #1",
      description: "This sequence diagram shows a use case for a given user's experience in logging in their travels and destination. At the bottom of the of the diagram, you can see the two possible outcomes of attempting to log destinations, which are based on a number of factors.",
      image: "./SDfordcd.png?height=400&width=600&text=Sequence Diagram 1"
    },
    {
      title: "Sequence Diagram #2",
      description: "The second, simpler sequence diagram presents the process a user goes through in logging into WanderSync, with two possible outcomes that determine if the user logs in successfully, or receives an error message.",
      image: "./othersd.png?height=400&width=600&text=Sequence Diagram 2"
    }
  ];

  return (
    <div className="flex flex-col space-y-8">
      <h2 className="text-3xl font-bold text-blue-600">Design & Architecture</h2>
      <div className="rounded-lg shadow-md p-6 bg-indigo-200">
        <h3 className="text-xl font-semibold mb-4 ">Architectural Overview</h3>
        <p className="mb-4">
          Model-View-ViewModel(MVVM) architecture is the backbone of this app's development. Model classes include the categorization of the menu, such as destination and accommodation, whereas View includes the activities and the ViewModel holds database management and other backend components that connect the View and Model together. 
        </p>
        <p className="mb-4">
        The application utilizes the Strategy, Observer, and Singleton design patterns to enhance flexibility and maintainability. The Strategy Pattern allows WanderSync to switch between different algorithms for sorting travel destinations, the Observer Pattern enables real-time updates across user interfaces when itinerary data changes, and the Singleton Pattern ensures a single instance of the database manager is used throughout the app.
        </p>
        <p className="mb-4">
        WanderSync adheres to SOLID GRASP principles by ensuring high cohesion and low coupling. High cohesion is achieved by having each module focus on a single responsibility, and low coupling is maintained by minimizing dependencies between modules, allowing for easier maintenance and scalability.
        </p>
      </div>
      <div className="rounded-lg shadow-md p-6 bg-indigo-200">
        <h3 className="text-xl font-semibold mb-4">Key Design Components</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Domain Model - Facilitated planning</li>
          <li>Design Class Diagram(DCD) - Displays all connections between essential classes and functionalities</li>
          <li>Sequence Diagram #1 - Use case for users logging destinations</li>
          <li>Sequence Diagram #2 - Use case for users' login</li>
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