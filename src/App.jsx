import { createContext } from 'react';
import Search from './components/Search';
import useAxios from './hooks/useAxios';
import Images from './components/Images';

const API_KEY = 'aastGmOLEnSrWWb8N7dspeU3NyvB04WDT_gHPvYH2k8';

export const ImagesContext = createContext();
function App() {
  const { response, loading, fetchData } = useAxios(
    `search/collections?page=1&query=cats&client_id=${API_KEY}`
  );

  const value = {
    response,
    loading,
    fetchData,
  };
  return (
    <ImagesContext.Provider value={value}>
      <Search />
      <Images />
    </ImagesContext.Provider>
  );
}

export default App;
