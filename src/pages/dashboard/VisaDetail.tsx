import React from "react";
import { useParams } from "react-router-dom";
import { visaInfo } from "../../../seed/seed";

const VisaDetail = () => {
  const { id } = useParams<{ id: string }>();
  const resource = visaInfo.find((info) => info.id.toString() === id);

  if (!resource) {
    return <div className="p-4">Resource not found.</div>;
  }

  return (
    <section className="py-12 bg-amber-50 min-h-[60vh]">
      <div className="max-w-4xl mx-auto px-4 bg-white rounded-lg shadow p-6">
        <h1 className="text-3xl font-bold text-amber-900 mb-4">
          {resource.title}
        </h1>
        <p className="text-amber-700 mb-6">{resource.description}</p>

        {/* Example "blog-like" content */}
        <div className="text-amber-800 mb-4 space-y-4">
          <p>
            Here is a more comprehensive overview of the process for {resource.title}.
            You could include step-by-step guidance, personal tips, or Q&A
            sections. This is your chance to provide an in-depth article or blog
            post.
          </p>
          <p>
            Add images, bullet points, or headings to make it easier to read.
            For instance, break down required documents, timelines, and
            frequently asked questions about the visa process.
          </p>
        </div>

        {/* External link, if needed */}
        <a
          href={resource.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-amber-600 text-white font-bold py-2 px-4 rounded hover:bg-amber-700 transition duration-300"
        >
          Official Link
        </a>
      </div>
    </section>
  );
};

export default VisaDetail;
