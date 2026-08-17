interface Student {
    name: string,
    marks: number[];
}

interface Result {
    name: string,
    average: number,
    result: string;
}
const getStudentResult = (student: Student): Result => {
    const totalMarks = student.marks.reduce((marks: number, currentMark: number) => {
        return marks + currentMark;
    }, 0);

    const average = totalMarks / student.marks.length
    const name = student.name;
    let result: string;
    if (average >= 40) {
        result = "passed";
    } else {
        result = "failed";
    }
    return {
        name,
        average,
        result
    };

}















console.log(getStudentResult({
    name: "Rafi",
    marks: [80, 75, 90, 85]
}))

// Expected output:
// { name: "Rafi", average: 82.5, result: "Passed" }

// another example:
console.log(getStudentResult({
    name: "Nabil",
    marks: [30, 35, 40, 25]
}))

// Expected output:
// { name: "Nabil", average: 32.5, result: "Failed" }
