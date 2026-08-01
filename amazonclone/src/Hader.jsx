import React, { useState } from 'react'


function Hader({
    const :[amount, setAmount] = useState(0)

}){
    return(
         <header>
   <div class="navbar">
    <div class="nav-logo border">
        <div class="logo"></div>
    </div>
    <div class="nav-address border">
        <p class="add-first">Deliver to</p>
        <div class="add-icon">
            <i class="fa-solid fa-location-dot"></i>
            <p class="add-sec">India</p>
        </div>
    </div>
    <div class="nav-search">
    <select class="search-select">
        <option>All</option>
    </select >
    <input placeholder="search amazon" class="search-input"/>
    <div class="search-icon">
        <i class="fa-solid fa-magnifying-glass"></i>
    </div>
   </div>
   <div class="nav-singin border">
        <p><span>Hello, sign in</span></p>
        <p class="nav-sec">Account & Lists</p>
    </div>


    <div class="nav-return border">
        <p><span>Returns</span></p>
        <p class="nav-sec">& Orders</p>
    </div>

    <div class="nav-cart border">
        <i class="fa-solid fa-cart-shopping"></i>
        cart
    </div>
   </div>
   <div class="panel">
    <div class="panel-all">
        <i class="fa-solid fa-bars"></i>
        All
    </div>
    <div class="panel-ops">
        <p>Today's Deals</p>
        <p>Customer Service</p>
        <p>Registry</p>
        <p>Gift Cards</p>
        <p>Sell</p>
    </div>
    <div class="panel-deals">
        Shop deals in Electronics
    </div>
   </div>
</header>
    );
}
export default Hader;