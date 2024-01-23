//complete this code
class Person {
	constructor(name,age){
		this._name=name;
		this._age=age;
	}
	get name(){
		return this_.name;
	}
	get age(){
		return this_.age;
	}
	set age(age){
		this._age=age;
	}
	
}	


class Student extends Person {
	study(){
		console.log(this.name+" is studying");
	}
}

class Teacher extends Person
{	teach()
{
	console.log(this.name+" is teaching");
}
}
const person = new Person("John", 25);
console.log(person.name); 

person.age = 30;
console.log(person._age); 

const student = new Student("Alice", 20);
student.study(); 

const teacher = new Teacher("Mr. Smith", 40);
teacher.teach();
// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
