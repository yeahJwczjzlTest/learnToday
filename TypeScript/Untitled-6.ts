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

// 上面的两个例子传入的参数为元素是 T 类型的数组,两种写法