import useCartStore from "../../store/useCartStore";
import useMenuStore from "../../store/useMenuStore";

const useNavbottom = () => {
  const { isOpen, openCartMenu } = useMenuStore();
  const { products } = useCartStore();
  return { isOpen, products, openCartMenu };
};

export default useNavbottom;
