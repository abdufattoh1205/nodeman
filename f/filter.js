// ---------------- task 0 ----------------------------------

// const nums = [1, 2, 40, 50, 2]

// var filtered = nums.filter(ele => ele < 5)

// console.log(nums)
// console.log(filtered)

// ---------------- task 1 ----------------------------------

// const strings = ['all', 'ache', 'beast']

// var filtered = strings.filter(ele => ele.startsWith('a'))

// console.log(strings)
// console.log(filtered)

// ---------------- task 2 ----------------------------------

// const info = [
//     {
//         name: 'cole',
//         age: '40'
//     },
//     {
//         name: 'drake',
//         age: '38'
//     },
//     {
//         name: 'luke',
//         age:'11'
//     }
// ]

// var filtered = info.filter(ele => ele.age > 18)

// console.log(info)
// console.log(filtered)

// ---------------- task 3 ----------------------------------

// var filtered = function(nums){
//     var filtered1 = nums.filter(ele => ele % 2 === 0)
//     var filtered2 = filtered1.filter(elet => elet > 10)
//     return filtered2
// }

// var numbers = [2, 3, 11, 12, 18, 13]

// console.log(filtered(numbers))

// ---------------- task 4 ----------------------------------

// var filtered = function(nums){
    
//     var filtered1 = nums.filter((_, ele) => ele % 2 === 0)
//     var filtered2 = filtered1.indexOf(filtered1)
//     return filtered2
    
// }

// const numbers = [20, 1, 2, 3, 4]

// console.log(filtered(numbers))

// ---------------- task 5 ----------------------------------

// var nums = [1, 2, 3, 4, 5]

// var filtered = function(threshold){
//     return nums.filter(ele => ele > threshold)
// }

// console.log(filtered(3))

const func = function(arr){

    var el = 1;
    
    return arr.pushElement(el)
}

const array1 = []

console.log(func(array1))