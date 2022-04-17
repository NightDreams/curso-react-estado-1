const initialState = {
  value: "",
  error: false,
  loading: false,
  deleted: false,
  confirmed: false,
};

// Reducer -  forma simple
// const reducer = (state, action) => {};

export const reducerIF = (state, action) => {
  if (action.type === "ERROR") {
    return {
      ...state,
      error: true,
      loading: true,
    };
  } else if (action.type === "CHECK") {
    return {
      ...state,
      loading: true,
    };
  } else {
    return { ...state };
  }
};
export const reducerSwitch = (state, action) => {
  switch (action.type) {
    case "ACTION_TYPE":
      return {
        ...state,
        error: true,
        loading: false,
      };
    case "CHECK":
      return {
        ...state,
        loading: false,
      };
    default:
      return { ...state };
  }
};

export const reducerObject = (state) => ({
  Error: {
    ...state,
    error: true,
    loading: false,
  },
  CHECK: {
    ...state,
    loading: false,
  },
});

export const reducer = (state, action) => {
  if (reducerObject(state)[action.type]) {
    return reducerObject(state)[action.type];
  } else {
    return state;
  }
};
