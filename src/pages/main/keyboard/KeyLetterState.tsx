const KeyetterStateType = {
  unused: "unused",
  used: "used",
  partialMatch: "partialMatch",
  exactMatch: "exactMatch"
} as const;
export type KeyetterState = typeof KeyetterStateType[keyof typeof KeyetterStateType];
