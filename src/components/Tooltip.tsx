import React, { useState } from 'react';
import { useFloating, useHover, useInteractions, FloatingPortal, offset } from '@floating-ui/react';

interface TooltipProps {
  label: React.ReactNode;
  children: React.ReactNode;
  open?: boolean;
}

export default function Tooltip({ label, children, open }: TooltipProps) {
    const [isHovered, setIsHovered] = useState(false);
    const effectiveOpen = isHovered && open;

    const { refs, floatingStyles, context } = useFloating({
        open: effectiveOpen,
        onOpenChange: setIsHovered,
        placement: 'top',
        middleware: [offset(4)]
    });

    const hover = useHover(context);
    const { getReferenceProps, getFloatingProps } = useInteractions([hover]);

    return <>
        <span ref={refs.setReference} {...getReferenceProps()}>
            {children}
        </span>
        {effectiveOpen && <FloatingPortal>
            <div
            ref={refs.setFloating}
            style={floatingStyles}
            className="tooltip"
            {...getFloatingProps()}
            >
                {label}
            </div>
        </FloatingPortal>
        }
    </>;
}