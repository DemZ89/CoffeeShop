import React, { useContext, useState } from 'react'  
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles' 
import { Grid, Typography, Divider, Button } from '@material-ui/core'  
import '../AboutShop.css'  
import ProductList from '../components/kaffeComponents/ProductList' 
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'  
import { KaffeContext } from '../components/context/KaffeContext'


const useStyles = makeStyles({  
    root:{ 
        paddingTop: 90
    },
    typo: { 
        fontFamily: 'Lobster', 
        fontSize: 40, 
        color: '#ec524b', 
        textShadow: '0px 1px 2px black', 
        paddingTop: 30
    }, 
    divider: { 
        backgroundColor: '#f3eac2',
        height: 5, 
        width: 100,  
        paddingLeft: 10,  
    },
    card: { 
        height: 400, 
        width: 250,  
        borderRadius: 0 
    }, 
    mediaImage: { 
        height: 150, 
        width: 250
    }, 
    price: { 
        justifyContent: 'center',  
        alignItems: 'center',  
        display: 'flex', 
        color: 'white'
    }, 
    button: { 
        color: '#ec524b', 
        '&:hover': { 
            backgroundColor: 'transparent'
        }
    }, 
    typo2: { 
        color: 'gray'
    }, 
    button2: {
        borderStyle: 'solid',  
        borderColor: 'silver',  
        borderWidth: 1,  
        borderRadius: 0 
    }, 
    cart: {   
        paddingRight: 50
    }
})  



function Kaffee() {  
    const classes = useStyles()   
    const history = useHistory() 
    const { sortedUp, sortedDown, cartIcon, sortA, sortZ } = useContext(KaffeContext)   

    
    return ( 
        <div className={classes.root}>  
            <Grid container alignItems='center' direction='column'> 
                <Typography className={classes.typo}>Kaffee</Typography> 
                <Divider className={classes.divider}/>  
            </Grid>  
            <Grid container justify='flex-end' className={classes.cart}>  
                <Button onClick={() => history.push("/cart")}> 
                    <ShoppingCartIcon /> 
                </Button> 
                <Typography>{cartIcon}</Typography> 
            </Grid>
            <Divider />  
            <Grid container xs={12} >     
                <Grid container item direction='column' alignItems='center' justify='flex-start' style={{ width: 200, borderColor: 'silver', borderWidth: 1, borderStyle: 'solid' }}>    
                    <Typography className={classes.typo2} style={{ paddingTop: 10 }}>FILTERN NACH</Typography>  
                    <Grid container item direction='column' style={{ paddingTop: 50 }}> 
                        <Button className={classes.button2} onClick={sortedUp}>PREIS AUFSTEIGEND</Button> 
                        <Button className={classes.button2} onClick={sortedDown}>PREIS ABSTEIGEND</Button> 
                        <Button className={classes.button2} onClick={sortA}>A-Z</Button> 
                        <Button className={classes.button2} onClick={sortZ}>Z-A</Button>
                    </Grid>  
                </Grid> 
                <Grid container item xs={9}>    
                    <ProductList />
                </Grid>
            </Grid>
        </div>
    )
}

export default Kaffee
