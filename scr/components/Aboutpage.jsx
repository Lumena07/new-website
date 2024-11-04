import React, { useState } from 'react';
import { Calendar, ChevronDown, Menu, Search, User, X, Plane, FileText, CheckSquare, Package, Map, Star, Check } from 'lucide-react';
import Footer from './Footer';
import Header from './Header';

const AboutPage = () => {
    return (
      <div className="min-h-screen">
        <Header />
        {/* Hero Section */}
        <div className="relative h-[60vh] overflow-hidden">
          <img 
            src="/api/placeholder/2000/1000" 
            alt="Auric Air Safari Flight"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-6">
              <h1 className="text-white text-5xl font-light mb-4">About Auric Air</h1>
              <p className="text-white/90 text-xl max-w-2xl">
                Your gateway to unparalleled flying safari experiences in East Africa
              </p>
            </div>
          </div>
        </div>
  
        {/* Main Content */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              <div>
                <h2 className="text-4xl font-light mb-8">Wings of Safari & Adventure</h2>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
    Welcome to Auric Air Services Limited‚ your gateway to unparalleled aviation experiences in East Africa. With a legacy spanning over two decades‚ Auric Air Services Limited has established itself as a premier air charter and scheduled flight operator in the region.
  </p>
  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
    At Auric Air Services Limited‚ we understand that time is of the essence‚ and our commitment is to provide you with the most efficient‚ reliable‚ and comfortable air travel solutions. Whether you're embarking on a thrilling safari adventure‚ exploring remote destinations‚ or conducting vital business operations‚ our fleet of state-of-the-art aircraft and expert crew are dedicated to making your journey seamless and memorable.
  </p>
              </div>
              <div>
                <img 
                  src="/api/placeholder/800/600" 
                  alt="Auric Air Fleet"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
  
            {/* Key Features */}
            <div className="grid md:grid-cols-3 gap-12 mb-20">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-900/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Plane className="text-blue-900" size={32} />
                </div>
                <h3 className="text-xl font-medium mb-4">Scheduled Flights</h3>
                <p className="text-gray-600">
                  Regular connections to major safari destinations and regional hubs.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-900/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Map className="text-blue-900" size={32} />
                </div>
                <h3 className="text-xl font-medium mb-4">Safari Specialists</h3>
                <p className="text-gray-600">
                  Expert knowledge of East Africa's premier wildlife destinations.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-900/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Star className="text-blue-900" size={32} />
                </div>
                <h3 className="text-xl font-medium mb-4">Premium Service</h3>
                <p className="text-gray-600">
                  Personalized attention and commitment to your comfort.
                </p>
              </div>
            </div>
  
            {/* Experience Section */}
            <div className="bg-gray-50 rounded-2xl p-12">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
  <h2 className="text-3xl font-light mb-6">Our Experience</h2>
  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
    As a leader in aviation‚ we offer a wide range of services tailored to meet your unique needs. From charter flights that cater to your specific schedule and destinations‚ to scheduled flights that connect you to the most captivating and remote corners of East Africa‚ Auric Air provides unparalleled accessibility and flexibility. Our commitment to personalized service means that your comfort and convenience are at the forefront of everything we do.
  </p>
  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
    Safety being a culture‚ we adhere to the highest international standards to ensure your well-being throughout every flight. Our fleet consists of meticulously maintained aircraft‚ and our pilots undergo rigorous training‚ combining technical expertise with a deep knowledge of the local geography and weather conditions.
  </p>
  <ul className="space-y-4">
    <li className="flex items-center gap-3">
      <Check className="text-blue-900" size={24} />
      <span className="text-gray-600">Premier air charter and scheduled flight operator</span>
    </li>
    <li className="flex items-center gap-3">
      <Check className="text-blue-900" size={24} />
      <span className="text-gray-600">State-of-the-art aircraft fleet</span>
    </li>
    <li className="flex items-center gap-3">
      <Check className="text-blue-900" size={24} />
      <span className="text-gray-600">Highest safety standards</span>
    </li>
  </ul>
</div>
                <div className="grid grid-cols-2 gap-4">
                  <img 
                    src="/api/placeholder/400/300" 
                    alt="Safari Experience 1"
                    className="rounded-lg shadow-lg"
                  />
                  <img 
                    src="/api/placeholder/400/300" 
                    alt="Safari Experience 2"
                    className="rounded-lg shadow-lg mt-8"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
  
        {/* Call to Action */}
        <section className="bg-blue-900 text-white py-20">
  <div className="container mx-auto px-6 text-center">
    <h2 className="text-3xl font-light mb-8">Experience the Wonder of East Africa</h2>
    <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
      We invite you to embark on an extraordinary journey with Auric Air‚ where every flight is an opportunity to explore‚ discover‚ and create lasting memories. Welcome aboard – where dreams take flight.
    </p>
    <button className="bg-white text-blue-900 px-8 py-3 rounded-lg hover:bg-white/90 transition-colors">
      Book Your Flight
    </button>
  </div>
</section>
        <Footer />
      </div>
    );
  };
  
  export default AboutPage;