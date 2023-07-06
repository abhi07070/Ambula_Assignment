import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header';
import { TodoWrapper } from './components/ToDoList/TodoWrapper';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
