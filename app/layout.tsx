// These styles apply to every route in the application
import "./global.css";

import { ReactNode } from "react";
import { quickSand, openSans, robFont } from "./fonts";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${quickSand.variable} ${openSans.variable} ${robFont.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
