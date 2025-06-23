/*//! by me
function powerOfTwo(n){
    let result =false
    for(let i=0;i<Math.ceil(n/2);i++){
        if(n==2**i){
            result=true
        }
    }
    return result
}

console.log(powerOfTwo(16))

*/


//! corrected version
/*
function powerOfTwo(n){
    if(n<1) return false

    
    for(let i=0;i<n;i++){
        let power=2**i
        if(power==n) return true
        if(power>n) break;
    }
    return false
}

console.log(powerOfTwo(3))
*/


//! using recursion
function isPowerOfTwo(n){
    if(n<1) return false

    if(n===1) return true

    if(n%2!==0 ) return false

    return isPowerOfTwo(n/2)
}
