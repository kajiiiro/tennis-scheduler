import { Heading as ChakraHeading, HeadingProps } from "@chakra-ui/react";
import React, { createContext, useContext } from "react";

export const HeadingLevelContext = createContext(0);

export const Heading: React.FC<HeadingProps> = (props) => {
  const level = useContext(HeadingLevelContext);
  switch (level) {
    case 1:
      return <Heading1 {...props} />;
    case 2:
      return <Heading2 {...props} />;
    case 3:
      return <Heading3 {...props} />;
    case 4:
      return <Heading4 {...props} />;
    default:
      return <ChakraHeading {...props} />;
  }
};

const Heading1: React.FC<HeadingProps> = (props) => {
  return <ChakraHeading as="h1" size="lg" mb="lg" {...props} />;
};

const Heading2: React.FC<HeadingProps> = (props) => {
  return <ChakraHeading as="h2" size="md" mb="md" {...props} />;
};

const Heading3: React.FC<HeadingProps> = (props) => {
  return <ChakraHeading as="h3" size="sm" mb="sm" {...props} />;
};

const Heading4: React.FC<HeadingProps> = (props) => {
  return <ChakraHeading as="h4" size="xs" mb="xs" {...props} />;
};
