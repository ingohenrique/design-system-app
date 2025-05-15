import { HTMLAttributes, ReactNode } from "react";

export interface DS_CardProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  image?: string;
  footer?: ReactNode;
  variant: "default" | "bordered";
}
