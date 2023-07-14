import React from 'react';
import PropTypes from 'prop-types';
import StarIcon from './svg/StarIcon';

const PropertyCard = ({ img, title, type, rating, beds, superHost = false }) => {
  return (
    <div>
      <img
        className='rounded-3xl mb-4 h-[269px] w-full object-cover object-center'
        src={img}
        alt='Stay Photo'
      />
      <div className='flex items-center justify-between mb-3'>
        <div className='flex flex-wrap items-center gap-3'>
          {superHost && (
            <div className='px-2 py-1 rounded-full border-2 border-[#4F4F4F] shrink-0'>
              <p className='uppercase font-montserrat font-bold text-xs text-[#4F4F4F]'>Super Host</p>
            </div>
          )}
          <p className='font-montserrat text-[#828282] text-sm'>
            {type} {beds && `. ${beds} beds`}
          </p>
        </div>

        <div className='self-start flex items-center gap-2'>
          <StarIcon /> <p className='font-montserrat text-sm text-[#4F4F4F]'>{rating}</p>
        </div>
      </div>
      <h2 className='font-montserrat font-semibold text-[#333]'>{title}</h2>
    </div>
  );
};

PropertyCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  beds: PropTypes.number,
  superHost: PropTypes.bool.isRequired,
};

export default PropertyCard;
