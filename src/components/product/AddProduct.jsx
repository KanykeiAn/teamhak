import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProducts } from '../../contexts/ProductContextProvider';

const AddProduct = () => {
  const { addProduct } = useProducts();
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    title: '',
    description: '',
    price: 0,
    images: '',
    genre: '',
    release_date: '',
    author_name: '',
    author_last_name: '',
  });

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

    // console.log(e.target.files[0]);
       let file= e.target.files[0]
       console.log(file);
       setProduct({
         ...product, 
         image: file
       })
    
        
      }

  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box className='ju' sx={{ width: '60vw', margin: '10vh auto' }}>

<FormControl fullWidth
        size="small"
        sx={{ marginBottom: '10px', borderColor: 'black' }}
        
      >
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name='category'
          value={age}
          
          onChange={(e)=>{ handleChange(e);handleInp(e)}
          }
        >
          <MenuItem value={'Tables'}>Tables</MenuItem>
          <MenuItem value={'Bed'}>Bed</MenuItem>
          <MenuItem value={'Chairs'}>Chairs</MenuItem>
        </Select>
      </FormControl>


      <TextField
      className='ju'
        fullWidth
        id="outlined-basic"
        label="Title"
        variant="outlined"
        name="title"
        onChange={handleInp}
      />
      <TextField
        fullWidth
        id="outlined-basic"
        label="Description"
        variant="outlined"
        name="description"
        onChange={handleInp}
      />
      <TextField
        fullWidth
        id="outlined-basic"
        label="Price"
        variant="outlined"
        name="price"
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
        type='file'
      
      />
      <TextField
        fullWidth
        id="outlined-basic"
        label="Genre"
        variant="outlined"
        name="genre"
        onChange={handleInp}
      />
      <TextField
        fullWidth
        id="outlined-basic"
        label="Release_date"
        variant="outlined"
        name="release_date"
        onChange={handleInp}
      />
      <TextField
        fullWidth
        id="outlined-basic"
        label="Author_name"
        variant="outlined"
        name="author_name"
        onChange={handleInp}
      />
      <TextField
        fullWidth
        id="outlined-basic"
        label="Author_last_name"
        variant="outlined"
        name="author_last_name"
        onChange={handleInp}
      />
      <Button
        variant="outlined"
        fullWidth
        size="large"
        onClick={() => {
          addProduct(product);
          navigate('/novella');
        }}
      >
        CREATE PRODUCT
      </Button>
    </Box>
  );
};

//   const {addProduct} = useProducts();

//   const [product, setProduct] = useState({
//     name: '',
//     description: '',
//     price: 0,
//     picture: '',
//     type: '',
//   })

//   return (
//     <Box sx={{ width: '60vw', margin: '10vh auto' }}>
//       <TextField
//         fullWidth
//         id="outlined-basic"
//         label="Name"
//         variant="outlined"
//         name='name'
//         onChange={handleInp}
//       />
//       <TextField
//         fullWidth
//         id="outlined-basic"
//         label="Description"
//         variant="outlined"
//         name='description'
//         onChange={handleInp}
//       />
//       <TextField
//         fullWidth
//         id="outlined-basic"
//         label="Price"
//         variant="outlined"
//         name='price'
//         onChange={handleInp}
//       />
//       <TextField
//         fullWidth
//         id="outlined-basic"
//         label="Picture"
//         variant="outlined"
//         name='picture'
//         onChange={handleInp}
//       />
//       <TextField
//         fullWidth
//         id="outlined-basic"
//         label="Type"
//         variant="outlined"
//         name='type'
//         onChange={handleInp}
//       />
//       <Button onClick={() => {
//           addProduct(product);
//           navigate('/products');
//         }}
//         variant="outlined" fullWidth size="large">
//         CREATE PRODUCT
//       </Button>
//     </Box>
//   );
// };

export default AddProduct;