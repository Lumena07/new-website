import React, { useState } from 'react';
import { Calendar, ChevronDown, Menu, Search, User, X, Plane, FileText, CheckSquare, Package } from 'lucide-react';
import Footer from './Footer';
import Header from './Header';
import zanzibar from '../assets/pictures/zanzibar.jpg';
import beach from '../assets/pictures/beach.jpg';
import bush from '../assets/pictures/bush.jpg';
import escape from '../assets/pictures/escape.jpg';
import kili from '../assets/pictures/kili.jpg';
import migration from '../assets/pictures/migration.jpg';
import serengeti from '../assets/pictures/serengeti.jpg';
import wildbeest from '../assets/pictures/wildbeest.jpg';
import hero from '../assets/pictures/dash.jpeg';
import luxury from '../assets/pictures/luxury.jpg';

// Layout wrapper component
const Layout = ({ children }) => (
  <div className="w-screen min-h-screen overflow-x-hidden">
    {children}
  </div>
);


// TabNavigation Component
const TabNavigation = ({ activeTab, setActiveTab }) => (
  <div className="w-full max-w-4xl mx-auto bg-white/20 backdrop-blur-sm rounded-t-lg overflow-hidden">
    <div className="flex">
      <button
        className={`flex items-center space-x-2 px-6 py-4 ${activeTab === 'BOOK_FLIGHT' ? 'bg-white' : 'bg-white/50 hover:bg-white/70'} transition-colors flex-1`}
        onClick={() => setActiveTab('BOOK_FLIGHT')}
      >
        <Plane size={20} />
        <span>BOOK FLIGHT</span>
      </button>
      <button
        className={`flex items-center space-x-2 px-6 py-4 ${activeTab === 'FIND_RESERVATION' ? 'bg-white' : 'bg-white/50 hover:bg-white/70'} transition-colors flex-1`}
        onClick={() => setActiveTab('FIND_RESERVATION')}
      >
        <FileText size={20} />
        <span>FIND RESERVATION</span>
      </button>
      <button
        className={`flex items-center space-x-2 px-6 py-4 ${activeTab === 'CHECK_IN' ? 'bg-white' : 'bg-white/50 hover:bg-white/70'} transition-colors flex-1`}
        onClick={() => setActiveTab('CHECK_IN')}
      >
        <CheckSquare size={20} />
        <span>CHECK-IN</span>
      </button>
      <button
        className={`flex items-center space-x-2 px-6 py-4 ${activeTab === 'FIND_PACKAGE' ? 'bg-white' : 'bg-white/50 hover:bg-white/70'} transition-colors flex-1`}
        onClick={() => setActiveTab('FIND_PACKAGE')}
      >
        <Package size={20} />
        <span>FIND PACKAGE</span>
      </button>
    </div>
  </div>
);

// Promotional Banner Component
const PromotionalBanner = () => (
  <div className="absolute top-1/4 left-0 right-0 z-10"> {/* Changed positioning */}
    <div className="max-w-[2000px] mx-auto px-6 w-full">
      <div className="max-w-xl">
        <h1 className="text-white text-5xl font-light mb-6 leading-tight">
          Experience Premium Safari Flights
        </h1>
        <p className="text-white/90 text-2xl mb-8">
          15% off on all Serengeti routes this season
        </p>
        <button className="bg-white text-blue-900 px-8 py-3 rounded-lg text-lg hover:bg-white/90 transition-colors">
          Learn More
        </button>
      </div>
    </div>
  </div>
);

  
  // Updated BookingWidget Component with proper positioning
  const BookingWidget = () => {
    const [activeTab, setActiveTab] = useState('BOOK_FLIGHT');
    const [isReturn, setIsReturn] = useState(true);
    const [showPassengerDropdown, setShowPassengerDropdown] = useState(false);
const [passengers, setPassengers] = useState({
  adults: 1,
  children: 0,
  infants: 0
});
    
    return (
      <div className="absolute -bottom-36  left-0 right-0 z-20"> {/* Added z-20 */}
        <div className="max-w-[2000px] mx-auto px-6 pb-8">
          <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
          
          <div className="bg-white rounded-b-lg shadow-xl p-8">
          {activeTab === 'BOOK_FLIGHT' && (
  <>
    {/* Trip Type Selection - Simpler Version */}
    <div className="flex gap-8 mb-6">
      <label className="flex items-center gap-2 cursor-pointer">
        <input 
          type="radio" 
          checked={isReturn}
          onChange={() => setIsReturn(true)}
          className="w-4 h-4 text-blue-900"
        />
        <span className="text-gray-700">Return</span>
      </label>
      <label className="flex items-center gap-2 cursor-pointer">
        <input 
          type="radio" 
          checked={!isReturn}
          onChange={() => setIsReturn(false)}
          className="w-4 h-4 text-blue-900"
        />
        <span className="text-gray-700">One way</span>
      </label>
    </div>

    {/* Single Line Form */}
    <div className="flex items-center gap-3">
      <div className="flex-1">
        <div className="text-xs text-gray-500 mb-1">From</div>
        <input 
          type="text"
          defaultValue="Dar es Salaam (DAR)"
          className="w-full p-2 border rounded text-gray-900"
        />
      </div>

      <div className="flex-1">
        <div className="text-xs text-gray-500 mb-1">To</div>
        <input 
          type="text"
          defaultValue="Serengeti (SEU)"
          className="w-full p-2 border rounded text-gray-900"
        />
      </div>

      <div className="flex-1">
        <div className="text-xs text-gray-500 mb-1">Departure</div>
        <div className="relative">
          <input 
            type="text"
            placeholder="Select date"
            className="w-full p-2 border rounded text-gray-900 pr-8"
          />
          <Calendar className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
        </div>
      </div>

      {isReturn && (
        <div className="flex-1">
          <div className="text-xs text-gray-500 mb-1">Return</div>
          <div className="relative">
            <input 
              type="text"
              placeholder="Select date"
              className="w-full p-2 border rounded text-gray-900 pr-8"
            />
            <Calendar className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
          </div>
        </div>
      )}

      <div className="flex-1">
        <div className="text-xs text-gray-500 mb-1">Passengers</div>
        <div className="relative">
        <div 
    className="border rounded-lg px-4 py-2 cursor-pointer"
    onClick={() => setShowPassengerDropdown(!showPassengerDropdown)}
  >
    <div className="flex items-center justify-between">
      <span className="text-gray-900">
        {passengers.adults + passengers.children + passengers.infants} Passenger{(passengers.adults + passengers.children + passengers.infants) !== 1 ? 's' : ''}
      </span>
      <ChevronDown className="text-gray-400" size={16} />
    </div>
  </div>

  {/* Dropdown Panel */}
  {showPassengerDropdown && (
    <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl z-50">
      <div className="p-4">
        <h3 className="font-medium mb-4">Passengers</h3>
        
        {/* Adults */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="font-medium">Adults</div>
            <div className="text-sm text-gray-500">12+ years</div>
          </div>
          <div className="flex items-center gap-3">
            <button 
              className="w-8 h-8 rounded-full border flex items-center justify-center disabled:opacity-50"
              onClick={() => setPassengers(prev => ({...prev, adults: Math.max(1, prev.adults - 1)}))}
              disabled={passengers.adults <= 1}
            >
              -
            </button>
            <span className="w-6 text-center">{passengers.adults}</span>
            <button 
              className="w-8 h-8 rounded-full border flex items-center justify-center"
              onClick={() => setPassengers(prev => ({...prev, adults: prev.adults + 1}))}
            >
              +
            </button>
          </div>
        </div>

        {/* Children */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="font-medium">Child</div>
            <div className="text-sm text-gray-500">2-11 years</div>
          </div>
          <div className="flex items-center gap-3">
            <button 
              className="w-8 h-8 rounded-full border flex items-center justify-center disabled:opacity-50"
              onClick={() => setPassengers(prev => ({...prev, children: Math.max(0, prev.children - 1)}))}
              disabled={passengers.children <= 0}
            >
              -
            </button>
            <span className="w-6 text-center">{passengers.children}</span>
            <button 
              className="w-8 h-8 rounded-full border flex items-center justify-center"
              onClick={() => setPassengers(prev => ({...prev, children: prev.children + 1}))}
            >
              +
            </button>
          </div>
        </div>

        {/* Infants */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <div className="font-medium">Infant</div>
            <div className="text-sm text-gray-500">Under 2 years</div>
          </div>
          <div className="flex items-center gap-3">
            <button 
              className="w-8 h-8 rounded-full border flex items-center justify-center disabled:opacity-50"
              onClick={() => setPassengers(prev => ({...prev, infants: Math.max(0, prev.infants - 1)}))}
              disabled={passengers.infants <= 0}
            >
              -
            </button>
            <span className="w-6 text-center">{passengers.infants}</span>
            <button 
              className="w-8 h-8 rounded-full border flex items-center justify-center"
              onClick={() => setPassengers(prev => ({...prev, infants: prev.infants + 1}))}
            >
              +
            </button>
          </div>
        </div>

        {/* Confirm Button */}
        <button 
          className="w-full mt-4 bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-800 transition-colors"
          onClick={() => setShowPassengerDropdown(false)}
        >
          Confirm
        </button>
      </div>
    </div>
  )}
        </div>
      </div>

      <button className="bg-blue-900 text-white px-6 py-2 rounded h-[38px] mt-6">
        Search flights
      </button>
    </div>

    {/* Promo Code Link */}
    <div className="mt-3 text-right">
      <button className="text-blue-900 text-sm">
        + Add promo code
      </button>
    </div>
  </>
)}
            
            {activeTab === 'FIND_RESERVATION' && (
              <div className="p-8 text-center text-gray-600">
                Reservation lookup functionality coming soon
              </div>
            )}
            
            {activeTab === 'CHECK_IN' && (
              <div className="p-8 text-center text-gray-600">
                Online check-in functionality coming soon
              </div>
            )}
            
            {activeTab === 'FIND_PACKAGE' && (
              <div className="p-8 text-center text-gray-600">
                Package search functionality coming soon
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

// Destination Card Component
const DestinationCard = ({ image, title, description, price }) => (
  <div className="group cursor-pointer">
    <div className="relative overflow-hidden rounded-lg mb-4">
      <img src={image} alt={title} className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <div className="absolute bottom-0 p-8">
        <h3 className="text-white text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-white/80 text-base">{description}</p>
        <p className="text-white font-medium mt-3 text-lg">From {price}</p>
      </div>
    </div>
  </div>
);
const PackageCard = ({ image, title, description, price, tag }) => (
    <div className="relative group overflow-hidden rounded-lg">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-90" />
      {tag && (
        <div className="absolute top-6 right-6 bg-white/90 px-4 py-2 rounded-full">
          <span className="text-blue-900 font-medium">{tag}</span>
        </div>
      )}
      <div className="absolute bottom-0 left-0 right-0 p-8">
        <h3 className="text-white text-2xl font-light mb-3">{title}</h3>
        <p className="text-white/80 mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-white/90 text-lg">From {price}</span>
          <button className="bg-white/10 backdrop-blur-sm text-white px-6 py-2 rounded-lg hover:bg-white/20 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
  
  const NewsletterSection = () => (
    <section className="py-24 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img 
          src="/api/placeholder/2000/1000" 
          alt="Background pattern" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="max-w-[2000px] mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-white text-4xl font-light mb-6">Stay Updated</h2>
          <p className="text-white/80 text-lg mb-10">
            Subscribe to our newsletter and be the first to know about our special offers,
            new destinations, and travel updates.
          </p>
          <div className="flex gap-4 max-w-xl mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address"
              className="flex-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-6 py-4 text-white placeholder:text-white/50 focus:outline-none focus:border-white/40"
            />
            <button className="bg-white text-blue-900 px-8 py-4 rounded-lg hover:bg-white/90 transition-colors whitespace-nowrap">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
  
  const PackagesSection = () => (
    <section className="py-24">
      <div className="max-w-[2000px] mx-auto px-6">
        <h2 className="text-4xl font-light mb-6">Featured Packages</h2>
        <p className="text-gray-600 text-lg mb-12 max-w-3xl">
          Discover our carefully curated selection of premium travel experiences,
          from serene beach getaways to thrilling safari adventures.
        </p>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <PackageCard 
            image={escape}
            title="Zanzibar Beach Escape"
            description="5 days of luxury and relaxation on pristine beaches"
            price="$899"
            tag="Most Popular"
          />
          <PackageCard 
            image={serengeti}
            title="Serengeti Migration Safari"
            description="Witness nature's greatest spectacle in ultimate comfort"
            price="$1,299"
            tag="Limited Time"
          />
        </div>
  
        <div className="grid lg:grid-cols-3 gap-8">
          <PackageCard 
            image={bush}
            title="Bush Safari Adventure"
            description="3-day exploration of Tanzania's wilderness"
            price="$699"
          />
          <PackageCard 
            image={beach}
            title="Luxury Beach Holiday"
            description="All-inclusive beach resort experience"
            price="$999"
          />
          <PackageCard 
            image={wildbeest}
            title="Great Migration Special"
            description="Prime viewing of the wildebeest migration"
            price="$1,499"
          />
        </div>
      </div>
    </section>
  );
  
  const UpdatesSection = () => (
    <section className="py-24 bg-gray-50">
      <div className="max-w-[2000px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-light mb-8">Great Migration Updates</h2>
            <p className="text-gray-600 text-lg mb-6">
              Stay informed about the wildebeest migration's current location and plan
              your safari at the perfect time. Our expert guides provide regular updates
              to help you witness this spectacular event.
            </p>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-blue-900 font-medium">Latest Update</span>
                  <span className="text-gray-500">October 25, 2024</span>
                </div>
                <p className="text-gray-600">
                  The herds are currently crossing the Mara River, heading towards
                  the northern Serengeti. Perfect time for river crossing sightings.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-blue-900 font-medium">Forecast</span>
                  <span className="text-gray-500">Next 2 Weeks</span>
                </div>
                <p className="text-gray-600">
                  Expected movement towards Kogatende area. Ideal for both river
                  crossings and open plains game viewing.
                </p>
              </div>
            </div>
            <button className="mt-8 bg-blue-900 text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition-colors">
              View Full Migration Map
            </button>
          </div>
          <div className="relative">
            <img 
              src={migration}
              alt="Great Migration" 
              className="rounded-lg shadow-xl"
            />
            <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm px-6 py-4 rounded-lg">
              <p className="text-blue-900 font-medium">Next Scheduled Flight</p>
              <p className="text-gray-600">Tomorrow, 7:00 AM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
// Main Homepage Component
export default function Homepage() {
  return (
    <Layout>
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-[90vh] w-full">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <img 
            src={hero} 
            alt="Safari plane landing" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
        </div>
        
        {/* Content Layers */}
        <div className="relative h-full">
          <PromotionalBanner />
          <BookingWidget />
        </div>
      </div>
      
      
      {/* Popular Destinations Section */}
      <section className="pt-40 pb-24 bg-gray-50">
        <div className="max-w-[2000px] mx-auto px-6">
          <h2 className="text-4xl font-light mb-16">Popular Destinations</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            <DestinationCard 
              image={serengeti}
              title="Serengeti National Park"
              description="Experience the great migration"
              price="$299"
            />
            <DestinationCard 
              image={zanzibar}
              title="Zanzibar"
              description="Paradise beaches & historic Stone Town"
              price="$199"
            />
            <DestinationCard 
              image={kili}
              title="Kilimanjaro"
              description="Fly to Africa's highest peak"
              price="$249"
            />
          </div>
        </div>
      </section>
      
      {/* Experience Section */}
      <section className="py-24">
        <div className="max-w-[2000px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-light mb-8">The Auric Air Experience</h2>
              <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                As Tanzania's leading safari airline, we combine luxury air travel with the adventure of African wildlife exploration. Our modern fleet and experienced pilots ensure safe, comfortable journeys to the heart of Tanzania's most spectacular destinations.
              </p>
              <button className="bg-blue-900 text-white px-10 py-4 rounded-lg hover:bg-blue-800 transition-colors text-lg">
                Learn More
              </button>
            </div>
            <div className="relative">
              <img 
                src={luxury}
                alt="Luxury safari experience" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
      <PackagesSection />
      <UpdatesSection />
      <NewsletterSection />
      <Footer />
    </Layout>
  );
}