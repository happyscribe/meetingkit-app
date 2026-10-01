import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MeetingKit App",
  description: "An open-source meetings app built with MeetingKit.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
