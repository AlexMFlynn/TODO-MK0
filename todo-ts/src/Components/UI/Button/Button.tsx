import { MouseEventHandler, PropsWithChildren } from 'react'
import './Button.css'


export interface ButtonProps extends PropsWithChildren {
    onClick: MouseEventHandler;
    type?: "button" | "submit" | "reset" | undefined;
    kind?: string;
    color?: string;
};

export function Button({
    onClick,
    children,
    type = 'button',
    kind,
    color = 'primary',
}: ButtonProps) {
    return (
        <button
            className={`${color} ${kind}`}
            onClick={onClick}
            type={type}
        >
            {children}
        </button >
    );
};