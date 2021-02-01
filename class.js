class student{
    constructor(studentId,studentName,studentAge,studentPhone){
        this.id =studentId;
        this.name = studentName;
        this.age = studentAge;
        this.phone = studentPhone;
    }
}
const student1 = new student(21,'Sohel', 18, 01817263453);
const student2 = new student(23,' Bahar',19, 091826375);
console.log(student1,student2);