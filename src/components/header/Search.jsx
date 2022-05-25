import { InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';
import { useProducts } from '../../contexts/ProductContextProvider';

const Search = () => {
  const { searchFilter } = useProducts();
  return (
     <TextField
     className="search"
        id="input-with-icon-textfield"
        label="Search..."
        // value={search}
        
        onChange={(e) => searchFilter(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment 
            sx={{cursor: 'pointer'}}
            >
              <SearchIcon  />
            </InputAdornment>
          ),
        }}
        variant="standard"
      /> 
  );
};

export default Search;


// import { Grid, InputAdornment, Paper, TextField } from '@mui/material';
// import React, { useEffect, useState } from 'react';
// import { useSearchParams } from 'react-router-dom';
// import { useProducts } from '../../contexts/ProductContextProvider';
// import SearchIcon from '@mui/icons-material/Search';

// const Search = () => {

//     const { fetchByParams } = useProducts();
//   const [searchParams, setSearchParams] = useSearchParams();

//   const [search, setSearch] = useState(searchParams.get('q') || '');

//   useEffect(() => {
//     setSearchParams({
//       q: search,
//     });
//   }, [search]);

//     return (
//     <Grid  className="search">
//       <Paper elevation={5} >
//         <TextField
//           fullWidth
//           id="input-with-icon-textfield"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           InputProps={{
//             startAdornment: (
//               <InputAdornment position="start">
//                 <SearchIcon />
//               </InputAdornment>
//             ),
//           }}
//           variant="standard"
//         />
//        </Paper>
//     </Grid>
//     );
// };

// export default Search;