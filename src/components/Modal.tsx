import Draggable from 'react-draggable';
import { useRef, useState } from "react";
import type { DraggableModalType, ModalBodyType, ModalButtonsType, ModalDefaultButtonType, ModalHeaderType } from '../types/ModalTypes';

export function ModalDefaultButton({onClick, children}: ModalDefaultButtonType) {
    return <button onClick={onClick} className="modal-button">{children}</button>
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
export function DraggableModal({children, ...props}: DraggableModalType) {
    const nodeRef = useRef<HTMLDivElement>(null);
    return <Draggable nodeRef={nodeRef} handle=".modal-header" positionOffset={{ x: '-50%', y: '-50%' }} {...props} >
            <div className="modal" ref={nodeRef}>
                {children}
            </div>
        </Draggable>
}