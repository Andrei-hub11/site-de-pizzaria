import useMenuStore from "../../store/useMenuStore";

const useNavbottom = () => {
  const { toggleMenu } = useMenuStore();
  return { toggleMenu };
};

export default useNavbottom;
