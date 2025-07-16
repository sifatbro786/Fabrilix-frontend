import { useRef, useState, useEffect } from "react";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Hero() {
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);
    const [isMuted, setIsMuted] = useState(true);
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const handleLoadedData = () => {
            setIsVideoLoaded(true);
        };

        video.addEventListener("loadeddata", handleLoadedData);
        return () => {
            video.removeEventListener("loadeddata", handleLoadedData);
        };
    }, []);

    const toggleMute = () => {
        const video = videoRef.current;
        if (video) {
            video.muted = !video.muted;
            setIsMuted(video.muted);
        }
    };

    return (
        <section className="relative w-full h-[500px] md:h-screen overflow-hidden font-sans mt-[107px]">
            {/* //? Placeholder Image */}
            <img
                src="/placeholder.jpg"
                alt="Placeholder"
                className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                    isVideoLoaded ? "opacity-0" : "opacity-100"
                } z-0`}
            />

            {/* //? Background Video */}
            <video
                ref={videoRef}
                autoPlay
                loop
                muted={isMuted}
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
            >
                <source src="/vacation.mp4" type="video/mp4" />
            </video>

            {/* //? Dark overlay with glass effect */}
            <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>

            {/* //? Mute/Unmute Button */}
            <button
                onClick={toggleMute}
                className="absolute top-6 right-6 z-30 bg-white bg-opacity-30 hover:bg-opacity-50 text-white p-3 rounded-full backdrop-blur-md shadow-lg transition-all duration-300"
            >
                {isMuted ? <FaVolumeMute size={20} /> : <FaVolumeUp size={20} />}
            </button>

            {/* //? Hero Content */}
            <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white font-outfit px-4">
                <h1 className=" text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4 drop-shadow-lg tracking-tight">
                    Summer Vacation <br /> Ready
                </h1>
                <p className="text-lg md:text-xl max-w-xl mb-8 text-white/90">
                    Discover our vacation-ready styles — delivered fast, wherever you are in the
                    world!
                </p>
                <Link to="#" className="bg-orange-500 text-white px-6 py-2 rounded-sm text-lg">
                    Shop Now
                </Link>
            </div>
        </section>
    );
}
