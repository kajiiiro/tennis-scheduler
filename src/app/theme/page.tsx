"use client";

import { Box, Flex, Heading, Text, Stack } from "@/components/atoms/atoms";
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
    <Box p="8" bg="background">
      <Heading size="lg" mb="6">
        Theme Showcase
      </Heading>

      {/* Color Palette */}
      <Section>
        <Heading size="md" mb="4">
          Colors
        </Heading>
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
        <Heading size="md" mb="4">
          Typography
        </Heading>
        <Stack>
          <Heading size="2xl">Heading 2xl</Heading>
          <Heading size="xl">Heading xl</Heading>
          <Heading size="lg">Heading lg</Heading>
          <Heading size="md">Heading md</Heading>
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
        <Heading size="md" mb="4">
          Spacing
        </Heading>
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
  );
}
