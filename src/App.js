import Cart from './components/cart/Cart';
import CheckOut from './components/checkout/CheckOut';
import Fotter from './components/footer/Fotter';
import Navigation from './components/navigation/Navigation';
import Order from './components/order/Order';
import OrderDetail from './components/order/OrderDetail';
import Product from './components/product/Product';
import ProductDetail from './components/productDetail/ProductDetail';
import './index.css'
import HomePage from './pages/homePage/HomePage';

function App() {
  return (
    <div className=''>
      <Navigation />
      <div>
        {/* <HomePage /> */}
        {/* <Product /> */}
        {/* <ProductDetail /> */}
        {/* <Cart /> */}
        {/* <CheckOut /> */}
        {/* <Order /> */}
        <OrderDetail />
      </div>
      <div>
        <Fotter />
      </div>
    </div>
  );
}

export default App;
