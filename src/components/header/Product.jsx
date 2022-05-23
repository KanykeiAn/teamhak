import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useProducts } from '../../contexts/ProductContextProvider';
import { Grid, Paper } from '@mui/material';

export default function FadeMenu() {
  const { fetchByParams } = useProducts();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Продукты
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >

        
        <MenuItem onClick={handleClose}>
        <Grid item md={3}>
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
        </MenuItem>


        {/* <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem> */}
      </Menu>
    </div>
  );
}