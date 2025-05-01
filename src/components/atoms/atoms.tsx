import {
  BoxProps,
  Box as ChakraBox,
  Flex as ChakraFlex,
  Stack as ChakraStack,
  Text as ChakraText,
  FlexProps,
  StackProps,
  TextProps,
} from "@chakra-ui/react";
import React from "react";

export const Box: React.FC<BoxProps> = (props) => {
  return <ChakraBox {...props} />;
};

export const Flex: React.FC<FlexProps> = (props) => {
  return <ChakraFlex {...props} />;
};

export const Stack: React.FC<StackProps> = (props) => {
  return <ChakraStack {...props} />;
};

export const Text: React.FC<TextProps> = (props) => {
  return <ChakraText {...props} />;
};
