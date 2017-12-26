function birthdayCakeCandles(n, ar) {
	var obj = {}
	for (var i = 0; i < ar.length; i++) {
		let objKey = ar[i]
		//console.log(objKey)
		if (obj[objKey]!== undefined){
			obj[objKey] +=1
		}else{
			obj[objKey] = 1
		}
	}

	keys = Object.keys(obj)
   const max = Math.max(...keys)
   return obj[max]
}



//options - sort from largest to smallest

//go through again and take all of the top ones that are the same
//when you get to a number that is different, stop
//keep a count of those, break out of the loop & return count
//as fast as your sorting algorithm + something less than O(n)

// you could make a hash map and increment each time you get a same key
// then get all keys and find the largest O(2n) time
// then return the value for the largest

//this is the best solution I have seen -- O(n)

function birthdayCakeCandles(n, candles)
  var max = Math.max.apply(null, candles);
  var count = 0;
  for (let i = 0; i < n; i += 1) {
    if (candles[i] === max) { 
      count += 1;
    }
  }
  console.log(count);
} 



/* Colleen is turning  years old! Therefore, she has  candles of various
heights on her cake, and candle  has height . Because the taller candles
tower over the shorter ones, Colleen can only blow out the tallest
candles.

Given the  for each individual candle, find and print the number of
candles she can successfully blow out.

Input Format

The first line contains a single integer, , denoting the number of
candles on the cake.  The second line contains  space-separated
integers, where each integer  describes the height of candle .

Constraints

Output Format

Print the number of candles Colleen blows out on a new line.

Sample Input 0

4 
3 2 1 3 

Sample Output 0

2 

Explanation 0

We have one candle of height 1, one candle of height 2, and two candles of
height 3. Colleen only blows out the tallest candles, meaning the candles
where height == 3. Because there are  such candles, we print 2 on a new line.

/*
