
import { Box, Button, FormControl, Input, InputLabel, Menu, MenuItem, Select, TextField, Typography } from '@mui/material';

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProducts } from '../../contexts/ProductContextProvider';

const AddProduct = () => {

  const { addProduct, getProducts, genre, getCategory  } = useProducts();
  const navigate = useNavigate();
  useEffect(() => {
    getProducts();
}, []);

useEffect(() => {
  getCategory();
}, []);

// console.log(categorys);

  const [product, setProduct] = useState({
    title: '',
    description: '',
    price: 0,
    images: '',
    genre: '',
    release_date: '',
    author_name: '',
    author_last_name: '',
    text: '',
  });
  console.log(product)
  const handleInp = (e) => {
    if (e.target.name === 'price') {
      let obj = {
        ...product,
        [e.target.name]: Number(e.target.value),
      };
      setProduct(obj);
    } else {
      let obj = {
        ...product,
        [e.target.name]: e.target.value,
      };
      setProduct(obj);
    }
  };


  const handleInpFile = (e) => {
    let file = e.target.files[0];
    setProduct({...product, images: file})
}

  return (
//     <Box
//     className='bgImage' sx={{
//     height: '70vh' ,
// backgroundImage: `url("https://images.unsplash.com/photo-1524055988636-436cfa46e59e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"), linear-gradient(#fff,#0000)`,
//     position: 'relative', 
//     color: 'white',
//     backgroundSize: 'cover',
//     backgroundRepeat: 'no-repeat',
//     backgroundPosition: 'right',
//     backgroundAttachment: 'fixed',
//     opacity: '0.8'}}>

    <Box sx={{ width: '50vw', margin: '10vh auto' }}>
    <Typography
      variant='h4' 
      align='center' 
      color='textPrimary' 
      gutterBottom
      >
        Admin Page
      </Typography>
      <TextField
        fullWidth
        id="outlined-basic"
        label="Title"
        variant="outlined"
        name="title"
        onChange={handleInp}
        sx={{mb: 2}}
      />
      <TextField
        fullWidth
        id="outlined-basic"
        label="Description"
        variant="outlined"
        name="description"
        onChange={handleInp}
        sx={{mb: 2}}
      />
      <TextField
        fullWidth
        id="outlined-basic"
        label="Price"
        variant="outlined"
        name="price"
        onChange={handleInp}
        sx={{mb: 2}}
      />
     
      <Input
                type='file'
                onChange={handleInpFile}
                sx={{mb: 2}}
                />
      
      {/* {categorys ? (

            categorys.map((item) => (
              <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"

          value={item.name}
          label="Age"
          onChange={handleInp}
        >
          <MenuItem value={item.name}>{item.name}</MenuItem>

        </Select>
            ))
          ) : (
            <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"

          value=''
          label="Age"
          onChange={handleInp}
        >
          <MenuItem value=''>No categorys</MenuItem>
        </Select>
          )} */}
    
      
      <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={product['genre']}
          label="genre"
          name='genre'
          onChange={handleInp}
        >
          {genre ? (
            genre.map((item) => (
              <MenuItem value={item.title}>{item.title}</MenuItem>
            ))
          ) : (
            <MenuItem value=''>No genre</MenuItem>
          )}
        </Select>
       
        
      <TextField
        fullWidth
        id="outlined-basic"
        label="Release_date"
        variant="outlined"
        name="release_date"
        onChange={handleInp}
        sx={{mb: 2}}
      />
          
          <TextField
        fullWidth
        id="outlined-basic"
        label="Author_name"
        variant="outlined"
        name="author_name"
        onChange={handleInp}
        sx={{mb: 2}}
      />
          
          <TextField
        fullWidth
        id="outlined-basic"
        label="Author_last_name"
        variant="outlined"
        name="author_last_name"
        onChange={handleInp}
        sx={{mb: 2}}
      />
       <TextField
        fullWidth
        id="outlined-basic"
        label="Text"
        variant="outlined"
        name="text"
        onChange={handleInp}
        sx={{mb: 2}}
      />
      <Button
        variant="outlined"
        fullWidth
        size="large"
        color='success'
        sx={{mb: 2}}
        onClick={() => {
          addProduct(product);
          navigate('/novella');
        }}
      >
        CREATE PRODUCT
      </Button>

    </Box>
    // </Box>
  );
};

export default AddProduct;