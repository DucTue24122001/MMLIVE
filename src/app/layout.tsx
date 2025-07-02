import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import Main from "@/components/layouts/Main";

export const metadata: Metadata = {
  title: "Mimi+",
  description: "",
};

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <html>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Red+Rose&family=Teko:wght@300..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Main>{children}</Main>
      </body>
    </html>
  );
}
