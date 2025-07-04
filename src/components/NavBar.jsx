import React, { useState, useRef, useEffect } from 'react';
import { FaUserPlus } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function NavBar({ onSearch,scrollToFooter }) {
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const suggestionRefs = useRef([]);
  const suggestionBoxRef = useRef(null);
  const wrapperRef = useRef(null);
  const location = useLocation();

  // Debounce query input (400ms)
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, 400);

    return () => clearTimeout(handler);
  }, [query]);

  // Fetch suggestions only when debouncedQuery updates
  useEffect(() => {
    const fetchSuggestions = async () => {
      if (!debouncedQuery.trim()) {
        setSuggestions([]);
        return;
      }

      try {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${debouncedQuery}`);
        const data = await res.json();
        setSuggestions(data.meals || []);
      } catch (err) {
        console.error("Error fetching suggestions:", err);
        setSuggestions([]);
      }
    };

    fetchSuggestions();
  }, [debouncedQuery]);

  // Keep scroll in view
  useEffect(() => {
    const box = suggestionBoxRef.current;
    const item = suggestionRefs.current[highlightedIndex];

    if (box && item) {
      const itemTop = item.offsetTop;
      const itemBottom = itemTop + item.offsetHeight;
      const boxTop = box.scrollTop;
      const boxBottom = boxTop + box.clientHeight;

      if (itemTop < boxTop) box.scrollTop = itemTop;
      else if (itemBottom > boxBottom) box.scrollTop = itemBottom - box.clientHeight;
    }
  }, [highlightedIndex]);

  // Hide suggestions on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setSuggestions([]);
        setHighlightedIndex(-1);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = async (e) => {
    if (e) e.preventDefault();
    const trimmed = query.trim();
    if (!trimmed) return;

    try {
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${trimmed}`);
      const data = await res.json();

      if (!data.meals) {
        alert(`No meals found for "${trimmed}"`);
      } else {
        onSearch(trimmed);
        setTimeout(() => {
          document.getElementById('results')?.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      }
    } catch (err) {
      console.error('Search failed:', err);
      alert('Something went wrong while searching.');
    }

    setSuggestions([]);
    setHighlightedIndex(-1);
    setQuery('');
  };

  const handleSuggestionClick = (name) => {
    setQuery('');
    setSuggestions([]);
    setHighlightedIndex(-1);
    onSearch(name);
  };

  const handleKeyDown = (e) => {
    if (suggestions.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHighlightedIndex((prev) =>
        prev < suggestions.length - 1 ? prev + 1 : 0
      );
    }

    if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlightedIndex((prev) =>
        prev > 0 ? prev - 1 : suggestions.length - 1
      );
    }

    if (e.key === 'Enter') {
      e.preventDefault();
      if (highlightedIndex >= 0) {
        handleSuggestionClick(suggestions[highlightedIndex].strMeal);
      } else {
        handleSearch();
      }
    }
  };

  return (
    <div>
      <nav id='navBar' className='bg-transparent h-5 flex flex-wrap justify-between items-center px-[2vw] py-4 md:py-0 text-[8px] font-bold tracking-widest md:h-12 md:px-[3vw] md:text-sm md:font-bold lg:h-16 xl:h-24 2xl:h-32'>
        
        <Link to="/" className='group cursor-pointer'>
          <span className='text-black group-hover:text-[#fe0100] transition duration-300 ease-in-out'>HOT</span>
          <span className='text-[#fe0100] group-hover:text-black transition duration-300 ease-in-out'>PLATES</span>
        </Link>

        <div id='midSection' className='lg:space-x-12 xl:space-x-16'>
          <span>
          <NavLink to="/" className={({isActive})=>`px-3 py-2 uppercase tracking-widest transition duration-300 border-b-2 ${
      isActive? 'text-[#fe0100] border-transparent': 'text-black border-transparent hover:text-[#fe0100] hover:border-[#fe0100]'}`}>HOME</NavLink></span>

         <span><NavLink to="/categories" className={({isActive})=>`px-3 py-2 uppercase tracking-widest transition duration-300 border-b-2 ${
      isActive? 'text-[#fe0100] border-transparent': 'text-black border-transparent hover:text-[#fe0100] hover:border-[#fe0100]'}`}>CATEGORIES</NavLink></span>

          <span>
          <NavLink to="/menu" className={({isActive})=>`px-3 py-2 uppercase tracking-widest transition duration-300 border-b-2 ${
      isActive? 'text-[#fe0100] border-transparent': 'text-black border-transparent hover:text-[#fe0100] hover:border-[#fe0100]'}`}>MENU</NavLink></span>
          <span className='px-3 py-2 uppercase tracking-widest transition duration-300 border-b-2 border-transparent hover:text-[#fe0100] hover:border-[#fe0100] cursor-pointer' onClick={scrollToFooter}>CONTACT</span>
        </div>

        <form onSubmit={handleSearch} ref={wrapperRef} className='relative flex flex-col items-start'>
          <div className='flex items-center space-x-2 md:space-x-6'>
            {location.pathname === "/" ?<div className='hidden md:flex border p-1 pl-3 border-black bg-[#fff5cf] rounded-full hover:border-yellow-700'>
              <input
                type="text"
                placeholder="Search meals..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                className="p-2 px-3 text-black text-xs font-normal md:w-40 bg-[#fff5cf] outline-none"
              />
              <button type="submit" className='text-[#fe0100] p-2 pr-3'>
                <FaSearch />
              </button>
            </div> :null}
            
            <button type="button" className='text-[#fe0100]'>
              <FaUserPlus className='text-[13px] md:text-xl'/>
             
            </button>
          </div>

          {suggestions.length > 0 && (
            <ul
              ref={suggestionBoxRef}
              className="absolute top-[90%] mt-1 w-[200px] backdrop-blur-md bg-white/0 shadow-md rounded text-black text-xs z-50 max-h-48 overflow-y-auto hidden md:block scrollbar-hide left-2"
            >
              {suggestions.map((meal, index) => (
                <li
                  key={meal.idMeal}
                  ref={(el) => (suggestionRefs.current[index] = el)}
                  className={`px-2 py-2 cursor-pointer hover:bg-yellow-100 ${
                    index === highlightedIndex ? 'bg-yellow-500' : ''
                  }`}
                  onClick={() => handleSuggestionClick(meal.strMeal)}
                >
                  {meal.strMeal}
                </li>
              ))}
            </ul>
          )}
        </form>
      </nav>
    </div>
  );
}

export default NavBar;
