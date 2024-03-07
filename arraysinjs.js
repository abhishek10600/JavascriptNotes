//declaring an array
let nums1 = []
console.log(nums1)

nums1 = [1, 2, 3, 4, 5, 6]

//length of an array
console.log(nums1.length)

//printing an array.
console.log(nums1)

//accessing the element of an array by its index.
console.log(nums1[3])

//change an array element.
nums1[3] = 8
console.log(nums1)

//converting array to string
console.log(nums1.toString())


//insert element in array
nums1.push(11) // insert element at the end of array.
console.log(nums1)

nums1.unshift(43) // insert elemet at the beginning of array.
console.log(nums1)

nums1.pop() // delete element from the end of array.
console.log(nums1)

nums1.shift()// delete element from the beginning of array.
console.log(nums1)

console.log(nums1.slice(2, 5)) // array from index 2 to index 4 (index 5 not inclided.)
console.log(nums1.splice(0, 1))

//sort array strings
let nums2 = ["gupta", "abhishek"]
console.log(nums2.sort())

//sort number arrays in ascending
let nums3 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
console.log(nums3.sort(function (a, b) {
    return a - b
}))

//sort number arrays in descending order
let nums4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(nums4.sort(function (a, b) {
    return b - a
}))


// looping through arrays.

let nums5 = [1, 2, 3, 4, 5, 6];

//forEach loop forEach loop take element, index and array as arrgument of a call back funtion.
nums5.forEach((num, index, nums5) => {
    console.log(num + " at index " + index);
})

//using map to loop the array.map method take element, index and array as argument in a call back function and return a new array.
resultNum5 = nums5.map((num, index, nums5) => {
    return num * 12
})
console.log(resultNum5)


//filter method to loop the array. It takes element, index and array as an argument of a callback function return a new array. Inside the callback function it takes a condition and return elements of the that satisfies that condition.
resultNum6 = nums5.filter((num, index, nums5) => {
    return num > 3
})
console.log(resultNum6)


//copy array
arr1 = [1, 2, 3, 4, 5]
arr2 = [6, 7, 8, 9]
arr3 = [10, 11, 12]
arr4 = [...arr1, ...arr2, ...arr3]
console.log(arr4)