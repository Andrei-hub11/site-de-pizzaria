import { featuresData } from "../../constants/constants";
import "./_FeaturesStyle.scss";

function Features() {
  return (
    <section className="features" id="features">
      <h2 className="features__title">Nossos Recursos</h2>
      <p className="features__intro">
        Descubra o que torna a nossa pizzaria especial. Conheça nossos recursos
        exclusivos para uma experiência única.
      </p>
      <div className="features__container">
        {featuresData.map((feature, index) => (
          <div className="features__container__item" key={index}>
            <img
              src={feature.icon}
              alt="ícone da seção de recursos"
              className="features__container__item-icon"
              height="36"
              width="36"
            />
            <p className="features__container__item-title">{feature.title}</p>
            <p className="features__container__item-information">
              {feature.information}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
