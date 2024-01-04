import { useState } from "react";

interface OptionsState {
  [key: string]: boolean;
}

const useMenuLogic = () => {
  const [isFront, setIsFront] = useState<OptionsState>({});

  const handleChangeCard = (id: string) => {
    setIsFront((prevOptions) => {
      return {
        ...prevOptions,
        [id]: prevOptions[id] ? false : true,
      };
    });
  };
  return { isFront, handleChangeCard };
};

export default useMenuLogic;
