"use client";

import { Box, Flex, Text, Stack } from "@/components/atoms/atoms";
import { Heading, HeadingLevelContext } from "@/components/atoms/header";
import { Section } from "@/components/atoms/layout";

export default function ThemePage() {
  const colors = [
    { name: "primary", value: "primary" },
    { name: "primaryHover", value: "primaryHover" },
    { name: "secondary", value: "secondary" },
    { name: "background", value: "background" },
    { name: "surface", value: "surface" },
    { name: "textPrimary", value: "textPrimary" },
    { name: "textSecondary", value: "textSecondary" },
    { name: "error", value: "error" },
    { name: "warning", value: "warning" },
    { name: "info", value: "info" },
    { name: "success", value: "success" },
  ];

  return (
    <HeadingLevelContext.Provider value={1}>
      <Box p="8" bg="background">
        <Heading>Theme Showcase</Heading>

        {/* Color Palette */}
        <Section>
          <Heading>Colors</Heading>
          <Flex wrap="wrap">
            {colors.map((c) => (
              <Box key={c.name} m="2" textAlign="center">
                <Box w="20" h="12" bg={c.value} borderRadius="md" />
                <Text mt="1" fontSize="sm">
                  {c.name}
                </Text>
              </Box>
            ))}
          </Flex>
        </Section>

        {/* Typography */}
        <Section>
          <Heading>Typography</Heading>
          <Stack>
            <HeadingLevelContext.Provider value={1}>
              <Heading>Heading1</Heading>
            </HeadingLevelContext.Provider>
            <HeadingLevelContext.Provider value={2}>
              <Heading>Heading2</Heading>
            </HeadingLevelContext.Provider>
            <HeadingLevelContext.Provider value={3}>
              <Heading>Heading3</Heading>
            </HeadingLevelContext.Provider>
            <HeadingLevelContext.Provider value={4}>
              <Heading>Heading4</Heading>
            </HeadingLevelContext.Provider>
            <Text fontSize="2xl">Text 2xl</Text>
            <Text fontSize="xl">Text xl</Text>
            <Text fontSize="lg">Text lg</Text>
            <Text fontSize="md">Text md</Text>
            <Text fontSize="sm">Text sm</Text>
            <Text fontSize="xs">Text xs</Text>
          </Stack>
        </Section>

        {/* Spacing Scale */}
        <Section>
          <Heading>Spacing</Heading>
          <Stack>
            <Box bg="surface" p="xs">
              Spacing xs
            </Box>
            <Box bg="surface" p="sm">
              Spacing sm
            </Box>
            <Box bg="surface" p="md">
              Spacing md
            </Box>
            <Box bg="surface" p="lg">
              Spacing lg
            </Box>
            <Box bg="surface" p="xl">
              Spacing xl
            </Box>
          </Stack>
        </Section>
      </Box>
    </HeadingLevelContext.Provider>
  );
}
