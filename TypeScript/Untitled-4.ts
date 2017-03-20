/**
 * 类=>传统的JavaScript程序使用函数和基于原型的继承来创建可重用的组件.ES6 开始也可以使用类来创建可重复使用的组件了.
 */
class Greeter{
    // 属性名:属性类型
    greeting:string;
    // 构造函数
    constructor(message:string){
        this.greeting = message;
    }
    // 类方法
    greet(){
        return 'hello'+this.greeting;
    }
}
// 通过类创建类实例
let myGreeter = new Greeter('send message');

/**
 * 类的继承:Animal 基类!
 */
class Animal{
    name:string;
    constructor(theName:string){
        this.name = theName;
    }
    move(distanceInMeters:number=0){
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
/**
 * snake 蛇类,继承(扩展)自Animal基类
 */
class Snake extends Animal{
    constructor(name:string){
        super(name);
    }
    move(distanceInMeters:number=5){
        console.log('爬行动物:');
        super.move(distanceInMeters);
    }
}
/**
 * horse 马类,继承自 Animal 基类.
 */
class Horse extends Animal{
    constructor(name:string){
        super(name);
    }
    move(distanceInMeters:number=15){
        console.log('马在狂奔');
        super.move(distanceInMeters);
    }
}
let sam = new Snake('八歧大蛇');
let tom = new Horse('赤兔宝马');
sam.move(); // 爬行动物 八歧大蛇 moved 5m
tom.move(); // 马在狂奔 赤兔宝马 moved 15m
// 包含构造函数的派生类必须调用 super() , 它会执行父类构造函数.

/**
 * 公有 私有 受保护 的修饰符
 * 默认标记 public 修饰符
 * 私有:private 当成员被标记为 私有 那么就不能在声明它的类外面访问
 */

// private 演示:
class Myprivate{
    private name:string;
    constructor(theName:string){
        this.name = theName;
    }
}
new Myprivate('lalaal').name;// Error: Property 'name' is private and only accessible within class 'Myprivate'

/**
 * 理解 protected 和 privite 类似,但是在派生类可以访问.外部不能访问.
 */

class Person{
    protected name:string;
    constructor(name:string){
        this.name = name;
    }
}

class Employee extends Person{
    private department:string;
    constructor(name:string,department:string){
        super(name);
        this.department = department;
    }
    public getElevatorPitch(){
        return `hello, my name is ${this.name} and i work in ${this.department}.`;
    }
}
let jeason = new Employee('jeason','销售');
jeason.department; // Error : Property 'department' is private and only accessible within class 'Employee'
jeason.name;// Error : Property 'name' is protected and only accessible within class 'Person' and its subclasses
jeason.getElevatorPitch();
//  protected 和 private 差不多,前者在派生类中还可以调用.都不可以实例化后直接访问.

// 只读属性, 使用关键字 Readonly 将属性设置为只读;只读属性只能在声明时或构造函数里被初始化

class MyReadonly{
    readonly name:string;
    readonly age:number = 9;
    constructor(theName:string){
        this.name = theName;
    }
}
let myRxx = new MyReadonly('my name is xxxxx');
myRxx.name = 'zhangjie'; // Error : Cannot assign to 'name' because it is a constant or a read-only property.
// 参数属性:=> 在 constructor 构造函数里面歹意并初始化一个属性;
class AnimalX{
    constructor(private name:string){}// 在创建参数的时候同时也创建了私有属性name.
    move(destanction:number){
        return `${this.name} is run ${defaultStatus}`;
    }
}
// 在 constructor 构造参数里面使用 private public protected 修饰参数会创建相应的 属性!
/**
 * 存取器:getters setters 访问对象成员
 */

let passcode = 'jwczjzl';
class CommitX{
    private _name:string;
    get name():string{
        return this._name;
    }
    set name(newName:string){
        if (passcode && passcode == 'jwczjzl'){
            this._name = newName;
        }else{
            console.log("Error:密码错误或不存在");
            
        }
    }
}

let myCommit = new CommitX();
myCommit.name = 'zhangjie';
if (myCommit.name){
    alert(myCommit.name);
}

/**
 * 静态属性!
 */
class Grid{
    static origin = {x:0,y:0};
    calculateDistanceFromOrigin(point:{x:number; y:number;}){ // 参数  point:{x:number; y:number;} 在创建一个有两个属性的对象
        let xDist = point.x - Grid.origin.x;
        let yDist = point.y - Grid.origin.y;
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }
    constructor(public scale:number){}
}
let myGrid1 = new Grid(2.0);
let myGrid2 = new Grid(5.0);
console.log(myGrid1.calculateDistanceFromOrigin({x:5,y:7}));


/**
 * 抽象类!作为其他派生类的基类存在,不会被实例化,不同于interface抽象类可以包含成员方法的实现细节 abstract 关键字用于定义抽象类和在类内定义抽象方法
 * 抽象类中的抽象方法不包含方法实现,在其派生类里必须实现改抽象方法!
 */


/**
 * 构造函数
 */