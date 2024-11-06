import { useEffect } from "react";

function useLocationLogic() {
  useEffect(() => {
    const handleScroll = () => {
      // Não há lógica específica a ser executada durante a rolagem neste exemplo
    };

    // Adicionar listener passivo ao elemento iframe
    document.addEventListener("touchstart", handleScroll, { passive: true });

    // Cleanup: Remover o listener ao desmontar o componente
    return () => {
      document.removeEventListener("touchstart", handleScroll);
    };
  }, []);
}

export default useLocationLogic;
