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
