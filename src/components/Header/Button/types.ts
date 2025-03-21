import type React from "react";
import type { ReactNode } from "react";

export interface IHeaderButtonProps {
  children: ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  href?: string;
  className?: string;
}
