class Student {
    constructor(name,year,course) {
        this.name = name;
        this.year = year;
        this.course = course;
    }

    introduce() {
        console.log(`Hello my name is ${this.name}, Year ${this.year} ${this.course}`);
    }
}

const student = new Student("Lloyd",3,"BSIT");
student.introduce();

const student2 = new Student("Kint",3,"BSIT");
student2.introduce();