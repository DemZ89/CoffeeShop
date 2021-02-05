import React from 'react'   
import { useState } from 'react'
import { AppBar, Paper, Toolbar, Typography, Grid, Button, Drawer, List, ListItem, Divider } from '@material-ui/core' 
import { makeStyles } from '@material-ui/core/styles'  
import ListIcon from '@material-ui/icons/List' 
import './Navbar.css' 
import { Link } from 'react-router-dom'


const useStyles = makeStyles({   
    typo1: { 
        alignItems: 'center',
        display: 'flex', 
    }, 
    tabs: { 
        display: 'flex', 
    }, 
    typo2: { 
        alignItems: 'center',
        display: 'flex', 
        justifyContent: 'flex-end'
    }, 
    drawer: {  
        height: 400,   
        width: 250,
        backgroundColor: '#ec524b', 
        borderStyle: 'none',  
        boxShadow: '0px 1px 10px black'  
    }, 
    navbar: { 
        backgroundColor: '#f3eac2'
    }, 
    listIcon: { 
        color: '#ec524b',  
        fontSize: '40px'
    },  
    listIcon2: { 
        color: '#f3eac2',  
        fontSize: '40px'
    }, 
    logo: { 
        color: '#ec524b', 
        fontSize: '30px', 
        fontFamily: 'Lobster'
    }, 
    kontakt: { 
        color: '#ec524b', 
        fontSize: '16px', 
        display: 'flex', 
        fontFamily: 'Titillium Web'
    }, 
    listItem: { 
        color: '#f3eac2', 
        paddingTop: 50
    }
}) 



function Navbar() {   

    const [state, setState] = useState(false)  
    const openMenu = () => { 
        setState(true)
    } 
    const closeMenu = () => { 
        setState(false)
    }

    const classes = useStyles()
    return (  
        <>
        <div> 
            <Paper> 
                <AppBar> 
                    <Toolbar className={classes.navbar}>  
                        <Grid container>  
                            <Grid item xs={2} className={classes.typo1}>  
                                <Button onClick={openMenu}> 
                                    <ListIcon className={classes.listIcon} />
                                </Button>
                            </Grid> 
                            <Grid item xs={8} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}> 
                                <Typography className={classes.logo}>BlackBean</Typography> 
                            </Grid>
                            <Grid item xs={2} className={classes.typo2}>  
                                <Button> 
                                    <Typography className={classes.kontakt}>Kontakt</Typography> 
                                </Button>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar> 
            </Paper> 
        </div>    
        <div style={{ display: 'flex' }}>   
            <Drawer open={state} variant="persistent" onMouseLeave={closeMenu} classes={{ paper: classes.drawer }}>   
                <Button onClick={closeMenu}> 
                    <ListIcon className={classes.listIcon2} />
                </Button>
                <List className={classes.listItem}>  
                    <Link to="/" style={{ textDecoration: 'none', color: '#f3eac2' }}>  
                        <ListItem button>  
                            <Typography style={{ fontFamily: 'Lobster', fontSize: 30  }}>Der Shop</Typography>
                        </ListItem>
                    </Link>  
                    <Divider variant="middle" component="li" /> 
                    <Link to="/kaffee" style={{ textDecoration: 'none', color: '#f3eac2' }}>  
                        <ListItem button>  
                            <Typography style={{ fontFamily: 'Lobster', fontSize: 30  }}>Kaffee</Typography>
                        </ListItem>  
                    </Link>
                    <Divider variant="middle" component="li" />
                    <ListItem button>  
                        <Typography style={{ fontFamily: 'Lobster', fontSize: 30 }}>Kaffeegeräte</Typography>
                    </ListItem>
                </List>
            </Drawer>
        </div>
        </>
    )
}  

export default Navbar
