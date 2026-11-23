import Project from "./Publication"
import RevealOnScroll from "./RevealOnScroll"

const FeaturedPublications = () => {
    return (
        <section id='publications' className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-center text-transparent">
                        Published Publications
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center">
                        <Project
                            title='Final Year Research is ready for publishing'
                            description=''
                        />
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    )
}

export default FeaturedPublications;
