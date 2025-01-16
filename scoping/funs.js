const jonas = {
  firstName: "adi",
  year: 1991,
  
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
    
  },

  greet: () => console.log(`hey ${this.firstName}`), //hey undefined
  // ! this is beacuse arrrow functions don't have their own this keyword they just take value from parent scope
};

// jonas.greet();


// deep and shallow copy

const jessica={
  firstName:'jessica',
  lastName:'willims',
  age:28
}

function marryPerson(oriPerson,newLastname){
  oriPerson.lastName=newLastname
  return oriPerson
} 

const marriedJass=marryPerson(jessica,'devis')

// const marriedJass=jessica;
// marriedJass.lastName='williams'

// console.log('before',jessica);
// console.log('after',marriedJass);

const jessica2={
  firstName:'jessica',
  lastName:'willims',
  age:28,
  family:['alice','bob']
}
jessica
//shallow copy
const jessicaCopy={...jessica2}
jessicaCopy.lastName='davis'

jessicaCopy.family.push('marry')

console.log('before:',jessica2);
console.log('after:',jessicaCopy);

//deep copy
const jessicaClone=structuredClone(jessica2)
jessicaClone.family.push('john')
console.log('original:',jessica2);
console.log('clone:',jessicaClone);
