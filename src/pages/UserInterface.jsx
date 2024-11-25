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
    { title: "Login Page", description: "Among the first pages that the users see to either enter their login info or to create an account.", imageName: "loginpage.png" },
    { title: "Logistics Page", description: "This page displays the vital logistics that allows the user to visualize their trip days. Moreover, they can invite contributors and add notes. ", imageName: "logisticspage.png" },
    { title: "Destinations Page", description: "This page is the most crucial, allowing users to log their travels onto their agenda, with calculation vacation time being installed.", imageName: "destinationspage.png" },
    { title: "Dining Establishments Page", description: "This page displays the dining options and restaurants that users can find in the destination they wish to go to.", imageName: "diningestablishments.png" },
    { title: "Accommodations Page", description: "The accommodations page will allow the user to go more into detail with their travel plans, placing check-in and check-out dates along with hotel bookings.", imageName: "accommodations.png" },
    { title: "Travel Communities Page", description: "This is our social media aspect of our page, in which users can form communities in our application, whether with friend groups or strangers, to plan out travels with others.", imageName: "travelcommunity.png" }
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