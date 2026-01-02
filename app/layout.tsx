import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title:{
    template: '%s - Mk Online Shop',
    default: 'Mk Online Shop',
  },
  description: "Mk Online Shop is the best online shop for all your needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-poppins antialiased">
        {children}
      </body>
    </html>
  );
}
