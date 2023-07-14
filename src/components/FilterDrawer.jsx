import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import SearchIcon from './svg/SearchIcon';
import LocationIcon from './svg/LocationIcon';

const FilterDrawer = ({ onSubmit, onClose }) => {
  const locationInput = useRef(null);
  const guestInput = useRef(null);
  const [showGuestBtn, setShowGuestBtn] = useState(false);
  const [location, setLocation] = useState('');
  const [guest, setGuest] = useState(0);
  const [childGuest, setChildGuest] = useState(0);
  const [adultGuest, setAdultGuest] = useState(0);

  useEffect(() => {
    const keyDownEvent = (event) => {
      if (event.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', keyDownEvent);
    return () => {
      window.removeEventListener('keydown', keyDownEvent);
    };
  }, [onClose]);

  const inputOnFocus = (ref) => {
    const className = 'rounded-2xl px-6 py-3 border border-[#333]';
    ref.current.className = className;
  };

  const inputOnBlur = (ref) => {
    const className = 'rounded-2xl px-6 py-3 shadow-[0_1px_6px_0_rgba(0,0,0,0.1)]';
    ref.current.className = className;
  };

  const incrementGuest = () => {
    setGuest((prev) => prev + 1);
  };

  const decrementGuest = () => {
    setGuest((prev) => prev - 1);
  };

  const onChangeLocation = (e) => {
    const value = e.target.value;
    setLocation(value);
  };

  const handleSubmit = () => {
    onSubmit(location, guest);
  };

  return (
    <div className='fixed inset-0 bg-[#4F4F4F66] overflow-auto'>
      <div className='flex flex-col md:flex-row gap-4 px-3 md:px-24 py-12 bg-white font-mulish'>
        <div className='md:basis-1/3'>
          <div ref={locationInput} className='rounded-2xl px-6 py-3 shadow-[0_1px_6px_0_rgba(0,0,0,0.1)]'>
            <label className='text-[#333]'>
              <span className='block uppercase font-bold text-xs mb-1'>Location</span>
              <input
                onFocus={() => inputOnFocus(locationInput)}
                onBlur={() => inputOnBlur(locationInput)}
                onChange={onChangeLocation}
                className='outline-none w-full'
                type='text'
                value={location}
                placeholder='Add location'
              />
            </label>
          </div>

          <div className='mt-12 px-6'>
            <button
              onClick={() => setLocation('Helsinki, Finland')}
              className='flex items-center gap-[10px] mb-7'
            >
              <LocationIcon />
              <p className='text-[#4F4F4F]'>Helsinki, Finland</p>
            </button>
            <button
              onClick={() => setLocation('Turku, Finland')}
              className='flex items-center gap-[10px] mb-9'
            >
              <LocationIcon />
              <p className='text-[#4F4F4F]'>Turku, Finland</p>
            </button>
            <button
              onClick={() => setLocation('Oulu, Finland')}
              className='flex items-center gap-[10px] mb-9'
            >
              <LocationIcon />
              <p className='text-[#4F4F4F]'>Oulu, Finland</p>
            </button>
            <button
              onClick={() => setLocation('Vaasa, Finland')}
              className='flex items-center gap-[10px] mb-9'
            >
              <LocationIcon />
              <p className='text-[#4F4F4F]'>Vaasa, Finland</p>
            </button>
          </div>
        </div>
        <div className='md:basis-1/3'>
          <div ref={guestInput} className='rounded-2xl px-6 py-3 shadow-[0_1px_6px_0_rgba(0,0,0,0.1)]'>
            <label className='text-[#333]'>
              <span className='block uppercase font-bold text-xs mb-1'>Guest</span>
              <input
                onFocus={() => {
                  inputOnFocus(guestInput);
                  setShowGuestBtn(true);
                }}
                onBlur={() => {
                  inputOnBlur(guestInput);
                }}
                type='text'
                className='outline-none w-full cursor-pointer'
                value={guest || ''}
                placeholder='Add guest'
                readOnly
              />
            </label>
          </div>
          {showGuestBtn && (
            <div className='mt-12 px-6'>
              <h3 className='font-bold'>Adults</h3>
              <p className='mb-3 text-[#BDBDBD]'>Ages 13 or above</p>

              <div className='flex items-center gap-4 mb-12'>
                <button
                  onClick={() => {
                    if (adultGuest > 0) {
                      decrementGuest();
                      setAdultGuest((prev) => prev - 1);
                    }
                  }}
                  className='h-6 w-6 flex justify-center items-center border border-[#828282] rounded text-[#828282]'
                >
                  -
                </button>
                <h3 className='font-bold'>{adultGuest}</h3>
                <button
                  onClick={() => {
                    incrementGuest();
                    setAdultGuest((prev) => prev + 1);
                  }}
                  className='h-6 w-6 flex justify-center items-center border border-[#828282] rounded text-[#828282]'
                >
                  +
                </button>
              </div>

              <h3 className='font-bold'>Children</h3>
              <p className='mb-3 text-[#BDBDBD]'>Ages 2 - 12</p>

              <div className='flex items-center gap-4'>
                <button
                  onClick={() => {
                    if (childGuest > 0) {
                      decrementGuest();
                      setChildGuest((prev) => prev - 1);
                    }
                  }}
                  className='h-6 w-6 flex justify-center items-center border border-[#828282] rounded text-[#828282]'
                >
                  -
                </button>
                <h3 className='font-bold'>{childGuest}</h3>
                <button
                  onClick={() => {
                    incrementGuest();
                    setChildGuest((prev) => prev + 1);
                  }}
                  className='h-6 w-6 flex justify-center items-center border border-[#828282] rounded text-[#828282]'
                >
                  +
                </button>
              </div>
            </div>
          )}
        </div>
        <button
          type='button'
          onClick={handleSubmit}
          className='mt-12 mx-auto md:m-0 flex self-start items-center gap-2 px-6 py-3 bg-[#EB5757E5] text-white rounded-2xl'
        >
          <SearchIcon fill='white' />
          Search
        </button>
      </div>
    </div>
  );
};

FilterDrawer.propTypes = {
  onSubmit: PropTypes.func,
  onClose: PropTypes.func,
};

export default FilterDrawer;
