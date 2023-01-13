import { MouseEventHandler, PropsWithChildren } from 'react';
import { Button } from '../Button/Button';
import { Card } from '../Card/Card';
import './Modal.css'

export interface ModalProps extends PropsWithChildren {
    isOpen: boolean;
    onBackDropClick?: MouseEventHandler;
    title: string;
    footer?: string;
};

export function Modal({
    children,
    title,
    footer,
    isOpen,
    onBackDropClick
}: ModalProps) {
    return (

        <Card className='modal' hidden={!isOpen}>
            <Card>
                <header>
                    {title}
                    <Button kind='modal-button' onClick={() => console.log('modal click')}>x</Button>
                </header>
                <section>{children}</section>
                <footer>{footer}</footer>
            </Card>
        </Card>
    );
};