import React from 'react';
import PropTypes from 'prop-types';
import SearchIcon from './svg/SearchIcon';

const SearchBar = ({ onClick, location, guest }) => {
  return (
    <div className='px-5 rounded-2xl shadow-[0_1px_6px_0px_rgba(0,0,0,0.1)] flex items-center gap-5 divide-x'>
      <div className='py-5 '>
        <p onClick={onClick} className={`${!location && 'text-[#BDBDBD]'}`}>
          {location || 'Add location'}
        </p>
      </div>
      <div className='py-5 ps-5'>
        <p onClick={onClick} className={`${!guest && 'text-[#BDBDBD]'}`}>
          {guest ? `${guest} guest` : 'Add Guest'}
        </p>
      </div>
      <div className='py-5 ps-5'>
        <button onClick={onClick} className='flex justify-center items-center'>
          <SearchIcon />
        </button>
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  onClick: PropTypes.func,
  location: PropTypes.string,
  guest: PropTypes.number,
};

export default SearchBar;
