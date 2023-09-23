import type { DefaultColors } from "tailwindcss/types/generated/colors";
type RemoveDeprecated<T> = Exclude<
  T,
  "lightBlue" | "warmGray" | "trueGray" | "coolGray" | "blueGray"
>;
type RemoveUnapplicable<T> = Exclude<T, "inherit" | "current" | "transparent">;
type FlattenObjectKeys<
  T extends Record<string, unknown>,
  Key = keyof T
> = Key extends string
  ? T[Key] extends Record<string, unknown>
    ? `${Key}-${FlattenObjectKeys<T[Key]>}`
    : `${Key}`
  : never;
type FillClasses = {
  [K in RemoveDeprecated<
    RemoveUnapplicable<keyof DefaultColors>
  >]: DefaultColors[K] extends Record<string, unknown>
    ? `fill-${K}-${FlattenObjectKeys<DefaultColors[K]>}`
    : DefaultColors[K];
};
export type TwFill = FillClasses[keyof FillClasses];
