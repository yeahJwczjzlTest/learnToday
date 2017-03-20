/**
 * TypeScript 的核心原则之一就是对 值 所具有的 shape 进行类型检查.有时候被称作'鸭式辩型法'或'结构性子类型化';
 * 接口的作用是为这些类型命名,为代码和第三方代码定义契约.
 */
interface LabelledValue{
    label:string;
}
function printLabel(labelledObj:LabelledValue) {
    console.log(labelledObj.label);
}
let argsObj = {name:'zhangjie',label:'mohaha',age:16};
printLabel(argsObj);
// 接口里的属性也可以定义为可选属性!
interface SquareConfig{
    color?:string;
    width?:number;
}
function createSquare(config:SquareConfig):{color:string,area:number} {
    let newSquare = {color:'red',area:100};
    if(config.color){
        newSquare.color = config.color;
    }
    if(config.width){
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
let configX = {
    color:'green',
    number:88,
    name:'zhangjie'
}
createSquare(configX);
// 只读属性;
interface myPoint{
    readonly x:number;
    readonly y:number;
}
let pointEx:myPoint = {x:29,y:56};
pointEx.x = 29; // Error:Cannot assign to 'x' because it is a constant or a read-only property

// 只读数组:
let arr4test:number[] = [1,2,3,4];
let arr4readonly:ReadonlyArray<number> = arr4test;
arr4readonly[5] = 9; // Error : Index signature in type 'ReadonlyArray<number>' only permits reading.
arr4readonly.push[6]; // Error : Property 'push' dose not exist on type 'ReadonlyArray<number>'
arr4test = arr4readonly; // Error: Type 'ReadonlyArray<number> is not assignable to type 'number[]'.Property 'push' is missing in type 'ReadonlyArray<number>'
a = arr4readonly as number[]; // 使用断言重写

// 额外的属性检查
// 在上面学习完可选属性和interface的特性后;将一个在interfac里未定义的属性使用字面量传入函数,就会触发额外属性检查
interface SpaceColors{
    color?:string;
    width?:number;
}

function configSC(config:SpaceColors):{color:string,area:number} {
    let newConfig = {color:'red',area:1000};
    if(config.color){
        newConfig.color = config.color;
    }
    if(config.width){
        newConfig.area = config.width * config.width;
    }
    return newConfig;
}

// 使用字面量传入一个拥有未注册属性的对象时:
let config_one = configSC({colo:'read',width:200});// Error : 这里看上去没问题 两个属性都是 
// 但是,TypeScript 在使用 字面量 传入参数时,就会触发额外属性检查将没有定义的属性作为错误抛出.

// 可以使用类型断言来告诉编译器我们知道是咋回事
let config_yes = configSC({colo:'red',width:90} as SpaceColors);

// 最好的办法就是在 func 函数内加入一个索引签名. [propName: string]: any; 作用是:除了里面定义的 color 和 width 允许有其他的任意属性(任意类型)

// 最简单的办法是不使用字面量传参,直接将参数赋值给一个变量然后使用变量传入参数,就不会触发额外属性检查了.

// =................--------------...................=

// 函数类型:接口可以描述 TypeScript 里面对象的各种类型,也可以描述函数类型;
// 为了使用接口表示函数类型,需要给接口定义一个调用签名,包含函数参数数量和类型,以及函数返回值.
interface SearchFunc{
    (srouce:string,subString:string):boolean;// 两个参数都是 string 类型的,函数的返回值是 boolean 类型.
}
let mySearch:SearchFunc;
mySearch = function(src:string,substr:string):boolean {
    let result = src.search(substr);
    return result > -1;
}
// 函数的参数会逐个检查,要求对应位置上的参数类型是兼容的.如果不想制定类型,TypeScript 会自动推断出参数类型.


// 可索引的类型: 具有一个 '索引签名' 定义了对象索引的类型,还有调用索引得出的返回值类型.

interface StringArray{
    [index:number]:string;
}
let strArr:StringArray;
strArr = ['boy','girl'];
strArr[0];// boy
strArr[1];// gril
// 索引为 number 类型,对应的返回值为 string 类型;
/**
 * 索引共支持两种类型:1.number    2.string  可以使用两种类型的索引,但是数字索引的返回值必须是字符串索引返回值的子类型
 * 这种诡异的缘由:在使用 number 索引类型时, JavaScript 会将其转化成 string ,然后再去索引对象
 */

class Animal{
    name:string;
}
class Dog extends Animal{
    breed:string;
}
interface NotOkey{
    [x:number]:Animal; // [ts] Numeric index type 'Animal' is not assignable to string index type 'Dog'.
    // 数字索引类型 Animal 不能是 Dog 的子类.(Dog 是 Animal 的子类)
    [x:string]:Dog;
}
// Ps:字符串签名索引可以很好的描述 dict 模式
interface NumberDict{
    [index:string]:number; // 规定了 NumberDict 的数据结构;
    age:number;
    name:string; //  [ts] Property 'name' of type 'string' is not assignable to string index type 'number'.
}

// 可以通过接口索引签名设置只读属性,防止通过索引更改值:
interface ReadonlyStrArr{
    readonly [index:number]:string;
}
let myStrArr:ReadonlyStrArr = ['zhangjie','jwczjzl','x'];
myStrArr[2] = 'xiang'; // [ts] Index signature in type 'ReadonlyStrArr' only permits reading.

// 使用索引签名对 class 类 进行约束!!!!!!! => 类类型!!!!
interface ClockInterface{
    currentTime:Date;// 规定必有一个Date类型的 currentTime 属性!
}

class Clock implements ClockInterface{
    currentTime:Date;
    constructor(h:number,m:number){}// 这句话规定了 类参数的数量和类型
}
/**
 * 接口描述了类的 "公共部分" , 不会帮助检查类是否具有某些私有成员.
 * 
 */ 

interface ClockConstruction{
    new (name:string,age:number);
}
class MyClock implements ClockConstruction{
    currentTime:Date;
    constructor(name:string,age:number){}

}