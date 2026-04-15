function About() {
    return (
        <div className="bg-gray-900">
            <section className="py-20 px-6 max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-semibold mb-6 ">About Me</h2>
                <p className="text-gray-400 text-xl">
                    I specialize in building scalable frontend architectures and AI-powered applications that deliver both performance and user impact. With deep expertise in <span className="text-white"><i>ReactJS, NodeJS, React Native, JavaScript, and TypeScript</i></span>, I focus on designing systems that are maintainable, efficient, and production-ready.
                </p>
                <p className="text-gray-400 mt-4 text-xl">
                    My work combines strong engineering practices—state management, testing (Jest, Cypress), and CI/CD—with a growing focus on <span className="text-white"><i>AI/LLM integration along with RAG</i></span>. I architected and implemented AI workflows combining LLMs with vector search and structured querying.

                    This includes building a Retrieval-Augmented Generation pipeline for document analysis, implementing semantic search using embeddings, and integrating streaming-based conversational interfaces.
                </p><p className="text-gray-400 mt-4 text-xl">
                    I thrive in Agile teams, collaborating across disciplines to ship high-quality products. Backed by certifications in IBM Design Thinking and GenAI, I continuously explore ways to bridge frontend engineering with intelligent systems.
                </p>
            </section>
        </div>
    );
}

export default About;