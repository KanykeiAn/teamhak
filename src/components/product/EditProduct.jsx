import { Box, Button, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useProducts } from '../../contexts/ProductContextProvider';

const EditCard = () => {

  
    const { getProductDetails, productDetails, saveEditedProduct } =
    useProducts();

  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(productDetails);

  useEffect(() => {
    setProduct(productDetails);
  }, [productDetails]);

  useEffect(() => {
    getProductDetails(id);
  }, []);

  const handleInp = (e) => {

    let obj = {
      ...product,
      [e.target.name]: e.target.value,
    }
    setProduct(obj)
    
  }
  const handleInpFile = (e) => {

// console.log(e.target.files[0]);

   let file= e.target.files[0]
  //  console.log(file);
   setProduct({
     ...product, 
     image: file
   })

    
  }
  return (
    <Box sx={{ width: '60vw', margin: '10vh auto' }}>
    <TextField
    sx={{marginBottom: '10px', borderColor: 'black' }}
      fullWidth
      id="outlined-basic"
      label="Genre"
      variant="outlined"
      name='genre'
      size="small"
      value={product.genre || ''}
      onChange={handleInp}
      
    />
    <TextField
    sx={{marginBottom: '10px', borderColor: 'black' }}
      fullWidth
      id="outlined-basic"
      label="Title"
      variant="outlined"
      name='title' 
      size="small"
      value={product.title || ''}
      onChange={handleInp}
      
    />
    <TextField
    sx={{marginBottom: '10px', borderColor: 'black' }}
      fullWidth
      id="outlined-basic"
      label="Price"
      variant="outlined"
      name='price'
      size="small"
      value={product.price || ''}
      onChange={handleInp}

    />
    <TextField
    
    sx={{marginBottom: '10px', borderColor: 'black',backgroundColor: 'whitesmoke' }}
      fullWidth
      id="outlined-basic"
      label="Description"
      variant="outlined"
      name='description'
      size="small"
      value={product.description || ''}
      onChange={handleInp}
      
    />
          <TextField
    
    sx={{marginBottom: '10px', borderColor: 'black',backgroundColor: 'whitesmoke' }}
      fullWidth
      id="outlined-basic"
      label="Release_date"
      variant="outlined"
      name='release_date'
      size="small"
      value={product.release_date || ''}
      onChange={handleInp}
      
    />
    <TextField
    
    sx={{marginBottom: '10px', borderColor: 'black',backgroundColor: 'whitesmoke' }}
      fullWidth
      id="outlined-basic"
      label="Release_date"
      variant="outlined"
      name='Author_name'
      size="small"
      value={product.author_name || ''}
      onChange={handleInp}
      
    />
    <TextField
    
    sx={{marginBottom: '10px', borderColor: 'black',backgroundColor: 'whitesmoke' }}
      fullWidth
      id="outlined-basic"
      label="Author_last_name"
      variant="outlined"
      name='release_date'
      size="small"
      value={product.author_last_name || ''}
      onChange={handleInp}
      
    />
    <TextField
    
    sx={{marginBottom: '10px', borderColor: 'black',backgroundColor: 'whitesmoke' }}
      fullWidth
      id="outlined-helperText"

      helperText="Вставьте картинку"
      name='images'
      size="small"
      onChange={handleInpFile}
      // value={e.target.files[0] || product.image}
      type='file'
      // defaultValue="Default Value"
    />
  
    <Button
    sx={{marginBottom: '10px', borderColor: 'black', color: 'black', backgroundColor: 'whitesmoke' }}
      variant="outlined"
      fullWidth
      size="large"
      onClick={() => {
        saveEditedProduct(product);
        navigate(-1);
      }}
    >
     Edit product
    </Button>
  </Box>
  );
};

export default EditCard;