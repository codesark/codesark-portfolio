import Hero from "@/components/homepage-sections/Hero";
import About from "@/components/homepage-sections/About";
import Skills from "@/components/homepage-sections/Skills";
import Projects from "@/components/homepage-sections/Projects";
import Blog from "@/components/homepage-sections/Blog";

export default function Home() {
  // lg:snap-y lg:snap-proximity lg:overflow-y-auto
  return (
    <main className="h-screen">
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      <section id="about" className="snap-start">
        <About />
      </section>

      <section id="skills" className="snap-start">
        <Skills />
      </section>

      <section id="projects" className="snap-start">
        <Projects />
      </section>

      <section id="blog" className="snap-start">
        <Blog />
      </section>
    </main>
  );
}
