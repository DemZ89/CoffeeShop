import React, { useState } from 'react'  
import { makeStyles } from '@material-ui/core/styles' 
import { Paper, Card, CardContent, Fade, Typography, Button, Grid } from '@material-ui/core' 
import IconButton from '@material-ui/core/IconButton' 
import SearchIcon from '@material-ui/icons/Search' 


const useStyles = makeStyles({ 
    cardG: { 
        width: 300,  
        height: 400, 
        backgroundSize: 'cover', 
        backgroundPosition: '50%',
        display: 'flex', 
        justifyContent: 'center',  
        alignItems: 'center', 
        transition: '1s', 
        ['@media (max-width: 980px)']: { 
            width: 200,  
            height: 300, 
        } 
    },   
    paper: { 
        height: 400, 
        width: 300, 
        borderRadius: 0, 
        display: 'flex',  
        opacity: 1, 
        transition: '1s', 
        ['@media (max-width: 980px)']: { 
            width: 200,  
            height: 400, 
        } 
    },  
    paper2: { 
        fontFamily: 'Titillium Web', 
        fontSize: 14, 
        textAlign: 'center', 
        padding: 20,  
        ['@media (max-width: 980px)']: { 
            fontSize: 11
        }
        
    },
    paperHide: { 
        display: 'none', 
        opacity: 0
    },  
    headerTypo: { 
        color: '#f3eac2', 
        fontFamily: 'Lobster', 
        fontSize: 34,  
        textShadow: '4px 8px 16px black'
    },   
    button: {    
        alignItems: 'center',   
        justifyContent: 'center',
        paddingLeft: 25,  
        backgroundColor: 'transparent',  
        '&:hover': { 
            backgroundColor: 'transparent'
        }  
    }, 
})


function CardContainer({ title, info, backgroundImage, hoverImage }) {  
    const classes = useStyles() 

    const [open, setOpen] = useState('none')   
    const [expanded, setExpanded] = useState(false)   
    const [background, setBackground] = useState(false)
 
    const openButton = () => { 
        setOpen('flex')
    } 
    const closeButton = () => { 
        setOpen('none')
    }   
    const handleExpandClick = () => { 
        setExpanded(!expanded)
    } 
    const changeB = () => { 
        setBackground(true)
    } 
    const changeBDef = () => { 
        setBackground(false)
    }


    return ( 
        <div style={{ zIndex: 1000 }}>    
            <Grid> 
            <Paper elevation={10} onMouseEnter={openButton} onMouseLeave={closeButton} > 
                <Card className={classes.cardG}  
                      style={{ backgroundImage: background ? hoverImage : backgroundImage }}  
                      onMouseEnter={changeB} 
                      onMouseLeave={changeBDef}>  
                        <CardContent style={{ display: 'block', justifyContent: 'center', alignItems: 'center' }}>  
                            <Grid container direction='column' alignItems='center' justify='center'> 
                                <Typography className={classes.headerTypo} align='center'>{title}</Typography>  
                                <IconButton className={classes.button} style={{ display: open }}  
                                        disableRipple onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more"> 
                                    <SearchIcon style={{ color: '#ec524b', fontSize: 60, backgroundColor: 'transparent' }} disableRipple />
                                </IconButton> 
                            </Grid>
                        </CardContent> 
                </Card>                 
            </Paper>  
            <Fade in={expanded} timeout={1000}> 
                <Paper className={expanded ? classes.paper : classes.paperHide} elevation={10}> 
                    <Typography className={classes.paper2}> 
                        {info}
                    </Typography>
                </Paper>
            </Fade>
            </Grid>
        </div>
    )
} 


export default CardContainer