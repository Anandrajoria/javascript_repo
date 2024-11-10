const detail={
    firstName:'aditya',
    lastName:'rajoriya',
    job:'developer',
    age:21,
    friends:['tanvi','antima','perminder']
}
console.log(detail);
// there are two ways to access the info from objects 1:dot notation
console.log(detail.friends);  //dot notation

console.log(detail['firstName']);// bracket notation

const namekay="Name";
console.log(detail['last'+namekay])