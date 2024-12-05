//
//
//

import type { Metadata } from "next";

import "@/assets/styles/reset.css";
import "@/assets/styles/roots.css";
import "@/assets/styles/fonts.css";
import "@/assets/styles/btn.css";
import "@/assets/styles/general.css";

export const metadata: Metadata = {
  title: "Domas Sirbike",
  description: "This is the home page",
};

export default async function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
