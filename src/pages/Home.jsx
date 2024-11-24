import React from 'react';

function Home() {
  return (
    <div className="flex flex-col space-y-8 items-center ">
      <h1 className="text-4xl font-bold text-blue-600">WanderSync: A Collaborative Travel Management System</h1>
      <div className="rounded-lg shadow-md p-6 max-w-3xl bg-indigo-200">
        <p className="text-lg mb-4">
          Welcome to WanderSync, an innovative solution designed to streamline the process of creating and managing travel itineraries for both solo and group travel.
        </p>
        <p className="mb-4">
          WanderSync revolutionizes the way you plan and experience your journeys. Our platform offers intuitive tools for itinerary creation, real-time collaboration with travel companions, and seamless integration with popular travel services.
        </p>
        <p>
          Whether you're a solo adventurer or planning a group getaway, WanderSync provides the perfect balance of flexibility and organization to make your travel dreams a reality.
        </p>
      </div>
      <img src="./wander.png" alt="WanderSync App Screenshot" className="rounded-lg shadow-md transition-transform duration-300 hover:scale-105" />
    </div>
  );
}

export default Home;
