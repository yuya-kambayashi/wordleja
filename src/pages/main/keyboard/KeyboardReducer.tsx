export enum KeyAction {
  INPUT = "input",
  DELETE = "delete",
  ENTER = "enter",
}

export const reducerKeys = (letterState: any, action: string) => {
  switch (action) {
    case "input":
      return { ...letterState, letters: letterState.letters + "A" };
    case "delete":
      return { ...letterState, letters: letterState.letters.slice(0, -1) };
    default:
      return letterState;
  }
};
