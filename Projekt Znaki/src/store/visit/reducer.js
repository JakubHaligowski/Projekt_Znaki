export const visitReducer = (state, action) => {
  switch (action.type) {
    case "set_doctor":
      return {
        ...state,
        doctor: action.payload,
      };
    case "set_visit_type":
      return {
        ...state,
        type: action.payload,
      };
    case "set_visit_date":
      return {
        ...state,
        date: action.payload,
      };
    case "set_visit_hour":
      return {
        ...state,
        hour: action.payload,
      };
    default:
      return state;
  }
};
