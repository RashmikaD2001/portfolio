const Project = ({ title, description, skills, path }) => {
    return (
        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition w-full max-w-2xl">
            <h3 className="text-center text-xl font-bold mb-2">{title}</h3>
            <p className="mt-2 text-gray-400 mb-4">
                {description}
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-4">
                {skills.map((tech, key) => (
                    <span
                        key={key}
                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                    >
                        {tech}
                    </span>
                ))}
            </div>
            <div className="flex justify-center items-center mt-5">
                <a href={path} className="text-blue-400 hover:text-blue-300 transition-colors">
                    View Project
                </a>
            </div>
        </div>
    )
}

export default Project
