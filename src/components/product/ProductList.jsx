import { Box, Pagination, } from '@mui/material';
import React, { useEffect } from 'react';
import ProductCard from '../product/ProductCard';
import { useProducts } from '../../contexts/ProductContextProvider';
import { useSearchParams } from 'react-router-dom';



const ProductList = () => {

  const { products, getProducts, page, setPage, count } = useProducts();

  const [searchParams] = useSearchParams();




  useEffect(() => {
    getProducts();


  }, []);

  useEffect(() => {
    getProducts();

  }, [page, searchParams]); 



  const handleChange = (e, p) => {
    setPage(p)

  }





  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
    
          justifyContent: 'space-evenly',
         flexDirection: 'column'
        }}
      >
       <Box sx={{
          display: 'flex',
          flexWrap: 'wrap',
         
          justifyContent: 'space-evenly',
         
        }}>
        {products ? (

          (products.results || products).map((item) => {

            return (
              <ProductCard item={item} key={item.id} />


            )
          })
        ) : (
          <h2>Loading...</h2>
        )}
  </Box>
        {products.results ? (

          <Box sx={{ textAlign: 'center' }}>


            <Box my={3} display="flex" justifyContent="center">
              <Pagination count={count} page={page} onChange={handleChange} />
            </Box>
          </Box>

        ) : ('')
        }

      </Box>

    </>
  );
};

export default ProductList;