const Footer = () => {
    return (
      <footer className="bg-black text-white py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between gap-8">
            {/* Left Column */}
            <div className="flex flex-col gap-4">
              <h1 className="text-2xl font-bold">Pinnacle Estates</h1>
              <p className="text-sm text-gray-400">
                Subscribe to our newsletter to receive our weekly feed.
              </p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your e-mail"
                  className="bg-gray-800 text-gray-300 text-sm p-3 flex-1 rounded-l-md focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-yellow-500 text-black font-medium text-sm px-6 py-3 rounded-r-md hover:bg-yellow-600"
                >
                  Send →
                </button>
              </form>
            </div>
  
            {/* Middle Links */}
            <div className="flex flex-col md:flex-row gap-8 text-sm">
              <div>
                <h4 className="font-semibold mb-2">Discover</h4>
                <ul className="space-y-1 text-gray-400">
                  <li>Karachi</li>
                  <li>Hyderabad</li>
                  <li>MirpurKhas</li>
                  <li>Umerkot</li>
                  <li>Lahore</li>
                  <li>Rawalpindi</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Quick Links</h4>
                <ul className="space-y-1 text-gray-400">
                  
                  <li>Contact</li>
                  <li>FAQs</li>
                  <li>Blog</li>
                  <li>Pricing Plans</li>
                  <li>Privacy Policy</li>
                  <li>Terms & Conditions</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Contact Us</h4>
                <p className="text-gray-400">bs2312075@gmail.com</p>
                <p className="text-gray-400">(+92) 3302185725</p>
                <p className="text-gray-400">
                  Tp2-Mehmoodabad Karachi <br />
                  
                </p>
              </div>
            </div>
  
            {/* Right Column */}
            <div className="flex flex-col gap-4">
              <h4 className="font-semibold">Get the app</h4>
              <div className="flex gap-4">
                <button className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-md text-sm">
                  Download it on <br />
                  <span className="font-bold text-white">Apple Store</span>
                </button>
                <button className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-md text-sm">
                  Get it on <br />
                  <span className="font-bold text-white">Google Play</span>
                </button>
              </div>
            </div>
          </div>
  
          {/* Footer Bottom */}
          <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between text-sm text-gray-400">
            <p>&copy; 2024 Pinnacle Estates</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white">
                Follow Us
              </a>
              <a href="#" className="hover:text-white">
                Twitter
              </a>
              <a href="#" className="hover:text-white">
                Facebook
              </a>
              <a href="#" className="hover:text-white">
                Instagram
              </a>
              <a href="#" className="hover:text-white">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  