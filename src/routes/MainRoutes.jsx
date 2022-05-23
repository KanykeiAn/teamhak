import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import AuthPage from '../pages/AuthPage';
import HomePage from '../pages/HomePage';
import AdminPage from '../pages/AdminPage';
import CartPage from '../pages/CartPage';
import ProductDetailsPage from '../pages/ProductDetailsPage';
import EditProductPage from '../pages/EditProductPage';
import { useAuth } from '../contexts/AuthContextProvider';
import { ADMIN } from '../helpers/consts';
import AboutUsPage from '../pages/AboutUsPage';
import ProductsPage from '../pages/ProductsPage';
import PayCard from '../components/payCard/PayCard';


const MainRoutes = () => {
    const { user } = useAuth();
    const PUBLIC_ROUTES = [
        {
            link: '/auth',
            element: <AuthPage />,
            id: 1,
        },
        {
            link: '/',
            element: <HomePage />,
            id: 2,
        },
        {
            link: '/about',
            element: <AboutUsPage />,
            id: 3,
        },
        {
            link: '/products',
            element: <ProductsPage />,
            id: 4,
        },
        {
            link: '/admin',
            element: <AdminPage />,
            id: 5,
        },
        {
            link: '/cart',
            element: <CartPage />,
            id: 6,
        },
        {
            link: '/products/:id',
            element: <ProductDetailsPage />,
            id: 7,
          },
          {
            link: '/paycard',
            element: <PayCard />,
            id: 8,
          },
    ]



    const PRIVATE_ROUTES = [
        {
          link: '/admin',
          element: <AdminPage />,
          id: 1,
        },
        {
          link: '/edit/:id',
          element: <EditProductPage />,
          id: 2,
        },
      ];


    return (
        <Routes>
        {PUBLIC_ROUTES.map((item) => (
          <Route path={item.link} element={item.element} key={item.id} />
        ))}

        {user
          ? PRIVATE_ROUTES.map((item) => (
              <Route
                path={item.link}
                element={
                  user.email === ADMIN ? (
                    item.element
                  ) : (
                    <Navigate replace to="*" />
                  )
                }
                key={item.id}
              />
            ))
          : null}
      </Routes>
    );
};

export default MainRoutes;