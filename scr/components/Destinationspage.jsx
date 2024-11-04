// DestinationsPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import serengetiImage from '../assets/pictures/serengeti.jpg';
import darImage from '../assets/pictures/dar.jpg';
import arushaImage from '../assets/pictures/arusha.jpg';
import zanzibarImage from '../assets/pictures/zanzibar.jpg';
import manyaraImage from '../assets/pictures/manyara.jpg';
import kigaliImage from '../assets/pictures/kigali.jpeg';
import mafiaImage from '../assets/pictures/mafia.jpeg';
import masaiMaraImage from '../assets/pictures/masai-mara.jpeg';
import mwanzaImage from '../assets/pictures/mwanza.jpg';
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

const DestinationsPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-[80vh] overflow-hidden">
        <img 
          src={serengetiImage} // Replace with your hero image
          alt="African Destinations" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-center px-6">
          <div className="max-w-[2000px] mx-auto w-full">
            <h1 className="text-white text-5xl font-light mb-4">Our Destinations</h1>
            <p className="text-white/90 text-xl max-w-2xl">
              Discover East Africa's most spectacular locations, from pristine national parks to vibrant cities
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 px-6">
        <div className="max-w-[2000px] mx-auto">
          
          {/* Featured Destinations Grid */}
           {/* Two Featured Destinations */}
    <div className="grid md:grid-cols-2 gap-8 mb-6"> {/* Increased gap */}
      <div className="h-[200px]"> {/* Larger height for featured cards */}
        <DestinationCard
          image={darImage}
          title="Dar es Salaam"
          description="Tanzania's major commercial hub and vibrant coastal city"
          slug="dar"
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

          {/* Regular Destinations Grid */}
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
                image={kigaliImage}
                title="Kigali"
                description="Rwanda's vibrant capital city"
              />
            </div>
            <div className="h-[300px]">
              <DestinationCard
                image={mafiaImage}
                title="Mafia Island"
                description="Pristine marine life and peaceful beaches"
              />
            </div>
            <div className="h-[300px]">
              <DestinationCard
                image={masaiMaraImage}
                title="Masai Mara"
                description="Experience authentic Maasai culture"
              />
            </div>
            <div className="h-[300px]">
              <DestinationCard
                image={mwanzaImage}
                title="Mwanza"
                description="The rock city on Lake Victoria's shores"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-[2000px] mx-auto px-6 text-center">
          <h2 className="text-3xl font-light mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Let us take you to the most spectacular destinations in East Africa
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

export default DestinationsPage;