import {
  BoxProps,
  ButtonProps,
  Box as ChakraBox,
  Button as ChakraButton,
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

export const Button: React.FC<ButtonProps & { active?: boolean }> = (props) => {
  const { active = true, ...rest } = props;
  return (
    <ChakraButton
      disabled={!active}
      opacity={active ? 1 : 0.6}
      cursor={active ? undefined : "not-allowed"}
      bgColor="primary"
      borderRadius="md"
      shadow="md"
      p="md"
      {...rest}
    />
  );
};
