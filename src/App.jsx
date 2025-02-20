import './App.css'
import completeArch from "./assets/complete-arch-final.svg"
import shootingStar from "./assets/shooting-star.svg"
import loopingCircle from "./assets/looping-projects.svg"
import arrowDown from "./assets/arrow-down-projects.svg"


function App() {

  return (
    <>
      <NavBar shootingStar={shootingStar} />

      <section className='homepage-hero'>
        <img src={completeArch} alt="dome" className="complete-arch" />
        <div className="looping-projects">
          <a href="" className="link-block">
            <img src={loopingCircle} alt="projects" className="looping-circle" />
            <img src={arrowDown} alt="down" className="arrow-down" />
          </a>
        </div>
      </section>


    </>
  )
}

export default App

function NavBar({ shootingStar }) {
  return (
    <header className="navbar">
      <a href="/" className="shooting-star-logo">
        <img src={shootingStar} alt="Shooting Star Logo" className="shooting-star" />
      </a>
      <nav className="nav-menu">
        <a href="/" className="nav-link">Index</a>
        <a href="/about" className="nav-link">About</a>
        <a href="/contact" className="nav-link">Contact</a>
      </nav>
    </header>);
}
