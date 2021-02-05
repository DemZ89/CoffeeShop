import React from 'react' 
import { Typography, makeStyles, Grid } from '@material-ui/core'  
import kaffee from '../src/images/kaffee.jpg' 
import './Header.css'  
import {Spring} from 'react-spring/renderprops'




const useStyle = makeStyles({ 
    root: {  
        paddingTop: 70,
        height: 700,    
        backgroundImage: `url(${kaffee})`, 
        backgroundSize: 'cover', 
        display: 'flex',  
        backgroundAttachment: 'fixed', 
        backgroundRepeat: 'no-repeat',  
    }, 
    container: { 
        display: 'flex', 
        justifyContent: 'center',  
        alignItems: 'center'
        
    }, 
    typoContainer: { 
        height: 400,  
    }, 
    typo: { 
        fontFamily: 'Lobster', 
        fontSize: 80, 
        color: '#f3eac2', 
        textAlign: 'center', 
        textShadow: '3px 4px 11px black', 
        '&:hover': { 
            color: '#ec524b', 
            fontSize: 75, 
            transitionDuration: 1000
        }, 
        ['@media (max-width: 1000px)']: { 
            fontSize: 60, 
            textAlign: 'center'
        }
    }, 
    
}) 


function Header() {   

    const classes = useStyle() 
    
    return ( 
        <>   
        <div className={classes.root}>   
            <Grid container className={classes.container}> 
                <Grid item xs={8} className={classes.typoContainer}>   
                    <Spring delay={800} from={{ opacity: 0, marginRight: -1000 }}  
                            to={{ opacity: 1, marginRight: 0 }}>  
                        {props => ( 
                            <div style={props}> 
                                <Typography className={classes.typo}>Sag mir die</Typography>
                                <Typography className={classes.typo}>schönen drei Worte!</Typography> 
                                <Typography className={classes.typo}>" Hier, dein Kaffee. "</Typography>
                            </div>
                        )} 
                    </Spring>
                </Grid>
            </Grid>
        </div>    
        </>
    )
} 

export default Header