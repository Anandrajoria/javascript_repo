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
console.log(detail.calcAge(2003))
// console.log(detail['calcAge'](2002));
console.log(detail.summary());
