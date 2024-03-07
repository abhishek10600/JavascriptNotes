let str = "I am abhishek sharma. My age is 23. I live in Kolkata, West Bengal, India."

// length of string
console.log(str.length)

// extract a character from a string by it's index
console.log(str[7])


//slicing a string. It gives a substring from a string by range of index.
console.log(str.slice(7, 12)) // 12 is not included.


str = "abcdefghij"


// convert to upper case.
console.log(str.toUpperCase())

//covert to lower case.
console.log(str.toLowerCase())

//conatenate strings
let str2 = "abc"
let str3 = "def"
let str4 = str2 + str3
console.log(str4)

//trim a string. Remove white spaces from start and end of strip.
let str5 = "          hello       ";
console.log(str5)
console.log(str5.trim())


//regular expressions
let str6 = "Welcome to Microsoft."
let newStr6 = str6.replace(/Microsoft/i, "Google") // /i is a case insensitive flag
console.log(newStr6)


//converting string to array using split.
let text7 = "I am Abhishek Sharma"
let text7Array = text7.split(" ")
console.log(text7Array)


// get the index of a string
let text8 = "I am Abhishek Sharma."
console.log(text8.indexOf("Abhishek"))
console.log(text8.search("Sharma"))


//check if a substring exists in a string or not
let text9 = "I am Abhishek Sharma."
console.log(text9.includes("ish")) //return true as ish is in text9.