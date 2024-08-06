export default function taskBlock(trueofFalse) {
    var task = false;
    var task2 = true;

    if (trueofFalse) {
        const task = true; /* eslint-disable-line no-unused-vars */
        const task2 = false; /* eslint-disable-line no-unused-vars */
    }

    return [task, task2];
}
