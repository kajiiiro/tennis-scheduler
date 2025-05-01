import {
  BoxProps,
  Box as ChakraBox,
  Flex as ChakraFlex,
  Heading as ChakraHeading,
  Stack as ChakraStack,
  Text as ChakraText,
  FlexProps,
  HeadingProps,
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

export const Heading: React.FC<HeadingProps> = (props) => {
  return <ChakraHeading {...props} />;
};

export const Stack: React.FC<StackProps> = (props) => {
  return <ChakraStack {...props} />;
};

export const Text: React.FC<TextProps> = (props) => {
  return <ChakraText {...props} />;
};
