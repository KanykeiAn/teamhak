import { Box, Button, Input, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useProducts } from '../../contexts/ProductContextProvider';

const EditProduct = () => {


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
        };
        setProduct(obj);
    };

    

    const handleInpFile = (e) => {
        let file = e.target.files[0];
        setProduct({...product, images: file})
    }

    return (
        <div>

            <Box sx={{ width: '60vw', margin: '10vh auto' }}>
                <TextField
                    sx={{ marginBottom: '10px', borderColor: 'black' }}
                    fullWidth
                    id="outlined-basic"
                    label="Title"
                    variant="outlined"
                    name='title'
                    size="small"
                    value={product.title || ''}
                    onChange={handleInp}
                />
                

                <Input
                type='file'
                onChange={handleInpFile}
                />

                <TextField

                    sx={{ marginBottom: '10px', borderColor: 'black', backgroundColor: 'whitesmoke' }}
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

                    sx={{ marginBottom: '10px', borderColor: 'black', backgroundColor: 'whitesmoke' }}
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

                    sx={{ marginBottom: '10px', borderColor: 'black', backgroundColor: 'whitesmoke' }}
                    fullWidth
                    id="outlined-basic"
                    label="Description"
                    variant="outlined"
                    name='description'
                    size="small"
                    value={product.description || ''}

                    onChange={handleInp}
                />

                <Button
                    sx={{ marginBottom: '10px', borderColor: 'black', color: 'black', backgroundColor: 'whitesmoke' }}
                    variant="outlined"
                    fullWidth
                    size="large"
                    onClick={() => {
                        saveEditedProduct(product);
                        navigate(-1);
                    }}
                >
                    EDIT
                </Button>
            </Box>

        </div>
    );
};

export default EditProduct;