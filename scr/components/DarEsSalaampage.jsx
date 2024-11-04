import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import darEsSalaamHero from '../assets/pictures/darcity.jpg';
import arushaImage from '../assets/pictures/arusha.jpg';
import zanzibarImage from '../assets/pictures/zanzibar.jpg';
import manyaraImage from '../assets/pictures/manyara.jpg';
const DestinationCard = ({ image, title, description, slug }) => (
    <Link 
      to={`/destinations/${slug}`} 
      className="group cursor-pointer block relative overflow-hidden rounded-lg h-[300px]"
    >
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-white text-2xl font-light mb-2">{title}</h3>
        {description && (
          <p className="text-white/80 text-sm">{description}</p>
        )}
      </div>
    </Link>
  );
  

const DarEsSalaamPage = () => {
  const [activeTab, setActiveTab] = useState('attractions');

  // Content for different tabs
  const content = {
    attractions: [
      {
        title: "National Museum & House of Culture",
       /* image: nationalMuseumImage,*/
        description: "Explore Tanzania's rich heritage, from ancient fossils to modern history. Located in the heart of the city, this museum showcases the country's cultural and natural heritage."
      },
      {
        title: "Kariakoo Market",
        /*image: kariakooImage,*/
        description: "Experience the vibrant heart of Dar es Salaam's commerce. This bustling market offers everything from fresh produce to traditional crafts."
      },
      {
        title: "Azania Lutheran Church",
        /*image: azaniaChurchImage,*/
        description: "A historic German colonial-era church featuring stunning architecture and cultural significance."
      }
    ],
    culture: [
      {
        title: "Tinga Tinga Art",
        description: "Discover the unique East African painting style that originated in Dar es Salaam, known for its vibrant colors and intricate patterns."
      },
      {
        title: "Local Festivals",
        description: "Experience the Swahili cultural festivals and celebrations that bring the city to life throughout the year."
      }
    ],
    food: [
      {
        title: "Street Food Scene",
        description: "From mishkaki (grilled meat skewers) to chips mayai (French fry omelette), explore the city's diverse street food culture."
      },
      {
        title: "Seafood Specialties",
        description: "Being a coastal city, Dar es Salaam offers fresh seafood prepared with Swahili spices and cooking techniques."
      }
    ]
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-[80vh] overflow-hidden">
        <img 
          src={darEsSalaamHero}
          alt="Dar es Salaam Skyline" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-[2000px] mx-auto px-6">
            <div className="max-w-xl">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg inline-block mb-6">
                <p className="text-white/90 text-lg font-medium">Commercial Hub</p>
              </div>
              <h1 className="text-white text-5xl font-light mb-4">Dar es Salaam</h1>
              <p className="text-white/90 text-xl">
                Tanzania's largest city and major business center, where modern urban life meets coastal charm
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Facts */}
      <div className="bg-gray-50 py-8">
        <div className="max-w-[2000px] mx-auto px-6">
          <div className="grid grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-blue-900 font-light text-3xl mb-2">5.2M+</div>
              <div className="text-gray-600">Population</div>
            </div>
            <div className="text-center">
              <div className="text-blue-900 font-light text-3xl mb-2">30°C</div>
              <div className="text-gray-600">Average Temperature</div>
            </div>
            <div className="text-center">
              <div className="text-blue-900 font-light text-3xl mb-2">GMT+3</div>
              <div className="text-gray-600">Time Zone</div>
            </div>
            <div className="text-center">
              <div className="text-blue-900 font-light text-3xl mb-2">TZS</div>
              <div className="text-gray-600">Currency</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-12">
        <div className="max-w-[2000px] mx-auto px-6">
          <div className="grid grid-cols-3 gap-12">
            {/* Left Content */}
            <div className="col-span-2">
              <h2 className="text-3xl font-light mb-8">About Dar es Salaam</h2>
              <p className="text-gray-600 text-lg mb-6">
                Dar es Salaam, Tanzania's most populous city, serves as the country's major seaport and commercial hub. 
                A fascinating blend of African, Arab, and European influences creates a unique cultural tapestry that 
                defines the city's character.
              </p>

              {/* Travel Highlights Section */}
              <section className="mt-12">
                <h2 className="text-3xl font-light mb-6">Dar es Salaam travel highlights</h2>
                
                {/* Tabs Navigation */}
                <div className="border-b mb-8">
                  <nav className="flex gap-8">
                    {['attractions', 'culture', 'food', 'overview'].map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-4 py-2 border-b-2 transition-colors ${
                          activeTab === tab ? 'border-blue-900 text-blue-900' : 'border-transparent'
                        }`}
                      >
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                      </button>
                    ))}
                  </nav>
                </div>

                {/* Tab Content */}
                <div className="space-y-8">
                  {content[activeTab]?.map((item, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
                      {item.image && (
                        <img src={item.image} alt={item.title} className="w-full h-64 object-cover" />
                      )}
                      <div className="p-6">
                        <h3 className="text-xl font-medium mb-3">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Right Sidebar */}
            <div>
              {/* Map */}
              <div className="bg-gray-200 rounded-lg h-[400px] mb-8">
                {/* Add map here */}
              </div>

              {/* Weather Widget */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                <h3 className="text-xl font-medium mb-4">Current Weather</h3>
                <div className="flex items-center justify-between">
                  <div className="text-4xl font-light">30°C</div>
                  <div className="text-gray-600">Sunny</div>
                </div>
              </div>

              {/* Flight Schedule */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-medium mb-4">Next Available Flights</h3>
                <button className="w-full bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-800 transition-colors">
                  View Flight Schedule
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Similar Destinations */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-[2000px] mx-auto px-6">
          <h2 className="text-3xl font-light mb-8">Similar Destinations</h2>
        
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="h-[300px]">
              <DestinationCard
                image={zanzibarImage}
                title="Zanzibar"
                description="Paradise beaches and historic Stone Town"
              />
            </div>
            <div className="h-[300px]">
              <DestinationCard
                image={manyaraImage}
                title="Lake Manyara"
                description="Famous tree-climbing lions and flamingo-filled lake"
              />
            </div>
            <div className="h-[300px]">
              <DestinationCard
          image={arushaImage}
          title="Arusha"
          description="Gateway to Tanzania's northern safari circuit"
        />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DarEsSalaamPage;