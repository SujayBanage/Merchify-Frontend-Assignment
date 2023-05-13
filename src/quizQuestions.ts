export interface Iquestion {
  question: string;
  options: string[];
  correctOption: string;
}

export const questions = [
  {
    question: "What is capital of India ?",
    options: ["Delhi", "Mumbai", "Nagpur", "Chennai"],
    correctOption: "Delhi",
  },
  {
    question: "In Which Century Did Portuguese merchants first land in India",
    options: ["17th century", "15th century", "14th century", "16th century"],
    correctOption: "16th century",
  },
  {
    question: "In Which State Golden Temple is situated ?",
    options: ["Maharashtra", "Goa", "Punjab", "Haryana"],
    correctOption: "Punjab",
  },
];

export const questionsLength = questions.length;
