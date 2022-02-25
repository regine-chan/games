import React from "react";
import { Button as ReactButton } from "react-native";

interface ButtonProps {
  text: string;
  onClick: () => void;
}

const Button = (props: ButtonProps) => {
  return <ReactButton title={props.text} onPress={props.onClick} />;
};

export default Button;
