import React from 'react';//React library import kar raha hai, jisse JSX aur React ke components use kar sakein.
import { createRoot } from 'react-dom/client';//react-dom se createRoot function import kar raha hai. Ye function React 18+ ka naya API hai jo aapke React app ko actual DOM (browser page) mein render karne ke liye use hota hai.

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

const ReactElement = React.createElement//React.createElement() ke 3 parts hote hain:
                                        //React.createElement(type, props, children)
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
