// import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "./components/header/Navbar";
import AuthContextProvider from "./contexts/AuthContextProvider";
import CartContextProvider from "./contexts/CartContextProvider";
import FavoritesContextProvider from "./contexts/FavoritesContextProvider";
import ProductContexProvider from "./contexts/ProductContextProvider";
import MainRoutes from "./routes/MainRoutes";

function App() {
  return (
    <>
      <AuthContextProvider>
        <ProductContexProvider>
          <CartContextProvider>
            <FavoritesContextProvider>
              <Navbar />
              <MainRoutes />
            </FavoritesContextProvider>
          </CartContextProvider>
        </ProductContexProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
