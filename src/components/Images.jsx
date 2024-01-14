import React, { useContext } from 'react';
import { ImagesContext } from '../App';
import Image from './Image';

const Images = () => {
  const { response, loading } = useContext(ImagesContext);

  if (loading) {
    return <div className='loading'>loading</div>;
  }
  return (
    <section className='container'>
      {response.map((item, index) => (
        <Image key={index} item={item} />
      ))}
    </section>
  );
};

export default Images;
