import { useState } from "react";
import useCartStore from "../../store/useCartStore";
import { Product } from "../../types";

interface OptionsState {
  [key: string]: boolean;
}

const useMenuLogic = () => {
  const [isFront, setIsFront] = useState<OptionsState>({});
  const { products, addToCart, startDropdwon } = useCartStore();

  const handleChangeCard = (id: string) => {
    setIsFront((prevOptions) => {
      return {
        ...prevOptions,
        [id]: prevOptions[id] ? false : true,
      };
    });
  };

  const handleAddToCart = (product: Product) => {
    addToCart(product);

    startDropdwon(product.id);
  };

  return {
    isFront,
    products,
    handleChangeCard,
    handleAddToCart,
  };
};

export default useMenuLogic;
