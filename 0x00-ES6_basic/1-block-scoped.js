export default function taskBlock(trueofFalse) {
    var task = false;
    var task2 = true;

    if (trueofFalse) {
        const task = true;
        const task2 = false;
    }

    return [task, task2];
}