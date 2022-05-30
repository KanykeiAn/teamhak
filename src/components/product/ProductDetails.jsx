import { Button, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useProducts } from '../../contexts/ProductContextProvider';
import { useAuth } from '../../contexts/AuthContextProvider';
import { ADMIN } from "../../helpers/consts";


const ProductDetails = () => {

  const {id} = useParams();
  const {userName}=useAuth()
  // console.log(id)
  const {getProductDetails, productDetails, getComments, comments, addComment, deleteComm} = useProducts();

  useEffect(() => {
    getProductDetails(id);
    getComments(id)
  }, []);

  const [comm, setComm] = useState('')

  const [clear, setClear] = useState("")
  const navigate = useNavigate();

  useEffect(() => {
    getProductDetails(id);
    getComments(id)
  }, [comments]);




  const handleInp = (e) => {
let id2 = Number(id)
    let obj = {
      product:id2,
      text: e.target.value
    }
    setComm(obj)
    setClear(e.target.value)
  }

  const clearInp =(e)=>{
    setClear('')
  }


  return (
    <div>
    <Box sx={{width:{xs:'100%',sm :'85%'}, margin:'10px auto', display: 'flex', flexWrap: 'wrap'}}>
          <Grid container spacing={2}>
                    <Grid item xs={6} md={5}>
                        <img
                            src={productDetails.images}
                            alt=""
                            style={{ maxWidth: '70%', margin: '20px 50px' }}
                        />
                    </Grid>
          </Grid>
      <Box sx={{marginLeft: '20px'}}>

      <Box className='grid'>
        <Grid className='gridleft'>

            <Grid className='gridtitle'>
            <div className='jkjk'>hhh</div>
            {/* <Typography sx={{fontSize:{ xs:'20px',md:'2vw'}}}>{productDetails.images}</Typography> */}
            </Grid>

            <Grid className='gridaut' sx={{marginTop: '25px'}}>
            <Typography sx={{paddingBottom: '15px'}}>Release date: {productDetails.release_date}</Typography>
            <Typography sx={{paddingBottom: '15px'}}>Author name:: {productDetails.author_name}</Typography>
            <Typography >Author last name {productDetails.author_last_name}</Typography>
            </Grid>

            </Grid>


            <Grid className='gridright'>
            <Grid className='griddec'>
            <Typography sx={{fontSize:{ xs:'20px',sm:'3vw'},marginBottom: '25px'}} >{productDetails.title}</Typography>
            <Typography sx={{fontSize:{ xs:'15px',md:'20px'},marginBottom: '25px'}}>{productDetails.description}</Typography>
            </Grid>



            <Grid className='gridbut'>
            <Button sx={{fontSize:{ xs:'40px',md:'2vw'}}} onClick={()=>navigate('/read')}>Начать читать</Button>
            <Typography sx={{fontSize:{ xs:'20px',md:'2vw'}}}>{productDetails.price}$</Typography>
            </Grid>

        </Grid>
      </Box>
        
       

       {userName ? (
       <Box> <TextField size="small"
       onChange={handleInp}
       value={clear}
       /><Button onClick={()=>{addComment(comm);clearInp()}} sx={{color: 'black'}}>Add comment</Button></Box>
       ):(null)}
       
       </Box>


       <Box sx={{minWidth: '300px',width:'40%', margin: ' 10px auto', borderRadius: '15px'}}> <img  src={productDetails.images}
       alt=""  width="100%" style={{borderRadius: '15px'}}/></Box>
       
       
      
    </Box>
     <Box sx={{display: 'flex', flexDirection: 'column'}}>
        {(comments.comments == undefined || comments.comments.length == 0)  ? (''):('Comments:')}
   {(comments.comments == undefined || comments.comments.length == 0)  ? (null):(comments.comments.map((item)=>{
     return (<Box component="div" display="inline" key={item.id} sx={{fontSize:'20px',border: '1px solid #E5E5E5',p:'10px',borderRadius:'5px', display:'inline'}}>{item.text} ({item.user}) 
       {(userName===item.user || userName===ADMIN) ? (<Button onClick={()=>deleteComm(item.id)}>Delete</Button>):(null) }
      
      </Box>)
   }))}
   </Box>
   </div>
  );
};

export default ProductDetails;