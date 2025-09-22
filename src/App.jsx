import { Route, Routes } from "react-router-dom";
import UserLayout from "./components/Layout/UserLayout";
import Home from "./pages/Home";
import LocomotiveScroll from "locomotive-scroll";
import { Toaster } from "sonner";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import CollectionPage from "./pages/CollectionPage";
import ProductDetails from "./components/Products/ProductDetails";
import Checkout from "./components/Cart/Checkout";
import OrderConfirmationPage from "./pages/OrderConfirmationPage";
import OrderDetailsPage from "./pages/OrderDetailsPage";
import MyOrdersPage from "./pages/MyOrdersPage";
import AdminLayout from "./components/Admin/AdminLayout";
import AdminHomePage from "./pages/admin/AdminHomePage";
import UserManagement from "./pages/admin/UserManagement";
import ProductManagement from "./pages/admin/ProductManagement";
import EditProductPage from "./pages/admin/EditProductPage";
import OrderManagement from "./pages/admin/OrderManagement";

export default function App() {
    const _locomotiveScroll = new LocomotiveScroll();

    return (
        <>
            <Toaster position="top-right" richColors toastOptions={{ duration: 2000 }} />
            <Routes>
                <Route path="/" element={<UserLayout />}>
                    <Route index element={<Home />} />
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="collections/:collection" element={<CollectionPage />} />
                    <Route path="product/:id" element={<ProductDetails />} />
                    <Route path="checkout" element={<Checkout />} />
                    <Route path="order-confirmation" element={<OrderConfirmationPage />} />
                    <Route path="order/:id" element={<OrderDetailsPage />} />
                    <Route path="my-orders" element={<MyOrdersPage />} />
                </Route>

                {/* //? Admin Layout */}
                <Route path="/admin" element={<AdminLayout />}>
                    <Route index element={<AdminHomePage />} />
                    <Route path="users" element={<UserManagement />} />
                    <Route path="products" element={<ProductManagement />} />
                    <Route path="product/:id/edit" element={<EditProductPage />} />
                    <Route path="orders" element={<OrderManagement />} />
                </Route>
            </Routes>
        </>
    );
}
