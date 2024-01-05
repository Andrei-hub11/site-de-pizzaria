import About from "./components/About/About";
import Features from "./components/Features/Features";
import Home from "./components/Home/Home";
import Menu from "./components/Menu/Menu";
import Navbottom from "./components/Navbottom/Navbottom";
import Reserve from "./components/Reserve/Reserve";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";

function App() {
  return (
    <>
      <ShoppingCart />
      <Home />
      <Features />
      <Menu />
      <Reserve />
      <About />
      <Navbottom />
    </>
  );
}

export default App;

