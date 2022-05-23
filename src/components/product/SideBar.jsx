import { Grid, InputAdornment, Paper, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { useSearchParams } from 'react-router-dom';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useProducts } from '../../contexts/ProductContextProvider';

const SideBar = () => {
  const { fetchByParams } = useProducts();


  return (
    <Grid item md={2} className="side">
      <Paper elevation={5} sx={{ p: 2 }}>
        <Grid>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Продукт</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="all"
              name="radio-buttons-group"
              onChange={(e) => fetchByParams('type', e.target.value)}
            >
              <FormControlLabel value="all" control={<Radio />} label="все" />

              <FormControlLabel
                value="Макарон"
                control={<Radio />}
                label="Макарон"
              />

              <FormControlLabel
                value="Торты"
                control={<Radio />}
                label="Торты"
              />

              <FormControlLabel
                value="Мороженое"
                control={<Radio />}
                label="Мороженое"
              />

              <FormControlLabel
                value="Напитки"
                control={<Radio />}
                label="Напитки"
              />
            </RadioGroup>
          </FormControl>
        </Grid>

        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Цена</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="all"
            name="radio-buttons-group"
            onChange={(e) => fetchByParams('price_lte', e.target.value)}
          >
            <FormControlLabel value="all" control={<Radio />} label="все" />
            <FormControlLabel
              value="200"
              control={<Radio />}
              label="меньше 200с"
            />

            <FormControlLabel
              value="500"
              control={<Radio />}
              label="меньше 500с"
            />

            <FormControlLabel
              value="1300"
              control={<Radio />}
              label="меньше 1300с"
            />
          </RadioGroup>
        </FormControl>
      </Paper>
    </Grid>
  );
};

export default SideBar;