import React from "react";
import { Box as ChakraBox, BoxProps } from "@chakra-ui/react";

const marginBottom = "lg";

export const Section: React.FC<BoxProps> = ({ children, ...props }) => {
  return (
    <ChakraBox as="section" mb={marginBottom} {...props}>
      {children}
    </ChakraBox>
  );
};

export const Main: React.FC<BoxProps> = ({ children, ...props }) => {
  return (
    <ChakraBox as="main" mb={marginBottom} {...props}>
      {children}
    </ChakraBox>
  );
};

export const Article: React.FC<BoxProps> = ({ children, ...props }) => {
  return (
    <ChakraBox as="article" mb={marginBottom} {...props}>
      {children}
    </ChakraBox>
  );
};

export const Aside: React.FC<BoxProps> = ({ children, ...props }) => {
  return (
    <ChakraBox as="aside" mb={marginBottom} {...props}>
      {children}
    </ChakraBox>
  );
};
