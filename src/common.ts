export const OperatorCode = {
  addition: "+",
  subtraction: "-",
  mulitplication: "×",
  division: "/",
  equal: "="
} as const;

export interface OperatorType {
  [key: string]: string;
}
