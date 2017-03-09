class Student{

    firstName:string;
    lastName:string;
    constructor(firstName:string,lastName:string){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    printx(){
        return "我的名字是"+this.firstName+""+this.lastName;
    }
}

let stu1 = new Student("张","杰");
document.body.innerHTML = stu1.printx();
