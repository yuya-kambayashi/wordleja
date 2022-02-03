const LetterStateType = {
  unused: "unused",
  used: "used",
  partialMatch: "partialMatch",
  exactMatch: "exactMatch"
} as const;
export type LetterState = typeof LetterStateType[keyof typeof LetterStateType];
