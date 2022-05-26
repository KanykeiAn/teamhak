import React, { createContext, useContext, useReducer, useState } from 'react';

import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom';
import { ACTIONS, JSON_API_PRODUCTS, JSON_API_PRODUCTS2 } from '../helpers/consts'

export const productContext = createContext();

export const useProducts = () => {
  return useContext(productContext);
};

const INIT_STATE = {
  products: [],
  productDetails: {},
  comments:[],
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTIONS.GET_PRODUCTS:
      return { ...state, products: action.payload };
    case ACTIONS.GET_PRODUCT_DETAILS:
      return { ...state, productDetails: action.payload };
      case ACTIONS.GET_COMMENTS:
      return { ...state, comments: action.payload };
      case ACTIONS.GET_CATEGORY:
      return { ...state, categorys: action.payload };
    default:
      return state
  }
}

const ProductContextProvider = ({ children }) => {

  const location = useLocation();
  const navigate = useNavigate();

  const [page, setPage] = useState(1)
  const [state, dispatch] = useReducer(reducer, INIT_STATE)

  const [count, setCount] = useState(1)

  const getProducts = async () => {
    let loc=location.pathname
    let url = `${loc}?page=${page}`
    navigate(url)
    const { data } = await axios(`${JSON_API_PRODUCTS}?page=${page}`)
    setCount(Math.ceil(data.count / 3))
    dispatch({
      type: ACTIONS.GET_PRODUCTS,
      payload: data
    })


  }
  const getProductDetails = async (id) => {
    const { data } = await axios(`${JSON_API_PRODUCTS}${id}`);
    dispatch({
      type: ACTIONS.GET_PRODUCT_DETAILS,
      payload: data,
    });
  };

  const getText = async (id) => {
    const { data } = await axios(`${JSON_API_PRODUCTS}${id}`);
    dispatch({
      type: ACTIONS.GET_PRODUCT_DETAILS,
      payload: data,
    });
  };


  const addProduct = async (newProduct) => {

    let token = JSON.parse(localStorage.getItem('token'));

    const config ={
      Authorization: `Bearer ${token.access}`,
      headers: {'Content-Type':'multipart/form-data',
      
    },
  };
  console.log(newProduct);

    let newProduct2 = new FormData()
    newProduct2.append('title', newProduct.title)
    newProduct2.append('genre', newProduct.genre)
    newProduct2.append('price', newProduct.price)
    newProduct2.append('description', newProduct.description)
    newProduct2.append('release_date', newProduct.release_date)
    newProduct2.append('images', newProduct.images)

    await axios.post(`${JSON_API_PRODUCTS}`, newProduct2,config)
    getProducts()
  }

  const getCategory = async () => {

    const { data } = await axios(
      `${JSON_API_PRODUCTS}genres/`
    );
    // console.log(data)

    dispatch({
      type: ACTIONS.GET_CATEGORY,
      payload: data,
    });
  };

  const deleteProduct = async (id) => {
    let token = JSON.parse(localStorage.getItem('token'));
    const Authorization = `Bearer ${token.access}`;

    const config ={
      headers: {'Content-Type':'multipart/form-data',
      Authorization: `Bearer ${token.access}`,

    },
    };
    await axios.delete(`${JSON_API_PRODUCTS}${id}`,config);
    getProducts();
  };

  const saveEditedProduct = async (newProduct) => {
    let token = JSON.parse(localStorage.getItem('token'));


    const Authorization = `Bearer ${token.access}`;


    // const config ={
    //     headers: {'Content-Type':'multipart/form-data'}
    //   }

    let newEditProduct = new FormData()
      newEditProduct.append('title', newProduct.title)
      newEditProduct.append('genre', newProduct.genre)
      newEditProduct.append('price', newProduct.price)
      newEditProduct.append('description', newProduct.description)
      newEditProduct.append('id', newProduct.id)
      if(typeof(newProduct.images) !== 'string'){
      newEditProduct.append('images', newProduct.images)
      }
      let id = newEditProduct.get('id')
      
      
    await axios.patch(`${JSON_API_PRODUCTS}${id}`, newEditProduct, {
        headers: { Authorization },
      });
    getProducts()
  };

  const fetchByParams = async(query, value)=>{
if(value==='all'){
  getProducts()
}else{
    
  const { data } = await axios(`${JSON_API_PRODUCTS}filtration/?${query}=${value}`)

  dispatch({
    type: ACTIONS.GET_PRODUCTS,
    payload: data
  })
}
  }

  const searchFilter = async(value)=>{
  
    const { data } = await axios(`${JSON_API_PRODUCTS}search/?q=${value}`)
  
    dispatch({
      type: ACTIONS.GET_PRODUCTS,
      payload: data
    })
    

  }

  const toggleLike = async(id)=>{

     let token = JSON.parse(localStorage.getItem('token'));
     const Authorization = `Bearer ${token.access}`;
 
     const config ={
       headers: {'Content-Type':'multipart/form-data',
       Authorization: `Bearer ${token.access}`,
 
     },
     };

     await axios(`${JSON_API_PRODUCTS}${id}/toggle_like/`,config)
     getProducts()
  }
  const getComments = async(id)=>{
    let token = JSON.parse(localStorage.getItem('token'));
    

    const config ={
      headers: {'Content-Type':'multipart/form-data',
      // Authorization: `Bearer ${token.access}`,

    },
    };
    let {data}=await axios(`${JSON_API_PRODUCTS}${id}`)

    dispatch({
      type: ACTIONS.GET_COMMENTS,
      payload: data
    })

  }

  const addComment = async(comm)=>{
    let token = JSON.parse(localStorage.getItem('token'));

 console.log(comm);
    const config ={
      headers: {'Content-Type':'multipart/form-data',
      Authorization: `Bearer ${token.access}`,

    },
    };
 let newComm = new FormData()

 newComm.append('product', comm.product)
 newComm.append('text', comm.text)


    await axios.post(`${JSON_API_PRODUCTS2}comments/`,newComm,config)

  }

  return <productContext.Provider value={{
    products: state.products,
    productDetails: state.productDetails,
    comments: state.comments,
    addProduct,
    getProducts,
    deleteProduct,
    saveEditedProduct,
    getProductDetails,
    page,
    setPage,
    fetchByParams,
    count,
    searchFilter,
    toggleLike,
    getComments,
    addComment,
    getCategory,
    getText,
  }}
  >{children}</productContext.Provider>
};

export default ProductContextProvider;