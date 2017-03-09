var Student = (function () {
    function Student(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Student.prototype.printx = function () {
        return "我的名字是" + this.firstName + "" + this.lastName;
    };
    return Student;
}());
var stu1 = new Student("张", "杰");
document.body.innerHTML = stu1.printx();
