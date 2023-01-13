import React, { ReactNode } from 'react';
//import { IconContext } from 'react-icons';

export interface IconProps {
    icon: ReactNode;
    fontSize?: string;
    color?: string;
};

export function Icon({
    fontSize = '20px',
    color = 'black',
    icon
}: IconProps) {
    // return (
    // <IconContext.Provider value={{ style: { fontSize, color } }}>
    //     <div>{icon}</div>
    // </IconContext.Provider>
    // );
};