import { FormControl} from '@mui/material';
import React from 'react';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { Box } from '@mui/system';
import SideBarSort from './SideBarSort';

// import SearchIcon from '@mui/icons-material/Search';
import { useProducts } from '../../contexts/ProductContextProvider';


const SideBar = () => {


  const [state, setState] = React.useState(''); 

  const handleChange = (event) => {
    setState(event.target.value);
  }

  // const { searchFilter } = useProducts();



  return (
    <>
        <Box sx={{display: 'flex', flexDirection: 'column'}}>
     
    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Filter</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={state}
          onChange={handleChange}
        >
          <MenuItem value={'price'}>Price</MenuItem>
          <MenuItem value={'genres'}>Genres</MenuItem>
        </Select>
      </FormControl>
     

    
    <SideBarSort state={state} />


    </Box>
 </>
  );
};

export default SideBar;