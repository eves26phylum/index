import type Draggable from "react-draggable";

export type ModalDefaultButtonType = {onClick: () => void, children?: React.ReactNode};
export type ModalButtonsType = {children?: React.ReactNode};
export type ModalHeaderType = {children?: React.ReactNode};
export type ModalBodyType = {children?: React.ReactNode};
export type DraggableModalType = {children?: React.ReactNode} & Partial<React.ComponentProps<typeof Draggable>>;