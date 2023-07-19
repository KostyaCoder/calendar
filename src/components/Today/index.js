import { useContext } from "react";
import { LocaleDateContext } from "../../contexts";
import { format } from "date-fns";
import style from "./ToDay.module.scss"

export default function Today() {
  const { currentDate } = useContext(LocaleDateContext);

  return (
    <div className={style.today}>
      <p className={style.titleToday}>{format(currentDate, "EEEE")}</p>
      <p className={style.numberToday}>{format(currentDate, "d")}</p>
    </div>
  );
}
