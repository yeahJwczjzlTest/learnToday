// function outer() {
//     inner();
// }

function inner() {
    alert(inner.caller);
}

function addLoadEvent(my_func) {
    var old_load = window.onload;
    if(typeof window.onload != "function"){
        window.onload = my_func();
    }else{
        window.onload = function () {
            my_func();
            old_load();
        }
    }
}


addLoadEvent(inner);