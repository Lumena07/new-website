const Footer = () => {
    return (
      <footer className="bg-gray-900 text-gray-300">
        {/* Awards Section */}
        <div className="border-b border-gray-800">
          <div className="max-w-[2000px] mx-auto px-6 py-12">
            <div className="flex flex-wrap justify-center items-center gap-8">
              <img src="/api/placeholder/120/120" alt="Award 2023" className="h-24" />
              <img src="/api/placeholder/120/120" alt="Award 2022" className="h-24" />
              <img src="/api/placeholder/120/120" alt="Award 2021" className="h-24" />
              <img src="/api/placeholder/120/120" alt="Award 2020" className="h-24" />
            </div>
          </div>
        </div>
  
        {/* Main Footer Content */}
        <div className="max-w-[2000px] mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* About Us Column */}
            <div>
              <h3 className="text-white text-lg font-medium mb-6">About Us</h3>
              <ul className="space-y-4">
                <li><a href="#" className="hover:text-white transition-colors">About Auric Air</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Destinations</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Environmental Sustainability</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Our Fleet</a></li>
              </ul>
            </div>
  
            {/* Help Column */}
            <div>
              <h3 className="text-white text-lg font-medium mb-6">Help</h3>
              <ul className="space-y-4">
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Travel Updates</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Baggage Information</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Special Assistance</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms and Conditions</a></li>
              </ul>
            </div>
  
            {/* Services Column */}
            <div>
              <h3 className="text-white text-lg font-medium mb-6">Services</h3>
              <ul className="space-y-4">
                <li><a href="#" className="hover:text-white transition-colors">Book Flights</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Safari Packages</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Charter Services</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Check Flight Status</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Manage Booking</a></li>
              </ul>
            </div>
  
            {/* Connect Column */}
            <div>
              <h3 className="text-white text-lg font-medium mb-6">Stay Connected</h3>
  
              {/* Social Links */}
              <div>
                <p className="mb-4">Follow Us</p>
                <div className="flex gap-4">
                  <a href="#" className="hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z"/>
                    </svg>
                  </a>
                  <a href="#" className="hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"/>
                    </svg>
                  </a>
                  <a href="#" className="hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                    </svg>
                  </a>
                  <a href="#" className="hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        {/* Payment Methods */}
        <div className="border-t border-gray-800">
          <div className="max-w-[2000px] mx-auto px-6 py-8">
            <div className="flex flex-wrap justify-between items-center gap-8">
              <div className="flex items-center gap-4">
                <span>Pay securely with</span>
                <div className="flex gap-4">
                  <img src="/api/placeholder/40/25" alt="M-Pesa" className="h-6" />
                  <img src="/api/placeholder/40/25" alt="Airtel Money" className="h-6" />
                  <img src="/api/placeholder/40/25" alt="Tigo Pesa" className="h-6" />
                  <img src="/api/placeholder/40/25" alt="Visa" className="h-6" />
                  <img src="/api/placeholder/40/25" alt="Mastercard" className="h-6" />
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span>Member of</span>
                <div className="flex gap-4">
                  <img src="/api/placeholder/60/30" alt="ISSA" className="h-8" />
                  <img src="/api/placeholder/60/30" alt="APTA" className="h-8" />
                  <img src="/api/placeholder/60/30" alt="BARS" className="h-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
  
        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="max-w-[2000px] mx-auto px-6 py-4">
            <div className="flex flex-wrap justify-between items-center gap-4">
              <div className="flex flex-wrap gap-6 text-sm">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
                <a href="#" className="hover:text-white transition-colors">Legal</a>
                <a href="#" className="hover:text-white transition-colors">Accessibility</a>
                <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
              </div>
              <div className="text-sm">
                © {new Date().getFullYear()} Auric Air Services Limited. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;