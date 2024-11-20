import React, { ReactNode } from "react";


export interface IButtonProps {
    children: ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
