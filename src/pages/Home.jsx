import React from 'react';

function Home() {
  return (
    <div className="flex flex-col space-y-8 items-center ">
      <h1 className="text-4xl font-bold text-blue-600">WanderSync: A Collaborative Travel Management System</h1>
      <div className="rounded-lg shadow-md p-6 max-w-3xl bg-indigo-200">
        <p className="text-lg mb-4">
          Welcome to WanderSync, your easy-to-use tool for planning and managing trips. Whether you're traveling alone or with a group, WanderSync helps you create and organize your travel plans.
        </p>
        <p className="mb-4">
          From choosing destinations to booking accommodations and making dining reservations, WanderSync makes the whole process simple and enjoyable
        </p>
        <p>
          Our goal is to empower travelers to focus more on the excitement of their journey and less on the logistical challenges.
        </p>
      </div>
      <img src="./wander.png" alt="WanderSync App Screenshot" className="rounded-lg shadow-md transition-transform duration-300 hover:scale-105" />
    </div>
  );
}

export default Home;
