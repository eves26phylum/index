import { useLayoutEffect, useRef, type RefObject } from "react";

export function usePriorityPlusMenu(dropMenu: React.ReactNode) {
    const superGeniusRef = useRef<HTMLElement | null>(null);
    useLayoutEffect(() => {
        // const observer = new ResizeObserver(() => {
        const eventListenerFunction = () => {
            const ref_current = superGeniusRef.current;
            if (!ref_current) return console.warn("PriorityPlusMenu didn't find the ref being attached to anything.");
            const isOverflowing = () => {
                console.log(ref_current.scrollWidth, ref_current.offsetWidth)
                return ref_current.scrollWidth > ref_current.offsetWidth;
            }
            
            const domChildren = Array.from(ref_current.children);
            if (domChildren.length === 0) return console.warn("PriorityPlusMenu's children is empty. Is that intentional?");

            // reset all back to normal
            domChildren.forEach((node: Element) => {
                node.classList.remove("invisible");
            })
            console.log(isOverflowing());
            while (isOverflowing()) {
                if (domChildren.length === 0) {
                    console.warn("PriorityPlusMenu could not reduce elements enough... It's still overflowing.");
                    break;
                }
                const theLuckyDomChild =  domChildren.pop();
                theLuckyDomChild?.classList.add("invisible");
            }
        }
        // });
        // if (superGeniusRef.current) {
            // observer.observe(superGeniusRef.current);
        // }
        window.addEventListener("resize", eventListenerFunction);
        return () => window.removeEventListener("resize", eventListenerFunction);
    }, []);

    return superGeniusRef;
}