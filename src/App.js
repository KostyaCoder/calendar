import Calendar from "./components/Calendar";
import { startOfMonth, startOfWeek } from "date-fns";
import { LocaleDateContext } from "./contexts";

export default function App() {
  const currentDate = new Date();
  const firstDayOfFirstWeek = startOfWeek(startOfMonth(currentDate));

  return (
    <LocaleDateContext.Provider value={{ currentDate, firstDayOfFirstWeek }}>
      <Calendar />;
    </LocaleDateContext.Provider>
  );
}
