import { PropsWithChildren } from 'react'
import './Card.css'

export interface CardProps extends PropsWithChildren {
    className?: string;
    hidden?: boolean
    color?: string
};

export function Card({
    className,
    children,
    hidden = false,
    color = 'primary'
}: CardProps) {
    const classes = `card ${color} ${className}`;
    return (
        <div hidden={hidden} className={classes}>{children}</div>
    );
};