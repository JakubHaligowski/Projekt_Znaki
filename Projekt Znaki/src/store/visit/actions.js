export const setDoctor = (payload) => ({
  type: "set_doctor",
  payload,
});

export const setVisitType = (payload) => ({
  type: "set_visit_type",
  payload,
});

export const setVisitDate = (payload) => ({ type: "set_visit_date", payload });

export const setVisitHour = (payload) => ({ type: "set_visit_hour", payload });
