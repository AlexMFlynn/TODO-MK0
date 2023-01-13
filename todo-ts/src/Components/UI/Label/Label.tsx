import { PropsWithChildren } from "react";
import './Label.css'

//used bind as a property key since "for" is a keyword
export interface LabelProps extends PropsWithChildren {
    bind: string;
    status?: string;
}

export function Label({
    children,
    bind,
    status
}: LabelProps) {
    return (
        <label
            htmlFor={bind}
            className={status}
        > {children}</label >
    );
};