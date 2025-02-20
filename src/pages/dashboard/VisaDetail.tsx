// src/pages/dashboard/VisaDetail.tsx
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { visaInfo } from "../../../seed/seed";
import { useAuth } from "../../context/AuthContext";
import { FaStar, FaThumbsUp, FaCommentAlt, FaLink } from "react-icons/fa";

const VisaDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { isSubscribed } = useAuth();
  const resource = visaInfo.find((info) => info.id.toString() === id);
  const [rating, setRating] = useState(resource?.rating.average || 0);
  const [likes, setLikes] = useState(resource?.rating.likes || 0);
  const [chatMessage, setChatMessage] = useState("");
  const [chatMessages, setChatMessages] = useState<string[]>([]);

  if (!resource) {
    return (
      <section className="py-12 bg-amber-50 min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-amber-900 mb-4">Resource Not Found</h2>
          <Link
            to="/dashboard/visa-info"
            className="text-amber-600 hover:underline"
          >
            Back to Visa Info
          </Link>
        </div>
      </section>
    );
  }

  const handleRating = (newRating: number) => {
    setRating(newRating);
    // In a real app, save to backend
  };

  const handleLike = () => {
    setLikes(likes + 1);
    // In a real app, save to backend
  };

  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (chatMessage.trim()) {
      setChatMessages([...chatMessages, chatMessage]);
      setChatMessage("");
      // Simulate chatbot response
      setTimeout(() => {
        setChatMessages((prev) => [...prev, `Hi! Thanks for your message. How can I assist with "${resource.title}"?`]);
      }, 1000);
    }
  };

  return (
    <section className="py-12 bg-amber-50 min-h-[60vh]">
      <div className="max-w-4xl mx-auto px-4">
        <Link
          to="/dashboard/visa-info"
          className="text-amber-600 hover:underline mb-4 inline-block flex items-center"
        >
          <FaLink className="mr-2" /> Back to Visa Info
        </Link>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-amber-900 mb-4">{resource.title}</h1>
          <p className="text-amber-700 mb-4 italic">{resource.description}</p>
          <div className="text-amber-800 mb-6 space-y-4">
            <p>{resource.content}</p>
          </div>

          {/* Rating and Likes */}
          <div className="flex items-center gap-6 mb-6">
            <div className="flex items-center">
              <span className="text-amber-900 mr-2">Rate:</span>
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar
                  key={star}
                  className={`cursor-pointer ${star <= rating ? "text-amber-600" : "text-gray-300"}`}
                  onClick={() => handleRating(star)}
                />
              ))}
              <span className="ml-2 text-amber-700">({rating.toFixed(1)})</span>
            </div>
            <button
              onClick={handleLike}
              className="flex items-center text-amber-600 hover:text-amber-700 transition duration-300"
            >
              <FaThumbsUp className="mr-2" /> Like ({likes})
            </button>
          </div>

          {/* Author Info */}
          <div className="border-t border-amber-300 pt-4 mb-6">
            <p className="text-amber-900 font-semibold">Author: {resource.author.name}</p>
            <p className="text-amber-700">Contact: <a href={`mailto:${resource.author.email}`} className="text-amber-600 hover:underline">{resource.author.email}</a></p>
          </div>

          {/* External Link */}
          <a
            href={resource.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-amber-600 text-white font-bold py-2 px-4 rounded hover:bg-amber-700 transition duration-300 mb-6"
          >
            <FaLink className="mr-2" /> Official Resource
          </a>

          {/* Premium Chat */}
          {isSubscribed && (
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-amber-900 mb-4">Chat with {resource.author.name}</h3>
              <div className="bg-amber-100 p-4 rounded-lg mb-4 max-h-64 overflow-y-auto">
                {chatMessages.map((msg, index) => (
                  <p key={index} className={`text-amber-800 mb-2 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                    {msg}
                  </p>
                ))}
              </div>
              <form onSubmit={handleChatSubmit} className="flex gap-2">
                <input
                  type="text"
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  className="flex-1 p-2 border border-amber-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-600"
                  placeholder="Type your message..."
                />
                <button
                  type="submit"
                  className="bg-amber-600 text-white font-bold py-2 px-4 rounded hover:bg-amber-700 transition duration-300 flex items-center"
                >
                  <FaCommentAlt className="mr-2" /> Send
                </button>
              </form>
            </div>
          )}
          {!isSubscribed && (
            <p className="text-amber-800 mt-4">
              <Link to="/pricing" className="text-amber-600 hover:underline">Subscribe</Link> to chat with authors!
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default VisaDetail;