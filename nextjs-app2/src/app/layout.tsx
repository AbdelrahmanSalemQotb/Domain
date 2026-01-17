import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Domainput - AI Domain Engine",
  description:
    "Next-generation domain management powered by artificial superintelligence and quantum infrastructure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
