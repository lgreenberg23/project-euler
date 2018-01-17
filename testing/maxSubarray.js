/**
 * @param {number[]} nums
 * @return {number}
 [-2,1,-3,4,-1,2,1,-5,4]
 O(n2) would be for each number as the starting point, 
 find the largest possible subarray, and then 
 // replace the maxSum with the largest one
 keep track of a largest and a current sum at each index
 */

 //0(n2 solution)
var maxSubArray = function(nums) {
    let maxSum = nums[0]
    let currentSum = 0

    let begin = nums[0]
    
    if(nums.length === 1){
    	return nums[0]
    }
    
    for(let i=0; i<nums.length; i++){
    	begin = nums[i]
    	currentSum = begin
    	for (let j=i+1; j<nums.length; j++){
    		  currentSum += nums[j]
    		if(currentSum > maxSum){
    			maxSum = currentSum
    		}
    	}
    	if(begin > maxSum){
    		maxSum = begin
      }
      if(currentSum > maxSum){
    		maxSum = currentSum
    	}
   }
   return maxSum
};


//BEST IMPLEMENTATION = KADANE's ALGORITHM
/* Simple idea of the Kadane’s algorithm is to look for all positive 
contiguous segments of the array (max_ending_here is used for this). 
And keep track of maximum sum contiguous segment among all positive 
segments (max_so_far is used for this). 
Each time we get a positive sum compare it with max_so_far and update 
max_so_far if it is greater than max_so_far

Initialize: max_so_far = 0 max_ending_here = 0

Loop for each element of the array 
(a) max_ending_here = max_ending_here + a[i] 
(b) if(max_ending_here < 0) max_ending_here = 0 
(c) if(max_so_far < max_ending_here) max_so_far = max_ending_here

return max_so_far
*/




//in less than O(n2) time:
/*
First, the nature of divide-and-conquer is to solve problems 
recursively as such:

Divide the problem into subproblems;
1. Conquer the subproblems by solving them recursively
(if their size are small enough, we will solve them straightforward)
2. Combine the subproblem solutions into a solution for the main problem.
3. Split the input in half, and consider that the maximum sum subarray 
can come from three places:

A. Entirely from left half.
B. Entirely from right half.
C. It consists of some number of rightmost elements of the left half 
and some number of leftmost elements of the right half.

for A & B: 
use recursion

for C:
find the maximum sum starting from mid point and ending at some 
point on left of mid, then find the maximum sum starting from 
mid + 1 and ending with sum point on right of mid + 1. 
Finally, combine the two and return.
*/

function crossSubarray(array, left, middle, right) {
	var leftSum = -Infinity;
	var rightSum = -Infinity;
	var sum = 0;
	// Include elements on left of mid
	for (var i = middle; i >= left; i--) {
		if (sum + array[i] >= leftSum) {
		  leftSum = sum + array[i];
		}
		sum += array[i];
	}
	sum = 0;
	// Include elements on right of mid
	for (var i = middle + 1; i < right; i++) {
		if (sum + array[i] >= rightSum) {
	  		rightSum = sum + array[i];
		}
		sum += array[i];
	}
	return leftSum + rightSum;
}

function maxSubarrayPartitioner(array, left, right) {
	if (right - left <= 1) {
		return array[left];
	}
	var middle = Math.floor((left + right) / 2);
	var leftSum = maxSubarrayPartitioner(array, left, middle);
	var rightSum = maxSubarrayPartitioner(array, middle, right);
	var crossSum = crossSubarray(array, left, middle, right);
	return Math.max(crossSum, leftSum, rightSum);
	}
   
function maxSubarraydivideAndConquer(array) {
   return maxSubarrayPartitioner(array, 0, array.length);
}  

console.log(maxSubarraydivideAndConquer([-2, 1, -3, 4, -1, 2, 1, -5, 4]));




