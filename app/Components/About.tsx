export default function About() {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8 px-4">
          {/* Left Image Section */}
          <div className="lg:w-1/2">
            <img
              src="/images/img10.webp" // Replace with your image URL
              alt="About Qaiba"
              className="rounded-lg shadow-lg object-cover w-full"
            />
          </div>
  
          {/* Right Text Section */}
          <div className="lg:w-1/2">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Pinnacle Estates</h1>
            <p className="text-lg text-gray-600 mb-6">
            Welcome to Pinnacle Estates, your trusted partner in finding the perfect property. With years of experience in the real estate market, we specialize in connecting buyers and sellers to exceptional homes, offices, and investment opportunities. Whether you're looking for a modern villa, a cozy apartment, or a spacious farmhouse, our dedicated team is committed to offering personalized solutions that meet your needs. We believe in building lasting relationships, offering expert guidance, and making your real estate journey as seamless as possible. Explore with us today and find your dream property!
            </p>
            <button className="bg-indigo-500 text-white py-3 px-6 rounded-lg text-lg font-semibold shadow-md hover:bg-indigo-600 transition">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    );
  }
  