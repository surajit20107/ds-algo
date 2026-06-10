// function segregate0and1(arr) {
//     for (let i = 0; i < arr.length - 1; i++) {
//         for (let j = arr.length - 1;j > i; j--) {
//             if (arr[i] === 1) {
//                 [arr[i], arr[j]] = [arr[j], arr[i]];
//             }
//         }
//     }
//     return arr;
// }

function segregate0and1(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i])
    }
    return arr;
}

console.log(segregate0and1([0, 1, 0, 1, 0, 0, 1, 1, 1, 0]));
