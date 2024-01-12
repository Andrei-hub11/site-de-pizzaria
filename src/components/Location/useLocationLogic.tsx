import { useEffect, useRef } from "react";

function useLocationLogic() {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Não há lógica específica a ser executada durante a rolagem neste exemplo
    };

    const currentIframe = iframeRef.current;

    // Adicionar listener passivo ao elemento iframe
    if (iframeRef.current) {
      iframeRef.current.contentWindow?.addEventListener(
        "scroll",
        handleScroll,
        {
          passive: true,
        }
      );
    }

    // Cleanup: Remover o listener ao desmontar o componente
    return () => {
      currentIframe?.contentWindow?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { iframeRef };
}

export default useLocationLogic;
