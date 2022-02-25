import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";
import { compareStrings } from "../domain/StringCompare";
import Button from "../components/Button";
import questions from "../resources/Questions.json";

export interface Question {
  question: string;
  answer: string;
}

export interface Questions {
  questions: Question[];
}

const GameView = () => {
  const [currentQuestion, setCurrentQuestion] = useState(
    questions.questions[0]
  );
  const [isCorrect, setCorrect] = useState(false);
  const [answer, setAnswer] = useState("");

  const handleAnswer = (input: any, question: Question) => {
    setAnswer(input);
    if (compareStrings(input, question)) {
      setCorrect(true);
    }
  };

  const nextQuestion = () => {
    setCorrect(false);
    setCurrentQuestion(questions.questions[1]);
  };

  return (
    <View>
      <Text>{currentQuestion.question}</Text>
      {!isCorrect && (
        <TextInput
          placeholder="Type your answer"
          onChangeText={(input) => handleAnswer(input, currentQuestion)}
        />
      )}
      {isCorrect && (
        <View>
          <Text>{answer}</Text>
          <Button text="Next question" onClick={nextQuestion} />
        </View>
      )}
    </View>
  );
};

export default GameView;
