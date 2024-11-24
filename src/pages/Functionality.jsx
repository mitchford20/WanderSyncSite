import React, { useRef, useEffect } from 'react';

function Functionality() {
  const videoContainerRef = useRef(null);

  useEffect(() => {
    const updateVideoHeight = () => {
      if (videoContainerRef.current) {
        const windowHeight = window.innerHeight;
        const containerTop = videoContainerRef.current.getBoundingClientRect().top;
        const newHeight = windowHeight - containerTop - 20; // 20px buffer for footer
        videoContainerRef.current.style.height = `${newHeight}px`;
      }
    };

    updateVideoHeight();
    window.addEventListener('resize', updateVideoHeight);

    return () => {
      window.removeEventListener('resize', updateVideoHeight);
    };
  }, []);

  return (
    <div className="flex flex-col h-full space-y-8">
      <h2 className="text-3xl font-bold text-blue-600">Functionality</h2>
      <p className="text-lg rounded-lg shadow-md p-6 bg-indigo-200">
        Experience the power of WanderSync through our comprehensive video demonstration. See how our features come together to create a seamless travel planning experience.
      </p>
      <div ref={videoContainerRef} className="flex-grow w-full max-w-6xl mx-auto rounded-lg overflow-hidden shadow-lg bg-indigo-200">
      <iframe
          src="https://www.youtube.com/embed/rWB6ZKm9t6A"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="WanderSync Functionality Demo"
          className="w-full h-full"
        ></iframe>
      </div>
    </div>
  );
}

export default Functionality;
