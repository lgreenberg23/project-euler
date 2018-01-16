/**
 * @param {number[]} nums
 * @return {number}
 [-2,1,-3,4,-1,2,1,-5,4]
 O(n2) would be for each number as the starting point, 
 find the largest possible subarray, and then replace the maxSum with the largest one
 keep track of a largest and a current sum at each index
 */

 //0(n2 solution)
var maxSubArray = function(nums) {
    let maxSum = 0
    let currentSum = 0

    let begin = nums[i]

    if(nums.length === 1){
    	return nums[0]
    }
    
    for(let i=0; i<nums.length-2; i++){
    	begin = nums[i]
    	currentSum = begin
    	for (let j=i+1; j<nums.length-1; j++){
    		currentSum += nums[j]
    		if(currentSum > maxSum){
    			maxSum = currentSum
    		}
    	}
        
    }
    return maxSum
};