import { useContext } from "react";
import { LocaleDateContext } from "../../contexts";
import style from "./DayNumber.module.scss";
import classNames from "classnames";

export default function DayNumber(props) {
  const { date } = props;
  const { currentDate } = useContext(LocaleDateContext);

  const isNumberToday =
    date.getDate() === currentDate.getDate() &&
    date.getMonth() === currentDate.getMonth();

  const isNumberOtherMonth = date.getMonth() !== currentDate.getMonth();

  const addClassNames = classNames(style.number, {
    [style.numberToday]: isNumberToday,
    [style.numberOtherMonth]: isNumberOtherMonth,
  });

  return <div className={addClassNames}>{date.getDate()}</div>;
}
