import { letterStateType } from "../Main";
import { AnswerLetterState } from "../answer/AnswerLetterState";
import { KeyLetterState } from "../keyboard/KeyLetterState";

export enum KeyActionType {
  INPUT = "input",
  DELETE = "delete",
  ENTER = "enter",
}

export const reducerKeys = (letterState: any, action: KeyAction) => {
  switch (action.type) {
    case KeyActionType.INPUT:
      let newStates = letterState.answerLetterStates.slice();
      newStates.splice(letterState.answer.length, 1, "uncheck");
      console.log(newStates);
      return {
        ...letterState,
        answer: letterState.answer + action.target,
        answerLetterStates: newStates,
      };
    case KeyActionType.DELETE:
      let newStates2 = letterState.answerLetterStates.slice();
      newStates2.splice(letterState.answer.length - 1, 1, "empty");
      return {
        ...letterState,
        answer: letterState.answer.slice(0, -1),
        answerLetterStates: newStates2,
      };
    case KeyActionType.ENTER:
      return {
        ...letterState,
        answerLetterStates: action.target2,
        keyLetterStates: action.target3,
      };

    default:
      return letterState;
  }
};

export type KeyAction = {
  type: KeyActionType;
  target?: string;
  target2?: AnswerLetterState[];
  target3?: KeyLetterState[];
};
