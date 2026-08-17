"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getStudentResult = (student) => {
    const totalMarks = student.marks.reduce((marks, currentMark) => {
        return marks + currentMark;
    }, 0);
    const average = totalMarks / student.marks.length;
    const name = student.name;
    let result;
    if (average >= 40) {
        result = "passed";
    }
    else {
        result = "failed";
    }
    return {
        name,
        average,
        result
    };
};
console.log(getStudentResult({
    name: "Rafi",
    marks: [80, 75, 90, 85]
}));
// Expected output:
// { name: "Rafi", average: 82.5, result: "Passed" }
// another example:
console.log(getStudentResult({
    name: "Nabil",
    marks: [30, 35, 40, 25]
}));
// Expected output:
// { name: "Nabil", average: 32.5, result: "Failed" }
//# sourceMappingURL=5.getStudentResult.js.map