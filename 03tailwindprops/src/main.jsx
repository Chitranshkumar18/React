import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)



//+++++++++++++++++++++execution order+++++++++++++++++++++++//
1. index.html         → script tag se main.jsx ko bulata hai
2. main.jsx            → chalta hai, App() ko call karta hai
3. App.jsx              → chalta hai (top se bottom)
       ↓
4. Card.jsx (1st call)  → username="ChaiorChai" ke saath chalta hai
       ↓ (App.jsx wapas continue hota hai)
5. Card.jsx (2nd call)  → username="hello" ke saath chalta hai
       ↓
6. Sab kuch combine hoke → main.jsx ke render() ko final HTML milta hai
       ↓
7. Browser screen pe   → 1 heading + 2 cards dikhte hain
