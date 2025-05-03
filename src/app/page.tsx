"use client";

import { Heading } from "@/components/atoms/header";
import { Main } from "@/components/atoms/layout";
import { DashboardSummaryCard } from "@/components/molecules/dashboard-summary-card";
import { useCallback } from "react";

export default function Home() {
  const openReserveModal = useCallback(() => {}, []);
  return (
    <Main p="8" bg="background">
      <Heading>ホーム</Heading>
      <DashboardSummaryCard
        remainingSlots={5}
        upcomingLessons={[
          new Date("2023-10-01T10:00:00"),
          new Date("2023-10-02T14:00:00"),
          new Date("2023-10-03T18:00:00"),
        ]}
        onReserveClick={openReserveModal}
      />
    </Main>
  );
}
