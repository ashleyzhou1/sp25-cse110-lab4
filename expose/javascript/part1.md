1) Line 9 "values added: 20"

2) Line 13 "values added: 20"

3) We should not use var because it can be accessed anywhere inside the function, even 
though if it is declared in a certain block. In this case, using var causes result to
be accessible outside the if-statement.

4) The code prints "values added: 20"

5) The code returns an error because we are trying to access result, but we declared
result using let, so result is only accessible inside the if-statement

6) The code returns an error because result is a constant (value is zero) but we try 
to modify result by doing result = num1 + num2 in line 7.

7) The code still returns an error result is a constant (value is zero) but we try 
to modify result by doing result = num1 + num2 in line 7.
