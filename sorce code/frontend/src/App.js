
import './App.css';
import Navbar from './component/Navbar';
import {Routes , Route} from 'react-router-dom'
import About from './About'
import Cart from './Cart'
import Login from './Login';
import SignUp from "./SignUp"
import NewProduct from "./NewProduct"
import Detail from './Detail';
import Home from './Home';
import Order from './component/Order';
import Payment from './Payment';
import StripePayment from './StripePayment';
import Product from './adminPanel';
import Setting from './Setting';

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/product' element={<NewProduct />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/cart/*' element={<Cart />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/signup' element={<SignUp />} />
        <Route exact path='/:id' element={<Detail /> } />
        <Route exact path='/order' element={<Order /> } />
        <Route exact path='/payment' element={<Payment/>}/>
        <Route exact path='/stripePayment' element={<StripePayment/>}/>
        <Route exact path='/admin' element={<Product/>}/>
        <Route exact path='/setting' element={<Setting/>}/>
      </Routes>
      
      
    

    </>
  );
}

export default App;
