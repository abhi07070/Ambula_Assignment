import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import CartDeatil from './components/ShoppingCart/CartDeatil';
import Cart from './components/ShoppingCart/Cart';
import CardHeader from './components/ShoppingCart/CardHeader';

function App() {

  return (
    <>

      <Routes>
        <Route path='/Ambula_Assignment/'
          element={
            <>
              <Header />
              <Home />
            </>}
        />
        <Route path='/Ambula_Assignment/about'
          element={
            <>
              <Header />
              <About />
            </>}
        />
        <Route path='/Ambula_Assignment/contact'
          element={
            <>
              <Header />
              <Contact />
            </>}
        />
        <Route path='/Ambula_Assignment/cartDetail'
          element={
            <>
              <CardHeader />
              <CartDeatil />
            </>}
        />
        <Route path='/Ambula_Assignment/cart'
          element={
            <>
              <CardHeader />
              <Cart />
            </>}
        />
      </Routes>

    </>
  );
}

export default App;
