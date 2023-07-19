import { useContext } from "react";
import { LocaleDateContext } from "../../contexts";
import style from "./Month.module.scss";
import { format } from "date-fns";
import Week from "../Week";
import CONSTANTS from "../../constants.js";
const { FORMAT_DATE } = CONSTANTS;

export default function Month() {
  const { currentDate } = useContext(LocaleDateContext);

  const weeks = [];
  for (let i = 0; i < 6; i++) {
    weeks.push(
      <Week
        key={i}
        numberWeek={i}
        typeWeek={FORMAT_DATE.NUMBER_DAY}
        shift={-1}
      />
    );
  }

  return (
    <div className={style.month}>
      <p className={style.titleMonth}>{format(currentDate, "LLLL uuuu")}</p>
      <Week numberWeek={0} typeWeek={FORMAT_DATE.DAY_OF_WEEK} shift={-1} />
      {weeks}
    </div>
  );
}
