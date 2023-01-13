import { MouseEventHandler, PropsWithChildren, ReactNode } from 'react'
import './Button.css'


export interface ButtonProps extends PropsWithChildren {
    onClick: MouseEventHandler;
    type?: "button" | "submit" | "reset" | undefined;
    kind?: string;
    color?: string;
    isLoading?: boolean;
    loadingChildren?: ReactNode;

};

export function Button({
    onClick,
    children,
    type = 'button',
    kind,
    color = 'button-primary',
    isLoading = false,
    loadingChildren
}: ButtonProps) {
    return (
        <button
            className={`${color} ${kind}`}
            disabled={isLoading}
            onClick={onClick}
            type={type}
        >
            {(isLoading ? loadingChildren : children)}
        </button >
    );
};