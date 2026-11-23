import RevealOnScroll from "./RevealOnScroll"
import { Skill } from "./Skill"

const About = () => {

  const frontSkills = ['HTML', 'CSS', 'Javascript', 'TypeScript', 'React', 'TailwindCSS']

  const backendSkills = ['Java', 'Python', 'Microsoft Azure', 'MYSQL', 'MongoDB']

  const mlSkills = ['Python', 'R', 'Tensorflow', 'Pytorch', 'Scikit-learn', 'HuggingFace']

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-center text-transparent">
            {" "}
            About Me
          </h2>

          <div className="glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all text-center">
            <p className="text-gray-300 mb-6">
              I am a Software Engineer and Researcher.<br />Passionate about solving complex, multi-layered engineering challenges. <br />
              Enjoy exploring new technologies, approaching problems from different perspectives, and developing innovative solutions that bridge research and applications.
            </p>
          </div>


          <div className="flex flex-col items-center gap-8 mt-8">
            <Skill skills={frontSkills} skillType={'Frontend'} />
            <Skill skills={backendSkills} skillType={'Backend'} />
            <Skill skills={mlSkills} skillType={'Machine Learning'} />
          </div>


          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              {frontSkills.map((tech, key) => {
                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                  {tech}
                </span>
              })}
            </div>
          </div>
        </div> */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">

            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Education🎓</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>BSc Hons in Computer Science</strong> University of Sri Jayewardenepura<br />(2022 July - 2026 July)
                </li>
                <li>
                  Relevant Coursework: <br />Data Structures and Algorithms, Object Oriented Programming, Database, Machine Learning, Operating Systems
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Work Experience🏅</h3>
              {/* <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold text-center">Searching Internship related to Software Engineering or Machine Learning 😁</h4>
                </div>
              </div> */}
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>Software Engineer (Intern)</strong> <br />Cambio Software (2026 Feb - Present)
                </li>
              </ul>
            </div>

          </div>
        </div>

      </RevealOnScroll>
    </section>
  )
}

export default About