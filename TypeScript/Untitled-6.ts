/**
 * 泛型!创建一个可重用的组件,可以支持多种数据类型;
 */

// 泛型入门:下面例子如不用泛型是这样的=>
function identity(args:any):any{ // 函数使用了 any 类型参数,返回值也是 any 理论上支持所有类型
    return args;    // 但是我们输入一个数字,那么任何类型的值都可以被返回,需要保证输入和返回是同一类型,那么就用到泛型了;
}
// 下面是泛型的写法=>
function identityx<T>(args:T):T{ // 为identityx 添加了 类型变量 T ,可以帮我们捕获传入参数的类型,之后我们就可以使用传入的类型了
    return args;// 之后我们使用 T 作为返回值类型,这样一来参数和返回值类型就一样了.
}
// T 之所以叫泛型,是可以支持所有类型,同时不像 any 那样会丢失信息
// 泛型函数的使用方式: 1 传入所有参数,包括类型参数
let test1 = identityx<string>('zhangjie'); // 输出将是 string 类型的;
// 泛型函数的使用方法: 2 类型推论,编译器自动识别
let test2 = identityx('zhangjie'); // 编译器自动识别传入参数的类型,并应用于 返回值;

/**
 * 使用泛型变量:上面的例子 如果对 args 参数调用 args.length 会报错,因为不确定传入的是那种变量如果是 number 就没有 length 属性
 */

function identityTX<T>(args:T[]):T[]{
    console.log(args.length);
    return args;
}
// 或者
function identityTTX<T>(args:Array<T>):Array<T>{
    console.log(args.length);
    return args;
}

// 上面的两个例子传入的参数为元素是 T 类型的数组,两种写法.

/**
 * 泛型类型: 研究函数本身 + 如何创建泛型接口!
 * 和创建普通函数一样,只不过在参数括号前面多了一个 '类型参数' : <T>
 */


let typeFunc:<T>(args:T)=>T = identityx;
let typeFunc_2:<U>(args:U)=>U=identityx; // 类型参数可以不一定是 T 只要数量和使用方式正确即可
let typeFunc_3:{<T>(args:T):T} = identityx; //签名的对象字面量 定义泛型函数

/**
 * 泛型接口:
 */

interface GenericIndentity{
    <T>(args:T):T;
}

function identity4Interface<T>(xxx:T):T{
    return xxx;
}

let myInterfaceIdentity:GenericIndentity = identity4Interface
/**
 * 泛型接口的另一种写法=> 将 泛型参数 作为接口的一个参数 这话就可以看到具体使用的是那种类型了
 */

interface Interface4TTT<T>{
    (argx:T):T;
}

function myIdentity<T>(argf:T):T{
    return argf;
}
let test_func_interface_with_T:Interface4TTT<number> = myIdentity; // 这里的 <number> 就是类型;


/**
 * 泛型类:使用 <> 将泛型类型括起来放在类名后面
 * 泛型类就不局限于使用一种数据类型了,可以是多种数据类型;
 * 类中的实例部分可以使用泛型,静态部分则不能!
 */

class FXClass<T>{
    zeroValue:T;
    add:(x:T,y:T)=>T;
}
let myGenNum = new FXClass<number>();
myGenNum.zeroValue = 0;
myGenNum.add = function (x,y){return x+y;};

/**
 * 泛型约束!其实就是给泛型参数一个接口进行约束,然后泛型就变得不是那么可以适用于所有类型了,传入的参数要求必须符合接口规则
 */

interface LengthRule{
    length:number;
}
function myObj4T<T extends LengthRule>(args:T):T{
    return args;
}

myObj4T(4); // Error:Argument of type '4' is not assignable to parameter of type 'LengthRule'.
myObj4T('sssss');
// Argument of type '{ name: string; }' is not assignable to parameter of type 'LengthRule'.
// Object literal may only specify known properties, and 'name' does not exist in type 'LengthRule'.
myObj4T({name:'zhangjie'});

myObj4T({length:9,name:'zhangjie'}); // 这个就对了,因为接口规定了 必须有length属性!!!!!


/**
 * 
 */ 