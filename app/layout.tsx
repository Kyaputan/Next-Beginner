import "./globals.css";
import Navbar from "@/components/Navbar";
import type { ReactNode } from "react";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: "My.Next",
  description: "Next.js 15 Tutorial",
  keywords: ["Next.js", "React", "TypeScript","Thailand"],
  
};

const layout = ({ children }:{ children:ReactNode }) => {
  return (
    <html>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
};

export default layout;
