import React from "react";
import { Box, Stack, Text, Button } from "@/components/atoms/atoms";
import { Heading } from "@/components/atoms/header";
import { Section } from "@/components/atoms/layout";
import { Card } from "./card";

export interface DashboardSummaryCardProps {
  reserveCount: number;
  lessons: Date[];
}

const EntryCard = () => <Button>会員証</Button>;

const reserveCard = (reserveCount: number) => (
  <>
    <Text>振替枠：{reserveCount}</Text>
    <Button active={reserveCount > 0}>振替登録</Button>
  </>
);

const formatDate = (date: Date) => {
  // 月（1〜12）
  const M = date.getMonth() + 1;
  // 日（1〜31）
  const D = date.getDate();
  // 曜日
  const days = ["日", "月", "火", "水", "木", "金", "土"];
  const w = days[date.getDay()];
  // 時:分（2桁ゼロパディング）
  const HH = String(date.getHours()).padStart(2, "0");
  const mm = String(date.getMinutes()).padStart(2, "0");

  return `${M}/${D}(${w}) ${HH}:${mm}`;
};

const lessonCards = (lessons: Date[]) => {
  if (lessons.length < 0) {
    return [
      {
        key: "noLessons",
        value: (
          <>
            <Text>🎾</Text>
            <Text>一週間以内の予定はありません</Text>
          </>
        ),
      },
    ];
  }

  return lessons.map((lesson) => ({
    key: lesson.toString(),
    value: (
      <>
        <Text>🎾 {formatDate(lesson)}</Text>
        <Button>欠席登録</Button>
      </>
    ),
  }));
};

export const Dashboard: React.FC<DashboardSummaryCardProps> = ({
  reserveCount,
  lessons,
}) => {
  const cardContents = [
    { key: "reserve", value: reserveCard(reserveCount) },
    ...lessonCards(lessons),
  ];
  return (
    <Section borderRadius="md" shadow="md" p="md">
      <Heading>ダッシュボード</Heading>
      <Box mb="md">
        <EntryCard />
      </Box>
      <Stack direction={{ base: "column", md: "row" }} gap="md">
        {cardContents.map(({ key, value }) => (
          <Card key={key}>{value}</Card>
        ))}
      </Stack>
    </Section>
  );
};
