// components/ResumePage.tsx

import React from "react";

const ResumePage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-2 flex flex-col">
      <span>*download for better quality</span>
      <div className="mb-2 flex justify-end">
        <a
          href="/Masud_Hossen_Resume.pdf"
          download
          className="bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600"
        >
          Download Resume
        </a>
      </div>
      <div className="flex-1 border md:ml-32 border-gray-100 rounded-lg overflow-hidden">
        <iframe
          src="/Masud_Hossen_Resume.svg#toolbar=0"
          className="w-full sm:w-full h-screen sm:h-screen bg-transparent"
          title="Resume Preview"
          style={{ background: "transparent" }}
        ></iframe>
      </div>
    </div>
  );
};

export default ResumePage;
