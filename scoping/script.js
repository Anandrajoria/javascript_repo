'use strict';

function calcAge(birthYear){
    const age=2037-birthYear;
    
    function printAge(){
        const output=`you are ${age}, born in ${birthYear}`
        console.log(output);
        
        if(birthYear>=1981 && birthYear<=1996){
            const str=`oh and you are a milenal ,${firstName}`
            console.log(str);
            
        }
    }
    printAge()
    return age;
}

const firstName='adi'
calcAge(1991)