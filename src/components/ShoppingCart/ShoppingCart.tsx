import { motion } from "framer-motion";

import "./_ShoppingCart.scss";
import Button from "../Button/Button";

import MinusImage from "../../assets/icons/minus.svg";
import PlusImage from "../../assets/icons/plus.svg";
import useShoppingCart from "./useShoppingCart";

function ShoppingCart() {
  const {
    isOpen,
    dropIsOpen,
    menuRef,
    products,
    dropdown,
    handleOpenDrop,
    incrementQuantity,
    decrementQuantity,
    updateDropdown,
    updatePrice,
  } = useShoppingCart();

  return (
    <motion.div
      ref={menuRef}
      className="cart"
      id="car"
      initial={{ y: "-100%" }}
      animate={{ y: isOpen ? "0%" : "-100%" }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="cart__container">
        {products.map((product) => {
          const hasDrop = dropdown?.find(
            (drop) => drop.id === product.id && product.type === "pizza"
          );
          return (
            <div key={product.id} className="cart__container-inner">
              <div className="cart__content">
                <div className="cart__img">
                  <img
                    src={product.image}
                    alt={product.name}
                    width="1500"
                    height="1000"
                  />
                </div>
                {product.type === "pizza" ? (
                  <div className="cart__drop">
                    <div className="cart__drop-btn">
                      <Button
                        btn={{
                          variant_key: "quinary",
                          onClick: () => handleOpenDrop(product.id),
                        }}
                      >
                        Tamanho {hasDrop?.sizeSelected}
                      </Button>
                    </div>
                    <div
                      className={`cart__drop-options ${
                        dropIsOpen[product.id] ? "" : "drop--open"
                      }`}
                    >
                      <p
                        className="cart__option"
                        onClick={() => {
                          updateDropdown(product.id, "M");
                          updatePrice(product.id, "M");
                          handleOpenDrop(product.id);
                        }}
                      >
                        Tamanho M
                      </p>
                      <p
                        className="cart__option"
                        onClick={() => {
                          updateDropdown(product.id, "G");
                          updatePrice(product.id, "G");
                          handleOpenDrop(product.id);
                        }}
                      >
                        Tamanho G
                      </p>
                      <p
                        className="cart__option"
                        onClick={() => {
                          updateDropdown(product.id, "GG");
                          updatePrice(product.id, "GG");
                          handleOpenDrop(product.id);
                        }}
                      >
                        Tamanho GG
                      </p>
                    </div>
                  </div>
                ) : null}
              </div>
              <div className="cart__information">
                <h3 className="cart__information-title">{product.name}</h3>
                <div className="cart__information-status">
                  <p className="cart__quantity">QTD: {product.quantity}</p>
                  <p className="cart__price">R$ {product.price}</p>
                </div>
                <div className="cart__control">
                  <div
                    className="cart__control-img"
                    onClick={() => decrementQuantity(product.id, 1)}
                  >
                    <img src={MinusImage} alt="ícone de decrementação" />
                  </div>
                  <div
                    className="cart__control-img"
                    onClick={() => incrementQuantity(product.id, 1)}
                  >
                    <img src={PlusImage} alt="ícone de incrementação" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <hr className="cart__divider" />
      <div className="cart__payment">
        <p className="cart__payment-text">Total</p>
        <p className="cart__price">
          R${" "}
          {products.reduce(
            (sum, product) => sum + product.price * product.quantity,
            0
          )}
        </p>
      </div>
      <hr className="cart__divider" />
      <div className="cart__action">
        <Button btn={{ variant_key: "quinary", onClick: undefined }}>
          Comprar
        </Button>
      </div>
    </motion.div>
  );
}

export default ShoppingCart;
