const AnswerLetterStateType = {
  empty: "empty",
  uncheck: "uncheck",
  unmatch: "unmatch",
  partialMatch: "partialMatch",
  exactMatch: "exactMatch"
} as const;
export type AnswerLetterState = typeof AnswerLetterStateType[keyof typeof AnswerLetterStateType];
