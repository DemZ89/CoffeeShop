import React, { useContext } from 'react' 
import { makeStyles } from '@material-ui/core/styles' 
import { Grid, Typography, Card, Divider, CardMedia, CardContent, IconButton, Button, Paper } from '@material-ui/core'   
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart' 
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline' 
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import { KaffeContext } from '../context/KaffeContext'


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
    }
})  

const ProductItem = (item) => { 
    const classes = useStyles()  
    const { increment, decrement, addToCart } = useContext(KaffeContext)
    const { company, product, weight, price, id, image, amount } = item
    return (
        <div>
             <Card key={id} className={classes.card}>   
                <Paper elevation={0} variant='outlined'>
                <CardContent> 
                    <Typography variant='h6'>{company}</Typography> 
                    <Typography variant='body2'>{product}</Typography>
                </CardContent> 
                <CardContent className={classes.mediaImage} style={{ backgroundImage: image,  
                                                                        backgroundSize: 'contain',  
                                                                        backgroundPositionX: 30 }}/>  
                <CardContent style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}> 
                    <Typography>{weight}</Typography>
                </CardContent>  
                <Grid container justify='center'> 
                    <Grid container item xs={6} justify='center' style={{ backgroundColor: '#ec524b',  
                                                                            height: 30,  
                                                                            borderRadius: 20 }}> 
                        <Typography className={classes.price}>{price}€</Typography>
                    </Grid>
                </Grid> 
                <Grid container xs={12}> 
                    <Grid container item xs={9} justify='flex-end' spacing={2}> 
                        <IconButton className={classes.button}> 
                            <RemoveCircleOutlineIcon onClick={() => decrement(id)}/>
                        </IconButton> 
                        <Typography style={{ display: 'flex', alignItems: 'center'}}>{amount}</Typography> 
                        <IconButton className={classes.button} > 
                            <AddCircleOutlineIcon onClick={() => increment(id)}/>
                        </IconButton>
                    </Grid> 
                    <Grid container item xs={3} justify='center'> 
                        <IconButton className={classes.button}> 
                            <AddShoppingCartIcon onClick={() => addToCart(id)}/>
                        </IconButton>
                    </Grid>
                </Grid> 
                </Paper>
            </Card>
        </div>
    )
}

export default ProductItem
