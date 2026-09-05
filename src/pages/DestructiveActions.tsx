import React from "react";
import { useEffect, useState } from "react";
import { getUnixTimestampOfTime, secondsToYears, getUltraDeadline, getStartTask, getEnd, calculateUntilUltraDeadline, getCurrentTime } from "../utilities/age";

                                // localStorage.setItem('dark_mode', document.body.classList.contains("dark_mode").toString());
export function LearningProgressBar({progress, children, outerChildren}: {progress: number, children?: React.ReactNode, outerChildren?: React.ReactNode}) {
		return <div className="progressBar">
        <div className="progressIns" style={{
                width: `${progress * 100}%`
        }}>
                {children}
        </div>
        <div style={{
            position: 'absolute',
            right: '0.5rem',
            top: 0,
            bottom: 0,
            display: 'flex',
            alignItems: 'center',
            whiteSpace: 'nowrap',
            overflow: 'visible',
						justifyContent: 'center',
            textOverflow: 'ellipsis',
            maxWidth: '100%',
						backgroundColor: 'white',
						rotate: '15deg',
						border: '1px solid red'
        }}>
            {outerChildren}
        </div>
    </div>
}
export function DestructiveActions() {
    const calculateSimulatedTime = () => {
        return getCurrentTime();
    }
    const [simulatedTime, setSimulatedTime] = useState<number>(calculateSimulatedTime());
    const progress = Math.max(calculateUntilUltraDeadline(simulatedTime), 0);
    useEffect(() => {
        const id = setTimeout(() => {setSimulatedTime(calculateSimulatedTime())}, 1000);
        return () => {clearTimeout(id)};
    });
    const yearsLeft = secondsToYears(getEnd() - progress * getEnd()).toFixed(1);
	return <LearningProgressBar progress={progress} outerChildren={<p style={{color: 'black'}} className="yearsLeft dogger">{yearsLeft === "0.0" ? `no longer legally bound to the conformities of being a minor` : `${yearsLeft} years left`}</p>}>
                    <p className="yearsLeft">{secondsToYears(progress * getEnd()).toFixed(2)} years old</p>
                </LearningProgressBar>
}
