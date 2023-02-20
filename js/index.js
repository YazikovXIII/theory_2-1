// массив
const arr = [1, 'two', [3, 4], null, true]
// console.log(arr);
// // typeof видає об'єкт
// console.log(typeof arr);
// // чи це массив?
// console.log(Array.isArray(arr));
// // звертання по індексу
// let elementFirst = arr[3]
// console.log(elementFirst);
// let elementLast = arr[arr.length - 1]
// console.log(elementLast);
// перебрати массив
for (let i = 0; i < arr.length; i += 1) {
    // console.log(arr[i]);
    if (Array.isArray(arr[i])) {
        for (let j = 0; j < arr[i].length; j += 1) {
            console.log(arr[i][j]);
        }
        continue;
    }
}