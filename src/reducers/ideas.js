const initialIdeas = [
  {
    id: 1,
    title: "Kitten Mittens",
    description: "Because they're smitten",
  },
  {
    id: 2,
    title: "use-global-hook",
    description: "Because Redux kind of sux...",
  },
];

export const ideas = (state = initialIdeas, action) => {
  switch (action.type) {
    case "ADD_IDEA":
      return [
        ...state,
        {
          id: Date.now(),
          title: action.idea.title,
          description: action.idea.description,
        },
      ];
    case "DELETE_IDEA": {
      return state.filter((idea) => idea.id !== action.id);
    }
    default:
      return state;
  }
};
