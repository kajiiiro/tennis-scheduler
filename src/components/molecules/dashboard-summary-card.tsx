import React from "react";
import { Box, Stack, Text, Button } from "@/components/atoms/atoms";
import { Heading } from "@/components/atoms/header";
import { Section } from "@/components/atoms/layout";

export interface DashboardSummaryCardProps {
  remainingSlots: number;
  upcomingLessons: Date[];
  onReserveClick: () => void;
}

export const DashboardSummaryCard: React.FC<DashboardSummaryCardProps> = ({
  remainingSlots,
  upcomingLessons,
  onReserveClick,
}) => {
  const reserveContent = (
    <>
      <Text>予約枠：{remainingSlots}</Text>
      <Button
        borderRadius="md"
        shadow="md"
        bg="surface"
        p="md"
        bgColor="primary"
        active={remainingSlots > 0}
        onClick={onReserveClick}
      >
        コース予約
      </Button>
    </>
  );
  const upcomingLessonsContent = (
    <>
      <Text>今週のレッスン</Text>
      <Stack direction="column" gap="sd">
        {upcomingLessons.map((lessonDate) => (
          <Text key={lessonDate.toString()}>{lessonDate.toLocaleString()}</Text>
        ))}
      </Stack>
      {upcomingLessons.length === 0 && <Text>レッスンはありません</Text>}
    </>
  );

  const cardContents = [
    { key: "reserve", value: reserveContent },
    { key: "upcomingLessons", value: upcomingLessonsContent },
  ] as const;
  return (
    <Section borderRadius="md" shadow="md" p="md">
      <Heading>ダッシュボード</Heading>
      <Stack direction={{ base: "column", md: "row" }} gap="md">
        {cardContents.map(({ key, value }) => (
          <Box key={key} borderRadius="md" shadow="md" bg="surface" p="md">
            <Stack
              direction={{ base: "row", md: "column" }}
              align="center"
              justify="space-between"
              gap="md"
            >
              {value}
            </Stack>
          </Box>
        ))}
      </Stack>
    </Section>
  );
};
