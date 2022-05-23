import { Button, Grid, Typography } from '@mui/material';
import { display } from '@mui/system';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useProducts } from '../../contexts/ProductContextProvider';


const ProductDetails = () => {

  const {id} = useParams();

  const {getProductDetails, productDetails} = useProducts();

  useEffect(() => {
    getProductDetails(id);
  }, [])

  return (
    <>
      <Grid container spacing={8} sx={{marginTop: '1vh', display: 'flex', justifyContent: 'center'}}>
        <Grid item xs={12} md={5}><img src={productDetails.picture} alt={productDetails.name} style={{width: '100%'}}/></Grid>
        <Grid item xs={12} md={5} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', marginBottom: '10vh'}}>
          <Typography variant='h4' sx={{marginBottom: '1rem'}}>
            {productDetails.name}
          </Typography>
          <Typography sx={{marginBottom: '1rem'}}>
            Type: <b style={{color: '#297DFF'}}>{productDetails.type}</b>
          </Typography>
          <Typography sx={{marginBottom: '1rem'}}>
            {productDetails.description}
          </Typography>
          <Typography variant='h6' sx={{marginBottom: '1rem', color: '#83B73B'}}>
            c{productDetails.price}
          </Typography>
          <Button variant='contained' sx={{fontSize: '0.7rem', padding: '14px 44px', width: '12vw'}}>Add to cart</Button>
        </Grid>
      </Grid>
    </>
  );
};

export default ProductDetails;