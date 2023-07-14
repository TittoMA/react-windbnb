import React, { useEffect, useState } from 'react';
import Footer from './components/Footer.jsx';
import stays from './data/stays.js';
import Navbar from './components/Navbar.jsx';
import PropertyCard from './components/PropertyCard.jsx';

function App() {
  const [propertyData, setPropertyData] = useState(stays);
  const [isFilter, setIsFilter] = useState(false);
  const [locationFilter, setLocationFilter] = useState('');
  const [guestFilter, setGuestFilter] = useState(null);

  const onFilter = (location, guest) => {
    setIsFilter(true);
    setLocationFilter(location);
    setGuestFilter(guest);
  };

  useEffect(() => {
    if (isFilter) {
      let data = stays;
      if (locationFilter !== '') {
        data = data.filter((item) =>
          `${item.city}, ${item.country}`.toLowerCase().includes(locationFilter.toLowerCase())
        );
      }
      if (guestFilter && guestFilter > 0) {
        data = data.filter((item) => item.maxGuests >= guestFilter);
      }
      setPropertyData(data);
    } else {
      setPropertyData(stays);
    }
  }, [isFilter, locationFilter, guestFilter]);

  return (
    <div>
      <Navbar onFilter={(location, guest) => onFilter(location, guest)} />
      <main className='px-3 md:px-24 py-12'>
        <div className='flex justify-between items-center'>
          <h1 className='font-montserrat font-bold text-2xl text-[#333] mb-8'>Stays in Finland</h1>
          <p className='text-sm text-[#4F4F4F] font-montserrat'>{propertyData.length} stays</p>
        </div>
        {locationFilter && (
          <h2 className='font-montserrat text-lg text-[#333] mb-8'>
            Search result for: <span className='font-semibold'>{locationFilter}</span>
          </h2>
        )}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {propertyData?.map((stay, index) => (
            <PropertyCard
              key={index}
              img={stay.photo}
              title={stay.title}
              beds={stay.beds}
              rating={stay.rating}
              type={stay.type}
              superHost={stay.superHost}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
