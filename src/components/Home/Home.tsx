import { motion } from "framer-motion";

import { homeIcons } from "../../constants/constants";
import Button from "../Button/Button";

import "./_HomeStyle.scss";
import useHomeLogic from "./useHomeLogic";

/* import homeImage from "../../assets/images/imagem do home.png"; */

function Home() {
  const { handleScrollToMenu } = useHomeLogic();

  return (
    <section className="home" id="home">
      <div className="home__container">
        <div className="home__container__inner">
          <div className="home__content">
            <h1 className="home__content-title">Pizzaria Forno à Lenha</h1>
            <p className="home__content-text">A melhor pizza da região</p>
          </div>
          <div>
            <Button
              btn={{
                variant_key: "quaternary",
                onClick: handleScrollToMenu,
              }}
            >
              Comprar
            </Button>
          </div>
          <div className="home__btns">
            {homeIcons.map((icon) => (
              <motion.img
                key={icon.alt}
                src={icon.src}
                alt={icon.alt}
                whileHover={{ scale: 1.3 }}
                transition={{ duration: 0.3 }}
                height="24"
                width="24"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
