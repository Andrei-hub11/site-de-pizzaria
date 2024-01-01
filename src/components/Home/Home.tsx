import "./_HomeStyle.scss";

import homeImage from "../../assets/images/imagem do home.png";

function Home() {
  return (
    <section className="home">
      <div className="home__container">
        <div className="home__container__inner">
          <p>ahhhhhhhhhhh</p>
          <img src={homeImage} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Home;
