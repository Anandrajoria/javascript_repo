const detail={
    firstName:'aditya',
    lastName:'rajoriya',
    job:'developer',
    birthYear:1992,
    friends:['tanvi','antima','perminder'],
    hasDL:true,
    // calcAge:function(birthYear){
    //     return 2037-birthYear
    // }

    // calcAge:function(){
    //     console.log(this);
        
    //     return 2037-this.birthYear
    // }
    calcAge:function(){
        this.age=2037-this.birthYear
        return this.age
    },

    summary:function(){
        return `aditya is a ${this.age} old ${this.job}`
    }
}
// console.log(detail.calcAge(2003))
// console.log(detail['calcAge'](2002));
// console.log(detail.summary());


// question

const mark={
    fullName:'Mark Miller',
    mass:78,
    height:1.69,
    calcAge:function(){
        this.bmi=this.mass/(this.height*this.height)
        return this.bmi
    }
}
const john={
    fullName:'John Smith',
    mass:92,
    height:1.95,
    calcAge:function(){
        this.bmi=this.mass/(this.height*this.height)
        return this.bmi
    }
}

mark.calcAge()
john.calcAge();

if(mark.bmi>john.bmi){
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher then ${john.fullName}'s BMI (${john.bmi})`);
}else if(mark.bmi<john.bmi){
    console.log(`${john.bmi}'s BMI (${john.bmi}) is higher then ${mark.fullName}'s BMI (${mark.bmi})`);
}else{
    console.log("both bmi is same");
    
}