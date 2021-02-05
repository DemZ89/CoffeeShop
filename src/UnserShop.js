import React, { useState, useEffect } from 'react'  
import { makeStyles } from '@material-ui/core/styles'  
import { Grid, Box, Typography, Divider, IconButton, Card, GridList } from '@material-ui/core' 
import { Spring } from 'react-spring/renderprops'   
import VisibilitySensor from 'react-visibility-sensor'  
import './AboutShop.css' 
import dataGes from './dataGes' 
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos' 
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'

const useStyles = makeStyles({ 
    root: { 
        height: 900, 
        backgroundColor: '#9ad3bc', 
        display: 'block', 
       
    },
    main: { 
        display: 'flex', 
        justifyContent: 'center',  
        
    },  
    shop: { 
        fontFamily: 'Lobster', 
        fontSize: 40, 
        color: '#ec524b', 
        textShadow: '0px 1px 2px black',  
        paddingTop: 40,     
        paddingBottom: 10,   
       
    }, 
    divider: { 
        backgroundColor: '#f3eac2',
        height: 5, 
        width: 250,  
        paddingLeft: 10,  
    },   
    typo1: { 
        color: '#ffffff', 
        fontFamily: 'Titillium Web'
    },  
    card: { 
        opacity: 0, 
    }, 
    cardActive: { 
        opacity: 1, 
        transform: 'translateX(0)',  
        transitionDuration: '1s',
        display: 'flex' ,  
    }, 
    cardLast: { 
        transform: 'translateX(100%)', 
        opacity: 0,   
    }, 
    cardNext: { 
        transform: 'translateX(-100%)', 
        opacity: 0, 
    }
    
})

function UnserShop() {   
    const classes = useStyles() 


    const [cardData, setCardData] = useState(dataGes)  
    const [index, setIndex] = useState(0) 

    useEffect(() => {
        const lastIndex = cardData.length - 1
        if (index < 0) {
          setIndex(lastIndex)
        }
        if (index > lastIndex) {
          setIndex(0)
        }
      }, [index, cardData])
    
      
    
    return ( 
        <div className={classes.root}> 
            <Grid container className={classes.main}> 
                    <Box>   
                        <VisibilitySensor>  
                            {({ isVisible }) => ( 
                                    <Spring to={{ opacity: isVisible ? 1 : 0 }} config={{ delay: 1000, duration: 500 }}>  
                                    {props => (  
                                        <div style={props}>  
                                            <Grid container alignItems='center' direction='column' >  
                                                <Typography className={classes.shop}>Unser Geschäft</Typography> 
                                                <Divider className={classes.divider}/>  
                                            </Grid>  
                                            <Grid container style={{ width: 500, paddingTop: 40 }}> 
                                            <Typography align='center' className={classes.typo1}> 
                                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut  
                                                    labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores  
                                                    et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.  
                                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.    
                                            </Typography> 
                                            </Grid>
                                        </div>   
                                    )}  
                                    </Spring>
                            )}
                        </VisibilitySensor>
                    </Box>  
            </Grid>      


           
            <Grid container justify='center' style={{ paddingTop: 50 }}> 
                {cardData.map((singleData, dataIndex) => {    
                    const { id, image } = singleData;

                    let position = classes.cardNext;
                    if (dataIndex === index) {
                    position = classes.cardActive;
                    }
                    if (
                    dataIndex === index - 1 ||
                    (index === 0 && dataIndex === dataGes.length - 1)
                    ) {
                    position = classes.cardLast;
                    }

                    return (   
                        
                        <Grid className={position} key={id} style={{ position: 'absolute' }}>
                            <Card className={position} style={{ backgroundImage: image,  
                                                                backgroundSize: 'cover',  
                                                                backgroundPositionY: '40%',  
                                                                backgroundPositionX: '50%',  
                                                                height: 400,  
                                                                width: 500 }} > 
                                
                            </Card>
                       </Grid> 
                            
                    )
                })}
            </Grid>   
            <Grid container justify='center' alignItems='flex-end' >  
                <IconButton onClick={() => setIndex(index - 1)} style={{ paddingRight: 600, paddingTop: 200, background: 'none'}} disableRipple> 
                    <ArrowBackIosIcon />
                </IconButton> 
                <IconButton onClick={() => setIndex(index + 1)} style={{ background: 'none' }} disableRipple> 
                    <ArrowForwardIosIcon />
                </IconButton>
            </Grid>
        </div>
    )
} 


export default UnserShop