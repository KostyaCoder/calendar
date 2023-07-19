import Month from "../Month";
import Today from "../Today";
import style from "./Calendar.module.scss";
import { startOfMonth, startOfWeek } from "date-fns";
import { LocaleDateContext } from "../../contexts";

export default function Calendar() {
  const currentDate = new Date();
  const firstDayOfFirstWeek = startOfWeek(startOfMonth(currentDate));

  return (
    <LocaleDateContext.Provider value={{ currentDate, firstDayOfFirstWeek }}>
      <div className={style.calendar}>
        <Today />
        <Month />

        <Month />
      </div>
    </LocaleDateContext.Provider>
  );
}
