import React, { ReactNode } from "react";


export interface IHeaderButtonProps {
    children: ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    href?: string;
    fontSize?: string;
    fontWeight?: number;
    className?: string;
}
