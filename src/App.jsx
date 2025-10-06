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
import PublicRoute from "./routes/PublicRoute";
import AdminRoute from "./routes/AdminRoute";
import PrivateRoute from "./routes/PrivateRoute";
import AddProduct from "./pages/admin/AddProduct";
import ScrollToTop from "./components/Common/ScrollToTop";
import NotFoundPage from "./components/Common/NotFoundPage";
import AboutUsPage from "./pages/AboutUsPage";
import FAQPage from "./pages/FAQPage";
import TermsAndConditionsPage from "./pages/TermsAndConditionsPage";
import ContactUsPage from "./pages/ContactUsPage";

export default function App() {
    // const _locomotiveScroll = new LocomotiveScroll();

    return (
        <>
            <Toaster position="top-right" richColors toastOptions={{ duration: 2000 }} />
            <ScrollToTop />

            <Routes>
                <Route path="/" element={<UserLayout />}>
                    <Route index element={<Home />} />
                    {/* //? public routes */}
                    <Route
                        path="login"
                        element={
                            <PublicRoute>
                                <Login />
                            </PublicRoute>
                        }
                    />
                    <Route
                        path="register"
                        element={
                            <PublicRoute>
                                <Register />
                            </PublicRoute>
                        }
                    />
                    <Route path="collections/:collection" element={<CollectionPage />} />
                    <Route path="product/:id" element={<ProductDetails />} />

                    <Route path="/about" element={<AboutUsPage />} />
                    <Route path="/faq" element={<FAQPage />} />
                    <Route path="/terms" element={<TermsAndConditionsPage />} />
                    <Route path="/contact" element={<ContactUsPage />} />

                    {/* //? private routes */}
                    <Route
                        path="profile"
                        element={
                            <PrivateRoute>
                                <Profile />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="checkout"
                        element={
                            <PrivateRoute>
                                <Checkout />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="order-confirmation"
                        element={
                            <PrivateRoute>
                                <OrderConfirmationPage />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="order/:id"
                        element={
                            <PrivateRoute>
                                <OrderDetailsPage />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="my-orders"
                        element={
                            <PrivateRoute>
                                {" "}
                                <MyOrdersPage />{" "}
                            </PrivateRoute>
                        }
                    />
                </Route>

                {/* //? admin routes */}
                <Route
                    path="/admin"
                    element={
                        <AdminRoute>
                            <AdminLayout />
                        </AdminRoute>
                    }
                >
                    <Route index element={<AdminHomePage />} />
                    <Route path="users" element={<UserManagement />} />
                    <Route path="products" element={<ProductManagement />} />
                    <Route path="addProduct" element={<AddProduct />} />
                    <Route path="product/:id/edit" element={<EditProductPage />} />
                    <Route path="orders" element={<OrderManagement />} />
                </Route>

                {/* //? 404 Route */}
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </>
    );
}
