import { convertToIndex } from "./KeyboardUtil";

export enum KeyActionType {
  INPUT = "input",
  DELETE = "delete",
  ENTER = "enter",
}

export const reducerKeys = (letterState: any, action: KeyAction) => {
  const targetIndex = convertToIndex(action.target as string);

  switch (action.type) {
    case KeyActionType.INPUT:
      let newStates = letterState.answerLetterStates.slice();
      newStates.splice(0, 1, "unchecked");
      console.log(newStates);
      return {
        ...letterState,
        answer: letterState.answer + action.target,
        answerLetterStates: newStates,
      };
    case KeyActionType.DELETE:
      return { ...letterState, answer: letterState.answer.slice(0, -1) };
    default:
      return letterState;
  }
};

export type KeyAction = {
  type: KeyActionType;
  target?: string;
};
