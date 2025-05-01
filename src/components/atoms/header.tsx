import { Heading as ChakraHeading, HeadingProps } from "@chakra-ui/react";
import React from "react";

export const Heading1: React.FC<HeadingProps> = (props) => {
  return <ChakraHeading as="h1" size="lg" mb="lg" {...props} />;
};

export const Heading2: React.FC<HeadingProps> = (props) => {
  return <ChakraHeading as="h2" size="md" mb="md" {...props} />;
};

export const Heading3: React.FC<HeadingProps> = (props) => {
  return <ChakraHeading as="h3" size="sm" mb="sm" {...props} />;
};

export const Heading4: React.FC<HeadingProps> = (props) => {
  return <ChakraHeading as="h4" size="xs" mb="xs" {...props} />;
};
