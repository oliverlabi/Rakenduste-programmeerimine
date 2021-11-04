import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Cart from './pages/Cart.js';
import Home from './pages/Home.js';
import AddItem from './pages/AddItem.js';
import AddCategory from './pages/AddCategory.js';
import ShowCategories from './pages/ShowCategories.js';
import Navbar from './components/Navbar.js';
import AdminHome from './pages/AdminHome.js';
import SingleItem from './pages/SingleItem';
import EditItem from './pages/EditItem';

function App() {
  return (
    <div>
      <Navbar />
      <Route path='/' exact>
        <Home />
      </Route>
      <Route path='/cart'>
        <Cart />
      </Route>
      <Route path='/admin'>
        <AdminHome />
      </Route>
      <Route path='/item/:itemID'>
        <SingleItem />
      </Route>
      <Route path='/edit-item/:itemID'>
        <EditItem />
      </Route>
      <Route path='/add-item'>
        <AddItem />
      </Route>
      <Route path='/add-category'>
        <AddCategory />
      </Route>
      <Route path='/category-list'>
        <ShowCategories />
      </Route>
    </div>
  );
}

export default App;
