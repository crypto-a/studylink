// src/pages/Dashboard.tsx
import React from 'react';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { userRole, isSubscribed } = useAuth();

  return (
    <section className="py-12 bg-amber-50 min-h-[60vh]">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-amber-900 mb-6 text-center">Dashboard</h2>
        <p className="text-lg text-amber-800 mb-4">
          Welcome to your Dashboard, <strong>{userRole || 'Guest'}</strong>!
        </p>
        {isSubscribed ? (
          <div className="text-amber-800">
            <p>You have an active subscription. Enjoy your exclusive features!</p>
            {/* Example semi-functional options */}
            <ul className="list-disc ml-5 mt-4">
              <li>Exclusive job listing aggregator</li>
              <li>Personalized recommendations</li>
              <li>Advanced search filters</li>
            </ul>
          </div>
        ) : (
          <p className="text-amber-800">
            You currently do <strong>not</strong> have a subscription. Some features may be locked.
          </p>
        )}
      </div>
    </section>
  );
};

export default Dashboard;
