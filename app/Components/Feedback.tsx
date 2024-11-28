
const TestimonialSection = () => {
    return (
      <div className="flex flex-col md:flex-row justify-between items-center bg-white p-6 md:p-12 my-16 rounded-lg shadow-lg max-w-5xl mx-auto">
        {/* Left Content */}
        <div className="flex-1 md:pr-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            What our customers are saying about us?
          </h2>
          <p className="text-sm text-gray-600 mb-6">
            Various versions have evolved over the years, sometimes by accident,
            sometimes on purpose.
          </p>
          <div className="text-lg font-semibold text-gray-800 space-y-2">
            <p>10m+ Happy People</p>
            <p>4.88 Overall Rating</p>
          </div>
        </div>
  
        {/* Right Content */}
        <div className="flex-1 text-center">
          <img
            src="/images/img7.webp"
            alt="Customer Profile"
            className="w-16 h-16 rounded-full mx-auto mb-4"
          />
          <h3 className="text-lg font-semibold text-gray-800">Cameron Williamson</h3>
          <p className="text-sm text-gray-600 mb-4">Designer</p>
          <p className="text-gray-700 italic mb-4">
            "Searches for multiplexes, property comparisons, and loan estimates. Works
            great."
          </p>
          <div className="text-2xl text-gray-400 mb-4">❝</div>
          <div className="flex justify-center gap-2">
            <button className="w-8 h-8 rounded-full bg-gray-300 hover:bg-gray-400 text-gray-800 flex items-center justify-center">
              &lt;
            </button>
            <button className="w-8 h-8 rounded-full bg-gray-300 hover:bg-gray-400 text-gray-800 flex items-center justify-center">
              &gt;
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default TestimonialSection;
  