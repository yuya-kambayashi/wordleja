const KeyLetterStateType = {
  unused: "unused",
  used: "used",
  partialMatch: "partialMatch",
  exactMatch: "exactMatch"
} as const;
export type KeyLetterState = typeof KeyLetterStateType[keyof typeof KeyLetterStateType];
