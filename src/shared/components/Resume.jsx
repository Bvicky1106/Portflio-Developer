import React from "react";

function Resume() {
  const handleOpenPdf = () => {
    // Open the PDF in a new tab
    window.open("/bvr.pdf", "_blank");
  };

  return (
    <section
      id="resume"
      className="flex bg-dark-black flex-col lg:justify-center md:flex-row bg-primary px-5 py-16 md:py-24"
    >
      <div className="md:w-1/2 flex flex-col justify-center">
        <div className="text-center md:text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Resume</h1>
          <p className="text-white text-lg mb-6">
            View my resume and see my qualifications.
          </p>
          <div className="flex justify-center space-x-4">
            {/* Button to View Resume */}
            <button
              onClick={handleOpenPdf}
              className="px-6 py-3 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition duration-300"
            >
              View Resume
            </button>
            {/* Link to Download Resume */}
            <a
              href="/bvr.pdf"
              download
              className="px-6 py-3 rounded-full border border-white text-white hover:bg-gray-500 hover:text-white transition duration-300"
            >
              Download
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
  