import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LoginImage from "../assets/login.jpg";
import { Eye, EyeOff } from "lucide-react";
import { loginUser } from "../redux/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { mergeCart } from "../redux/slices/cartSlice";
import { toast } from "sonner";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const { guestId, loading } = useSelector((state) => state.auth);
    const { cart } = useSelector((state) => state.cart);

    //? get redirect param or default to home
    const redirect = new URLSearchParams(location.search).get("redirect") || "/";

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            toast.error("Please enter email and password!");
            return;
        }

        try {
            const resultAction = await dispatch(loginUser({ email, password }));

            if (loginUser.fulfilled.match(resultAction)) {
                toast.success("Login successful! 🎉");

                // merge cart if exists
                if (cart?.products?.length > 0 && guestId) {
                    dispatch(mergeCart({ user: resultAction.payload, guestId }));
                }

                navigate(redirect);
            } else if (loginUser.rejected.match(resultAction)) {
                const errorMsg = resultAction.payload?.message || "Login failed. Try again!";
                toast.error(errorMsg);
            }
        } catch (err) {
            console.log(err);
            toast.error("Something went wrong. Please try again later.");
        }
    };

    return (
        <div className="flex">
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-12">
                <form
                    onSubmit={handleLogin}
                    className="w-full max-w-md bg-white p-8 rounded-lg border shadow-sm md:mt-20"
                >
                    <div className="flex justify-center mb-6">
                        <Link to="/" className="text-xl font-medium">
                            Fabrilix
                        </Link>
                    </div>
                    <h2 className="text-2xl font-bold text-center mb-6">Welcome Back! 👋🏻</h2>
                    <p className="text-center mb-6">Enter your email and password to login</p>

                    {/* //? email */}
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-semibold mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-2 border rounded"
                            placeholder="Enter your email"
                        />
                    </div>

                    {/* //? password */}
                    <div className="mb-4 relative">
                        <label htmlFor="password" className="block text-sm font-semibold mb-2">
                            Password
                        </label>
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-2 border rounded"
                            placeholder="Enter your password"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-10 text-gray-600 hover:text-gray-800"
                        >
                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full bg-primary text-white py-3 rounded font-semibold hover:bg-[#fb923c] transition duration-300 ${
                            loading ? "opacity-70 cursor-not-allowed" : "hover:bg-[#fb923c]"
                        }`}
                    >
                        {loading ? "Loading..." : "Login"}
                    </button>
                    <p className="mt-6 text-center text-sm">
                        Don&apos;t have an account?{" "}
                        <Link
                            to={`/register?redirect=${encodeURIComponent(redirect)}`}
                            className="text-blue-500"
                        >
                            Register
                        </Link>
                    </p>
                </form>
            </div>

            <div className="hidden md:block w-1/2 bg-gray-800">
                <div className="h-full flex flex-col justify-center items-center">
                    <img
                        src={LoginImage}
                        alt="Login image"
                        className="h-[750px] w-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
}
