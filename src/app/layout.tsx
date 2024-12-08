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

export default async function HomePage_LAYOUT({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex">{children}</body>
    </html>
  );
}
