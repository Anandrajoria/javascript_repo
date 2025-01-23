'use strict'
const oneWord=function(str){
    return str.replace(/ /g,'').toLowerCase()
}
const upperFirstWord=function(str){
    const [first,...other]=str.split(' ')
    return [first.toUpperCase(),...other].join(' ')
}
//! higher order function
const transformer=function(str,fn){
    console.log(`original string: ${str}`);
    
    console.log(`tranform string: ${fn(str)}`);
    
    console.log(`tranformed by: ${fn.name}`);
    
}
// transformer('js is best',upperFirstWord)
// transformer('js is best',oneWord)


const high5=function(){
    console.log('😉');
    
}
