import { useState } from "react";

/* interface DropmenuState {
  [key: string]: boolean;
} */

type DropmenuState = Record<string, boolean>;

const useReserveLogic = () => {
  const [isOpen, setIsOpen] = useState<DropmenuState>({});

  const handleChangeDrpdown = (id: string) => {
    setIsOpen((prevOptions) => {
      return {
        ...prevOptions,
        [id]: prevOptions[id] ? false : true,
      };
    });
  };
  return {
    isOpen,
    handleChangeDrpdown,
  };
};

export default useReserveLogic;
