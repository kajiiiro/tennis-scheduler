"use client";

import { Heading } from "@/components/atoms/header";
import { Main } from "@/components/atoms/layout";
import { Dashboard } from "@/components/molecules/dashboard";

export default function Home() {
  return (
    <Main p="8" bg="background">
      <Heading>ホーム</Heading>
      <Dashboard
        reserveCount={5}
        lessons={[
          new Date("2023-10-01T10:00:00"),
          new Date("2023-10-02T14:00:00"),
          new Date("2023-10-03T18:00:00"),
        ]}
      />
    </Main>
  );
}
