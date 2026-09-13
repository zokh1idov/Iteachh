import Hero from "./Hero/Hero"
import About from "./Sections/About/About"
import Companies from "./Sections/Company/Companies"
import Consultation from "./Sections/Contact/Consultation"
import Course from "./Sections/Courses/Course"
import Directions from "./Sections/Directions/Directions"
import Mentor from "./Sections/Mentors/Mentor"
import Proccess from "./Sections/Progress/Proccess"

function Home() {
  return (
    <>
    <Hero/>
    <Directions/>
    <Course/>
    <Companies/>
    <About/>
    <Mentor/>
    <Proccess/>
    <Consultation/>
    </>
  )
}

export default Home