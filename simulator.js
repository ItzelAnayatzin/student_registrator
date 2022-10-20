// THIS IS A STUDENT REGISTRATION SIMULATOR.

class Student {
    constructor(name, last_name, age){
        this.name = name;
        this.last_name = last_name;
        this.age = age;
    }

    get_data(){
        console.log("<-------------------->")
        console.log("Nombre/s:" , this.name);
        console.log("Apellidos:" , this.last_name);
        console.log("Edad:" , this.age);
    }

}


let student_registration = []

for(let i=0 ; i < 5 ; i++){
    let name = prompt("Ingrese el nombre/s del alumno/alumna");
    let last_name = prompt ("Ingrese los apellidos del alumno/alumna");
    let age = prompt("Ingrese la edad del alumno/alumna");
    let student = new Student (name, last_name, age);

    student_registration.push(student)
}

console.log(student_registration)


for(let student of student_registration){
    student.get_data();
}