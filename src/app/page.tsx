"use client";

import { Heading } from "@/components/atoms/header";
import { Main, Section } from "@/components/atoms/layout";
import { DashboardSummaryCard } from "@/components/molecules/dashboard-summary-card";
import { useCallback } from "react";

export default function Home() {
  const openReserveModal = useCallback(() => {}, []);
  return (
    <Main p="8" bg="background">
      <Heading>ホーム</Heading>
      <Section>
        <DashboardSummaryCard
          remainingSlots={5}
          upcomingLessons={10}
          onReserveClick={openReserveModal}
        />
      </Section>
    </Main>
  );
}
