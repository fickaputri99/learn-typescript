/**
 * An LMS stores assignment submission information on array below.
 * Business Rules
 * - Students who do not submit automatically receive a score of 0.
 * - A passing score is 75.
 * - Submitted assignments with a score below 75 require revision.
 * 
 * Student Tasks using a loop for:
 * - Count students who submitted their assignment.
 * - Count students who did not submit.
 * - Count students who passed.
 * - Count students who must revise their assignment.
 * - Display the names of students who did not submit.
 * - Display the names of students who must revise.
 * - Calculate the class average score.
 */
type Submission = {
    student: string
    submissions: boolean
    score: number
}

const submissions = [
    { student: "Alya", submitted: true, score: 92 },
    { student: "Budi", submitted: false, score: 0 },
    { student: "Citra", submitted: true, score: 78 },
    { student: "Dimas", submitted: true, score: 65 },
    { student: "Eka", submitted: false, score: 0 },
    { student: "Fajar", submitted: true, score: 84 },
    { student: "Gita", submitted: true, score: 90 },
    { student: "Hana", submitted: true, score: 73 }
];

let countSubmissionStudent: number = 0
let countUnSubmissionStudent: number = 0
let countPassedStudent: number = 0
let countFailedStudent: number = 0
let totalScore: number = 0
let countOfStudent: number = submissions.length

let UnSubmittedName: string []=[]
let revisionName: string[]=[]

/**Scanning Array */
for (let index = 0; index < countOfStudent; index++) {
    /**check if student */ 
    if(submissions[index].submitted){
        countSubmissionStudent++
    }  else {
        countUnSubmissionStudent++
        UnSubmittedName.push(
            submissions[index].student
        )
    }
    if(submissions[index].score >=75){
        countPassedStudent++
    }else{
        countFailedStudent++
        revisionName.push(
            submissions[index].student
        )
    }
    /**increment total acore */
    totalScore+= submissions[index].score
}
/**display report */
console.log(`Submitedd Student: $(countSubmittedStudent)`);
console.log(`UnSubmitedd Student: $(countUnSubmittedStudent)`);
console.log(`Passed Student: $(countPassedStudent)`);
console.log(`Failed Student: $(countFailedStudent)`);
console.log(`Average Score: $(totalScore / countOfStudent)`);

console.log(`student who not submit assigment`);
console.log(UnSubmittedName);

console.log(`studnet who need revise`);
console.log(revisionName);