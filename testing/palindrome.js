// iterate through all the possible combinations of 3-digit * 3-digit until
// you hit a palindrome - ie nested for loop

	//Array.from() makes a copy of an array

function checkForPalindrome(number){
	//error handling
	if (!Number.isInteger(number)){
		return false
	}
	//actual comparison
	const forward = number.toString()
	const reverse = forward.split('').reverse().join('')
	return forward === reverse
}



//this object is what is returned by require in the spec file
module.exports = {checkForPalindrome}




function isPalindrome(string) {      
   if (string.length === 0 || string.length === 1) {        
       return true;    
    }        
   if (string[0] === string[string.length - 1]) {        
     return isPalindrome( string.slice(1, string.length - 1) );     
   }       
  return false;
};






// def checkForPalindrome(int)
// 	array = int.to_s.chars
// 	half = (array.length/2)
// 	looping_array = [*0..half]

// 	looping_array.each do |num|
// 		if !(array[num] == array[-1*(num+1)])
// 			return false
// 		end
// 	end
// 	return true
// end 


// def dumbSolution
// 	product = 0
// 	highest_product = 0
// 	three_digit = [*100..999].reverse
// 	second_array = [*100..999].reverse

// 	three_digit.each do |num|
// 		second_array.each do |second_num|
// 			product = num*second_num
// 			if checkForPalindrome(product)
// 				if highest_product < product
// 					highest_product = product
// 				end
// 			end
// 		end
// 	end
// 	highest_product
// end