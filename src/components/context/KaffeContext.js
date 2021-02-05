import React, { createContext, useState } from 'react'  
import dataKaffee from '../../dataKaffee' 

export const KaffeContext = createContext()


const KaffeContextProvider = (props) => { 

    const [primaryData, setPrimaryData] = useState(dataKaffee)  
    const [cart, setCart] = useState([])   
    const [cartIcon, setCartIcon] = useState(0)   
    const [total, setTotal] = useState(0)  



    
    const addToCart = (id) => { 
        let findItem = primaryData.find((item) => item.id === id) 
        cart.push({ ...findItem, total: Number(findItem.amount * findItem.price).toFixed(2) })   
        let totalAmount = cart.map((item) => Number(item.amount))     
        setCartIcon(totalAmount.reduce((a,b) => a + b)) 
        let totalPrice = cart.map((item) => Number(item.total))  
        setTotal(totalPrice.reduce((a,b) => a + b))
    }  

    const removeItem = (id) => { 
        let remove = cart.filter((item) => item.id !== id) 
        setCart(remove)  
        primaryData.map((item) => item.id === id ? item.amount = 1 : null)
        let findCart = cart.map((item) => item.id === id ? Number(item.amount) : null)   
        let reducedCart = findCart.reduce((a,b) => a + b) 
        setCartIcon(cartIcon - reducedCart)    
        let findTotal = cart.map((item) => item.id === id ? Number(item.total) : null)  
        let getTotal = findTotal.reduce((a,b) => Number(a + b)) 
        setTotal(Number(total - getTotal).toFixed(2))
    }
    
    const increment = (id) => {  
        let amountUp = primaryData.map((item) => { 
            if (item.id === id) { 
              item.amount = item.amount + 1
            } 
            return item
        })  
        setPrimaryData(amountUp)       
    } 

    const decrement = (id) => { 
        let amountDown = primaryData.map((item) => { 
            if (item.id === id) { 
                item.amount = item.amount - 1 
                if (item.amount <= 1) { 
                    item.amount = 1
                } 
                return item 
            }
            return item
        }) 
        setPrimaryData(amountDown)
    } 

    let sortedUp = () => {   
       let sorted1 = [...primaryData].sort((a,b) => a.price - b.price)  
       setPrimaryData(sorted1) 
    }
 
    let sortedDown = () => {   
        let sorted2 = [...primaryData].sort((a,b) => b.price - a.price)  
        setPrimaryData(sorted2)
    }  

    const sortA = () => { 
        let sortedByName = [...primaryData].sort((a, b) => a.company !== b.company ? a.company < b.company ? -1 : 1 : 0) 
        setPrimaryData(sortedByName)
    }  

    const sortZ = () => { 
        let sortedByName = [...primaryData].sort((a, b) => a.company !== b.company ? b.company < a.company ? -1 : 1 : 0) 
        setPrimaryData(sortedByName)
    } 


    return (
       <KaffeContext.Provider value={{ primaryData, cart, cartIcon, total, increment, decrement, sortedUp, sortedDown, addToCart, removeItem, setTotal, setCartIcon, sortA, sortZ }}> 
           {props.children}
       </KaffeContext.Provider>
    )
}

export default KaffeContextProvider
