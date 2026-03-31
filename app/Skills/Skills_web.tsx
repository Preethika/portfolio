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
        items: ["React JS", "TypeScript", "JavaScript(ES6+)", "Node JS", "Express JS", "React Native"],
    },
    {
        title: "Frontend Tools & UI",
        items: ["HTML5", "CSS3", "Material UI", "Tailwind", "AG Grid", "Redux"],
    },
    {
        title: "Testing & Quality",
        items: ["Jest", "React Testing Library", "Appium", "Cypress", "ES Lint", "SonarQube"],
    },
    {
        title: "Cloud, DevOps & Databases",
        items: ["Kubernetes", "AWS", "Docker", "Git", "JIRA", "MongoDB", "IBM Cloudant"],
    },
    {
        title: "Architecture & Engineering Practices",
        items: [
            "Micro-Frontends", "CI/CD", "Agile/Scrum", "Component-Driven Design", "Responsive & Accessible UI"
        ],
    }
];

export default function Skills() {
    const [active, setActive] = useState(1); // center card

    const getPosition = (index: number) => {
        const diff = index - active;

        if (diff === 0) return "center";
        if (diff === -1 || diff === skillsData.length - 1) return "left";
        if (diff === 1 || diff === -(skillsData.length - 1)) return "right";
        return "hidden";
    };

    return (
        <section className="py-24 bg-gradient-to-br from-black-400 to-purple-950">
            <div className="max-w-5xl mx-auto text-center text-white mb-10">
                <h2 className="text-3xl font-semibold  text-center mb-10 relative z-20">Skills</h2>

            </div>
            <br /><br /><br /><br /><br /><br /><br />
            {/* Carousel */}
            <div className="relative flex justify-center items-center h-[300px] perspective">
                {skillsData.map((card, index) => {
                    const position = getPosition(index);

                    let styles: any = {};

                    if (position === "center") {
                        styles = {
                            x: 0,
                            scale: 1,
                            zIndex: 3,
                            opacity: 1,
                        };
                    } else if (position === "left") {
                        styles = {
                            x: -260,
                            scale: 0.85,
                            zIndex: 2,
                            opacity: 0.7,
                        };
                    } else if (position === "right") {
                        styles = {
                            x: 260,
                            scale: 0.85,
                            zIndex: 2,
                            opacity: 0.7,
                        };
                    } else {
                        styles = {
                            opacity: 0,
                            scale: 0.5,
                        };
                    }

                    return (
                        <motion.div
                            key={card.title}
                            animate={styles}
                            transition={{ duration: 0.4 }}
                            onClick={() => setActive(index)}
                            className="absolute w-80 cursor-pointer bg-white text-black rounded-2xl shadow-xl p-6"
                        >
                            <h3 className="text-lg text-center font-semibold mb-4">
                                {card.title}
                            </h3>

                            <div className="space-y-3">
                                <div className="flex flex-wrap justify-center gap-6 p-6 bg-gray-100">
                                    {card.items.map((item) => (
                                        <div key={item} className="flex flex-wrap justify-center bg-gray-100">
                                            <span className="w-58 bg-white p-4 rounded-xl shadow text-center">{item}</span>
                                        </div>
                                    ))}
                                </div>

                            </div>
                        </motion.div>
                    );
                })}
            </div>
            <br /><br /><br /><br /><br /><br /><br />
            {/* Dots */}
            <div>
                <div className="flex justify-center mt-10 gap-3">
                    {skillsData.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActive(index)}
                            className={`w-3 h-3 rounded-full transition ${active === index
                                ? "bg-white scale-125"
                                : "bg-white/50"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
{/* {card.items.map((item, index) => (
                                    <div key={item}>
                                        <p className="text-sm mb-1">{item}</p>
                                       {card.items. && (
                                            <div className="w-full h-2 bg-gray-200 rounded">
                                                <div className="h-2 bg-purple-800 rounded w-3/4"></div>
                                            </div>
                                        )}
                                    </div>
                                ))} */}