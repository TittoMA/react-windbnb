import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Logo from '../assets/logo.svg';
import SearchBar from './SearchBar';
import FilterDrawer from './FilterDrawer';

const Navbar = ({ onFilter }) => {
  const [showDrawer, setShowDrawer] = useState(false);
  const [locationFilter, setLocationFilter] = useState('');
  const [guestFilter, setGuestFilter] = useState(null);

  const handleFilter = (location, guest) => {
    setLocationFilter(location);
    setGuestFilter(guest);
    setShowDrawer(false);
    onFilter(location, guest);
  };

  return (
    <>
      <header className='px-3 md:px-24 py-8 flex flex-col md:flex-row justify-between items-center'>
        <div className='self-start md:self-center mb-10 md:mb-0'>
          <img className='w-[130px]' src={Logo} alt='Windbnb logo' />
        </div>
        <SearchBar location={locationFilter} guest={guestFilter} onClick={() => setShowDrawer(true)} />
      </header>

      {showDrawer && (
        <FilterDrawer
          onSubmit={(location, guest) => handleFilter(location, guest)}
          onClose={() => setShowDrawer(false)}
        />
      )}
    </>
  );
};

Navbar.propTypes = {
  onFilter: PropTypes.func,
};

export default Navbar;
