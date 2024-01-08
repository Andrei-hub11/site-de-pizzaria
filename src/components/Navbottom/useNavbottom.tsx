import useCartStore from "../../store/useCartStore";
import useMenuStore from "../../store/useMenuStore";

const useNavbottom = () => {
  const { isOpen, toggleCartMenu } = useMenuStore();
  const { products } = useCartStore();
  return { isOpen, products, toggleCartMenu };
};

export default useNavbottom;
