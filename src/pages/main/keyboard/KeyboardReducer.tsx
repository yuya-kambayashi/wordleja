export const reducerFuncLetters = (letterState: string[], action: string) => {
  switch (action) {
    case "concat":
      return letterState.concat("A");

    default:
      return [];
  }
};
