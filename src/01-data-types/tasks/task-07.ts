import { setFlagsFromString } from "node:v8";

/**
 * An online learning platform allows students to register for programming courses. 
 * Every registration stores information about both the student and the selected course. 
 * Student information includes student ID, full name, and grade level. 
 * Course information includes the course ID, course title, instructor name, 
 * and total learning hours. Finally, the registration also records the registration date and whether the payment has been completed.
 * 
 * Task:
 * 1. Define a proper type for the registration information.
 * 2. Implement a type that you defined on 3 registration data.
 * 
 * display the registration data using console.log.
 */
type registration = {
    studentId: string;
    fullName: string;
    gradeLevel: number;

    courseId: string;
    courseTitlel: string;
    instructorName: string;
    totalLearningHours: number;

    registrationDate: string;
    paymentCompleted: boolean;
};
const registration1: registration[]=[ {
    studentId: "ST001",
    fullName: "Ficka Putri",
    gradeLevel: 11,

    courseId: "TS101",
    courseTitlel: "RPL",
    instructorName: "Ardiansyah",
    totalLearningHours: 50,

    registrationDate: "2026-07-30",
    paymentCompleted: true,
},
{
    studentId: "ST002",
    fullName: "Rakhabuming",
    gradeLevel: 19,
    courseId: "TS102",
    courseTitlel: "TKJ",
    instructorName: "Noval Putra",
    totalLearningHours: 40,

    registrationDate: "2026-07-30",
    paymentCompleted: true,
},
{
    studentId: "ST003",
    fullName: "Aurel Putri",
    gradeLevel: 15,
    courseId: "TS103",
    courseTitlel: "PG",
    instructorName: "Lia lidia",
    totalLearningHours: 30,

    registrationDate: "2026-07-30",
    paymentCompleted: true,

}

]
console.log(registration1);