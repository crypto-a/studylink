// src/components/home/VideoSection.tsx
import React from 'react';

const VideoSection = () => {
  return (
    <section className="bg-amber-50 py-12">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-amber-900 mb-6">
          See How It Works
        </h2>
        <p className="text-amber-800 mb-8">
          A quick walkthrough of our platform and how it helps international students connect, find jobs, and get reliable visa info.
        </p>

        <div className="relative pb-[56.25%] h-0 overflow-hidden shadow-xl rounded-lg">
          {/* Replace src with your actual video link or embed code */}
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/ScMzIvxBSi4"
            title="Platform Demo Video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
