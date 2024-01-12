import { lazy } from "react";

import Home from "./components/Home/Home";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import Features from "./components/Features/Features";
import Menu from "./components/Menu/Menu";
import Navbottom from "./components/Navbottom/Navbottom";
import Reserve from "./components/Reserve/Reserve";
import About from "./components/About/About";
const Location = lazy(() => import("./components/Location/Location"));

function App() {
  return (
    <>
      <ShoppingCart />
      <Home />
      <Features />
      <Menu />
      <Reserve />
      <About />
      <Location />
      <Navbottom />
    </>
  );
}

export default App;

