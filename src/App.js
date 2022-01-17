import { Routes, Route } from 'react-router-dom';
import BookList from './pages/BookList';
import Categories from './pages/Categories';
import './asset/main.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;
