import { Route, Routes } from "react-router-dom";
import UserLayout from "./components/Layout/UserLayout";
import Home from "./pages/Home";
import LocomotiveScroll from "locomotive-scroll";
import { Toaster } from "sonner";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import CollectionPage from "./pages/CollectionPage";

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
                </Route>

                <Route>{/* Admin Layout */}</Route>
            </Routes>
        </>
    );
}
