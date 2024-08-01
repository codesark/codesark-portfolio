import Hero from "@/components/homepage-sections/Hero";
import About from "@/components/homepage-sections/About";
import Skills from "@/components/homepage-sections/Skills";
import Projects from "@/components/homepage-sections/Projects";
import Blog from "@/components/homepage-sections/Blog";

export const metadata = {
  title: "Savinay Kumar",
  description: "Savinay Kumar's Portfolio",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Savinay Kumar",
    description: "Savinay Kumar's Portfolio",
    url: "https://savinaykumar.com",
    siteName: "Savinay Kumar",
    images: [
      {
        url: "https://savinaykumar.com/savinay-wall.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title: "Savinay Kumar",
    description: "Savinay Kumar's Portfolio",
    card: "summary_large_image",
    creator: "@codesark",
    images: [
      {
        url: "https://savinaykumar.com/savinay-wall.jpg",
        width: 640,
        height: 630,
      },
    ],
  },
};

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
