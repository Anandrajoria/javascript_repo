// function capitalize(str){
//     let result;
//     let first = str.slice(0,1).toUpperCase()
//     let rest=str.slice(1);
//     result=first+rest
//     return result
// }
// console.log(capitalize('krishna'))

// function sumArray(arr){
//     let result = 0;
//     for(const item of arr){
//         result+=item;
//     }
//     return result
// }

// console.log(sumArray([1,2]))


/*
function returnDay(num){
    const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
];
    
    for(let i=1;i<=days.length;i++){
        if(i===num){
            return days[i]
        }
    }
    return null
}

console.log(returnDay([7]));
*/

/*
! reurning function
function makeBetweenFunc(min,max){
    return function(num){
        return num>=min && num<=max
    }
}

let isadult=makeBetweenFunc(18,50)

console.log(isadult(12));

*/



/*
? defining mathod
const calc = {
    PI:3.14,
    square(num){
        return num*num
    },
    cube(num){
        return num*num*num
    }
}


console.log(calc.cube(2))
console.log(calc['cube'](3))
*/

/*
const cat={
    name:'blue star',
    color:'grey',
    breed:'fold',
    meow(){
        console.log("MOEW MOEW");
        console.log(this.name);
    }
}

console.log(cat.meow());
*/


/*
let hen={
    name:'Helen',
    eggCount:0,
    layAnEgg(){
        this.eggCount++;
        return "EGG"
    }
}
console.log(hen.name);
console.log(hen.eggCount);
console.log(hen.layAnEgg());
console.log(hen.layAnEgg());
console.log(hen.eggCount);

*/


let arr=[1,2,3,4,5,6,7,8,9]

// arr.forEach(function(el){
//     if(el%2==0){
//     console.log(el);}
// })

const movies=[
    {title:'naruto',score:99,year:2000},
    {title:'i want to eat you pancreas',score:'100',year:2004},
    {title:'death note',score:86,year:2005},
    {title:'you name',score:98,year:2010},
    {title:'weathering with you',score:100,year:2003},
    {title:'black clover',score:87,year:2001}
]
/* 
! for each 
movies.forEach(function(movie){
    console.log(`${movie.title} - ${movie.score}/100`);
})
*/

//! map
// const double=arr.map(function(item){
//     return item*2
// })

// console.log(double);

// const title=movies.map(function(item){
//     return item.title.toUpperCase()
// })

// console.log(title);

// 

// ! arrow function
// const title=movies.map((item)=>`${item.title}`)
// console.log(title);

// !setTime out
// console.log("hello!!");
// setTimeout(()=>{
//     console.log("are you sitll ther");
// },3000)

// console.log("good Buy!!");

// !setInterval

// const id= setInterval(()=>{
//     console.log("aditya")
// },2000)

// clearInterval(id)


// ! filter method
// let odds=arr.filter((item)=>{
//     return item>2
// })
// console.log(odds);

// const good = movies.filter((item)=>{
//     return item.score>90
// })
// console.log(good);

/*
!every
const best=movies.some(item=>{
    return item.score>90
})
console.log(best);
*/


/* 
!some

const best=movies.some(item=>{
    return item.score>90
})
console.log(best);
*/

/*
! reduce

let total_sum=arr.reduce((total,current)=>{
    return total+current
})
console.log(total_sum);
const highestScore=movies.reduce((best,curr)=>{
    if(curr.score>best.score){
        return curr
    }
    return best
})
console.log(highestScore);
*/

// const person={
//     name:'adi',
//     class:12,
//     fullname:function(){
//         return `${this.name}`
//     },
//     shoutName:function(){
//         setTimeout(()=>{
//             console.log(this.fullname())
//         },3000)
//     }
// }
// console.log(person.fullname());

//! default parameter
// function rolldie(numside){
//     if(numside===undefined){
//         numside=6
//     }
//     return Math.floor(Math.random()*numside)+1
// }
// console.log(rolldie())

// function rolldie(numside=6){
//     return Math.floor(Math.random()*numside)+1
// }
// console.log(rolldie())

// ! spread method
const nums=[132,32,4,233544,5,2324,5,23454,5,24564,457,4,65,4,5,357]

console.log(Math.max(...nums))

console.log(...'aditya');