import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import RegisterImage from "../assets/register.jpg";
import { Eye, EyeOff } from "lucide-react";
import { registerUser } from "../redux/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";

export default function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const dispatch = useDispatch();
    const { loading } = useSelector((state) => state.auth);
    const navigate = useNavigate();

    //? handle redirect query param from current page
    const redirect = new URLSearchParams(location.search).get("redirect") || "/";

    const handleRegister = async (e) => {
        e.preventDefault();

        if (!name || !email || !password) {
            toast.error("Please fill in all fields!");
            return;
        }
        if (password.length < 6) {
            toast.error("Password must be at least 6 characters long!");
            return;
        }

        try {
            const resultAction = await dispatch(registerUser({ name, email, password }));

            if (registerUser.fulfilled.match(resultAction)) {
                toast.success("Registration successful! 🎉");
                // navigate to login with redirect param
                navigate(`/login?redirect=${encodeURIComponent(redirect)}`);
            } else if (registerUser.rejected.match(resultAction)) {
                const errorMsg = resultAction.payload?.message || "Registration failed. Try again!";
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
                    onSubmit={handleRegister}
                    className="w-full max-w-md bg-white p-8 rounded-lg border shadow-sm md:mt-20"
                >
                    <div className="flex justify-center mb-6">
                        <Link to="/" className="text-xl font-medium">
                            Fabrilix
                        </Link>
                    </div>
                    <h2 className="text-2xl font-bold text-center mb-6">Hey There! 🖐🏻</h2>
                    <p className="text-center mb-6">
                        Enter your name, email, and password to signup
                    </p>

                    {/* //? name */}
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-semibold mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full p-2 border rounded"
                            placeholder="Enter your name"
                        />
                    </div>

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
                            className="w-full p-2 border rounded pr-10"
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
                        className={`w-full bg-primary text-white py-3 rounded font-semibold hover:bg-[#fb923c] transition duration-300  ${
                            loading ? "opacity-70 cursor-not-allowed" : "hover:bg-[#fb923c]"
                        }`}
                    >
                        {loading ? "Signing Up..." : "Sign Up"}
                    </button>
                    <p className="mt-6 text-center text-sm">
                        Already have an account?{" "}
                        <Link
                            to={`/login?redirect=${encodeURIComponent(redirect)}`}
                            className="text-blue-500"
                        >
                            Login
                        </Link>
                    </p>
                </form>
            </div>

            <div className="hidden md:block w-1/2 bg-gray-800">
                <div className="h-full flex flex-col justify-center items-center">
                    <img
                        src={RegisterImage}
                        alt="Login image"
                        className="h-[750px] w-full object-cover object-top"
                    />
                </div>
            </div>
        </div>
    );
}
