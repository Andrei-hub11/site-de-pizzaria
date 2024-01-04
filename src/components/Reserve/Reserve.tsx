import "./_ReserveStyle.scss";

import Button from "../Button/Button";
import { reservations } from "../../constants/constants";
import useReserveLogic from "./useReserveLogic";

function Reserve() {
  const { isOpen, handleChangeDrpdown } = useReserveLogic();

  return (
    <section className="reserve">
      <h1 className="reserve__title">Fazer Reserva</h1>
      <div className="reserve__container">
        {reservations.map((reserve) => (
          <div
            key={reserve.id}
            className={`reserve__container__inner ${
              reserve.id === "1" && isOpen[reserve.id] ? "drop--effect" : ""
            }`}
            onClick={() => handleChangeDrpdown(reserve.id)}
          >
            <div className="reserve__extra">
              <div className="reserve__extra-content">
                <img src={reserve.icon} alt={reserve.alt} />
                <div className="reserve__extra-text">{reserve.text}</div>
              </div>
              <img src={reserve.dropIcon} alt="ícone de dropmenu" />
            </div>
            {reserve.id === "1" ? <p>Reservaaa</p> : null}
          </div>
        ))}

        <div className="reserve__action">
          <Button btn={{ variant_key: "tertiary", onClick: undefined }}>
            Fazer Reserva
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Reserve;
