import React from "react";
import { Box, Stack, Text } from "@/components/atoms/atoms";
import { Heading } from "@/components/atoms/header";
import { Button } from "@chakra-ui/react";

export interface DashboardSummaryCardProps {
  remainingSlots: number;
  upcomingLessons: number;
  onReserveClick: () => void;
}

export const DashboardSummaryCard: React.FC<DashboardSummaryCardProps> = ({
  remainingSlots,
  upcomingLessons,
  onReserveClick,
}) => {
  return (
    <Box borderWidth="1px" borderRadius="md" shadow="md" bg="surface" p="md">
      <Stack spaceY="2">
        <Heading>ダッシュボード</Heading>
        <Text>予約枠：{remainingSlots}</Text>
        <Text>今週のレッスン：{upcomingLessons}</Text>
        <Button colorScheme="primary" onClick={onReserveClick}>
          コース予約
        </Button>
      </Stack>
    </Box>
  );
};
