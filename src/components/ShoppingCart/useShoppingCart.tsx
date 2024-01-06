import { useCallback, useEffect, useRef, useState } from "react";
import useMenuStore from "../../store/useMenuStore";
import useCartStore from "../../store/useCartStore";

interface DropdownState {
  [key: string]: boolean;
}

const useShoppingCart = () => {
  const [dropIsOpen, setDropIsOpen] = useState<DropdownState>({});
  const menuRef = useRef<HTMLDivElement>(null);

  const { isOpen, closeCartMenu } = useMenuStore();
  const {
    products,
    dropdown,
    incrementQuantity,
    decrementQuantity,
    updateDropdown,
    updatePrice,
  } = useCartStore();

  const handleOpenDrop = (id: string) => {
    setDropIsOpen((prevDrop) => {
      return {
        ...prevDrop,
        [id]: prevDrop[id] ? false : true,
      };
    });
  };

  const handleCloseShoppingCart = useCallback(
    (event: MouseEvent) => {
      const clickedElement = event.target as HTMLElement;
      const isClickedOnCartIcon = clickedElement.id === "cartIcon";

      if (
        !isClickedOnCartIcon &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        isOpen
      ) {
        closeCartMenu();
      }
    },
    [isOpen, closeCartMenu]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleCloseShoppingCart);
    return () => {
      document.removeEventListener("mousedown", handleCloseShoppingCart);
    };
  }, [handleCloseShoppingCart]);

  return {
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
  };
};

export default useShoppingCart;
