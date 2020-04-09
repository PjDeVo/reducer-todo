export const initialState = [
  {
    item: "Learn about reducers",
    completed: false,
    id: 3892987589,
  },
  {
    item: "Get A Job Coding",
    completed: false,
    id: 3892987321,
  },
  {
    item: "Train Jiu Jitsu",
    completed: false,
    id: 3892987756,
  },
  {
    item: "Do Laundry",
    completed: false,
    id: 3892987896,
  },
  {
    item: "Break Keyboard",
    completed: false,
    id: 38929870234,
  },
];

export const newReducer = (state, action) => {
  switch (action.type) {
    case "ADDING_TASK":
      return [
        ...state,
        {
          item: action.payload,
          completed: false,
          id: new Date(),
        },
      ];
    case "UPDATE_COMPLETED":
      return state.map((item) => {
        if (item.id === action.payload) {
          return { ...item, completed: !item.completed };
        } else {
          return item;
        }
      });

    default:
      return state;
  }
};
