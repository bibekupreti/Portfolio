import { Navbar } from "./components/Navbar";
import Hero from "./components/Hero";
import { Container } from "./components/Container";
import SocialBar from "./components/SocialBar";

function App() {
  return (
    <Container>
      <Navbar />
      <Hero />
      <SocialBar />
    </Container>
  );
}

export default App;