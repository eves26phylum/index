import { NavLink } from "react-router";
import diskSpaceLeft from "../assets/images/diskSpaceLeft.png";
import { useEffect, useRef, useState } from "react";

function getUnixTimestampOfTime(targetYear: number, targetMonth: number, targetDay: number): number {
    const formattedMonth = String(targetMonth).padStart(2, '0'); // left-pad hahaha
    const formattedDay = String(targetDay).padStart(2, '0');
    const isoString = `${targetYear}-${formattedMonth}-${formattedDay}T00:00:00+10:00`;
    return Math.floor(Date.parse(isoString) / 1000);
}
function secondsToYears(seconds: number) {
    return seconds / 31536000;
}
function getUltraDeadline() {
    return getUnixTimestampOfTime(2029, 12, 30);
}
function getStartTask() {
    return getUnixTimestampOfTime(2011, 12, 30);
}
function getEnd() {
    return getUltraDeadline() - getStartTask();
}
function calculateUntilUltraDeadline(currentTime: number) {
    return (currentTime - getStartTask()) / getEnd();
}

export function LearningProgressBar({progress, children}: {progress: number, children?: React.ReactNode}) {
    return <div className="progressBar">
        <div className="progressIns" style={{
            width: `${progress * 100}%`
        }}>
            {children}
        </div>
    </div>
}
export function DestructiveActions() {
    const calculateSimulatedTime = () => {
        // return getUltraDeadline();
        return Math.floor(Date.now() / 1000);
    }
    const [simulatedTime, setSimulatedTime] = useState<number>(calculateSimulatedTime());
    const progress = Math.max(calculateUntilUltraDeadline(simulatedTime), 0);
    useEffect(() => {
        const id = setTimeout(() => {setSimulatedTime(calculateSimulatedTime())}, 1000);
        return () => {clearTimeout(id)};
    });
    const yearsLeft = secondsToYears(getEnd() - progress * getEnd()).toFixed(1);
    return <div className="mainContent presentation">
        <img src={diskSpaceLeft} className="behaveImage" alt="Disk Space Left on Macintosh—not much is left"/>
        <div className="default blog">
            <p>Version 1 [up to date since 06/06/2026]</p>
            <NavLink to="/email">Report bugs or contact eves26phylum</NavLink>
            <div className="group">
                <strong>Time Until Finished</strong>
                <LearningProgressBar progress={progress}>
                    <p className="yearsLeft">{yearsLeft === "0.0" ? `ready to produce` : `${yearsLeft} years left`}</p>
                </LearningProgressBar>
            </div>
            <div className="group">
                <strong>Destructive Actions</strong>
                <button className="os-option" onClick={() => {
                    document.body.remove();
                }}>Shut Down OS</button>
                <button className="os-option" onClick={() => {}}>Restart OS</button>
            </div>
        </div>
    </div>;
}