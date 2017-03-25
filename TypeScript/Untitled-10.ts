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

