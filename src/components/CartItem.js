import React, { useContext } from 'react' 
import { KaffeContext } from './context/KaffeContext' 
import { makeStyles } from '@material-ui/core/styles'  
import { Grid, Typography, Card, Button, CardContent } from '@material-ui/core'  

const useStyles = makeStyles({  
    root:{ 
        paddingTop: 50
    },
    card: { 
        width: 300
    }, 
    mediaImage: { 
        height: 150, 
        width: 250
    },  
    typo: { 
        paddingLeft: 20
    }
})

const CartItem = (item) => {  
    const classes = useStyles() 
    const { removeItem, increment, decrement, primaryData, setCartIcon, cart, total, setTotal } = useContext(KaffeContext)
    const { company, product, weight, price, id, image } = item 

    const totalAmount = primaryData.map((item) => item.id === id ? Number(item.amount) : null) 
    const totalNewAmount = totalAmount.reduce((a,b) => a + b)
    const totalPriceItem = primaryData.map((item) => item.id === id ? (item.total = item.price * item.amount) : null)       

    const cartAm = cart.map((item) => item.id === id ? item.amount = totalNewAmount : null)
    let amm2 = cart.map((item) => item.amount) 
    let amm3 = amm2.reduce((a,b) => a + b) 
    setCartIcon(amm3)
    

    let pr = totalPriceItem.reduce((a,b) => a + b) 
    cart.map((item) => item.id === id ? item.total = pr : null) 
    let price2 = cart.map((item) => item.total)  
    let price3 = price2.reduce((a,b) => a + b)
    setTotal(Number(price3).toFixed(2))

    return (
        <div>
            <Grid container justify='center' className={classes.root}>  
                <Card className={classes.card}>  
                    <Typography className={classes.typo}>{company}</Typography> 
                    <Typography className={classes.typo}>{product}</Typography>  
                    <CardContent className={classes.mediaImage} style={{ backgroundImage: image, backgroundSize: 'contain', backgroundPositionX: 55 }} />
                    <Typography className={classes.typo}>Gewicht: {weight}</Typography> 
                    <Typography className={classes.typo}>Preis: {price}€</Typography> 
                    <Typography className={classes.typo}>Menge: {cartAm}</Typography>   
                    <Button onClick={() => increment(id)}>+</Button> 
                    <Button onClick={() => decrement(id)}>-</Button>
                    <Typography className={classes.typo}>Warenwert: {pr}€</Typography> 
                    <Button onClick={() => removeItem(id)} style={{ color: 'red', paddingLeft: 20 }}>Entfernen</Button>    
                </Card> 
            </Grid>
        </div>
    )
}

export default CartItem
