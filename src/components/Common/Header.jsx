import Topbar from "../Layout/Topbar";
import Navbar from "../Common/Navbar";

export default function Header() {
    return (
        <header className="border-b border-gray-200">
            <Topbar />
            <Navbar />
        </header>
    );
}
