const Home = () => {
  return (
    <section id='home' className="min-h-screen flex items-center justify-center relative pt-25">
      <div className="text-center z-10 px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-right">
          {" "}
          Hi, I'm Rashmika Dushmantha
        </h1>

        <div className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
          <p>
            I'm a Computer Science undergraduate at the <br />
            University of Sri Jayewardenepura. <br />
            I'm passionate about solving problems with clean and efficient code. <br /><br />
            My interests span:
          </p>
          <ul className="list-disc list-inside mt-2">
            <li>Backend development</li>
            <li>Cybersecurity</li>
            <li>Artificial intelligence</li>
          </ul>
          <br />
          <p>
            I enjoy building systems that are both smart and secure.
            Always curious, always learning.
          </p>

          <div className="flex justify-center space-x-4 mt-4">
            <a href="#projects" className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246,0.4)]">
              View Projects
            </a>

            <a href="#contact" className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246,0.2)] hover:bg-blue-500/10">
              Contact Me
            </a>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Home