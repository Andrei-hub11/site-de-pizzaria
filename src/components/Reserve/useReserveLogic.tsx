import { useState, useEffect } from "react";
import dayjs from "dayjs";

/* interface DropmenuState {
  [key: string]: boolean;
} */

type DropmenuState = Record<string, boolean>;

const useReserveLogic = () => {
  const [isOpen, setIsOpen] = useState<DropmenuState>({});

  const [datasFimDeSemana, setDatasFimDeSemana] = useState<string[]>([]);

  useEffect(() => {
    const hoje: dayjs.Dayjs = dayjs();

    const datas: string[] = [];

    if (hoje.day() === 6) {
      const domingo: string = hoje.add(1, "day").format("YYYY-MM-DD");
      datas.push(domingo);
    } else {
      let sexta: dayjs.Dayjs = hoje;
      while (sexta.day() !== 5) {
        sexta = sexta.add(1, "day");
      }

      const today: string = sexta.format("YYYY-MM-DD");
      const sabado: string = sexta.add(1, "day").format("YYYY-MM-DD");
      const domingo: string = sexta.add(2, "day").format("YYYY-MM-DD");

      datas.push(today, sabado, domingo);
    }

    setDatasFimDeSemana(datas);
  }, []);

  console.log(datasFimDeSemana);

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
