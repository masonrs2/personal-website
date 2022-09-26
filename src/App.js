import Header from "./components/Header"
import About from "./components/About"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Projects from "./components/Projects"

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Projects />
      <About />
      <Footer />
    </div>
  );
}

export default App;
