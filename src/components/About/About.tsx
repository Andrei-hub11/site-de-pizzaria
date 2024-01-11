import "./_About.scss";

import AboutImage from "../../assets/images/jovem-cozinheiro.webp";

function About() {
  return (
    <section className="about" id="about">
      <div className="about__container">
        <div className="about__container-img">
          <img
            src={AboutImage}
            alt="imagem da seção sobre"
            width="1500"
            height="1000"
            loading="lazy"
          />
        </div>
        <div className="about__container-content">
          <h1 className="about__title">Sobre nós</h1>
          <p className="about__text">
            Somos apaixonados por pizza! Na [Nome da Pizzaria], nossa missão é
            criar experiências deliciosas que unem amigos e famílias em torno de
            sabores autênticos. Desde [ano de fundação], temos sido a sua
            escolha confiável para uma pizza de qualidade. Bem-vindo ao nosso
            mundo saboroso!
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
