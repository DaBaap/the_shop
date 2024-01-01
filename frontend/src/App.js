import './css/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header.js'
import Footer from './components/footer.js'
import ShopFrontPage from './pages/ShopFrontPage.js'
import ItemsPage from './pages/AllItemsPage.js';
import ItemPage from './pages/ItemPage.js';
import Orders from './pages/AllOrdersPage.js';
import Order from './pages/OrderPage.js';
import AllCustomersPage from './pages/AllCustomersPage.js';
import CustomerPage from './pages/CustomerPage.js';
import NotFoundPage from './pages/NotFoundPage.js';
function App() {
  return (
    <Router>
      <div className="App" style={{ backgroundColor: '#d4d3d3' }}>
        <Header />
        <Routes>
          <Route path='/' exact element={<ShopFrontPage />} />
          <Route path='/categories' exact element={<ShopFrontPage />} />
          <Route path='/items' exact element={<ItemsPage />} />
          <Route path='/items/:category_id' element={<ItemsPage />} />
          <Route path='/item/:product_id' element={<ItemPage />} />
          <Route path='/orders' exact element={<Orders />} />
          <Route path='/order/:order_id' exact element={<Order />} />
          <Route path='/customers' exact element={<AllCustomersPage />} />
          <Route path='/customer/:customer_id' exact element={<CustomerPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
