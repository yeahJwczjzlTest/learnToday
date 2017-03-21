/**
 * 一般函数的书写 JavaScript
 */

function add(x,y){
    return x+y;
}
// 或者
let myAdd = function(x,y){
    return x+y;
};

/**
 * 我们在 TypeScript 里面书写函数的时候可以给参数加上类型,还可以给返回值加上类型;
 */

function t_add(x:number,y:number):number{
    return x+y;
}
// 或者
let my_t_add = function(x:number,y:number):number{return x+y;};

/**
 * 丧心病狂的 完整的函数类型写法:
 */

let my_fuck_add:(x:number,y:number)=>number = // 函数类型
function(x:number,y:number):number{return x+y;};
// 或者
let my_fuck_add:(num1:number,num2:number) // 参数类型
=>number // 返回值类型
= function(x:number,y:number):number{return x+y;};
// 说明只要参数类型是匹配的那么就是有效的函数类型,而不在乎参数名是否一致;
// 返回值类型是 '函数类型'必不可少的元素,即使函数没返回值也必须指定为 void ;
// 参数类型 + 返回值类型 = 函数类型.


// =================================================================================================================================================

/**
 * 推断类型: 如果在赋值语句一边指定了类型,而另一边没指定,编译器会自动识别未指定边的类型;
 * 
 * 可选参数和默认参数;
 * 首先声明,JavaScript里函数的参数是可选的,不传作为 undefined 处理, TypeScript 函数所有参数必须都制定值.
 * TypeScript 里面使用可选参数需要在参数名后加?来表示.
 */

function constructName(firstName:string,secondName:string){
    return `${firstName}丶${secondName}`;
}

let test1 = constructName('zhangjie'); // Supplied parameters do not match any signature of call target. 参数不够,不匹配
let test2 = constructName('s','s','ss'); // Supplied parameters do not match any signature of call target. 参数多了,不匹配
let test3 = constructName('zhang','jie'); // zhangjie 这个就对了

// 可选的例子:

function createName(firstName:string,lastName?:string){ // 重要级:高 ===>> 可选参数必须跟在必选后面.
    if(lastName){
        return `${firstName}~${lastName}.`;
    }else{
        return `${firstName}`;
    }
}

let test4 = createName('zhang'); // 可选的 lastName 可以不写,也没问题
let test5 = createName('zhang','jie','lu');// 参数多了
let test6 = createName('zhang','jie')// 正好

/**
 * 在函数里可以给参数提供一个默认值作为没有赋值时候所采用的值:
 * 所有在必选参数后的默认参数都是可选的,不写就用默认值,写了就采用传进来的值.
 */ 

function buildName(firstName:string,lastName:string = 'jie'){
    return `${firstName}~ ${lastName}`;
}

let test7 = buildName('zhang'); // 没问题 zhangjie
let test8 = buildName('s','s','55'); // 参数过多,错误
let test9 = buildName('jiang','wanchun'); // jiangwanchun  没问题

/**
 * 在必选参数后面的可选参数和默认值参数共享了同样的函数类型:
 */
function exp_one(firstName:string,lastName?:string){}
// 和
function exp_one(firstName:string,lastName = 'simth'){}
// 共享了 如下的函数类型 =>
function exp_one(firstName:string,lastName?:string)=>string

/**
 * 默认值参数不是必须放在必要参数后面,如果默认参数出现在必选参数前面那么必须传入 undefined 才能获取到默认值
 */

// 下面重写一下函数验证一下:
function buildNameX(firstName = 'Will',lastName:string){
    return `${firstName} ${lastName}`;
}
let test_a = buildNameX('jie'); // Error : Supplied parameters do not match any signature of call target.  没有获取到 默认值
let test_b = buildNameX(undefined,'jie'); // 正确 




/**
 * 剩余参数: 必要参数,可选参数,默认参数 都表示一个参数
 * 如果需要操作多个参数,或不知道多少参数.在 JavaScript里 可以使用 arguments 来获取;
 * 在 TypeScript 里可以把所有参数收集到一个变量里.
 */

function buildSubName(firstName:string, ...lastNames:string[]){
    return firstName + ' ' + lastNames.join(' ');
}
let test_sub_a = buildSubName('zhang','jie','zhang','lu','xiongmei'); // zhang jie zhang lu xiongmei 

/**
 * this 想要保存函数创建时的 this 那么就需要使用 ECMAScript6 标准中的 箭头函数;因为箭头函数会保存函数创建时的this值;
 */

/**
 * this 参数
 */

interface Card{
    suit:string;
    card:number;
}


interface Deck{
    suits:string[];
    cards:number[];
    pickSuitsCard(this:Deck):()=>Card;
}

let deck:Deck = {
    suits:['hearts','spades','clubs','diamonds'],
    cards:Array(52),
    pickSuitsCard:function (this:Deck) {
        return ()=>{
            let pickNum = Math.floor(Math.random()*52);
            let pickSuits = Math.floor(pickNum / 13);
            return {suit:this.suits[pickSuits],card:pickNum%13};
        }
    }
}

// 有点迷糊!