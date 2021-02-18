import React from 'react';

import '../styles/components/Layout.css';

export default function Layout({ children }) {
  return <div className='layout_container'>{children}</div>;
}
