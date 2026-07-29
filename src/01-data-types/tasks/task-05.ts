/**
 * A software company records daily employee attendance. 
 * Every attendance record stores the employee's ID, employee name, date, check-in time, check-out time, 
 * total working hours, and whether the employee was present on that day.
 * 
 * Task:
 * 1. Define a proper type for the attendance information.
 * 2. Implement a type that you defined on 3 attendance data.
 * 
 * display the attendance data using console.log.
 */
type attendance = {
    employeeId: string;
    employeeName: string;
    date: string;  
    checkInTime: string; 
    checkOutTime: string; 
    totalWorkingHours: number; 
    isPresent: boolean;
};
const attendance: attendance[] = [{
    employeeId: "EMP-001",
    employeeName: "Aurel",
    date: "2026-10-10",
    checkInTime: "08:00",
    checkOutTime: "15.30",
    totalWorkingHours: 7.5,
    isPresent: true, 
} ,
{
    employeeId: "EMP-002",
    employeeName: "Faza",
    date: "2026-10-10",
    checkInTime: "08:00",
    checkOutTime: "15.30",
    totalWorkingHours: 7.5,
    isPresent: true
} ,
    
{
    employeeId: "EMP-003",
    employeeName: "Ficka",
    date: "2026-10-10",
    checkInTime: "08:00",
    checkOutTime: "15.30",
    totalWorkingHours: 7.5,
    isPresent: true
},

]
console.log(attendance);