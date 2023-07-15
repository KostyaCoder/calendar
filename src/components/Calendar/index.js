import Month from "../Month";
import Today from "../Today";
import style from "./Calendar.module.scss";

export default function Calendar() {
  return (
    <div className={style.calendar}>
      <Today />
      <Month /> {/*технически высвобождает место для Today */}
      <Month />
    </div>
  );
}
