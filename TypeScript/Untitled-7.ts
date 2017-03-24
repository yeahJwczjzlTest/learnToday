/**
 * 枚举:定义一些有名字的数字常量;使用 enum 关键字定义:格式如下!
 */
enum ForMyExample{
    exampleOne,
    exampleTwo,
    exampleThree,
    finalExample
}
/**
 * 一个枚举可以包含 0 个或 多个枚举成员;枚举成员具有一个数字值,这个值可以是常数也可以是计算出来的数.
 * 当满足下列情况时:枚举成员被当做常数!
 * 1.没有初始化函数,且之前成员为常数.(第一个没有初始化默认为 0)
 * 2.枚举成员初始化使用 <常数枚举表达式>
 *                  (1).数字
 *                  (2).引用之前的枚举成员,可以引用外部定义的不同枚举
 *                  (3).带括号的常数表达式
 *                  (4).+ - ~ 一元运算符应用于常数表达式
 *                  (5).+ - * \ % << >> & | ^ 二元运算符中常数表达式作为其一操作对象 <若常数表达式最后求值为 NaN 或 Infinity 则报错>
 * 除上述以外的所有枚举成员都会被当作是"需要计算得出的值"
 */

enum FileAccess{
    // constant members
    None,
    Read = 1 << 1,
    Write = 2 << 2,
    ReadWrite = Read | Write,
    // computed member
    G = '123'.length
}

/**
 * 枚举是运行时真正存在的一个对象,枚举值和枚举名反向映射
 */

enum Example4Obj{
    A
}
let getEnumObj = Example4Obj.A;
let nameOfexample4Obj = Example4Obj[Example4Obj.A];

/**
 * 常数枚举:枚举成员不会有'需要计算得到的值',在编译阶段就会被删除,在使用的地方会被内联进来
 * 使用 const 关键字修饰 eunm 
 */

const enum ConstEnum{
    A,
    N = 2+A,
    C
}
let test_1 = [ConstEnum.A,ConstEnum.N,ConstEnum.C]; // [0,2,3]

/**
 * 外部枚举:????????
 */


