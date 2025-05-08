import { PropsWithChildren } from "react";
import { Box, Stack } from "../atoms/atoms";

export const Card: React.FC<PropsWithChildren> = (props) => {
  return (
    <Box borderRadius="md" shadow="md" bg="surface" p="md">
      <Stack
        direction={{ base: "row", md: "column" }}
        align="center"
        justify="space-between"
        gap="md"
        height={"100%"}
      >
        {props.children}
      </Stack>
    </Box>
  );
};
