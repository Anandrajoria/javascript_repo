// function containDuplicate(nums){
//     let target=nums[0]
//     let count=0

//     for(let i=0;i<nums.length;i++){
//         if(target==nums[i]){
//             count++
//         }
//     }

// }

let array=[1,2,3,1,2]
function containsDuplicate(nums) {
    return new Set(nums).size !== nums.length;
}
console.log(containsDuplicate(array));
