// check that 9009 returns true
// what if it is a 1-digit number? is that a palindrome?
// check that not a palindrome returns false
// because if only check the cases where it returns true it could
// return true every time

//to run the test, type 'npm t' into the terminal (npm run test)
// test command: jest

const checkForPalindrome = require('./palindrome.js').checkForPalindrome 

describe('checkForPalindrome', function(){
	// context('if number is same forward and backward', function () {
	// 	test('returns true')
	// })
	test('returns true if number is the same forward and backward', function(){
		//tell the test to do something and expect that that thing equals some value
		//or asserts something about what we did
		expect(checkForPalindrome(9009)).toEqual(true)
	})
	test('return true if it is a 1-digit number', function(){
		expect(checkForPalindrome(1)).toEqual(true)
	})
	test('return false if number does not read the same forward & backward', function(){
		expect(checkForPalindrome(2075)).toEqual(false)
	})
	//could write tests for other input like strings or negative numbers
	test('return false if user does not input an integer', function(){
		expect(checkForPalindrome('racecar')).toEqual(false)
	})
})