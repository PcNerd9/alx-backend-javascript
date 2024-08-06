export default function taskBlock(trueofFalse) {
    var task = false;
    var task2 = true;

    if (trueofFalse) {
        let task = true;
        let task2 = false;
    }

    return [task, task2];
}