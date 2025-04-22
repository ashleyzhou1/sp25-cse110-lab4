#1 "3" is printed because that is the value of i after the loop finishes executing.

#2 "150" is printed beccuase that is the final value of discountedPrice after the 
loop finishes executing. 150 = 300 * (1-0.5)

#3 "150" will be printed because that is what finalPrice gets updated to.

#4 It returns [ 50, 100, 150 ] because the function iterates through each original
value in prices and calculates the corresponding discounted price, and the function
returns an array of the discounted prices.

#5 The code causes an error becuase i is not accessible outside the for loop.

#6 The code causes an error becuase discountedPrice is not accessible outside the for loop.

#7 "150" is printed because that is the updated value of finalPrice, and finalPrice is
accessible throughout the entire function discountPrices(prices, discount).

#8 It returns [ 50, 100, 150 ] because the function iterates through each original
value in prices and calculates the corresponding discounted price, and the function
returns an array of the discounted prices.

#9 The code causes an error because i is a constant and can't be modified.

#10 It prints "3" because 3 is the length of the array of prices, and 3 was not modified.

#11 The function returns [ 50, 100, 150 ] because the function iterates through each original value in prices and calculates the corresponding discounted price, and the function returns an array of the discounted prices.

#12 a. student.name
    b. student["Grad Year"]
    c. student.greeting()
    d. student["Favorite Teacher"].name
    e. student.courseLoad[0]

#13 a. '32' 
    The string '3' is concatenated with '2', and '2' was 
    converted into a string
    b. 1  
    The "-" operator is arithmetic, so '3' is converted into an integer and 3-2 = 1 is performed.
    c. 3 
    null is 0 and arithmetic is performed so 3 + 0 = 3.
    d. '3null' 
    The + operator concatenates '3' and 'null' into a single string
    e. 4
    true is treated as 1 so we are doing 1 + 3 = 4
    f. 0
    false is treated as 0, and null is also treated as 0, so we are doing 0 + 0 = 0
    g. '3undefined'
    The + operator here concatenates '3' and 'undefined' into a single string.
    f. NaN
    The - operator performs subtraction, so the expression becomes 3 - NaN since NaN is undefined, so '3' - undefined becomes '3' - NaN, which becomes NaN.

#14 a. true
    '2' is converted to a string, so 2 > 1 evaluates to true
    b. false
    We are comparing strings '2' and '12' lexicographically, and '2' is greater than '12' lexicographically because the character '2' is lexicographically greater than '1'
    c. true
    This is true because '2' becomes an integer, and 2 == 2 evaluates to true.
    d. false
    This is false because the === operator does not convert '2' to 2, and the expression evalutes to false because 2 and '2' are of different types. 
    e. false
    true is converted to 1, and 1 == 2 evalutes to false
    f. true
    Boolean(2) evalutes to true, so true === true also evalutes to true.

#15 The == operator will first convert two values to the same type prior to performing the comparison, while the === operator doesn't convert the values to the same type before comparing them (so it will return false if the two values are of different types).

#17 The result is [ 2, 4, 6 ] will be printed because in the foor loop, each value of array is passed to doSomething(), which returns the value of array multiplied by 2. Then, this value is added to newArr, which is then returned, resulting in [ 2, 4, 6 ].

#19 The output is 
1
4
3
2
This is because 1 and 4 are both printed immediately, and then 3 is printed, and after 1 second (1000 ms), 2 is printed. 