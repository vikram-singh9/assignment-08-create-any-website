import Section from "./Components/Section";
import Section2 from "./Components/Section2";
import About from "./Components/About";
import Feedback from "./Components/Feedback";
import Footer from "./Components/Footer";


export default function Home() {
  return (
    <div className="relative h-screen bg-gray-900">
      {/* Video Background */}
      <video
        src="/videos/samplee.mp4"
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Navbar Overlay */}
      <nav className="absolute top-0 left-0 w-full bg-opacity-50 text-white">
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          {/* Logo */}
          <div className="text-xl font-bold text-yellow-400">Pinnacle Estates</div>

          {/* Links */}
          <div className="flex space-x-6">
            <a href="#" className="hover:text-gray-300">
              Home
            </a>
            <a href="#" className="hover:text-gray-300">
              Listings
            </a>
            <a href="#" className="hover:text-gray-300">
              Booking
            </a>
            <a href="#" className="hover:text-gray-300">
              About
            </a>
          </div>
            
          {/* Input Field */}
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-300 bg-white"
          />
        </div>
      </nav>

      {/* Content Below Navbar */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6 lg:px-12">
  <h1 className="text-white text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-md">
    The <span className="text-blue-500">#1</span> Trusted Platform for 
    <span className="block text-yellow-400 mt-2">Real Estate Professionals</span>
  </h1>
  <p className="text-gray-200 mt-6 text-lg lg:text-xl max-w-3xl drop-shadow-sm">
    Empowering agents and brokers across the globe to find their next big deal. With cutting-edge tools, verified listings, and trusted insights, we help you make the right moves in the property market.
  </p>
  <button className="mt-8 px-6 py-3 text-lg lg:text-xl font-semibold text-black bg-yellow-400 rounded-lg hover:bg-yellow-500 transition-shadow shadow-lg hover:shadow-xl">
    Get Started Today
  </button>
</div>

      
      

      <Section/>
      <Section2/>
      <About/>
      <Feedback/>
      <Footer/>


      
    </div>
  );
}
