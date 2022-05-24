import React, { createContext, useContext, useReducer } from "react";
import { FAVORITES } from "../helpers/consts";
import {
  calcTotalPrice,
  getCountProductsInFavorites,
  calcSubPrice,
} from "../helpers/functions";

const FavoritesContext = createContext();

export const useFavorites = () => {
  return useContext(FavoritesContext);
};

const INIT_STATE = {
  Favorites: JSON.parse(localStorage.getItem("Favorites")),
  FavoritesLength: getCountProductsInFavorites(),
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case FAVORITES.GET_FAVORITES:
      return { ...state, Favorites: action.payload };
    case FAVORITES.GET_FAVORITES_LENGTH:
      return { ...state, FavoritesLength: action.payload };
    default:
      return state;
  }
}

const FavoritesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const getFavorites = () => {
    let Favorites = JSON.parse(localStorage.getItem("Favorites"));
    if (!Favorites) {
      localStorage.setItem(
        "Favorites",
        JSON.stringify({
          products: [],
          totalPrice: 0,
        })
      );
      Favorites = {
        products: [],
        totalPrice: 0,
      };
    }
    dispatch({
      type: FAVORITES.GET_FAVORITES,
      payload: Favorites,
    });
  };

  const addProductToFavorites = (product) => {
    let Favorites = JSON.parse(localStorage.getItem("Favorites"));

    if (!Favorites) {
      Favorites = {
        products: [],
        totalPrice: 0,
      };
    }

    let newProduct = {
      item: product,
      count: 1,
      subPrice: +product.price,
    };

    let productToFind = Favorites.products.filter(
      (elem) => elem.item.id === product.id
    );

    if (productToFind.length === 0) {
      Favorites.products.push(newProduct);
    } else {
      Favorites.products = Favorites.products.filter(
        (elem) => elem.item.id !== product.id
      );
    }

    Favorites.totalPrice = calcTotalPrice(Favorites.products);

    localStorage.setItem("Favorites", JSON.stringify(Favorites));

    dispatch({
      type: FAVORITES.GET_FAVORITES,
      payload: Favorites,
    });
  };

  const changeProductCount = (count, id) => {
    let Favorites = JSON.parse(localStorage.getItem("Favorites"));
    Favorites.products = Favorites.products.map((product) => {
      if (product.item.id === id) {
        product.count = count;
        product.subPrice = calcSubPrice(product);
      }
      return product;
    });
    Favorites.totalPrice = calcTotalPrice(Favorites.products);

    localStorage.setItem("Favorites", JSON.stringify(Favorites));

    dispatch({
      type: Favorites.GET_Favorites,
      payload: Favorites,
    });
  };

  function checkProductInFavorites(id) {
    let Favorites = JSON.parse(localStorage.getItem("Favorites"));
    if (Favorites) {
      let newFavorites = Favorites.products.filter(
        (elem) => elem.item.id === id
      );
      return newFavorites.length > 0 ? true : false;
    } else {
      Favorites = {
        product: [],
        totalPrice: 0,
      };
    }
  }

  function deleteFavoritesProduct(id) {
    let Favorites = JSON.parse(localStorage.getItem("Favorites"));
    Favorites.products = Favorites.products.filter(
      (elem) => elem.item.id !== id
    );

    Favorites.totalPrice = calcTotalPrice(Favorites.products);
    localStorage.setItem("Favorites", JSON.stringify(Favorites));
    getFavorites();
    dispatch({
      type: Favorites.GET_Favorites_LENGTH,
      payload: Favorites,
    });
  }

  return (
    <FavoritesContext.Provider
      value={{
        getFavorites,
        addProductToFavorites,
        changeProductCount,
        checkProductInFavorites,
        deleteFavoritesProduct,
        Favorites: state.Favorites,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
