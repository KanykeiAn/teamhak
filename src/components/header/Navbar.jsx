import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContextProvider";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Badge } from "@mui/material";
import { getCountProductsInCart } from "../../helpers/functions";
import { useCart } from "../../contexts/CartContextProvider";
import { ADMIN } from "../../helpers/consts";
import Search from "./Search";

const pages = [
  { name: "About Us", link: "/about", id: 1 },
  { name: "Novelties", link: "/novelties", id: 2 },
  { name: "Products", link: "/products", id: 3 },
  { name: "Auth", link: "/auth", id: 4 },
];

const Navbar = () => {
  const { user, checkAuth, logout } = useAuth();

  const navigate = useNavigate();

  React.useEffect(() => {
    if (localStorage.getItem("token")) {
      checkAuth();
    }
  }, []);

  const {
    handleLogout,
    user: { email },
  } = useAuth();

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
      <Container maxWidth="xl" sx={{ background: "#f1f1f1" }}>
        <Toolbar disableGutters className="appbar">
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            <Link to="/">
              {" "}
              <img
                src="https://images.ctfassets.net/8cd2csgvqd3m/3o6RN06GNoDMAyJhVqftSZ/4822ba988465f56310bddec0f4151bd2/B_O_Black.svg"
                alt="kk"
              />
            </Link>
          </Typography>

          <Box sx={{ flexGrow: 1, ms: 2, display: { xs: "flex", md: "none" } }}>
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
                vertical: "bottom",
                horizontal: "left",
                color: "#262424",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <Box>
                {pages.map((page) => (
                  <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                    <Link to={page.link}>
                      <Typography
                        sx={{
                          ml: "0",
                          my: 1,
                          color: "#262424",
                          display: "block",
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
              justifyContent: "left",
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map((page) => (
              <Link to={page.link} key={page.id}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{
                    ml: "auto",
                    my: 2,
                    color: "#262424",
                    display: "block",
                    fontWeight: "bold",
                  }}
                >
                  {page.name}
                </Button>
              </Link>
            ))}

            {/* <Product /> */}

            {email == ADMIN ? (
              <Link to="/admin">
                <Button sx={{ my: 2, color: "#262424" }}>ADMIN PAGE</Button>
              </Link>
            ) : (
              <>
                <Link to="/cart">
                  <Button sx={{ my: 2, color: "#262424" }}>
                    <Badge badgeContent={count} color="error">
                      <ShoppingCartIcon
                        sx={{ fontSize: "30px", mt: "1px", mr: "10px" }}
                      />
                    </Badge>
                  </Button>
                </Link>

                
                <Link to="/favorites">
                  <Button sx={{ my: 2, color: "#262424" }}>
                    <Badge badgeContent={count} color="error">
                      <FavoriteBorderIcon
                        sx={{ fontSize: "30px", mt: "1px", mr: "10px" }}
                      />
                    </Badge>
                  </Button>
                </Link>
              </>
            )}
          </Box>

          <Search />

          <Box sx={{ flexGrow: 0 }}>
            {email ? (
              <Button
                sx={{ color: "#262424", fontWeight: "bold" }}
                onClick={handleLogout}
              >
                LOGOUT
              </Button>
            ) : (
              <Link to="/auth">
                <Button sx={{ color: "#262424", fontWeight: "bold" }}>
                  LOGIN
                </Button>
              </Link>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
