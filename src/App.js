import Fotter from './components/footer/Fotter';
import Navigation from './components/navigation/Navigation';
import Product from './components/product/Product';
import './index.css'
import HomePage from './pages/homePage/HomePage';

function App() {
  return (
    <div className=''>
      <Navigation />
      <div>
        {/* <HomePage /> */}
        <Product />
      </div>
      <div>
        <Fotter />
      </div>
    </div>
  );
}

export default App;
