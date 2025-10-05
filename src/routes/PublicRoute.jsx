import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function PublicRoute({ children }) {
    const { user } = useSelector((state) => state.auth);
    return user ? <Navigate to="/" replace /> : children;
}
