def hello():
    return "hello"


result = hello()
print(result)


def add(num1, num2):
    if type(num1) == type(num2) == type(10):
        return num1+num2
    else:
        return "Sorry! I need Integer value."


result1 = add(2, 23)
print(result1)

# lambda Expression
# Filter
mylist = [1, 2, 3, 4, 5, 6, 7, 8]


def myEven(num):
    return num % 2 == 0


result = filter(myEven, mylist)

print(list(result))

# lambda expression also called anonmus function

result1 = filter(lambda num: num % 2 == 0, mylist)
print(list(result1))

# split method
mytweet = "Good Sport! #sports"
result2 = mytweet.split('#')[1]
print(result2)

# in operator
print("x" in [1, 2, 3, "x"])
