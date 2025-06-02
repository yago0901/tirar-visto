import './App.css';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import How from './components/How';
import Subhero from './components/Subhero';
import Packs from './components/Packs';
import Doubts from './components/Doubts';
import Footer from './components/Footer';

function App() {
  return (
    <main className="App">
      <Hero />
      <Subhero/>
      <How/>
      <Destinations/>
      <Packs />
      <Doubts />
      <Footer />
    </main>
  );
}

export default App;
