const AnswerStateType = {
  uncheck: "uncheck",
  unmatch: "unmatch",
  partialMatch: "partialMatch",
  exactMatch: "exactMatch"
} as const;
export type AnswerState = typeof AnswerStateType[keyof typeof AnswerStateType];
