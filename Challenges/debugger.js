const array = [12,5,-5,0,4]; 
function printForcast(array) {
  const forecast=array.map((item,i)=>`${item}°C in ${i+1} days...`);
  console.log('...'+forecast.join('') )
 
}
printForcast(array);   
