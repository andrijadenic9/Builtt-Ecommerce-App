import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';
import { ROUTECONFIG } from './config/routes';

function App() {
    return (
        <Router>
            <Routes>
                <Route path={ROUTECONFIG.LOGIN.url} element={<LoginPage />} />
                <Route path={ROUTECONFIG.PRODUCTS.url} element={<ProductsPage />} />
                <Route path={ROUTECONFIG.CART.url} element={<CartPage />} />
            </Routes>
        </Router>
    );
}

export default App;
