import { lazy } from "react";

import Home from "./components/Home/Home";
const ShoppingCart = lazy(
  () => import("./components/ShoppingCart/ShoppingCart")
);
const Features = lazy(() => import("./components/Features/Features"));
const Menu = lazy(() => import("./components/Menu/Menu"));
const Navbottom = lazy(() => import("./components/Navbottom/Navbottom"));
const Reserve = lazy(() => import("./components/Reserve/Reserve"));
const About = lazy(() => import("./components/About/About"));
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

