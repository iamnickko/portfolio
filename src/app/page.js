import BackgroundHero from './components/BackgroundHero'
import Projects from './components/Projects/Projects'
import Techstack from "./components/Techstack"
import About from './components/About'
import Experience from './components/Employment/Experience'

export default function Home() {
  return (
    <main>
      <BackgroundHero />
      <About />
      <Techstack />
      <Projects />
      <Experience />
    </main>
    
  )
}
