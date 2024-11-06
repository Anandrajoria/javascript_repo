// ! different ways of creating the array
const friends=['adi','michal','stiven','peter']
const year=new Array(1991,1983,1968,1987);

// console.log(years[0]);

console.log(friends.length);  //it shows the total no. of element in an array

friends[2]='jay'  // we change the value of array whose type is const isn't it contradictory well this expression is right because arrays are mutable const works for primitive data types

console.log(friends);


// friends=['bob','alice']

/*const prevents you from reassigning the entire array to a new value, meaning you can't do something like friends = ['new', 'array'].
However, const does allow you to modify the existing array by changing, adding, or removing elements within it. */

console.log(friends);

const jonas=['jonas','snowman',2022-2020,friends]
// console.log(jonas);

// exercise 
const calcAge=function(birthYear){
    return 2037-birthYear
}
const years=[1991,1983,1968,1987,2023,2021]
const age1=calcAge(years[0])
console.log(age1);
