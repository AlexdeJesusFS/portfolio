import type { ReactNode } from "react";

export interface ICard {
  children: ReactNode;
  title: string;
  text: React.ReactElement;
}
