import { useContext } from "react";
import { LocaleDateContext } from "../../contexts";
import { addDays } from "date-fns";
import style from "./Week.module.scss";
import DayNumber from "../DayNumber";
import DayWeek from "../DayWeek";
import CONSTANTS from "../../constants.js";
const { FORMAT_DATE } = CONSTANTS;

export default function Week(props) {
  const { numberWeek, typeWeek = FORMAT_DATE.NUMBER_DAY } = props;
  const { firstDayOfFirstWeek } = useContext(LocaleDateContext);

  const days = [];
  for (let i = 0; i < 7; i++) {
    const date = addDays(firstDayOfFirstWeek, i + 7 * numberWeek);

    switch (typeWeek) {
      case FORMAT_DATE.NUMBER_DAY:
        days.push(<DayNumber key={i} date={date} />);
        break;
      case FORMAT_DATE.DAY_OF_WEEK:
        days.push(<DayWeek key={i} date={date} />);
        break;

      default:
        break;
    }
  }

  return <div className={style.week}>{days}</div>;
}
