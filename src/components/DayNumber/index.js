import style from "./DayNumber.module.scss";
import classNames from "classnames";
import { format, isThisMonth, isToday } from "date-fns";

export default function DayNumber(props) {
  const { date } = props;

  const addClassNames = classNames(style.number, {
    [style.numberToday]: isToday(date),
    [style.numberOtherMonth]: !isThisMonth(date),
  });

  return <div className={addClassNames}>{format(date, "d")}</div>;
}
