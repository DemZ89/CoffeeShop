import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles' 
import { Grid, Typography } from '@material-ui/core'  
import { KaffeContext } from '../components/context/KaffeContext'

const useStyles = makeStyles({ 
    root: { 
        marginTop: 100
    }
})

const Bestellung = () => { 
    const classes = useStyles()  
    const { total } = useContext(KaffeContext)
    return (
        <div>
            <Grid container className={classes.root} justify='center' alignItems='center' direction='column'> 
                <Typography>Ihre Bestellung wurde erfolgreich abgeschlossen!</Typography> 
                <Typography>GESAMTBETRAG: {total}€</Typography>
            </Grid>
        </div>
    )
}

export default Bestellung
