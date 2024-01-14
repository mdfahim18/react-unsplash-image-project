import React, { useContext, useState } from 'react';
import { ImagesContext } from '../App';

const API_KEY = 'aastGmOLEnSrWWb8N7dspeU3NyvB04WDT_gHPvYH2k8';

const Search = () => {
  const { fetchData } = useContext(ImagesContext);
  const [search, setSearch] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch('');
    fetchData(`search/collections?page=1&query=${search}&client_id=${API_KEY}`);
  };
  return (
    <div className='navbar'>
      <h1>unsplash image</h1>
      <form className='form' onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='cat'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button disabled={!search} type='submit'>
          search
        </button>
      </form>
    </div>
  );
};

export default Search;
