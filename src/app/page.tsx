import Hero from "./ui/Hero";
import Projects from "./ui/projects/Projects";
import Navbar from "./ui/navbar";
import About from "./ui/about/About";

export default function Home() {
  return (
    <main>
      <div className="max-w-screen-xl mx-auto">
        <Navbar />
        <Hero />
      </div>
      <div className="max-w-screen-lg mx-auto">
        <Projects />
        <About />
      </div>
    </main>
  );
}
