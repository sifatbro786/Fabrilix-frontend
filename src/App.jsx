import { Route, Routes } from "react-router-dom";
import UserLayout from "./components/Layout/UserLayout";
import Home from "./pages/Home";
import LocomotiveScroll from "locomotive-scroll";

export default function App() {
    const _locomotiveScroll = new LocomotiveScroll();

    return (
        <Routes>
            <Route path="/" element={<UserLayout />}>
                <Route index element={<Home />} />
            </Route>

            <Route>{/* Admin Layout */}</Route>
        </Routes>
    );
}
