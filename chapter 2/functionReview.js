const calage=function(birthYear){
    return 2037-birthYear
}

const yearUntilretirement = function (birthYear, firstname) {
  const age = calage(birthYear);
  const retirement = 65 - age;

  if(retirement>0){
      return `${firstname} retires in ${retirement} years`;
  }else{
    return -1
  }
};

console.log(yearUntilretirement(1978,'aditya'))
console.log(yearUntilretirement(1970,'aditya'))
