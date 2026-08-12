/**
 * 
 * The school library is building a digital catalog to help students search for books. 
 * Every book must store its ISBN number, title, author's name, total number of pages, 
 * book category, and whether the book is currently available for borrowing.
 * 
 * Task:
 * 1. Define a proper type for the book information.
 * 2. Implement a type that you defined on 3 books data.
 * 
 * display the book data using console.log.
 */
type Book = {
    ISBN: string;
    title: string;  
    author: string;
    pages: number;
    category: "Fiction" | "Non-Fiction" | "Science" | "Horror";
    available: boolean;
};
const book: Book[] = [{
    ISBN: "978-3-16-148410-0",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    pages: 180,
    category: "Fiction",
    available: true,
},
{
    ISBN: "978-0-987654-32-1",
    title: "Laskar Pelangi",
    author: "Andrea Hirata",
    pages: 534,
    category: "Fiction",
    available: false
},
{
    ISBN: "978-0-123456-78-9",
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    pages: 498,
    category: "Non-Fiction",
    available: true
},

]
console.log(book);