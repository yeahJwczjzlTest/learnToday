/**
 * 交叉类型:交叉类型是将多个类型合并为一个类型
 */

/**
 * 联合类型 书写格式 = >   " string | number "
 * 如果一个实例是联合类型,那么我们只能访问他们共有的属性(方法)
 */

interface Fish{
    swim():void;
    layEggs():void;
}
interface Bird{
    fly():void;
    layEggs():void;
}

function animal_common():Bird | Fish{
    //  ....
}

let pet = animal_common();
pet.layEggs(); // 共有的 " 下蛋 "
pet.swim(); // Property 'swim' does not exist on type 'Fish | Bird'.Property 'swim' does not exist on type 'Bird'.

/**
 * 类型保护与区分类型,
 * 为了让 pet 变量可以访问各自内部的专有方法,可以使用类型断言来实现
 */

if((<Fish>pet).swim()){
    (<Fish>pet).swim();
}else{
    (<Bird>pet).fly();
}

/**
 * 用户自定义类型保护,返回一个 类型谓词 =>  parameterName is Type , 其中 parameterName 必须是当前函数的一个参数
 * 还可以先定义一个函数用来判断到底是哪个!
 */

function isFish(pet:Fish | Bird):pet is Fish {
    return (<Fish>pet).swim !== undefined;
}

if(isFish(pet)){
    pet.swim();
}else{
    pet.fly();
}

/**
 * typeof 类型保护
 * 在 TypeScript 中, typeof 作为类型保护关键字只允许写成如下两种形式:
 * 1.typeof v == 'typeName'
 * 2.typeof v !== 'typeName'
 * 其中的 "typeName" 只允许 'string' 'number' 'boolean' 'symbol'
 */

/**
 * instanceof 类型保护
 * instanceof 右侧必须是一个构造函数,进行类型检查时;优先考虑 1,在类型不为 any 的情况下=>原型的类型 ; 2.构造函数签名返回类型的联合
 */

interface Padder{
    getPaddingString():string;
}

class SpaceRepeatingPadder implements Padder{
    constructor(private numberSpace:number){}
    getPaddingString(){
        return Array(this.numberSpace + 1).join(' ');
    }
}

class StringPadder implements Padder{
    constructor(private stringValue:string){}
    getPaddingString(){
        return this.stringValue;
    }
}

function getRandomPadder(){
    return Math.random() < 0.5?
        new SpaceRepeatingPadder(4):
        new StringPadder(' ');
}

// 类型为 SpaceRepeatingPadder | StringPadder
let padder:Padder = getRandomPadder();

if (padder instanceof SpaceRepeatingPadder){
    padder;
}
if (padder instanceof StringPadder){
    padder;
}
/**
 * 可以为 null 的类型.
 * 在 TypeScript 里面有两个特殊的类型: null 和 undefined ,它们分别具有 null 和 undefined 值.
 * 一般情况下,类型检查器认为 null 和 undefined 可以赋值给任何类型;这就意味着不能阻止它们赋值给其他变量.
 * 在 TypeScript 里; 使用编译标记 --strictNullCheck 可以解决此错误:当声明一个变量时,就不会自动包含 null 和 undefined 了;
 * 可以用联合类型手动指定;
 * 注意，按照 JavaScript 的语义，TypeScript 会把 null 和 undefined 区别对待。 
 * string | null，string | undefined和string | undefined | null 是不同的类型。
 */

/**
 * 使用了 --strictNullCheck 编译标记后,可选参数和可选属性都会被加上 | undefined 类型;
 */

/**
 * 类型保护和类型断言: 由于可以为 null 的类型是由 联合类型 实现的.所以需要使用类型保护来去除 null
 */
// 通常办法
function myTest(name:string | null){
    if(name == null){
        return 'default';
    }else{
        return name;
    }
}

// 短路运算符:
function myTest_2(name: string | null){
    return name || 'default';
}

// 如果编译器不能去除 null 还可以使用 类型断言 来去除 null ;
// 使用方法: 在 string | null 类型的变量后加上 ! 就是去除了 null 
// 使用嵌套函数来举例子

function broken (name:string|null):string{
    function postfix (epithet:string){
        // Error : name 可能是 null 类型.
        return name.charAt(0) + '. the' + epithet;
    }
    name = name || 'zhangjie';
    return postfix('Great!');
}

// 更改后的样子:
function fixed (name:string|null):string{
    function postfix(epithet:string){
        // OK
        return name!.charAt(0) + '. the' + epithet;
    }
    name = name||'zhangjie';
    return postfix('Great!');
}

/**
 * 类型别名:给一个类型起个新名字,类似于 接口 但是可以作用于 原始值 联合类型 元组 和 其他需要手写的类型;
 */

type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;

function getName (name:NameOrResolver){
    if(typeof name === 'string'){
        return name;
    }else{
        return name();
    }
}

// 类型别名也可以是泛型的 
type fanxing<T> = {name:T};
// 可以使用类型别名在属性里引用自己:::::::
type Obj4me<T> = {
    name : string;
    left : Obj4me<T>;
    right : Obj4me<T>;
}
// 类型声明不能出现在声明右侧的任何地方


/**
 * 接口 vs. 类型别名
 * 
 * 其一，接口创建了一个新的名字，可以在其它任何地方使用。 类型别名并不创建新名字—比如，错误信息就不会使用别名。 
 * 在下面的示例代码里，在编译器中将鼠标悬停在interfaced上，显示它返回的是Interface，但悬停在aliased上时，显示的却是对象字面量类型
 * 
 * 如果你无法通过接口来描述一个类型并且需要使用联合类型或元组类型，这时通常会使用类型别名。
 * 类型别名不能被extends和implements
 */

type Alias = { num: number }
interface Interface {
    num: number;
}
declare function aliased(arg: Alias): Alias;
declare function interfaced(arg: Interface): Interface;