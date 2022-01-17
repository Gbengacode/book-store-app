import { Routes, Route } from 'react-router-dom';
import BookList from './pages/BookList';
import Categories from './pages/Categories';
import './asset/main.css';

function App() {
  return (

    <Routes>
      <Route path="/" element={<BookList />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>

  );
}

export default App;
