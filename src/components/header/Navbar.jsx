import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link,NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContextProvider';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import { Badge } from '@mui/material';
import { getCountProductsInCart } from '../../helpers/functions';
import { useCart } from '../../contexts/CartContextProvider';
import { ADMIN } from '../../helpers/consts';
import Search from './Search';


const pages = [
  { name: 'О нас', link: '/about', id: 1 },
  { name: 'Продукты', link: '/products', id: 2 }

];


const Navbar = () => {
  const {
    handleLogout,
    user: { email },
  } = useAuth();

  const { user, checkAuth, logout } = useAuth(); 
 
  React.useEffect(() => { 
    if (localStorage.getItem('token')) { 
      checkAuth(); 
    } 
  }, []); 
 
  const navigate = useNavigate(); 


  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const { addProductToCart } = useCart();
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    setCount(getCountProductsInCart);
  }, [addProductToCart]);

  return (
    <AppBar position="static" elevation={3}>
      <Container maxWidth="xl" sx={{ background: '#263238'
   }} >
        <Toolbar disableGutters className="appbar">
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
          <Link to="/"> <p className='logo'>Sweetie</p></Link>
           
          </Typography>

          <Box sx={{ flexGrow: 1, ms: 2, display: { xs: 'flex', md: 'none' } }}>
            <IconButton

              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
                color: '#efebe9',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <Box>
                {pages.map((page) => (
                  <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                    <Link to={page.link}>
                      <Typography
                        sx={{
                          ml: '0',
                          my: 1,
                          color: '#efebe9',
                          display: 'block',
                        }}
                      >
                        {page.name}
                      </Typography>
                    </Link>
                  </MenuItem>
                ))}
              </Box>
              
            </Menu>
          </Box>
          <Box
            sx={{
              justifyContent: 'left',
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
            }}
          >
            {pages.map((page) => (
              <Link to={page.link} key={page.id}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{
                    ml: 'auto',
                    my: 2,
                    color: '#efebe9',
                    display: 'block',
                    fontWeight: 'bold',
                  }}
                >
                  {page.name}
                </Button>
              </Link>
            ))} 

              {/* <Product /> */}

            {email == ADMIN ? (
              <Link to="/admin">
                <Button sx={{ my: 2, color: '#efebe9' }}>ADMIN PAGE</Button>
              </Link>
            ) : (
              <Link to="/cart">
                <Button sx={{ my: 2, color: 'black' }}>
                  <Badge badgeContent={count} color="error">
                    <img className='lll' src="https://cdn-icons-png.flaticon.com/512/4290/4290854.png" alt="" />
                  </Badge>
                </Button>
              </Link>
            )}
          </Box>

            <Search />

          <Box sx={{ flexGrow: 0 }}>
              {user ? ( 
                <Button 
                  color="inherit" 
                  sx={{ color: 'white' }} 
                  onClick={() => { 
                    logout(); 
                    navigate('/login'); 
                  }} 
                > 
                  Logout 
                </Button> 
              ) : ( 
                <> 
                  <NavLink to="/login"> 
                    <Button color="inherit" sx={{ color: 'white' }}> 
                      Login 
                    </Button> 
                  </NavLink> 
    
                  <NavLink to="/register"> 
                    <Button color="inherit" sx={{ color: 'white' }}> 
                      Register 
                    </Button> 
                  </NavLink> 
                </> 
              )} 
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
