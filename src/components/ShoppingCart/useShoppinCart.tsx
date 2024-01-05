import { useCallback, useEffect, useRef, useState } from "react";
import useMenuStore from "../../store/useMenuStore";

const useShoppinCart = () => {
  const [dropIsOpen, setDropIsOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const { isOpen, closeMenu } = useMenuStore();

  const handleOpenDrop = () => {
    setDropIsOpen(!dropIsOpen);
  };

  const handleCloseShoppingCart = useCallback(
    (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    },
    [closeMenu]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleCloseShoppingCart);
    return () => {
      document.removeEventListener("mousedown", handleCloseShoppingCart);
    };
  }, [handleCloseShoppingCart]);

  return { isOpen, dropIsOpen, menuRef, handleOpenDrop };
};

export default useShoppinCart;
