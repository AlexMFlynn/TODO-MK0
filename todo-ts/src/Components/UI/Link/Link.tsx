import { PropsWithChildren } from 'react';
import './Link.css'


export interface LinkProps extends PropsWithChildren {
    color?: string;
    url?: string;
    route?: string;
    target: string;
};

export function Link({
    children,
    color = 'primary',
    url,
    route,
    target
}: LinkProps) {
    return (
        <a href={url || route}>
            {children}<link href={target}></link>
        </a >
    );
};