import React, { useContext, useState } from 'react'
import { Typography, Divider, Grid, Button } from '@material-ui/core'  
import { makeStyles } from '@material-ui/core/styles'    
import { useHistory } from 'react-router-dom'
import { KaffeContext } from '../components/context/KaffeContext' 
import CartItem from '../components/CartItem'

const useStyles = makeStyles({ 
    typo: { 
        fontFamily: 'Lobster', 
        fontSize: 40, 
        color: '#ec524b', 
        textShadow: '0px 1px 2px black', 
        paddingTop: 100, 
    },  
    divider: { 
        backgroundColor: '#f3eac2',
        height: 5, 
        width: 250, 
    }
})

const Cart = () => { 
    const classes = useStyles()  
    const history = useHistory() 
    const { cart, total } = useContext(KaffeContext)      
    
    return (
        <div>  
            <Grid container justify='center' alignItems='center' direction='column'> 
                <Typography className={classes.typo}>Einkaufswagen</Typography> 
                <Divider className={classes.divider}/> 
            </Grid> 
            <Grid> 
                {cart.map((item) => { 
                    return ( 
                        <CartItem key={item.id}  
                                  company={item.company} 
                                  product={item.product} 
                                  weight={item.weight} 
                                  amount={item.amount} 
                                  price={item.price} 
                                  id={item.id} 
                                  total={item.total} 
                                  image={item.image} />
                    )
                })}
            </Grid>   
            <Grid>  
                { cart.length === 0 ?  
                  <Typography>Ihr Einkaufswagen ist leer!</Typography> :   
                  <Grid container justify='center' direction='column' alignItems='center' style={{ paddingTop: 50 }}> 
                      <Typography style={{ color: 'blue' }}>Gesamtbetrag: {total}€</Typography> 
                      <Button onClick={() => history.push("/bestellung")} style={{ color: 'green' }}>Bestellen</Button>
                  </Grid>
                }
            </Grid>  
        </div>
    )
}

export default Cart
