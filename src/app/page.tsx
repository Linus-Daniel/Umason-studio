import About from "@/components/About";
import Stats from "@/components/Achievemnt";
import Blog from "@/components/Blog";
import Contact from "@/components/contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/projects";
import RecentWork from "@/components/RecentWork";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonial";

const App = () => {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <Services />
      <About />
      <Projects />
      <RecentWork />
      <Stats />
      <Testimonials />

      <Contact />
      <Blog />

      <Footer />
    </main>
  );
};

export default App;
