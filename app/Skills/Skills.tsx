"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const skillsData = [
    {
        title: "AI/LLM",
        items: [
            "LLM Integration",
            "Vector Search/Embeddings",
            "Prompt Engineering",
            "Context Management",
        ],
    },
    {
        title: "Primary skills",
        items: [
            "React JS",
            "TypeScript",
            "JavaScript(ES6+)",
            "Node JS",
            "Express JS",
            "React Native",
        ],
    },
    {
        title: "Frontend Tools & UI",
        items: [
            "HTML5",
            "CSS3",
            "Material UI",
            "Tailwind",
            "AG Grid",
            "Redux",
        ],
    },
    {
        title: "Testing & Quality",
        items: [
            "Jest",
            "React Testing Library",
            "Appium",
            "Cypress",
            "ES Lint",
            "SonarQube",
        ],
    },
    {
        title: "Cloud, DevOps & Databases",
        items: [
            "Kubernetes",
            "AWS",
            "Docker",
            "Git",
            "JIRA",
            "MongoDB",
            "IBM Cloudant",
        ],
    },
    {
        title: "Architecture & Engineering Practices",
        items: [
            "Micro-Frontends",
            "CI/CD",
            "Agile/Scrum",
            "Component-Driven Design",
            "Responsive & Accessible UI",
        ],
    },
];

export default function Skills() {
    const [active, setActive] = useState(1);

    const getPosition = (index: number) => {
        const diff = index - active;

        if (diff === 0) return "center";
        if (diff === -1 || diff === skillsData.length - 1) return "left";
        if (diff === 1 || diff === -(skillsData.length - 1)) return "right";
        return "hidden";
    };

    return (
        <section className="relative
                py-16 md:py-24 
                text-white
                "
            style={{
                backgroundImage: `url('/portfolio/hero.svg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* <div className="absolute top-15% left-10% w-172 h-172 bg-purple-500/20 blur-3xl rounded-full"></div>
            <div className="absolute top-0% right-2% w-72 h-72 bg-pink-500/20 blur-3xl rounded-full"></div> */}
            {/* Title */}
            <h2 className="
                text-2xl md:text-3xl 
                text-center font-semibold mb-10
               text-white
                bg-clip-text text-transparent
                ">
                Skills
            </h2>

            {/* ✅ MOBILE VIEW (Grid) */}
            <div className="md:hidden px-4 grid grid-cols-1 gap-6">
                {skillsData.map((card) => (
                    <div
                        key={card.title}
                        className="
                            bg-white/10 backdrop-blur-xl
                            border border-white/20
                            rounded-2xl p-6
                            shadow-[0_8px_32px_rgba(0,0,0,0.3)]
                            text-white
                            transition-all duration-300
                            hover:bg-white/20 hover:scale-[1.03]
                             hover:shadow-[0_0_40px_rgba(168,85,247,0.3)]
                            "
                    >
                        <h3 className="text-lg font-semibold text-center mb-4">
                            {card.title}
                        </h3>

                        <div className="flex flex-wrap justify-center gap-2" >
                            {card.items.map((item) => (
                                <span
                                    key={item}
                                    className="
                                    text-sm px-3 py-1
                                    bg-white/10
                                    border border-white/10
                                    rounded-lg
                                    backdrop-blur-md
                                    hover:bg-white/20
                                    transition
                                    "
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* ✅ DESKTOP VIEW (Carousel) */}
            <div className="hidden md:flex relative justify-center items-center h-[350px] perspective">
                {skillsData.map((card, index) => {
                    const position = getPosition(index);

                    let styles: any = {};

                    if (position === "center") {
                        styles = { x: 0, scale: 1, zIndex: 3, opacity: 1 };
                    } else if (position === "left") {
                        styles = { x: -300, scale: 0.85, zIndex: 2, opacity: 0.6 };
                    } else if (position === "right") {
                        styles = { x: 300, scale: 0.85, zIndex: 2, opacity: 0.6 };
                    } else {
                        styles = { opacity: 0, scale: 0.5 };
                    }

                    return (
                        <motion.div
                            key={card.title}
                            animate={styles}
                            transition={{ duration: 0.4 }}
                            onClick={() => setActive(index)}
                            className="absolute
bg-white/10 backdrop-blur-xl
border border-white/20
rounded-2xl p-6
shadow-[0_8px_32px_rgba(0,0,0,0.3)]
text-white
transition-all duration-300
hover:bg-white/20 hover:scale-[1.03]
hover:shadow-[0_0_40px_rgba(168,85,247,0.3)]
"
                        >
                            <h3 className="text-lg text-center font-semibold mb-4">
                                {card.title}
                            </h3>

                            <div className="flex flex-wrap justify-center gap-2 ">
                                {card.items.map((item) => (
                                    <span
                                        key={item}
                                        className="
text-sm px-3 py-1
bg-white/10
border border-white/10
rounded-lg
backdrop-blur-md
hover:bg-white/20
transition
"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Dots */}
            <div className="hidden md:flex justify-center mt-10 gap-3">
                {skillsData.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setActive(index)}
                        className={`w-3 h-3 rounded-full transition ${active === index ? "bg-white scale-125" : "bg-white/50"
                            }`}
                    />
                ))}
            </div>
        </section>
    );
}