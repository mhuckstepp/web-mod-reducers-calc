export const ADD_ONE = "ADD_ONE";
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR = "CLEAR";
export const SET_MEMORY = "SET_MEMORY";
export const SET_MEM_TOTAL = "SET_MEM_TOTAL";
export const MEM_CLEAR = "MEM_CLEAR";

export const applyNumber = (number) => {
  return { type: APPLY_NUMBER, payload: number };
};

export const changeOperation = (operation) => {
  return { type: CHANGE_OPERATION, payload: operation };
};

export const clearNum = () => {
  return { type: CLEAR };
};

export const setMem = () => {
  return { type: SET_MEMORY };
};

export const memTotal = () => {
  return { type: SET_MEM_TOTAL };
};

export const memClear = () => {
  return { type: MEM_CLEAR };
};
