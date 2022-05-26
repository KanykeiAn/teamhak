import { Button, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useProducts } from '../../contexts/ProductContextProvider';



const Read = () => {

  const {id} = useParams();
  const {getProductDetails, productDetails, getComments,} = useProducts();

  useEffect(() => {
    getProductDetails(id);
    getComments(id)
  }, []);

  const navigate = useNavigate();

//   useEffect(() => {
//     getProductDetails(id);
//     getComments(id)
//   }, [comments]);




  const handleInp = (e) => {
let id2 = Number(id)
    let obj = {
      product:id2,
      text: e.target.value
    }
  }




  return (
    <div>
                <Box sx={{width:{xs:'100%',sm :'85%'}, margin:'10px auto', display: 'flex', flexWrap: 'wrap'}}>
                            {/* <Grid container spacing={2}>
                                        <Grid item xs={6} md={5}>
                                            <img
                                                src={productDetails.images}
                                                alt=""
                                                style={{ maxWidth: '70%', margin: '20px 50px' }}
                                            />
                                        </Grid>
                            </Grid> */}
                        <Box sx={{marginLeft: '20px'}}>
                            <Typography sx={{fontSize:{ xs:'20px',sm:'3vw'},marginTop: '25px'}} >{productDetails.title}</Typography> 
                           
                            <Typography sx={{fontSize:{ xs:'15px',md:'20px'}}}>Description: {productDetails.text}</Typography>
                         
                        </Box> 
                </Box>
    </div>
    );
                        }
    export default Read;
/* 
       {userName ? (
       <Box> <TextField size="small"
       onChange={handleInp}
       value={clear}
       /><Button onClick={()=>{addComment(comm);clearInp()}} sx={{color: 'black'}}>Add comment</Button></Box>
       ):(null)} */
       
      


      /* <Box sx={{minWidth: '300px',width:'40%', margin: ' 10px auto', borderRadius: '15px'}}> <img  src={productDetails.images}
       alt=""  width="100%" style={{borderRadius: '15px'}}/></Box> */
       
       
      
    
     /* <Box sx={{display: 'flex', flexDirection: 'column'}}>
        {(comments.comments == undefined || comments.comments.length == 0)  ? (''):('Comments:')}
   {(comments.comments == undefined || comments.comments.length == 0)  ? (null):(comments.comments.map((item)=>{
     return (<Box component="div" display="inline" key={item.id} sx={{fontSize:'20px',border: '1px solid #E5E5E5',p:'10px',borderRadius:'5px', display:'inline'}}>{item.text} ({item.user}) 
       {(userName===item.user || userName===ADMIN) ? (<Button onClick={()=>deleteComm(item.id)}>Delete</Button>):(null) }
      
      </Box>)
   }))}
   </Box> */
