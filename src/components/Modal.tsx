import Draggable from 'react-draggable';
import { useRef, useState } from "react";
import type { DraggableModalType, ModalBodyType, ModalButtonsType, ModalDefaultButtonType, ModalHeaderType } from '../types/ModalTypes';

export function ModalDefaultButton({onClick}: ModalDefaultButtonType) {
    return <button onClick={onClick}>Button</button>
}
export function ModalButtons({children}: ModalButtonsType) {
    return <div className="modal-buttons">
        {children}
    </div>
}
export function ModalHeader({children}: ModalHeaderType) {
    return  <div className="modal-header">
                {children}
            </div>
}
export function ModalBody({children}: ModalBodyType) {
    return  <div className="modal-body">
                {children}
            </div>
}
export function DraggableModal({children}: DraggableModalType) {
    const nodeRef = useRef<HTMLDivElement>(null);
    return <Draggable nodeRef={nodeRef} handle=".modal-header" defaultPosition={{ x: Math.random() * 300, y: Math.random() * 300 }}>
            <div className="modal" ref={nodeRef}>
                {children}
            </div>
        </Draggable>
}