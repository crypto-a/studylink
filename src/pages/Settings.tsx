// src/pages/Settings.tsx
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const Settings = () => {
  const { userRole, login, logout, isSubscribed, toggleSubscription } = useAuth();
  const [roleSelection, setRoleSelection] = useState(userRole || 'student'); 

  const handleLogin = () => {
    login(roleSelection as 'student' | 'jobPoster' | 'other'); 
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <section className="py-12 bg-amber-50 min-h-[60vh]">
      <div className="max-w-2xl mx-auto px-4 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-amber-900 mb-6 text-center">Settings</h2>
        <div className="mb-6">
          <label className="block text-amber-900 mb-2">Role</label>
          <select
            className="border border-amber-300 p-2 rounded w-full"
            value={roleSelection}
            onChange={(e) => setRoleSelection(e.target.value)}
          >
            <option value="student">Student</option>
            <option value="jobPoster">Job Poster</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="flex gap-4 mb-6">
          <button
            className="bg-amber-600 text-white font-bold py-2 px-4 rounded hover:bg-amber-700 transition duration-300"
            onClick={handleLogin}
          >
            {userRole ? 'Update Role' : 'Login with Role'}
          </button>
          <button
            className="bg-red-600 text-white font-bold py-2 px-4 rounded hover:bg-red-700 transition duration-300"
            onClick={handleLogout}
            disabled={!userRole}
          >
            Logout
          </button>
        </div>

        <div className="mb-6">
          <p className="text-amber-800 mb-2">
            Current Subscription: <strong>{isSubscribed ? 'Active' : 'Inactive'}</strong>
          </p>
          <button
            className="bg-amber-600 text-white font-bold py-2 px-4 rounded hover:bg-amber-700 transition duration-300"
            onClick={toggleSubscription}
          >
            {isSubscribed ? 'Cancel Subscription' : 'Subscribe'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Settings;
