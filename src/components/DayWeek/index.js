import { format } from "date-fns";
import style from "./DayWeek.module.scss";

export default function DayWeek(props) {
  const { date } = props;
  return <div className={style.day}>{format(date, "EEEEE")}</div>;
}
