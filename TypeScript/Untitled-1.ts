// 基础类型,书写格式等
// 下面是创建变量的方式
let myBoolean:boolean = false;
let myNumber:number = 123456;
let mystr:string = "字符串";
// 说到字符串: typescript 支持用``(反引号括起来)表示多行字符串,并且使用${ expr }来替代字符串,进行字符&变量的拼接.
let myMixStr = `我的 number 是 ${ myNumber } , 
我持有的字符串是 ${ mystr },
我还可以做加法显示 number .比如我的 number 减去 1 得到的是 ${ myNumber-1 } 值!`;

// 数组!
// 第一种 类型[] 的方式创建数组
let myArray:number[] = [1,2,3,4];
let myStrArray:string[] = ['string','嘟嘟嘟嘟嘟'];
//第二种 使用数组泛型
let myFArray:Array<number> = [12345,22,33,44,56,77];
let myStrFArr:Array<string> = ['第一个元素','第二个元素'];

//-----------------------------------------------------

// 元组 => tuple 
// 表示一个已知元素类型和数量的数组,各元素的类型不必相同.赋值和取值都需要按照规定来.

let myTuple:[string,number];
myTuple = ['zhangjie','26']; // 此赋值语句是正确的
myTuple = [26,'zhangjie']; //报错!因为和tuple规定的元素类型不一致

myTuple[0].substr(1); // 正确,不报错.
myTuple[1].substr(1); // 错误,因为 number 不是字符串,没有 substr() 方法.

myTuple[5].toString(); // 可以用,因为 number 和 string 都有 toString() 方法
myTuple[6] = true; // 不可以. 错误提示为 : 'Type 'true' is not assignable to type 'string | number'.'

// 枚举 : 枚举类型是对JavaScript类型的一个补充 => 使用枚举可以给一组数值赋予友好的名称
enum Color {red,blue,green}; // 创建枚举
let color:Color = Color.green; // 调用和赋值
// 枚举的元素默认序号是0开始的,也可以手动给出初始值
enum Food {mifan=2,miantiao,huluobo};
let foodName:string = Food[3]; // miantiao

// ---------------------------------------------

// 任意值.不希望编译器去检查的变量,相当于绿色直通车

let myAnyType:any = 4;
myAnyType = '这样赋值也行,因为是 any 类型,任意值.'
myAnyType = false; // 也可以,类型检查器不会去检测这个.
myAnyType.toFixed(); // 可以随意调用任意方法.
// 对现有代码的改写有很大作用,它允许在编译的时候选择包含或者移除类型检查,Object 也有类似的作用,但是在 Object 上只可以赋给任意值,而不可以调用任何方法,即使 Object 存在这种方法.
let myObject:Object = 4;
myObject.toFixed(); // 错误提示 : Property 'toFixed' dose not exist on type 'Object'.
// 还可以应用于只知道一部分数据类型的变量:比如一个数组包含好多种数据类型的变量:
let listAnyArray:any[] = ['123','str',88,true];
listAnyArray[2]; // 88 输出正确

// -----------------------------------------------

// 空值 : 在某种程度上, void 类型和 any 类型是相反的,它没有表示任何类型.当一个函数没有返回值时候会用 void 标识;

function test():void{
    console.log("void!");
}

// 声明一个 void 类型的变量没有什么意义,因为只能赋值为 null 或者 undefined 
let noBB:void = null;
let noBBB:void = undefined;

// 在 TypeScript 里 null 和 undefined 有自己的类型,分别是 null 和 undefined ,和 void 类似,它们本身类型的用处不大.
let n:null = null;
let u:undefined = undefined;
// null 和 undefined 是所有类型的子类型,也就是可以把 null 和 undefined 赋值给 number 类型的变量;
// 当在编译时候使用 --strictNullChecks 标记, null 和 unundefined 就只能赋给 void 和 它们自己了,可以使用联合类型来给其他变量赋值.

// ------------------------------------------------

// never 类型指的是那些用不存在的类型.例如 never 类型是那些总会抛出异常或者根本不会有返回值的函数表达式或箭头函数的返回值类型;变量也可以为 never 类型,当他们被永不为真的类型保护所约束时.
// never 是任何类型的子类型,也可以赋值给任何类型;然而,没有类型是 never 类型的子类型,没有可以赋值给 never 的类型(自身除外)
let myNever:never = null  // 错误提示: Type 'null' is not assignable to type 'never';
// 下面列举了一些返回 never 类型的函数:

// 返回 never 的函数必须存在不可到达的终点
function error(message:string):never {
    throw new Error(message);
}

// 推断返回值为 never ;
function fail() {
    return error("Something failed");
}

// 返回 never 的函数必须存在不可到达的终点

function loopWhile():never {
    while(true){
    }
}


// ----------------------------------------------

//类型断言:有时候，我们会比 TypeScript 更了解某个值的详细信息，通常会发生在清楚地知道一个实体具有比它现有类型更确切的类型。
// 通过 “类型断言” 这种方式可以告诉编译器，我知道我所做的事情。类型断言就像是其他语言中的类型转换，但是不进行特殊的数据检查和解构。
// 没有运行时的影响,只是在编译阶段起作用.TypeScript 会假设编辑者已经进行了必要的检查.

// 断言的两种形式. 其中之一是 <> 尖括号 语法;

let someValue:any = "this is a string";// 声明一个 any 类型的变量,不让检查器去检查它的类型.
let strLength:number = (<string>someValue).length;// 声明一个 number 类型的变量用来测量 someValue 变量内容的长度.我们编写的人知道 someValue 是一个字符串;那么就使用断言告诉编译器 我确定 someValue 是字符串,可以放心操作.length属性获取长度.
let strLength2:number = (someValue as string).length;
// 上一行说的是 断言的第二种写法, as 语法;

// ============================================================

// 关于 let 尽量使用 let 来代替 var ,后面后详细解释为啥使用 let 代替 var;

