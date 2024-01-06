import useMenuStore from "../../store/useMenuStore";

const useNavbottom = () => {
  const { isOpen, openCartMenu } = useMenuStore();
  return { isOpen, openCartMenu };
};

export default useNavbottom;
