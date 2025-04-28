import Header from "./components/Header";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div style={{ padding: '40px', minHeight: '100vh', position: 'relative' }}>
      
      {/* Main content */}
      <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
        <Header />
        <Projects />
        <Contact />
        <Footer />
      </div>

    </div>
  );
}

export default App;
