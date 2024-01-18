import { useState } from "react";

import useCartStore from "../../store/useCartStore";
import { Product } from "../../types";
import {
  drinkOptions,
  menuOptions,
  specialOptions,
} from "../../constants/constants";

interface OptionsState {
  [key: string]: boolean;
}

const useMenuLogic = () => {
  const [isFront, setIsFront] = useState<OptionsState>({});
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [menuSelected, setMenuSelected] = useState<string>("pizza");

  const { products, addToCart, incrementQuantity, startDropdown } =
    useCartStore();

  const itemsPerPage: number = 4;

  const handleChangeMenu = (newMenuSelected: string) => {
    setCurrentPage(1);
    setMenuSelected(newMenuSelected);
  };

  const calculateDisplayPizzas = () => {
    const startIndex: number = (currentPage - 1) * itemsPerPage;
    const endIndex: number = startIndex + itemsPerPage;
    return menuOptions.slice(startIndex, endIndex);
  };

  const calculateDisplayDrinks = () => {
    const startIndex: number = (currentPage - 1) * itemsPerPage;
    const endIndex: number = startIndex + itemsPerPage;
    return drinkOptions.slice(startIndex, endIndex);
  };

  const calculateDisplaySpecial = () => {
    const startIndex: number = (currentPage - 1) * itemsPerPage;
    const endIndex: number = startIndex + itemsPerPage;
    return specialOptions.slice(startIndex, endIndex);
  };

  const handleChangeCard = (id: string) => {
    setIsFront((prevOptions) => {
      return {
        ...prevOptions,
        [id]: prevOptions[id] ? false : true,
      };
    });
  };

  const handleAddToCart = (product: Product) => {
    if (!products.some((p) => p.id === product.id)) {
      addToCart(product);
      startDropdown(product.id);
      return;
    }

    incrementQuantity(product.id, 1);
  };

  const handlePrev = () => {
    if (currentPage === 1) {
      return;
    }
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNext = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  // verifica se tem pagina a ser exibida
  const hasPage = (
    currentPage: number,
    totalItems: number,
    itemsPerPage: number
  ): boolean => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    return currentPage === totalPages;
  };

  const displayItems = calculateDisplayPizzas();

  const displayDrinks = calculateDisplayDrinks();

  const displaySpecials = calculateDisplaySpecial();

  const isLastPage: boolean = hasPage(
    currentPage,
    menuSelected === "pizza" ? menuOptions.length : specialOptions.length,
    itemsPerPage
  );

  return {
    isFront,
    products,
    menuSelected,
    currentPage,
    displayItems,
    displayDrinks,
    displaySpecials,
    isLastPage,
    handleChangeMenu,
    handleChangeCard,
    handleAddToCart,
    handlePrev,
    handleNext,
  };
};

export default useMenuLogic;
