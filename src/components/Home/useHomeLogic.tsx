const useHomeLogic = () => {
  const handleScrollToMenu = () => {
    const menu: Element | null = document.querySelector("#menu");

    if (menu instanceof Element) {
      menu.scrollIntoView({
        block: "start",
        behavior: "smooth",
      });
    }
  };

  return { handleScrollToMenu };
};

export default useHomeLogic;
