import { Box, Grid } from '@mui/material';
import React from 'react';
import ProductList from '../components/product/ProductList';



const ProductsPage = () => {
  return (
    <Box p={2}>
      <Grid container spacing={3} >

        <ProductList />
      </Grid>
    </Box>
  );
};

export default ProductsPage;