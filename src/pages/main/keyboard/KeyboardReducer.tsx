export enum KeyAction {
  INPUT = "input",
  DELETE = "delete",
  ENTER = "enter",
}

export const reducerKeys = (letterState: any, action: string) => {
  switch (action) {
    case "input":
      return { ...letterState, letters: letterState.letters.concat("A") };

    default:
      return letterState;
  }
};
