/**
 * 变量声明
 * let 和 const 是 JavaScript 里相对比较新的变量声明形式
 * let 和 var 很多方面是相似的,const 是对 let 的一个增强,可以阻止对一个变量再次赋值.
 * 
 * var 声明:
 */

function f() {
    var a = 10;
    return function f() {
        var b = a + 1;
        return b;
    }
}

var g = f();
g(); // return 11

/**
 * 上面的例子里,g 可以获取到 f 函数里面定义的 a 变量.每当 g 被调用的时候,他都可以访问到 a 变量.
 * 即使当 g 在 f 已经执行完毕候才被调用,他仍然可以访问和修改 a 变量.
 */


function ff() {
    var a = 1;
    a = 2;
    var g = gg();
    a = 3;
    function gg() {
        return a;
    }
}

f(); // return 2

/**
 * 作用域规则:
 */

function testf(shouldIni tialize:boolean) {
    if (shouldInitialize) {
        var x = 10;
    }

    return x;
}

testf(true); // 10
testf(false); // undefined

/**
 * 变量 x 是在 if 条件语句里面定义的,但是却可以在外面访问到.
 * 因为 var 声明可以包含它的函数,模块,命名空间或全局作用域内部任何位置被访问.
 * 有人称此为 var 作用域 或者 函数作用域,函数参数也使用函数作用域.
 */

// 这些作用域规则会引发错误,=>多次声明同一个变量不会报错!!!

function sumMatrix(matrix:number[][]) {
    var sum = 0;
    for (var i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        for (var i = 0; i < currentRow.length; i++) {
            sum += currentRow[i]; 
        }
    }
    return sum;
}
/**
 * 里层的 for 循环会覆盖变量 i ,因为所有的 i 都引用相同的函数作用域的变量.
 */

// 执行下列代码会返回 什么:!~~

for(var i = 0; i < 10; i++){
    setTimeout(function(){
        console.log(i);
    },100*i);
}
// setTimeout 会在若干毫秒候执行一个函数(等待其他代码执行完毕)

for (var i = 0; i < 10; i++) {
    setTimeout(function() {
        console.log(i);
    }, 100*i);
}

/**
 * for 循环会讲循环体里的内容添加到队列,内存然后执行(根据时间)
 * 循环结束后,队列里面有 10 个循环体需要执行,他们获取到的i的值
 * 是循环后的 10 ,所以打印出 10 个 10 .
 */

// 如果想达到输出 0-9 的目的可以使用JavaScript立即执行的匿名函数来做:(立即执行函数表达式 IIFE)

for(var i = 0; i < 10; i++){
    (function(i){
        setTimeout(function() {
            console.log(i);
        }, 100*i);
    })(i);
}

/**
 * let 声明:
 * 当使用 let 声明一个变量时,它使用的是 "词法作用域" 或 "块作用域".
 * 不同于使用 var ,块作用域变量在包含它们的块或for循环之外是不能访问的.
 */

function kuai(input:boolean) {
    let a = 100;
    if (input) {
        let b = a + 1;
        return b;
    }
    // Error : 'cannot find name 'b'
    return b;
}

// 在 catch 语句里声明的变量也具有同样的作用域规则

try {
    throw 'oh no!';
} catch (error) {
    console.log('Oh well!');
}

// Error: 'cannot find name 'error'
console.log(error);

/**
 * 拥有块级作用域的变量的另一个特点是,它们不能在被声明之前读写.
 * 虽然这些变量始终"存在"于它们的作用域里,但知道声明它的代码之前的区域都属于 "时间死区".
 * TypeScript 会告诉我们准确的错误信息:
 */


// Error : 'Block-scoped variable 'r' used before its declaration.
r++;
let r;

/**
 * 实际证明,在声明前是可以获取到的,但是不能调用;
 * 如果生成代码为ES2015 会抛出一个错误,现今的 TypeScript 不会出错;
 */
function xxx() {
    // 这里可以调用 a01 变量
    return a0l;
}
// 在这里调用会报错,因为在声明前面;
console.log(xxx());
let a0l = 200;

/**
 * 重定义及屏蔽
 * 使用 var 声明的时候,无论声明几次,最终只会得到一个.
 * 然而 let 声明就不会出现这种问题;
 * 而且前面使用 let 声明,在同一级下就不能使用 let 或者 var 声明;
 */
// Error : 'Cannot redeclare block-scoped variable 'x1'.'
let  x1 = 10;
let x1;


/**
 * 在一个嵌套作用域里引入一个新名字的行为称为 "屏蔽"
 */
此处不会!!!!!没看懂

/**
 * 块级作用域变量的获取:
 * 用 var 声明变量时,获取到变量之后它的行为是怎样的?
 * 每次进入一个作用域时,它创建了一个变量的环境.
 * 就算作用域内代码已经执行完毕,这个环境与其捕获的变量仍然存在.
 */

function theCityThatAlwaysSleep() {
    let getCity;

    if (true) {
        let city = 'Seattle';
        getCity = function () {
            return city;
        }
    }
    // 我们在 city 的环境里获取到了 city ,即使 if 语句执行结束后我们仍然可以访问它.
    return getCity();
}

/**
 * 回看前面的例子:setTimeout 那个,最后实现方式是使用立即执行的匿名函数;
 * 获取每次 for 循环迭代里的状态,我们所做的是为获取到的变量创建了一个新的变量环境.
 * 
 * 当 let 出现在循环体里时拥有完全不同的行为.不仅是在循环里引入了一个新的变量环境.
 * 而且针对每次迭代都会创建这样一个新作用域.与使用立即执行函数表达式一样.
 * 所以在 setTimeout 例子里仅用 let 声明就好了
 */

for(let i = 0; i < 10; i++){
    setTimeout(function() {
        console.log(i);
    }, 100*i);
}

// =---------------------------------------------------=

// const 声明是声明变量的另一种方式:
const numLiveForCat = 9;
// const 拥有和 let 一样的作用域规则,但是不能重复赋值;
const kitty = {
    name : 'zhangjie',
    numLives : numLiveForCat
}
// Error ->
numLiveForCat = 10;

// Error =>
kitty = {
    name : 'hah',
    numLives : numLiveForCat
}

// =------------------------------------------

// 解构:数组的解构,函数解构,对象解构

//数组:

let inputt = [1,2];
let [first,second] = inputt;
console.log(first); // 1;
console.log(second); // 2;
first = inputt[0];
second = inputt[1];
//解构相当于创建了两个变量对应的是数组的索引,直接调用可以访问到数组对应的元素;
[first,second] = [3,5]; // 已经声明的变量调换位置
//这里做个解释: 参数声明部分意思是使用解构方法传入一个数组,前面是解构用法,后面的[]里面是数组的类型

// 针对函数参数而言
function testMyInput([first,second]:[number,number]) {
    console.log(first);
    console.log(second);
}
testMyInput(inputt);

// 看不懂这个错误是咋来的,

// 创建剩余变量

let [num1, ...rest] = [1,2,3,4,5];
console.log(num1); // 1
console.log(rest);// [2,3,4,5];

// JavaScript 可以忽略不关心的元素;
let [,n2,n3,,n5] = [1,2,3,4,5];
let [fristNum] = [1,2,3,4,5];
console.log(fristNum); // 1;

// 对象的解构:
let ooo = {
    a:'foo',
    b:'12',
    c:'bar'
}
// 创建对象解构:
let {a,b} = ooo;


// 也可以直接使用免声明的赋值方式
let duixiang = {
    nan:'你的男朋友',
    nv:'我的女朋友',
    xingbie:'不重要'
}
let {nan,xingbie} = duixiang;
({ nan,xingbie } = {nan:'89757',xingbie:'99999'});
