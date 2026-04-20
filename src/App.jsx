import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills";

function App() {
  return (
    <main className="bg-[#050a14] min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
    </main>
  );
}

export default App;