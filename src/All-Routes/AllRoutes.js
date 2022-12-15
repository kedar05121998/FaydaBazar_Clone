import {Routes, Route} from 'react-router-dom';
import AdminForm from '../Pages/Admin/AdminForm';
import Dashboard from '../Pages/Admin/Dashboard';
import Cart from '../Pages/Cart/Cart';
import Checkout from '../Pages/Checkout/Checkout';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import AllProduct from '../Pages/Product/AllProduct';
import SingleProduct from '../Pages/Product/SingleProduct';
import Signup from '../Pages/Signup/Signup';

/*
Dont make any changes to this file
*/

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/product" element={<AllProduct />} />
            <Route path="/product/:id" element={<SingleProduct />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/adminForm" element={<AdminForm />} />
        </Routes>
    );
}

export default AllRoutes;