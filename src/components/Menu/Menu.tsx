import Button from "../Button/Button";
import "./_MenuStyle.scss";
import RotateIcon from "../../assets/icons/material-symbols-light_rotate-left.svg";
import useMenuLogic from "./useMenuLogic";
import { menuOptions } from "../../constants/constants";

function Menu() {
  const { isFront, handleChangeCard } = useMenuLogic();

  return (
    <section className="menu">
      <div className="menu__nav">
        <h2>Cárdapio</h2>
        <div className="menu__nav-btns">
          <Button btn={{ variant_key: "primary", onClick: undefined }}>
            Pizzas
          </Button>
          <Button btn={{ variant_key: "primary", onClick: undefined }}>
            Bebidas
          </Button>
          <Button btn={{ variant_key: "primary", onClick: undefined }}>
            Especiais
          </Button>
        </div>
      </div>
      <div className="menu__options">
        {menuOptions.map(({ front, back: { card } }) => (
          <div
            key={front.id}
            className={`menu__options--pespective ${
              isFront[front.id] ? "back--active" : ""
            }`}
          >
            <div className="menu__options__front">
              <div className="menu__options__front__item">
                <div className="menu__options__front__item-img">
                  <img src={front.item.imgSrc} alt={front.item.imgAlt} />
                </div>
                <h3 className="menu__options__front-title">
                  {front.item.title}
                </h3>
                <p className="menu__options__front-information">
                  {front.item.information}
                </p>
                <div className="menu__options__front__control">
                  <p className="menu__options__front__control-price">
                    {front.item.control.price}
                  </p>
                  <Button
                    btn={{ variant_key: "secondary", onClick: undefined }}
                  >
                    Comprar
                  </Button>
                </div>
                <div className="menu__options__front__control menu__options__front__control--secondary">
                  <img
                    src={RotateIcon}
                    alt="ícone de rotação"
                    onClick={() => handleChangeCard(front.id)}
                  />
                  <p className="menu__options__front__control-information">
                    Ver ingredientes
                  </p>
                </div>
              </div>
            </div>

            <div className="menu__options__back">
              <div className="menu__options__back__card">
                <h3 className="menu__options__front-title back__title--variant">
                  {card.title}
                </h3>
                <ul className="menu__options__back__card__list">
                  {card.listItems.map((ingredient) => (
                    <li
                      key={ingredient}
                      className="menu__options__back__card__list-item"
                    >
                      {ingredient}
                    </li>
                  ))}
                </ul>
                <div className="menu__options__front__control back__control--variant">
                  <img
                    src={RotateIcon}
                    alt="ícone de rotação"
                    onClick={() => handleChangeCard(front.id)}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="menu__control">A</div>
    </section>
  );
}

export default Menu;
