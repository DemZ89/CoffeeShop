import React, { useState } from 'react' 
import { makeStyles,  
         Grid,  
         GridList, 
         Box, 
         Typography,  
         Divider,  
         Card,  
         CardHeader, 
         CardContent, 
         Paper,  
         Button,  
         Fade } from '@material-ui/core' 
import {Spring} from 'react-spring/renderprops'   
import VisibilitySensor from 'react-visibility-sensor' 
import SearchIcon from '@material-ui/icons/Search' 
import './AboutCoffee.css' 
import data from './data' 
import CardContainer from './CardContainer'

const useStyles = makeStyles({ 
    root: { 
        height: 700, 
        backgroundColor: '#9ad3bc', 
        display: 'block',   
        ['@media (max-width: 780px)']: { 
            height: 1100
        }
    }, 
    main: { 
        display: 'flex', 
        justifyContent: 'center'
    }, 
    shop: { 
        fontFamily: 'Lobster', 
        fontSize: 40, 
        color: '#ec524b', 
        textShadow: '0px 1px 2px black',  
        paddingTop: 40,     
        paddingBottom: 10
    }, 
    divider: { 
        backgroundColor: '#f3eac2',
        height: 5, 
        width: 180,  
        paddingLeft: 20  
    },  
    cardContainer: { 
        paddingTop: 50,  
        zIndex: 1000, 
        ['@media (max-width: 780px)']: { 
             display: 'flex', 
             flexDirection: 'column', 
             alignItems: 'center'
            
        }
    }
})



 function AboutCoffee() { 
    const classes = useStyles() 
    const [cardData, setCardData] = useState(data)
   
    return (
        <div className={classes.root}> 
            <Grid container className={classes.main}> 
                    <Box>   
                        <VisibilitySensor>  
                            {({ isVisible }) => ( 
                                    <Spring to={{ opacity: isVisible ? 1 : 0 }} config={{ delay: 1000, duration: 500 }}>  
                                    {props => (  
                                        <div style={props}> 
                                            <Typography className={classes.shop}>Kaffeesorten</Typography> 
                                            <Divider className={classes.divider}/>
                                        </div>   
                                    )}  
                                    </Spring>
                            )}
                        </VisibilitySensor>
                    </Box>  
            </Grid>    

            
            <Grid container className={classes.cardContainer}  justify='space-evenly' > 
                    {cardData.map((singleData) => { 
                        return (   
                                <CardContainer key={singleData.id} {...singleData}/>
                        )
                    })}
            </Grid> 


        </div> 
    )
} 


export default AboutCoffee