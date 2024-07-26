//! in this section we we'll  learn about arrays methods
// push operation  //!push method add the element at the end of array  and we can add more then on value

let moviename=['tom','avengers']
moviename.push("endgame")
moviename.push("bahubali",'kgf','saalar')
// console.log(moviename);

// ? pop method is used for delete the last element form the array

// moviename.pop()
// console.log(moviename);

//! shift = remove form start
moviename.shift()
// console.log(moviename);

//! unshift = add at starting of array
moviename.unshift("vip") 
// console.log(moviename);


//! concate = merging two arrays and add them in saparate array
let arr1=[1,2,3,4]
let arr2=['mon','sun','tues']
let arr3=arr1.concat(arr2)

// console.log(arr3);

//! include = check weather if given element is present in array or not

// console.log(arr3.includes(3));

//! indexof = give index of given element if element is not present then it give -1
// console.log(arr3.indexOf('mon'));
// console.log(arr3.indexOf("wed"));

//! reverse = reverse the arr
// console.log(arr3.reverse())

//! slice = 
let colors = ['red','blue','black','magenta','green','indego','violet']
// console.log(colors.slice(2,4))
//it start from first index and goes up too second not include second
// console.log(colors.slice(-2,-1));


// ! spice
// console.log(colors.splice(4,2,'brown'));
// console.log(colors);


//! sort()

let compareNum=(a,b)=>{
    return a-b;
}
let score=[4,6,2,64,12,4,7,34,23,9,77]
// console.log(score.sort(compareNum));

// !const and array    we can perform any operaation in const array as soon as we does not change the reference of that array
const array = [9,8,7,6,5,4]
array.push(22)
// console.log(array);

// array=['me','you','i']   //? it give error


const board  = [
    [0,null,'x'],
    [null,'x',0],
    ['x',0,null]
]

console.log(board[1][2]);