import React from 'react';

export const Books = ({ lists }) => {
  return (
    <div>
      {lists &&
        lists.map(c =>
          c.books.map((m, index) => (
            <img key={index} src={m.book_image} width="100px" />
          ))
        )}
    </div>
  );
};
