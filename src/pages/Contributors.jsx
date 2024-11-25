import React, { useState } from 'react';

function Contributors() {
  const [expandedContributor, setExpandedContributor] = useState(null);

  const contributors = [
    { 
      name: 'Rafay Hadi', 
      role: 'Project Lead/ Backend Lead', 
      image: './rafay.png',
      bio: 'Rafay always made sure that the team members stayed intact with their due assignments and is responsible for leading the development the backend, including Firebase.'
    },
    { 
      name: 'Arish Virani', 
      role: 'Backend Developer', 
      image: './arish.png?height=150&width=150&text=BS',
      bio: 'Arish made significant contributions to WanderSync, especially in the backend and making the necessary submissions for each sprint throughout the semester.'
    },
    { 
      name: 'Muneeb Ali Asif', 
      role: 'Frontend Lead', 
      image: './muneeb.png?height=150&width=150&text=CW',
      bio: 'Muneeb held the leading role for the eye-pleasing UI of WanderSync. He made the decisions to take extra steps in making sure that the app actually looks good.'
    },
    { 
      name: 'SaiBalaji Nagarajan', 
      role: 'Frontend Developer / SCRUM Master', 
      image: './saibalaji.png?height=150&width=150&text=DB',
      bio: 'Sai not only contributed heavily to the frontend, but also played a key role in communication. He also dealt with other issues in WanderSync outside of frontend.'
    },
    { 
      name: 'Mitchell Ford', 
      role: 'Fullstack Developer / Website Lead :)', 
      image: './mitch.png',
      bio: 'Mitch remained consistent in developing both the frontend and backend of WanderSync. He also contributed to the making of diagrams and led the development of this very website.'
    },
    { 
      name: 'Rayan Castilla Zouine', 
      role: 'Frontend Developer / Website developer', 
      image: './rayan.png',
      bio: 'Rayan laid out base components for the frontend of WanderSync and made large contributions with Mitch in the making of all diagrams. He also contributed largely to this website'
    },
  ];

  const handleContributorClick = (index) => {
    setExpandedContributor(expandedContributor === index ? null : index);
  };

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-blue-600">Contributors</h2>
      <p className="text-lg rounded-lg shadow-md p-6 bg-indigo-200">
        WanderSync was brought to life by a group of six second-year CS students at Georgia Tech. Each member played a crucial role in making this project a success. Click on a team member to learn more about their contribution.
      </p>
      <p className="text-lg rounded-lg shadow-md p-6 bg-indigo-200">
        All team members listed contributed each to one website page :)
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {contributors.map((contributor, index) => (
          <div 
            key={contributor.name} 
            className={`rounded-lg shadow-md p-6 flex flex-col items-center transition-all duration-300 ease-in-out cursor-pointer bg-indigo-200
                        ${expandedContributor === index ? 'col-span-1 md:col-span-2 lg:col-span-3 scale-105' : 'hover:scale-105'}`}
            onClick={() => handleContributorClick(index)}
          >
            <img src={contributor.image} alt={contributor.name} className="w-32 h-32 rounded-full mb-4" />
            <h3 className="text-xl font-semibold">{contributor.name}</h3>
            <p className="text-gray-600">{contributor.role}</p>
            <p className={`mt-4 text-gray-700 text-center transition-all duration-300 ease-in-out overflow-hidden
                          ${expandedContributor === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
              {contributor.bio}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contributors;