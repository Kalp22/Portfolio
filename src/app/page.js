import Navbar from './components/navbar'
import Intro from './components/intro'
import About from './components/aboutSection'
import Technologies from './components/techIKnow'
import Projects from './components/projects'
import Footer from './components/footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Intro />
      <About />
      <Technologies />
      <Projects />
      <Footer />
    </main>
  )
}
