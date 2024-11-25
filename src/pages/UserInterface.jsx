import React, { useEffect, useRef } from 'react';

function UserInterface() {
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('scale-110');
            entry.target.nextElementSibling.classList.add('translate-x-8');
          } else {
            entry.target.classList.remove('scale-110');
            entry.target.nextElementSibling.classList.remove('translate-x-8');
          }
        });
      },
      { threshold: 0.7 }
    );

    const images = document.querySelectorAll('.ui-image-container');
    images.forEach((img) => observerRef.current.observe(img));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const uiFeatures = [
    { title: "Dashboard", description: "Centralized view of all your travel plans and activities.", imageName: "arish.png" },
    { title: "Itinerary Planner", description: "Drag-and-drop interface for easy trip scheduling.", imageName: "muneeb.png" },
    { title: "Collaboration Tools", description: "Real-time editing and commenting for group trips.", imageName: "rafay.png" },
    { title: "Budget Tracker", description: "Visual breakdown of expenses and spending limits.", imageName: "mitch.png" },
    { title: "Map Integration", description: "Interactive maps with points of interest and routes.", imageName: "rayan.png" },
    { title: "Mobile Responsiveness", description: "Seamless experience across devices of all sizes.", imageName: "saibalaji.png" }
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-blue-600">User Interface</h2>
      <p className="text-lg rounded-lg shadow-md p-6 bg-indigo-200">
        WanderSync's user interface is user-friendly and simple to navigate through, allowing all users to make and organize their travel plans with no difficulty whatsoever.
      </p>
      <div className="space-y-16">
        {uiFeatures.map((feature, index) => (
          <div key={index} className="flex items-center justify-center space-x-8">
            <div className="w-1/2 flex justify-end">
              <div className="ui-image-container w-[400px] h-[600px] rounded-lg shadow-lg overflow-hidden transition-transform duration-500 ease-in-out">
                <img
                  src={`./${feature.imageName}?height=300&width=400&text=${feature.imageName}`}
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="w-1/2 flex justify-start">
              <div className="bg-indigo-200 rounded-lg shadow-md p-6 transition-transform duration-500 ease-in-out max-w-md">
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserInterface;