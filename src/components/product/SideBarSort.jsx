import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import React from 'react';
import { useProducts } from '../../contexts/ProductContextProvider';

const SideBarSort = ({state}) => {


  const { fetchByParams } = useProducts();


 if(state==='price'){
   return(<FormControl >

    <FormLabel id="demo-radio-buttons-group-label">Price</FormLabel>
    <RadioGroup
    className='nhnh'
      aria-labelledby="demo-radio-buttons-group-label"
      defaultValue="all"
      name="radio-buttons-group"
      onChange={(e) => fetchByParams(state, e.target.value)}
    >

    <FormControlLabel
     value="all"
      control={<Radio color="error" />}
       label="All"   />

      <FormControlLabel
        value="desc"
        control={<Radio color="error" />}
        label="from largest to smallest"
       
      />

      <FormControlLabel
        value="asc"
        control={<Radio color="error" />}
        label="from smallest to largest"
        
      />

    </RadioGroup>
    </FormControl> )
    }else if(state==='genres'){
    return(
    <FormControl >
      <FormLabel id="demo-radio-buttons-group-label">Genres</FormLabel>
      <RadioGroup
      className='nhnh'
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="all"
        name="radio-buttons-group"
        onChange={(e) => fetchByParams(state, e.target.value)}
      >
        <FormControlLabel
         value="all"
          control={<Radio color="error" />}
           label="All"   />

        <FormControlLabel
          value="Art"
          control={<Radio color="error" />}
          label="Art"
         
        />

        <FormControlLabel
          value="Fantasy"
          control={<Radio color="error" />}
          label="Fantasy"
          
        />

        <FormControlLabel
          value="Sports"
          control={<Radio color="error" />}
          label="Sports"
          
        />
        </RadioGroup>
        </FormControl>
   )
  }
}
//  } else if(state==='country'){
//    return(
//   <FormControl >
//   <FormLabel id="demo-radio-buttons-group-label">Country</FormLabel>
//   <RadioGroup
//     aria-labelledby="demo-radio-buttons-group-label"
//     defaultValue="all"
//     name="radio-buttons-group"
//     onChange={(e) => fetchByParams(state, e.target.value)}
//   >
//     <FormControlLabel
//      value="all"
//       control={<Radio color="error" />}
//        label="All"   />

//     <FormControlLabel
//       value="russia"
//       control={<Radio color="error" />}
//       label="Russia"
     
//     />

//     <FormControlLabel
//       value="usa"
//       control={<Radio color="error" />}
//       label="Usa"
      
//     />

//     <FormControlLabel
//       value="japan"
//       control={<Radio color="error" />}
//       label="Japan"
      
//     />
//   </RadioGroup>
// </FormControl>
//    )
//  } else{

//   return(
//   <></>
  // <FormControl >

  //   <FormLabel id="demo-radio-buttons-group-label">Price</FormLabel>
  //   <RadioGroup
  //     aria-labelledby="demo-radio-buttons-group-label"
  //     defaultValue="all"
  //     name="radio-buttons-group"
  //     onChange={(e) => fetchByParams('price', e.target.value)}
  //   >
  //     <FormControlLabel
  //      value="all"
  //       control={<Radio color="error" />}
  //        label="all"   />

  //     <FormControlLabel
  //       value="desc"
  //       control={<Radio color="error" />}
  //       label="from largest to smallest"
       
  //     />

  //     <FormControlLabel
  //       value="asc"
  //       control={<Radio color="error" />}
  //       label="from smallest to largest"
        
  //     />

  //   </RadioGroup>
  // </FormControl>
//    )

//  }
// };

export default SideBarSort;