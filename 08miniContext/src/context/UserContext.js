import React from 'react'

const UserContext = React.createContext()
//React ka Context banati hai. Context ka use data ko multiple components ke beech share karne ke liye hota hai bina props drilling ke.

// React.createContext() --->>>  Ye ek Context Object create karta hai.
// Ab UserContext ke andar do important components hote hain:

//1) UserContext.Provider
//2) UserContext.Consumer (ya modern React me useContext())
 
export default UserContext;


//===============. Why Context?===================

//.                App
//.                │
//.                ├── Navbar
//.                │
//.                ├── Home
//.                │   │
//.                │   └── Profile
//.                │       │
//.                │       └── UserDetails
//.                

 //.  Aur UserDetails ko kuch data chahiye, to props se aise bhejna padega:

//.                         App
//.                          ↓
//.                         Navbar
//.                          ↓
//.                         Home
//.                          ↓
//.                         Profile
//.                          ↓
//.                         UserDetails