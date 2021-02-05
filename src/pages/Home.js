import React from 'react'  
import Header from '../Header.js'
import AboutShop from '../AboutShop' 
import AboutCoffee from '../AboutCoffee'
import UnserShop from '../UnserShop'  

function Home() { 
    return ( 
        <div>  
            <Header /> 
            <AboutShop /> 
            <AboutCoffee /> 
            <UnserShop />  
        </div>
    )
} 

export default Home