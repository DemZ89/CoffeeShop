import React from 'react' 
import { makeStyles, Typography, Divider, Box, Grid } from '@material-ui/core' 
import './AboutShop.css' 
import kaffee from '../src/images/koffee.png' 
import {Spring} from 'react-spring/renderprops' 
import VisibilitySensor from 'react-visibility-sensor'

const useStyle = makeStyles({ 
    root: { 
        height: 600, 
        display: 'block', 
        justifyContent: 'center', 
        boxShadow: '30px 40px 80px 85px black', 
        ['@media (max-width: 880px)']: { 
            height: 750
        }, 
        ['@media (max-width: 600px)']: { 
            height: 600
        }
    },   
    main: { 
        display: 'flex', 
        justifyContent: 'center'
    },
    shop: { 
        fontFamily: 'Lobster', 
        fontSize: 40, 
        color: '#9ad3bc', 
        textShadow: '0px 1px 4px black',  
        paddingTop: 40,     
        paddingBottom: 10
    }, 
    divider: { 
        backgroundColor: '#f3eac2',
        height: 5, 
        width: 180,    
    }, 
    container: { 
        paddingTop: 50, 
    }, 
    gridItems: { 
        paddingLeft: 30, 
        paddingRight: 30,   
        ['@media (max-width: 880px)']: { 
            justifyContent: 'center', 
            display: 'flex', 
            alignItems: 'center'
        }
    },  
    gridItems2: { 
        paddingLeft: 30, 
        paddingRight: 30,   
        ['@media (max-width: 880px)']: { 
            justifyContent: 'center', 
            display: 'flex', 
            alignItems: 'center'
        }, 
        ['@media (max-width: 600px)']: { 
            display: 'none'
        }
    }, 
    typo: { 
        fontFamily: 'Titillium Web', 
        fontSize: 14, 
        color: '#ec524b',  
        ['@media (max-width: 1080px)']: { 
            fontSize: 12
        }, 
        ['@media (max-width: 680px)']: { 
            fontSize: 11
        }
    }
})

 function AboutShop() { 
    const classes = useStyle()
    return (
        <div className={classes.root}> 
            <Grid container className={classes.main}> 
                <Box>   
                    <VisibilitySensor>  
                        {({ isVisible }) => ( 
                                <Spring to={{ opacity: isVisible ? 1 : 0 }} config={{ delay: 1000, duration: 500 }}>  
                                {props => (  
                                    <div style={props}> 
                                        <Typography className={classes.shop}>Unser Shop</Typography> 
                                        <Divider className={classes.divider}/>
                                    </div>   
                                )}  
                                </Spring>
                        )}
                    </VisibilitySensor>
                </Box>  
            </Grid>  
            <VisibilitySensor> 
                {({ isVisible }) => ( 
                    <Spring to={{ opacity: isVisible ? 1 : 0 }} config={{ duration: 1000 }}> 
                        {props => ( 
                            <div style={props}> 
                                 <Grid container className={classes.container}>    
                                    <Grid item sm={4} xs={6} className={classes.gridItems}>   
                                    <Spring from={{ transform: `translateX(-1000px)`, opacity: 0 }} to={{ transform: `translateX(0px)`, opacity: 1 }} config={{ delay: 700, duration: 2000 }}> 
                                                {props => ( 
                                                        <div style={props}>   
                                                            <Typography className={classes.typo}>  
                                                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr,  
                                                                sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,  
                                                                sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.  
                                                                Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.  
                                                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut  
                                                                labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,  
                                                                sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,  
                                                                sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.  
                                                                Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.  
                                                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut  
                                                                labore et dolore magna aliquyam erat, sed diam voluptua. 
                                                            </Typography>              
                                                        </div>
                                                        )}
                                    </Spring> 
                                    </Grid>
                                    <Grid item sm={4} className={classes.gridItems2}>  
                                        <Box> 
                                            <img src={kaffee} alt="kaffee" style={{ objectFit: 'contain', width: '100%' }}/>
                                        </Box>
                                    </Grid>     
                                    <Grid item sm={4} xs={6} className={classes.gridItems}>  
                                    <Spring from={{ transform: `translateX(1000px)`, opacity: 0 }} to={{ transform: `translateX(0px)`, opacity: 1 }} config={{ duration: 2000 }}> 
                                                {props => ( 
                                                        <div style={props}>   
                                                            <Typography className={classes.typo}>  
                                                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr,  
                                                                sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,  
                                                                sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.  
                                                                Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.  
                                                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut  
                                                                labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,  
                                                                sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,  
                                                                sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.  
                                                                Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.  
                                                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut  
                                                                labore et dolore magna aliquyam erat, sed diam voluptua. 
                                                            </Typography>              
                                                        </div>
                                                        )}
                                    </Spring> 
                                    </Grid> 
                                </Grid>
                            </div>
                        )}
                    </Spring>
                )}
            </VisibilitySensor>
        </div>
    )
} 

export default AboutShop
