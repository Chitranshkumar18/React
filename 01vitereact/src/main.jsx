import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.jsx';

function MyApp() {
  return (
    <div>
      <h1>Custom App | Chai</h1>
    </div>
  );
}

const anotherElement = (
  <a href="https://google.com" target="_blank" rel="noreferrer">
    Visit Google
  </a>
);

const anotherUser = "chai aur react";

const ReactElement = React.createElement(
  'a',
  {
    href: 'https://google.com',
    target: '_blank',
    rel: 'noreferrer',
  },
  `Click me to visit Google ${anotherUser}`
);

createRoot(document.getElementById('root')).render(
  ReactElement
);