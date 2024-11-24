import React, { useEffect, useRef } from 'react';

function UserInterface() {
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('scale-110');
          } else {
            entry.target.classList.remove('scale-110');
          }
        });
      },
      { threshold: 0.7 }
    );

    const images = document.querySelectorAll('.ui-image');
    images.forEach((img) => observerRef.current.observe(img));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-blue-600">User Interface</h2>
      <p className="text-lg bg-white rounded-lg shadow-md p-6 bg-indigo-200">
        WanderSync's user interface is designed with simplicity and efficiency in mind. Our intuitive layout and smooth interactions make travel planning a breeze for users of all experience levels.
      </p>
      <div className="space-y-16">
        {[1, 2, 3, 4].map((index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={`/placeholder.svg?height=400&width=600&text=UI Screenshot ${index}`}
              alt={`UI Screenshot ${index}`}
              className="ui-image rounded-lg shadow-lg transition-transform duration-500 ease-in-out"
            />
            <p className="mt-4 text-center text-gray-600">
              Description of UI feature {index}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserInterface;