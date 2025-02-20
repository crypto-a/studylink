// src/pages/dashboard/DashboardForum.tsx
import React, { useState } from "react";

const initialPosts = [
  {
    id: 1,
    question: "How do I extend my study permit?",
    answers: ["Check the IRCC website for details."],
  },
  {
    id: 2,
    question: "Best part-time jobs for students?",
    answers: ["Try retail or food service."],
  },
];

const DashboardForum = () => {
  const [posts, setPosts] = useState(initialPosts);
  const [newQuestion, setNewQuestion] = useState("");

  const handlePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (newQuestion.trim()) {
      setPosts([
        ...posts,
        { id: posts.length + 1, question: newQuestion, answers: [] },
      ]);
      setNewQuestion("");
    }
  };

  const handleAnswer = (postId: number, answer: string) => {
    setPosts(
      posts.map((post) =>
        post.id === postId
          ? { ...post, answers: [...post.answers, answer] }
          : post
      )
    );
  };

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-amber-900">Q&A Forum</h2>
      {/* Post a Question */}
      <form onSubmit={handlePost} className="bg-white p-6 rounded-lg shadow-md">
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
            <h3 className="text-xl font-semibold text-amber-900 mb-2">
              {post.question}
            </h3>
            <div className="ml-4">
              {post.answers.map((answer, index) => (
                <p key={index} className="text-amber-800 mb-1">
                  - {answer}
                </p>
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
  );
};

export default DashboardForum;
