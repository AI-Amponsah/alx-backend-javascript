//interface definition
interface student{
    firstName:string;
    lastname: string;
    age:number;
    location:string;
}

const st1: student ={
    firstName:"Isaac",
    lastname: "Amponsah",
    age: 23,
    location: "Kasoa"
}

const st2: student ={
    firstName:"Isaac",
    lastname: "Amponsah",
    age: 23,
    location: "Kasoa"
}

const studentList: student[]= [st1, st2];

const tabl = document.createElement('tabl');
const trow = document.createElement("trow")