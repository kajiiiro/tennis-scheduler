import React, { useContext } from "react";
import { Box as ChakraBox, BoxProps } from "@chakra-ui/react";
import { HeadingLevelContext } from "./header";

const marginBottom = "lg";

export const Section: React.FC<BoxProps> = ({ children, ...props }) => {
  const level = useContext(HeadingLevelContext);
  return (
    <HeadingLevelContext.Provider value={level + 1}>
      <ChakraBox as="section" mb={marginBottom} {...props}>
        {children}
      </ChakraBox>
    </HeadingLevelContext.Provider>
  );
};

export const Main: React.FC<BoxProps> = ({ children, ...props }) => {
  const level = useContext(HeadingLevelContext);
  return (
    <HeadingLevelContext.Provider value={level + 1}>
      <ChakraBox as="main" mb={marginBottom} {...props}>
        {children}
      </ChakraBox>
    </HeadingLevelContext.Provider>
  );
};

export const Article: React.FC<BoxProps> = ({ children, ...props }) => {
  const level = useContext(HeadingLevelContext);
  return (
    <HeadingLevelContext.Provider value={level + 1}>
      <ChakraBox as="article" mb={marginBottom} {...props}>
        {children}
      </ChakraBox>
    </HeadingLevelContext.Provider>
  );
};

export const Aside: React.FC<BoxProps> = ({ children, ...props }) => {
  const level = useContext(HeadingLevelContext);
  return (
    <HeadingLevelContext.Provider value={level + 1}>
      <ChakraBox as="aside" mb={marginBottom} {...props}>
        {children}
      </ChakraBox>
    </HeadingLevelContext.Provider>
  );
};
