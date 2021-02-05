import React, { useContext } from 'react' 
import ProductItem from './ProductItem' 
import data from '../../dataKaffee' 
import { Grid } from '@material-ui/core' 
import { KaffeContext } from '../context/KaffeContext'

const ProductList = () => {     
    const { primaryData } = useContext(KaffeContext)
    return (
        <div>  
           <Grid container xs={12} justify='center'>
            {primaryData.map((item) => {  
                return (  
                        <ProductItem key={item.id} 
                                     company={item.company}  
                                     product={item.product} 
                                     weight={item.weight} 
                                     amount={item.amount} 
                                     price={item.price} 
                                     image={item.image} 
                                     id={item.id} />               
            )    
            })}   
            </Grid>
        </div> 
    )
}

export default ProductList
