import React from 'react';

import '../styles/components/PaginationButton.css';

export default function PaginationButton({
  children,
  onClick = () => console.log('not implemented'),
}) {
  return (
    <button onClick={onClick} className='pagination_button'>
      {children}
    </button>
  );
}
