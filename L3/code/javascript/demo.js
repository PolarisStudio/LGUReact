var a = 10, b = 20, c=30;
var max;

// Max of three
// if (a>=b && a>=c){
//     max = a;
// }
// else if (b>=a && b>=c){
//     max = b;
// }
// else{
//     max = c;
// }
// console.log("Max is ", max)

// while
// var t = 0;
// while (t<=100){
//     console.log(t);
//     t += 2;
// }

// for-1
// for (var i=1; i<=100; i+=1){
//     console.log(i)
// }

// for-2
// for (var i=1; ;){
//     console.log(i)
//     i += 1;
//     if (i>100){
//         break
//     }
// }

//for-3
// var num_list = ['a', 'b', 'c', 'd', 'e'];
// for (var i of num_list){
//     console.log(i)
// }

// for-4
// var student = {
//     id: 10000,
//     name: "David"
// }
// for (var key in student){
//     console.log(key, ':', student[key])
// }


// for demo
// var max=0, nums=[2,1,5,10, 100, 1];
// for (var num of nums){
//     if (max<num){
//         max = num
//     }
// }
// console.log("Max: ", max)



// If we use function
var nums=[2,1,5,10, 100, 1];

var Max = function(nums_list){
    var max = 0;
    for (var num of nums_list){
        if (max<num){
            max = num
        }
    }
    return max
}
console.log(Max(nums));

