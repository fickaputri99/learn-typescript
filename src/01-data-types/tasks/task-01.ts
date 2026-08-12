/*
 * SMK Telkom Malang calculates each student's final score using several assessment components. 
 * Before calculating the final grade, the system stores every assessment score as a separate variable. 
 * The homeroom teacher entered the following information for one student. 
 * The student named Nadia Putri has a student ID of ST2026045. She earned 88.5 on assignments, 
 * 84 on the midterm exam, and 91.5 on the final exam. Because she submitted every assignment before the deadline, 
 * she received an attendance score of 100. The school also records that Nadia participates in extracurricular activities, 
 * so this information should also be stored.
 * 
 * Task:
 * 
 * 1. dentify all values that should be stored as variables.
 * 2. Determine the most appropriate data type for each variable.
 * 3. Create the variable declarations using TypeScript.
 * 4. Display the student data using console.log.
 * */
type Student = {
    studentName: string;
    studentId: string;
    assignmentScore: number;
    midtermScore: number;
    finalExamScore: number;
    attendanceScore: number;
    extracurricularParticipation: boolean;
};
const student: Student[] =[  {
    studentName: "fara",
    studentId: "ST2026045",
    assignmentScore: 88.5,
    midtermScore: 84,
    finalExamScore: 91.5,
    attendanceScore: 100,
    extracurricularParticipation: true,
} ,
{
    studentName: "arka",
    studentId: "ST2020115",
    assignmentScore: 90.5,
    midtermScore: 85,
    finalExamScore: 91.5,
    attendanceScore: 100,
    extracurricularParticipation: true, 

},
{
  studentName: "Putri",
    studentId: "ST2045331",
    assignmentScore: 80.0,
    midtermScore: 85,
    finalExamScore: 91.5,
    attendanceScore: 100,
    extracurricularParticipation: true,   
}
]
console.log(student);