// src/components/home/TestimonialsSection.tsx
import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Alice Wang',
      university: 'University of Toronto',
      quote:
        'StudyLink Canada made finding a job on campus so easy! The community forum was super helpful for adjusting to life in Canada.',
      avatar: 'https://i.pravatar.cc/100?img=1',
    },
    {
      name: 'Brian Kim',
      university: 'University of Alberta',
      quote:
        'Their visa and immigration guides are a lifesaver! Highly recommend the premium counseling sessions for resume reviews.',
      avatar: 'https://i.pravatar.cc/100?img=3',
    },
    {
      name: 'Sara Smith',
      university: 'McGill University',
      quote:
        'Housing section helped me find great roommates. The entire platform feels like a big supportive community.',
      avatar: 'https://i.pravatar.cc/100?img=5',
    },
  ];

  return (
    <section className="bg-amber-100 py-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-amber-900 mb-8">
          What Our Students Say
        </h2>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="flex justify-center mb-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-16 h-16 rounded-full border-2 border-amber-600"
                />
              </div>
              <p className="text-amber-800 italic mb-4">"{t.quote}"</p>
              <h4 className="font-bold text-amber-900">{t.name}</h4>
              <p className="text-amber-600 text-sm">{t.university}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
