import "./_ShoppingCart.scss";
import Button from "../Button/Button";

import PizzaImage from "../../assets/images/pizza_calabresa.webp";
import MinusImage from "../../assets/icons/minus.svg";
import PlusImage from "../../assets/icons/plus.svg";
import useShoppinCart from "./useShoppinCart";

function ShoppingCart() {
  const { isOpen, dropIsOpen, menuRef, handleOpenDrop } = useShoppinCart();

  console.log(isOpen);

  return (
    <div
      ref={menuRef}
      className={`cart ${isOpen ? "cart--open" : ""}`}
      id="car"
    >
      <div className="cart__container">
        <div className="cart__container-inner">
          <div className="cart__content">
            <div className="cart__img">
              <img src={PizzaImage} alt="" />
            </div>
            <div className="cart__drop">
              <div className="cart__drop-btn">
                <Button
                  btn={{ variant_key: "quinary", onClick: handleOpenDrop }}
                >
                  Tamanho G
                </Button>
              </div>
              <div
                className={`cart__drop-options ${
                  dropIsOpen ? "" : "drop--open"
                }`}
              >
                <p className="cart__option">Tamanho M</p>
                <p className="cart__option">Tamanho GG</p>
              </div>
            </div>
          </div>
          <div className="cart__information">
            <h3 className="cart__title">Pizza de Calabresa</h3>
            <p className="cart__price">R$ 32.00</p>
            <div className="cart__control">
              <img src={MinusImage} alt="ícone de decrementação" />
              <img src={PlusImage} alt="ícone de incrementação" />
            </div>
          </div>
        </div>
      </div>
      <hr className="cart__divider" />
    </div>
  );
}

export default ShoppingCart;
