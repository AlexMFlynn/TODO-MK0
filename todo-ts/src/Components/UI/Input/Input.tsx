import { ChangeEventHandler } from "react";
import { Label } from "../Label/Label";
import './Input.css'

export interface InputProps {
    type: string;
    label: string | null;
    name: string;
    value: string;
    onValueChange: ChangeEventHandler;
    isReadOnly?: false;
    placeholder?: null;
    prefix?: null;
    suffix?: null;
    onFocus?: () => {};
    onBlur?: () => {};
    hideClear?: false;
};

export function Input({
    type,
    label,
    name,
    value,
    onValueChange,
    isReadOnly = false,
    placeholder = null,
    prefix = null,
    suffix = null,
    onFocus,
    onBlur,
    hideClear = false
}: InputProps) {
    return (
        <div>
            <Label bind={name}>{label}</Label>
            <input
                type={type}
                id={name}
                name={name}
                readOnly={isReadOnly}
                onChange={onValueChange}
                value={value}
            ></input>
        </div>
    );
};
