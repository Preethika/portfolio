import { FaDownload } from "react-icons/fa6";
import '../globals.css';

function Hero() {
    return (
        <section className="relative overflow-hidden h-screen bg-cover bg-center flex flex-col justify-center items-center text-center px-6"
            style={{
                backgroundImage: `url('/portfolio/curvedLine.svg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="absolute top-0 left-10 w-[320px] h-[320px] bg-purple-500/20 blur-3xl rounded-full" />
            <div className="absolute top-[40%] right-[-75px] w-[260px] h-[260px] bg-pink-500/20 blur-3xl rounded-full" />

            <h1 className="text-4xl font-bold mb-4">Hi, I'm Preethika</h1>
            <p className="text-xl text-gray-300 mb-6">
                Senior Frontend Engineer • Building AI-Driven, Scalable UI Platforms
                <br /> React • React Native • TypeScript • JavaScript • Node JS
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 ">
                <button className=" w-full sm:w-auto px-6 py-3 rounded-xl 
                        bg-white/10 backdrop-blur-xl
                        border border-white/20
                        shadow-[0_8px_32px_rgba(0,0,0,0.3)]
                        transition-all duration-300
                        hover:bg-white/20 hover:scale-[1.03]
                        hover:shadow-[0_0_40px_rgba(168,85,247,0.3)]"
                    onClick={() =>
                        document.getElementById("projects")?.scrollIntoView({
                            behavior: "smooth",
                        })
                    }>
                    View Projects
                </button>

                <a
                    href="/Resume_Preethika R_Fullstack.pdf"
                    download
                    className="
                        inline-flex items-center gap-2
                        px-6 py-3 w-full sm:w-auto
                        text-white font-medium  
                        rounded-xl
                        bg-white/10 backdrop-blur-xl
                        border border-white/20
                        shadow-[0_8px_32px_rgba(0,0,0,0.3)]
                        transition-all duration-300
                        hover:bg-white/20 hover:scale-[1.03]
                        hover:shadow-[0_0_40px_rgba(168,85,247,0.3)]
                    ">
                    <FaDownload />
                    Resume
                </a>

                <button className="border border-gray-500 px-6 py-3 w-full sm:w-auto rounded-xl
                        bg-white/10 backdrop-blur-xl
                        border border-white/20
                        shadow-[0_8px_32px_rgba(0,0,0,0.3)]
                        transition-all duration-300
                        hover:bg-white/20 hover:scale-[1.03]
                        hover:shadow-[0_0_40px_rgba(168,85,247,0.3)]"
                    onClick={() =>
                        document.getElementById("contact")?.scrollIntoView({
                            behavior: "smooth",
                        })
                    }>
                    Contact Me
                </button>

            </div>
            {/* <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <button className="w-full sm:w-auto px-6 py-3 bg-purple-500 rounded-xl">
                    View Resume
                </button>
                <button className="w-full sm:w-auto px-6 py-3 bg-pink-500 rounded-xl">
                    Download Resume
                </button>
                <button className="w-full sm:w-auto px-6 py-3 bg-white/10 border rounded-xl">
                    Contact
                </button>
            </div> */}
        </section >
    );
}

export default Hero;
