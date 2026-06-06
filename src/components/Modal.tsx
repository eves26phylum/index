import Draggable from 'react-draggable';
import { useRef } from "react";

export function ModalDefaultButton({onClick}: {onClick: () => void}) {
    return <button onClick={onClick}>Button</button>
}
export function ModalButtons({children}: {children?: React.ReactNode}) {
    return <div className="modal-buttons">
        {children}
    </div>
}
export function ModalHeader({children}: {children: React.ReactNode}) {
    return  <div className="modal-header">
                {children}
            </div>
}
export function DraggableModal({children}: {children?: React.ReactNode}) {
    const nodeRef = useRef<HTMLDivElement>(null);
    return <Draggable nodeRef={nodeRef} handle=".modal-header" defaultPosition={{ x: Math.random() * 300, y: Math.random() * 300 }}>
            <div className="modal" ref={nodeRef}>
                {children}
            </div>
        </Draggable>
}