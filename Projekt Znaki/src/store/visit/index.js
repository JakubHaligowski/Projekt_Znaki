import { createContext, useContext, useReducer } from "react";
import { setDoctor, setVisitDate, setVisitHour, setVisitType } from "./actions";
import { visitReducer } from "./reducer";
import { initialVisitState } from "./state";

export const VisitContext = createContext({
  createState: {},
  createDispatch: () => {},
});

export const useVisitActions = () => {
  const { visitDispatch } = useContext(VisitContext);

  return {
    setDoctor: (payload) => visitDispatch(setDoctor(payload)),
    setVisitType: (payload) => visitDispatch(setVisitType(payload)),
    setVisitDate: (payload) => visitDispatch(setVisitDate(payload)),
    setVisitHour: (payload) => visitDispatch(setVisitHour(payload)),
  };
};

export const VisitProvider = ({ children }) => {
  const [visitState, visitDispatch] = useReducer(
    visitReducer,
    initialVisitState
  );

  const visitContextValues = {
    visitState,
    visitDispatch,
  };

  return (
    <VisitContext.Provider value={visitContextValues}>
      {children}
    </VisitContext.Provider>
  );
};
