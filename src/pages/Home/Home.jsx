import Hero from "./Hero/Hero";
import Companies from "./Sections/Company/Companies";
import Consultation from "./Sections/Contact/Consultation";
import Course from "./Sections/Courses/Course";
import Helps from "./Sections/Help/Helps";
import Mentor from "./Sections/Mentors/Mentor";
import Proccess from "./Sections/Progress/Proccess";
import Oursresult from "./Sections/Results/Oursresult";

function Home() {
  return (
    <>
      <Hero />
      <Course />
      <Companies />
      <Oursresult />
      <Mentor />
      <Helps />
      <Proccess />
      <Consultation />
    </>
  );
}

export default Home;
