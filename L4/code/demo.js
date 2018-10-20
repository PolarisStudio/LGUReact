// var list1 = [2, -1, 10, 5, 3];
// function max(list) {
//     var m = null;
//     for (var i of list) {
//          if (m == null || m < i) m = i; 
//     }
//     return m;
// }
// console.log(max(list1)); 

var a=1, b=2;
function swap(a, b){
    return [b,a];
}

// console.log(swap(a, b));
var result = swap(a,b);
a = result[0];
b = result[1];
console.log(a, b);