import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "StandupSummarizer – Auto-summarize Slack standups for managers",
  description:
    "Connect to Slack, monitor standup channels, and get AI-generated executive summaries delivered to your inbox every morning."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          defer
          src="https://umami.microtool.dev/script.js"
          data-website-id="66b76254-bbf4-4ddd-8870-c5123733dbc3"
        />
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
