import React from "react";
import { NavLink } from "react-router";
import diskSpaceLeft from "../assets/images/diskSpaceLeft.png";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { ModalContext } from "../App";
import type { DraggableModalType, ModalBodyType, ModalButtonsType, ModalDefaultButtonType, ModalHeaderType } from "../types/ModalTypes";

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
export function DestructiveActions({DraggableModal, ModalHeader, ModalButtons, ModalDefaultButton, ModalBody}: {DraggableModal: React.ComponentType<DraggableModalType>, ModalHeader: React.ComponentType<ModalHeaderType>, ModalButtons: React.ComponentType<ModalButtonsType>, ModalDefaultButton: React.ComponentType<ModalDefaultButtonType>, ModalBody: React.ComponentType<ModalBodyType>}) {
    const modals = useContext(ModalContext);
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
                <strong>Time Until Grown</strong>
                <LearningProgressBar progress={progress}>
                    <p className="yearsLeft">{yearsLeft === "0.0" ? `ready to produce` : `${yearsLeft} years left`}</p>
                </LearningProgressBar>
            </div>
            <div className="group">
                <strong>Destructive Actions</strong>
                <div className="os-container">
                    <button className="os-option" onClick={() => {
                        const uuid = crypto.randomUUID();
                        modals.addModal(<DraggableModal defaultPosition={{
                            x: window.innerWidth / 2,
                            y: window.innerHeight / 2
                        }}>
                        <ModalHeader>
                            Are you sure you want to shut down the computer now?
                        </ModalHeader>
                        <ModalBody>
                            <p>You will need to reload the webpage to turn on the OS.</p>
                        </ModalBody>
                        <ModalButtons>
                            <ModalDefaultButton onClick={() => {
                                modals.destroyModalByUUID(uuid);
                            }}>Cancel</ModalDefaultButton>
                            <ModalDefaultButton onClick={() => {
                                document.documentElement.classList.add("turned-off");
                                document.body.remove();
                                setTimeout(() => {
                                document.documentElement.innerHTML = "<img src='https://spinningtoaster.weebly.com/uploads/2/0/5/1/20512720/3136285_orig.gif' style='width: 100px; height: auto;'>";
                                document.body.style = "display: flex; justify-content: center; align-items: center; background-color: black; height: 100dvh;";}, 2000);
                            }}>Confirm</ModalDefaultButton>
                        </ModalButtons>
                    </DraggableModal>, uuid);
                    }}>Shut Down OS</button>
                    <button className="os-option" onClick={() => {
                        const uuid = crypto.randomUUID();
                        modals.addModal(<DraggableModal defaultPosition={{
                            x: window.innerWidth / 2,
                            y: window.innerHeight / 2
                        }}>
                        <ModalHeader>
                            Are you sure you want to make everything red?
                        </ModalHeader>
                        <ModalBody>
                            <p>Just making sure..</p>
                        </ModalBody>
                        <ModalButtons>
                            <ModalDefaultButton onClick={() => {
                                modals.destroyModalByUUID(uuid);
                            }}>Cancel</ModalDefaultButton>
                            <ModalDefaultButton onClick={() => {
                                modals.destroyModalByUUID(uuid);
                                document.documentElement.className = "red-book";
                            }}>Confirm</ModalDefaultButton>
                        </ModalButtons>
                    </DraggableModal>, uuid);
                    }}>Make everything red.</button>
                    <button className="os-option" onClick={() => {
                        const uuid = crypto.randomUUID();
                        modals.addModal(<DraggableModal defaultPosition={{
                            x: window.innerWidth / 2,
                            y: window.innerHeight / 2
                        }}>
                        <ModalHeader>
                            Are you sure you want to make everything green?
                        </ModalHeader>
                        <ModalBody>
                            <p>Just making sure..</p>
                        </ModalBody>
                        <ModalButtons>
                            <ModalDefaultButton onClick={() => {
                                modals.destroyModalByUUID(uuid);
                            }}>Cancel</ModalDefaultButton>
                            <ModalDefaultButton onClick={() => {
                                modals.destroyModalByUUID(uuid);
                                document.documentElement.className = "geen-book";
                            }}>Confirm</ModalDefaultButton>
                        </ModalButtons>
                    </DraggableModal>, uuid);
                    }}>make everything geen</button>
                </div>
            </div>
        </div>
    </div>;
}

{/* 
<DraggableModal>
    <ModalHeader>
        {thisUUID}
    </ModalHeader>
    <p>Something went wrong</p>
    <ModalButtons>
        <ModalDefaultButton onClick={() => {
            destroyModalByUUID(thisUUID);
        }}></ModalDefaultButton>
        <ModalDefaultButton onClick={() => {
            document.documentElement.style = "background-color: black";
            document.body.remove();
        }}></ModalDefaultButton>
    </ModalButtons>
</DraggableModal>
*/}