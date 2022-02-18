export enum KeyActionType {
  INPUT = "input",
  DELETE = "delete",
  ENTER = "enter",
}

export const reducerKeys = (letterState: any, action: KeyAction) => {
  switch (action.type) {
    case KeyActionType.INPUT:
      return { ...letterState, letters: letterState.letters + action.target };
    case KeyActionType.DELETE:
      return { ...letterState, letters: letterState.letters.slice(0, -1) };
    default:
      return letterState;
  }
};

export type KeyAction = {
  type: KeyActionType;
  target?: string;
};
