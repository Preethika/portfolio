import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaBrain, FaGithub } from "react-icons/fa";
import {
    SiTypescript,
    SiJavascript,
    SiFastapi,
    SiCypress,
    SiOpenai,
    SiExpress,

} from "react-icons/si";
import { MdAutoAwesome } from "react-icons/md";

const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 },
};

function Projects() {
    const projects = [
        {
            title: "AI Workspace",
            desc: "Integrates LLM-powered tools for intelligent search, document analysis, and productivity automation",
            techstack: [
                {
                    name: "React JS",
                    icon: FaReact,
                    color: "text-cyan-400",
                },
                {
                    name: "Typescript",
                    icon: SiTypescript,
                    color: "text-blue-400",
                },
                {
                    name: "Node.js",
                    icon: FaNodeJs,
                    color: "text-green-400",
                },
                {
                    name: "Express.js",
                    icon: SiExpress,
                    color: "text-black",
                },
                {
                    name: "AI/LLM",
                    icon: SiOpenai,
                    color: "text-black",
                },

            ],
            features: [
                "ChatBot",
                "AI Search",
                "AI Data insights",
                "AI Document Analysis"
            ],
            githubLinks: [
                {
                    name: "Client",
                    url: "https://github.com/Preethika/ai-workspace-react"
                },
                {
                    name: "Server",
                    url: "https://github.com/Preethika/ai-workspace-node"
                }
            ]

        },
        {
            title: "PayFlow (Stripe)",
            desc: "A flexible payment and billing integration using Stripe, supporting efficient transaction management and streamlined payment workflows",
            techstack: [
                {
                    name: "React JS",
                    icon: FaReact,
                    color: "text-cyan-400",
                },
                {
                    name: "Typescript",
                    icon: SiTypescript,
                    color: "text-blue-400",
                },
                {
                    name: "Node.js",
                    icon: FaNodeJs,
                    color: "text-green-400",
                },
                {
                    name: "Express.js",
                    icon: SiExpress,
                    color: "text-black",
                },
            ],
            githubLinks: [
                {
                    name: "Client",
                    url: "https://github.com/Preethika/payment-stripe-integration-client-react"
                },
                {
                    name: "Server",
                    url: "https://github.com/Preethika/payment-stripe-integration-server"
                }
            ]
        },
        {
            title: "Secret Santa – Gift Exchange",
            desc: "A fun and interactive Secret Santa application that simplifies organizing holiday gift exchanges among friends, teams, or communities",
            features: [
                "1-1 assignment",
                "No self-assignment",
                "No repeatition of previous year assignment",
            ],
            techstack: [
                {
                    name: "Node.js",
                    icon: FaNodeJs,
                    color: "text-green-400",
                },
                {
                    name: "Express.js",
                    icon: SiExpress,
                    color: "text-black",
                },
            ],
            githubLinks: [
                {
                    name: "Server",
                    url: "https://github.com/Preethika/SecretSantaGame_NodeJS"
                }
            ]
        },
    ];

    return (

        <motion.section
            id="projects"
            className="py-20 px-6"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            <h2 className="text-3xl text-center mb-10">Projects</h2>
            <div className="flex gap-6 overflow-x-auto">

            </div>
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                // layout="position"
                // className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 max-w-[1200px] justify-items-center mx-auto"
                className="
                    grid 
                    grid-cols-1 
                    sm:grid-cols-2 
                    lg:grid-cols-3 
                    gap-6 
                    max-w-[1200px] 
                    mx-auto
                    px-4
                    "
            >
                {projects.map((p) => (
                    <motion.div
                        key={p.title}
                        variants={item}
                        layout
                        transition={{
                            type: "spring",
                            stiffness: 120,
                            damping: 20,
                        }}
                        className="relative bg-slate-800 p-6 rounded-xl w-full max-w-[400px]"
                    >
                        <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                        <p className="text-gray-400 mt-6">{p.desc}</p>
                        <div className="absolute top-4 right-1 flex gap-2 align-middle">
                            {Array.isArray(p.githubLinks) && p.githubLinks.length > 0 && p.githubLinks.map((link) => (
                                <a
                                    key={link.url}
                                    href={link.url}
                                    target="_blank"
                                    className="z-20 flex flex-wrap rounded-lg w-10"
                                //                                     className="
                                // z-20 flex items-center gap-1 
                                // px-2 py-1 
                                // bg-white/10 rounded-lg
                                // hover:bg-white/20 transition
                                // "
                                >
                                    <FaGithub className="text-2xl ml-1" />
                                    <span className="text-xs">{link.name}</span>
                                </a>
                            ))}
                        </div>

                        {p.features && (
                            <div className="mt-4">
                                <h4 className="font-semibold">Features:</h4>
                                <ul className="list-disc list-inside">
                                    {p.features.map((feature) => (
                                        <li key={feature}>{feature}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        {p.techstack && (
                            <div className="mt-6 flex flex-wrap gap-2">
                                {Array.isArray(p.techstack) && p.techstack.map((tech) => {
                                    const Icon = tech.icon;
                                    return (
                                        <span
                                            key={tech.name}
                                            className=" flex items-center gap-2 px-4 py-2
                                                bg-white/10 rounded-l text-sm"
                                        >
                                            {Icon && <Icon className={`text-lg ${tech.color || ""}`} />}
                                            <span>{tech.name}</span>
                                        </span>

                                    );
                                })}

                            </div>
                        )}

                    </motion.div>
                ))}
            </motion.div>
        </motion.section>
    );
}

export default Projects;


//  {projects.map((project) => (
//                     <div
//                         key={project.title}
//                         className="min-w-[220px] aspect-[9/16] bg-black rounded-[2rem] p-2 shadow-lg"
//                     >
//                         {/* Screen */}
//                         <div className="w-full h-full bg-white rounded-[1.5rem] overflow-hidden">
//                             {/* <img
//                                 src={project.image}
//                                 alt={project.title}
//                                 className="w-full h-full object-cover"
//                             /> */}
//                         </div>

//                         {/* Title */}
//                         <h3 className="mt-3 text-sm text-center">{project.title}</h3>
//                     </div>
//                 ))}