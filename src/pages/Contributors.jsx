import React, { useState } from 'react';

function Contributors() {
  const [expandedContributor, setExpandedContributor] = useState(null);

  const contributors = [
    { 
      name: 'Rafay Hadi', 
      role: 'Project Lead/ Backend Lead', 
      image: './rafay.png',
      bio: 'Alice has over 10 years of experience in project management and has led numerous successful software development projects.'
    },
    { 
      name: 'Arish Virani', 
      role: 'Backend Developer', 
      image: './arish.png?height=150&width=150&text=BS',
      bio: 'Bob is an expert in scalable backend architectures and has contributed significantly to WanderSyncs robust server infrastructure.'
    },
    { 
      name: 'Muneeb Ali Asif', 
      role: 'Frontend Lead', 
      image: './muneeb.png?height=150&width=150&text=CW',
      bio: 'Carols keen eye for design and user experience has been instrumental in creating WanderSyncs intuitive and visually appealing interface.'
    },
    { 
      name: 'SaiBalaji Nagarajan', 
      role: 'Frontend Developer/ SCRUM Master', 
      image: './saibalaji.png?height=150&width=150&text=DB',
      bio: 'Davids expertise in modern frontend frameworks has enabled WanderSync to deliver a smooth and responsive user experience.'
    },
    { 
      name: 'Mitchell Ford', 
      role: 'Fullstack Developer/ Website Lead :)', 
      image: './mitch.png',
      bio: 'Evas meticulous approach to quality assurance has ensured that WanderSync maintains high standards of reliability and performance.'
    },
    { 
      name: 'Rayan Castilla Zouine', 
      role: 'Frontend Developer/ Website Lead :)', 
      image: './rayan.png',
      bio: 'Franks skills in DevOps have streamlined WanderSyncs development pipeline and improved overall system stability.'
    },
  ];

  const handleContributorClick = (index) => {
    setExpandedContributor(expandedContributor === index ? null : index);
  };

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-blue-600">Contributors</h2>
      <p className="text-lg rounded-lg shadow-md p-6 bg-indigo-200">
        WanderSync was brought to life by a talented and dedicated team of professionals. Each member played a crucial role in making this project a success. Click on a team member to learn more about their contribution.
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