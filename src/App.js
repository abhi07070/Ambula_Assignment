import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header';
import { TodoWrapper } from './components/ToDoList/TodoWrapper';
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
        <Route path='/'
          element={
            <>
              <Header />
              <Home />
            </>}
        />
        <Route path='/about'
          element={
            <>
              <Header />
              <About />
            </>}
        />
        <Route path='/contact'
          element={
            <>
              <Header />
              <Contact />
            </>}
        />
        <Route path='/cartDetail'
          element={
            <>
              <CardHeader />
              <CartDeatil />
            </>}
        />
        <Route path='/cart'
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
