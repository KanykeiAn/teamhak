import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContextProvider";
import { IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { useCart } from "../../contexts/CartContextProvider";
import { useAuth } from "../../contexts/AuthContextProvider";
import { ADMIN } from "../../helpers/consts";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import { useFavorites } from "../../contexts/FavoritesContextProvider";

export default function ProductCard({ item }) {
  const navigate = useNavigate();

  const { addProductToCart, checkProductInCart } = useCart();
  const { addProductToFavorites, checkProductInFavorites } = useFavorites();

  // const {
  //   handleLogout,
  //   user: { email },
  // } = useAuth();
  // console.log(email);

  return (
    <Card sx={{ maxWidth: 330 }} className="cardd" >
      <CardMedia
        component="img"
        height="250"
        image={item.images}
        alt={item.title}
        onClick={() => navigate(`/novella/${item.id}`)}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>

        {/* <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ color: "green", fontWeight: "700" }}
        >
          {item.price}c
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          onClick={() => navigate(`/products/${item.id}`)}
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: "3",
            WebkitBoxOrient: "vertical",
          }}
        >
          {item.description}
        </Typography> */}
      </CardContent>
      <CardActions>
        {/* {user === ADMIN ? ( */}
          <>
            <Button size="small" onClick={() => deleteProduct(item.id)}>
              Delete
            </Button>

            <Button size="small" onClick={() => saveEditedProduct(item.id)}>
              Edit
            </Button>
          </>
        ) : (
          <>
            <IconButton onClick={() => addProductToCart(item)}>
              <ShoppingCartIcon
                color={checkProductInCart(item.id) ? "primary" : ""}
              />
            </IconButton>

            <IconButton onClick={() => addProductToFavorites(item)}>
              <FavoriteBorder
                color={checkProductInFavorites(item.id) ? "primary" : ""}
              />
            </IconButton>
          </>
        )
      </CardActions>
    </Card>
  );
}
