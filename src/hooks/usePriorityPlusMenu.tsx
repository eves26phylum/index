import { useEffect, useLayoutEffect, useRef } from "react";

export function usePriorityPlusMenu<A extends HTMLElement, B extends HTMLElement>(onOverflowChange?: (hiddenCount: number) => void) {
    const superGeniusRef = useRef<A | null>(null);
    const overflowCheckRef = useRef<B | null>(null);
    const onOverflowChangeRef = useRef(onOverflowChange);
    useEffect(() => {
        onOverflowChangeRef.current = onOverflowChange;
    });

    useLayoutEffect(() => {
        const eventListenerFunction = () => {
            const ref_current = superGeniusRef.current;
            if (!ref_current) return;
            const overflow_ref = overflowCheckRef.current;
            if (!overflow_ref) return;

            const isOverflowing = () => overflow_ref.scrollWidth > overflow_ref.offsetWidth;

            const domChildren = Array.from(ref_current.children);
            if (domChildren.length === 0) {
                console.warn("PriorityPlusMenu's children is empty. Is that intentional?");
                onOverflowChangeRef.current?.(0);
                return;
            }

            // reset all back to normal
            domChildren.forEach((node: Element) => {
                node.classList.remove("invisible");
            });

            let hiddenCount = 0;
            while (isOverflowing()) {
                if (domChildren.length === 0) {
                    console.warn("PriorityPlusMenu could not reduce elements enough :(");
                    break;
                }
                const theLuckyDomChild = domChildren.pop();
                theLuckyDomChild?.classList.add("invisible");
                hiddenCount++;
            }

            onOverflowChangeRef.current?.(hiddenCount);
        };

        eventListenerFunction(); // run once on mount, otherwise a narrow initial viewport never gets evaluated
        window.addEventListener("resize", eventListenerFunction);
        return () => window.removeEventListener("resize", eventListenerFunction);
    }, []);

    return [superGeniusRef, overflowCheckRef] as const;
}