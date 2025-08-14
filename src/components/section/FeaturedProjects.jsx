import Project from "./Project"
import RevealOnScroll from "./RevealOnScroll"

const FeaturedProjects = () => {
    return (
        <section id='projects' className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-center text-transparent">
                        Featured Projects
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center">
                        <Project
                            title='Bank System Backend'
                            description='Java Spring Boot backend to manage bank users, accounts and loans. Machine learning solution to approve the loans automatically using Python and Scikit-learn.'
                            skills={["Java Spring Boot", "Python", "Scikit-learn", "MSSQL", "Microsoft Azure", 'Git & Github']}
                            path='https://github.com/RashmikaD2001/Bank-System-Backend'
                        />
                        <Project
                            title='Focus App'
                            description='FOCUS App: A Social Media Distraction Reduction System using Kotlin, Arduino & Human-Computer Interaction Techniques'
                            skills={['Kotlin', 'Arduino', 'C language', 'Android', 'Git & Github']}
                            path='https://github.com/RashmikaD2001/Human-Computer-Interaction-Project'
                        />
                        <Project
                            title='Python Bootcamp Project'
                            description='Final Project of Python Bootcamp organized by PyData Community. The project focuses on data analysis based on cricket world cup data from 1975 to 2023 and sentiment analysis using techniques from natural language processing (NLP)'
                            skills={['Python', 'Jupyter Notebook', 'HuggingFace', 'Git & Github']}
                            path='https://github.com/RashmikaD2001/Python-Bootcamp-Project'
                        />
                        <Project
                            title="HarmonyBot: A Conflict Mediating Social Robot"
                            description='a robot that detects the emotional tone of a conversation and uses gentle prompts, tone shifts, and humor or empathy to de-escalate tension and promote calm communication between people'
                            skills={['Python','Arduino','C language','Azure Cloud Service', 'HuggingFace', 'Git & Github']}
                            path='https://github.com/RashmikaD2001/CSC-465-2.0-Robotics'
                        />
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    )
}

export default FeaturedProjects
