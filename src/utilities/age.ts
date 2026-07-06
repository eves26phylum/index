export function getUnixTimestampOfTime(targetYear: number, targetMonth: number, targetDay: number): number {
    const formattedMonth = String(targetMonth).padStart(2, '0'); // left-pad hahaha
    const formattedDay = String(targetDay).padStart(2, '0');
    const isoString = `${targetYear}-${formattedMonth}-${formattedDay}T00:00:00+10:00`;
    return Math.floor(Date.parse(isoString) / 1000);
}
export function secondsToYears(seconds: number) {
    return seconds / 31536000;
}
export function getUltraDeadline() {
    return getUnixTimestampOfTime(2029, 12, 30);
}
export function getStartTask() {
    return getUnixTimestampOfTime(2011, 12, 30);
}
export function getEnd() {
    return getUltraDeadline() - getStartTask();
}
export function calculateUntilUltraDeadline(currentTime: number) {
    return (currentTime - getStartTask()) / getEnd();
}