
#999*999 = 998001

#iterate through all the possible combinations of 3-digit * 3-digit until
#you hit a palindrome - ie nested for loop

def checkForPalindrome(int)
	array = int.to_s.chars
	half = (array.length/2)
	looping_array = [*0..half]

	looping_array.each do |num|
		if !(array[num] == array[-1*(num+1)])
			return false
		end
	end
	return true
end 


def dumbSolution
	product = 0
	highest_product = 0
	three_digit = [*100..999].reverse
	second_array = [*100..999].reverse

	three_digit.each do |num|
		second_array.each do |second_num|
			product = num*second_num
			if checkForPalindrome(product)
				if highest_product < product
					highest_product = product
				end
			end
		end
	end
	highest_product
end
