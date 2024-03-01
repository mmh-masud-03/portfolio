// ResumePage.js

import React from "react";

const Resume = () => {
  return (
    <div className="container mx-auto px-4 py-2 flex flex-col">
      <div className="mb-2 flex justify-end">
        <a
          href="/Resume_1March.pdf"
          download
          className="bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600"
        >
          Download Resume
        </a>
      </div>
      <div className="flex-1 border border-gray-100 rounded-lg overflow-hidden">
        <iframe
          src="/Resume_1March.pdf#toolbar=0"
          className="w-full h-screen bg-transparent"
          title="Resume Preview"
          style={{ background: "transparent" }}
        ></iframe>
      </div>
    </div>
  );
};

export default Resume;
