"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
    return (
        <section id="contact" className="py-24 bg-slate-900 text-white text-center">
            <h2 className="text-3xl font-semibold mb-6">Get In Touch</h2>

            <p className="text-gray-400 mb-10">
                Let’s build something impactful together.
            </p>

            {/* Contact Cards */}
            <div className="flex flex-wrap justify-center gap-6">

                {/* Email */}
                <a
                    href="mailto:preethika.nandhu@gmail.com"
                    className="
            flex items-center gap-3 px-6 py-4
            bg-white/10 backdrop-blur-lg
            border border-white/10
            rounded-2xl
            hover:scale-105 hover:bg-white/20
            transition-all
          "
                >
                    <MdEmail className="text-2xl text-red-400" />
                    <span>Preethika R</span>
                </a>

                {/* LinkedIn */}
                <a
                    href="https://www.linkedin.com/in/preethika-rajendran-64b3b755/"
                    target="_blank"
                    className="
            flex items-center gap-3 px-6 py-4
            bg-white/10 backdrop-blur-lg
            border border-white/10
            rounded-2xl
            hover:scale-105 hover:bg-white/20
            transition-all
          "
                >
                    <FaLinkedin className="text-2xl text-blue-400" />
                    <span>LinkedIn</span>
                </a>

                {/* GitHub */}
                <a
                    href="https://github.com/Preethika/"
                    target="_blank"
                    className="
            flex items-center gap-3 px-6 py-4
            bg-white/10 backdrop-blur-lg
            border border-white/10
            rounded-2xl
            hover:scale-105 hover:bg-white/20
            transition-all
          "
                >
                    <FaGithub className="text-2xl text-gray-300" />
                    <span>GitHub</span>
                </a>

            </div>
        </section>
    );
}