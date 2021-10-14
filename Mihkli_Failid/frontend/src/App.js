import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Cart from './pages/Cart.js';
import Home from './pages/Home.js';
import AddItem from './pages/AddItem.js';
import AddCategory from './pages/AddCategory.js';
import ShowCategories from './pages/ShowCategories.js';
import Navbar from './components/Navbar.js';

function App() {
  return (
    <div>
      <Navbar />
      <Route path='/' exact>
        <Home />
      </Route>
      <Route path='/cart' exact>
        <Cart />
      </Route>
      <Route path='/add-item' exact>
        <AddItem />
      </Route>
      <Route path='/add-category' exact>
        <AddCategory />
      </Route>
      <Route path='/category-list' exact>
        <ShowCategories />
      </Route>
    </div>
  );
}

export default App;
