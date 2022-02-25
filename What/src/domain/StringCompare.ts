import { Question } from "../views/GameView";

export const compareStrings = (input: string, question: Question): boolean => {
  return input.toLowerCase().trim() === question.answer.toLowerCase().trim();
};
