import Header from "../components/Header";
import Hero from "../components/Hero";
import Gallery from "../components/Gallery";
import About from "../components/About";
import Story from "../components/Story";
import Test from "../components/Test"

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Gallery />
      <About />
      <Story />
      <Test />       
    </main>
  );
};

export default Index;