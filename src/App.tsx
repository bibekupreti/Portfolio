import { Navbar } from "@/components/Navbar/Navbar"
import { Hero } from "@/components/Hero/Hero"
import { Footer } from "@/components/Footer/Footer"
import { Experience } from "./components/Experience/Experience"
import { Projects } from "./components/Projects/Projects"
import { About } from "./components/About/About"

export function App() {
  return (
    <>
      <Navbar />
      <main id="content">
        <Hero />
      </main>
      <Projects/>
      <Experience/>
      <About/>
      <Footer />
    </>
  )
}
