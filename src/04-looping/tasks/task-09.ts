/**
 * A university stores the final grades of students enrolled in the Backend Development course at array below.
 * Grade Categories
 * - A : 90–100
 * - B : 80–89
 * - C : 70–79
 * - D : below 70
 * 
 * Student Task Calculate:
 * - Number of A students
 * - Number of B students
 * - Number of C students
 * - Number of D students
 * - Highest score
 * - Lowest score
 * - Average score
 */
type students = {
    name : string
    score: number

}
const students = [
    { name: "Alya", score: 88 },
    { name: "Budi", score: 71 },
    { name: "Citra", score: 95 },
    { name: "Dimas", score: 63 },
    { name: "Eka", score: 84 },
    { name: "Fajar", score: 79 },
    { name: "Gita", score: 92 },
    { name: "Hana", score: 67 }
];

let studentA = 0;
let studentB = 0;
let studentC = 0;
let studentD = 0;

let highestScore = students[0];
let lowestScore = students[0];

let totalScore = 0;

for (const student of students) {
  
  if (student.score >= 90) {
    studentA++;
  } else if (student.score >= 80) {
    studentB++;
  } else if (student.score >= 70) {
    studentC++;
  } else {
    studentD++;
  }

  totalScore += student.score;

  if (student.score > highestScore.score) {
    highestScore = student;
  }

  
  if (student.score < lowestScore.score) {
    lowestScore = student;
  }
}

const averageScore = totalScore / students.length;

console.log("Jumlah A:", studentA);
console.log("Jumlah B:", studentB);
console.log("Jumlah C:", studentC);
console.log("Jumlah D:", studentD);
console.log("Nilai tertinggi:", highestScore);
console.log("Nilai terendah:", lowestScore);
console.log("Rata-rata:", averageScore);