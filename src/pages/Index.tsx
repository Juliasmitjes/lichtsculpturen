import Header from "../components/Header";
import Hero from "../components/Hero";
import Gallery from "../components/Gallery";
import About from "../components/About";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Gallery />
      <About />
    </main>
  );
};

export default Index;