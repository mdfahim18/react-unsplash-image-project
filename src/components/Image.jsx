import React from 'react';

const Image = ({ item }) => {
  return (
    <article>
      {item.preview_photos.map((item, index) => {
        return (
          <img
            className='image'
            key={index}
            src={item.urls.small}
            alt={item.title}
          />
        );
      })}
    </article>
  );
};

export default Image;
