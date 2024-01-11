import Button from "../Button/Button";

import "./_MenuStyle.scss";
import useMenuLogic from "./useMenuLogic";

import RotateIcon from "../../assets/icons/material-symbols-light_rotate-left.svg";
import PrevIcon from "../../assets/icons/mingcute_arrow-left-fill.svg";
import NextIcon from "../../assets/icons/mingcute_arrow-right-fill.svg";

function Menu() {
  const {
    isFront,
    menuSelected,
    currentPage,
    displayItems,
    displayDrinks,
    displaySpecials,
    isLastPage,
    handleChangeCard,
    handleAddToCart,
    handleNext,
    handlePrev,
    handleChangeMenu,
  } = useMenuLogic();

  return (
    <section className="menu" id="menu">
      <div className="menu__nav">
        <h2 className="menu__nav-title">Cárdapio</h2>
        <div className="menu__nav-btns">
          <Button
            btn={{
              variant_key: "primary",
              onClick: () => handleChangeMenu("pizza"),
            }}
          >
            Pizzas
          </Button>
          <Button
            btn={{
              variant_key: "primary",
              onClick: () => handleChangeMenu("drinks"),
            }}
          >
            Bebidas
          </Button>
          <Button
            btn={{
              variant_key: "primary",
              onClick: () => handleChangeMenu("special"),
            }}
          >
            Especiais
          </Button>
        </div>
      </div>
      <div className="menu__options">
        {menuSelected === "pizza"
          ? displayItems.map(({ front, back: { card } }) => (
              <div
                key={front.id}
                className={`menu__options--pespective ${
                  isFront[front.id] ? "back--active" : ""
                }`}
              >
                <div className="menu__front">
                  <div className="menu__front__item">
                    <div className="menu__front__item-img">
                      <img
                        src={front.item.imgSrc}
                        alt={front.item.imgAlt}
                        width="1500"
                        height="1000"
                        loading="lazy"
                        decoding="sync"
                      />
                    </div>
                    <h3 className="menu__front-title">{front.item.title}</h3>
                    <p className="menu__front-information">
                      {front.item.information}
                    </p>
                    <div className="menu__front__control">
                      <p className="menu__front__control-price">
                        {front.item.control.price}
                      </p>
                      <Button
                        btn={{
                          variant_key: "secondary",
                          onClick: () => {
                            handleAddToCart({
                              id: front.id,
                              name: front.item.title,
                              type: front.item.type,
                              image: front.item.imgSrc,
                              price: 32,
                              quantity: 1,
                            });
                          },
                        }}
                      >
                        Comprar
                      </Button>
                    </div>
                    <div className="menu__front__control menu__front__control--secondary">
                      <img
                        src={RotateIcon}
                        alt="ícone de rotação"
                        onClick={() => handleChangeCard(front.id)}
                        width="24"
                        height="24"
                      />
                      <p className="menu__front__control-information">
                        Ver ingredientes
                      </p>
                    </div>
                  </div>
                </div>

                <div className="menu__back">
                  <div className="menu__back__card">
                    <h3 className="menu__front-title back__title--variant">
                      {card.title}
                    </h3>
                    <ul className="menu__back__list">
                      {card.listItems.map((ingredient) => (
                        <li key={ingredient} className="menu__back__list-item">
                          {ingredient}
                        </li>
                      ))}
                    </ul>
                    <div className="menu__front__control back__control--variant">
                      <img
                        src={RotateIcon}
                        alt="ícone de rotação"
                        onClick={() => handleChangeCard(front.id)}
                        width="24"
                        height="24"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))
          : menuSelected === "special"
          ? displaySpecials.map((special) => (
              <div key={special.id} className={`menu__options--pespective`}>
                <div className="menu__front">
                  <div className="menu__front__item">
                    <div className="menu__front__item-img">
                      <img
                        src={special.imgSrc}
                        alt={special.imgAlt}
                        width="1500"
                        height="1000"
                        loading="lazy"
                      />
                    </div>
                    <h3 className="menu__front-title">{special.title}</h3>
                    <p className="menu__front-information">
                      {special.information}
                    </p>
                    <div className="menu__front__control">
                      <p className="menu__front__control-price">
                        {special.control.price}
                      </p>
                      <Button
                        btn={{
                          variant_key: "secondary",
                          onClick: () => {
                            handleAddToCart({
                              id: special.id,
                              name: special.title,
                              type: special.type,
                              image: special.imgSrc,
                              price: special.price,
                              quantity: 1,
                            });
                          },
                        }}
                      >
                        Comprar
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          : displayDrinks.map((drinks) => (
              <div key={drinks.id} className={`menu__options--pespective`}>
                <div className="menu__front">
                  <div className="menu__front__item">
                    <div className="menu__front__item-img">
                      <img
                        src={drinks.imgSrc}
                        alt={drinks.imgAlt}
                        width="1500"
                        height="1000"
                        loading="lazy"
                      />
                    </div>
                    <h3 className="menu__front-title">{drinks.title}</h3>
                    <p className="menu__front-information">
                      {drinks.information}
                    </p>
                    <div className="menu__front__control">
                      <p className="menu__front__control-price">
                        {drinks.control.price}
                      </p>
                      <Button
                        btn={{
                          variant_key: "secondary",
                          onClick: () => {
                            handleAddToCart({
                              id: drinks.id,
                              name: drinks.title,
                              type: drinks.type,
                              image: drinks.imgSrc,
                              price: drinks.price,
                              quantity: 1,
                            });
                          },
                        }}
                      >
                        Comprar
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
      </div>
      <div className="menu__control">
        <div className="menu__control-page">{currentPage}</div>
        <div className="menu__control-container">
          <div className="menu__control-icon" onClick={handlePrev}>
            <img
              src={PrevIcon}
              alt="ícone de retroceder"
              height="24"
              width="24"
            />
          </div>
          <div
            className={`menu__control-icon ${
              isLastPage ? "control-icon--variant" : ""
            }`}
            onClick={handleNext}
          >
            <img src={NextIcon} alt="ícone de avançar" height="24" width="24" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Menu;
