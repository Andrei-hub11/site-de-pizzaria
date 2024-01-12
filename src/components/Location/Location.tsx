import "./_Location.scss";
import useLocationLogic from "./useLocationLogic";

function Location() {
  const { iframeRef } = useLocationLogic();

  return (
    <section className="location">
      <h2 className="features__title">Nossa Localização</h2>
      <div className="location__frame">
        <iframe
          ref={iframeRef}
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7872.667310609824!2d-40.432463!3d-9.392086!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7736f83ccd63d07%3A0x6008b26edcf46431!2spizzaria%20f.lenha!5e0!3m2!1spt-BR!2sbr!4v1704974768539!5m2!1spt-BR!2sbr"
          width="600"
          height="450"
          loading="lazy"
          title="localização da pizzaria"
        ></iframe>
      </div>
    </section>
  );
}

export default Location;
