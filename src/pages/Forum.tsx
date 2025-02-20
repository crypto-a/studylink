// src/pages/Forum.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

const initialPosts = [
  { id: 1, question: "How do I extend my study permit?", answers: ["Check the IRCC website for details."] },
  { id: 2, question: "Best part-time jobs for students?", answers: ["Try retail or food service."] },
];

const Forum = () => {
  const [posts, setPosts] = useState(initialPosts);
  const [newQuestion, setNewQuestion] = useState("");

  const handlePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (newQuestion.trim()) {
      setPosts([...posts, { id: posts.length + 1, question: newQuestion, answers: [] }]);
      setNewQuestion("");
    }
  };

  const handleAnswer = (postId: number, answer: string) => {
    setPosts(posts.map(post => 
      post.id === postId ? { ...post, answers: [...post.answers, answer] } : post
    ));
  };

  return (
    <section className="py-12 bg-amber-50 min-h-[60vh]">
      <div className="max-w-7xl mx-auto px-4">
        <Link
          to="/dashboard"
          className="text-amber-600 hover:underline mb-4 inline-block"
        >
          &larr; Back to Dashboard
        </Link>
        <h2 className="text-3xl font-bold text-amber-900 mb-6 text-center">Q&A Forum</h2>
        <p className="text-amber-800 mb-8 text-center">Ask questions and get answers from the community!</p>

        {/* Post a Question */}
        <form onSubmit={handlePost} className="mb-12 bg-white p-6 rounded-lg shadow-md">
          <textarea
            className="w-full p-2 border border-amber-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-600 mb-4"
            placeholder="Ask your question here..."
            value={newQuestion}
            onChange={(e) => setNewQuestion(e.target.value)}
            rows={4}
          />
          <button
            type="submit"
            className="bg-amber-600 text-white font-bold py-2 px-4 rounded hover:bg-amber-700 transition duration-300"
          >
            Post Question
          </button>
        </form>

        {/* Forum Posts */}
        <div className="space-y-8">
          {posts.map((post) => (
            <div key={post.id} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-amber-900 mb-2">{post.question}</h3>
              <div className="ml-4">
                {post.answers.map((answer, index) => (
                  <p key={index} className="text-amber-800 mb-1">- {answer}</p>
                ))}
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const answer = (e.target as any).answer.value;
                    if (answer.trim()) {
                      handleAnswer(post.id, answer);
                      (e.target as any).answer.value = "";
                    }
                  }}
                  className="mt-2"
                >
                  <input
                    type="text"
                    name="answer"
                    className="w-full p-2 border border-amber-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-600 mb-2"
                    placeholder="Your answer..."
                  />
                  <button
                    type="submit"
                    className="bg-amber-600 text-white font-bold py-1 px-3 rounded hover:bg-amber-700 transition duration-300"
                  >
                    Reply
                  </button>
                </form>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Forum;