// slice method


// ? The slice() method has two optional parameters start and end.


// ? The start parameter is a zero-based index at which the method starts the extraction
const str = 'Hello';
const substr = str.slice(3);

console.log({ substr });


// ? The end is a zero-based index that specifies the position before the slice() method ends the extraction. The result string will not include the character at the end index. For example:
const str2 = 'Hello';
const substr2 = str2.slice(0, 2);

console.log({ substr2 });