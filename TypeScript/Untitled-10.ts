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