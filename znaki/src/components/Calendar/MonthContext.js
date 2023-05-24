import { createContext } from "react";

const MonthContext = createContext({
  month: 0,
  setMonth: () => {},
});

export default MonthContext;
