const MobileMenu = ({ menuOpen, setMenuOpen }) => {

    const cssStyle = `text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`

    return (
        // <div className={`fixed top-0 left-0 w-full bg-[rgba(10, 10, 10, 0.8)] z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${menuOpen ? 'h-screen opacity-100 pointer-events-auto' : 'h-0 opacity-0 pointer-events-none'}`}>
        <div className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-50 md:hidden flex flex-col items-center justify-center transition-opacity duration-300 ease-in-out
            ${menuOpen ? 'h-screen opacity-100 pointer-events-auto' : 'h-0 opacity-0 pointer-events-none overflow-hidden'}`}>


            <button onClick={() => {
                setMenuOpen(false)
            }} className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer" aria-label="Close Menu">
                &times;
            </button>

            <a href="#home" className={cssStyle} onClick={() => setMenuOpen(false)}>
                Home

            </a>

            <a href="#about" className={cssStyle} onClick={() => setMenuOpen(false)}>
                About
            </a>

            <a href="#projects" className={cssStyle} onClick={() => setMenuOpen(false)}>
                Projects
            </a>

            <a href="#contact" className={cssStyle} onClick={() => setMenuOpen(false)}>
                Contact
            </a>

        </div>
    )
}

export default MobileMenu