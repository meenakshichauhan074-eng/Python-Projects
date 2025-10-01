# Problem 1:
def arraycheck(num):
    for i in range(len(num)-2):
        if num[i] == 1 and num[i+1] == 2 and num[i+2] == 3:
            return "True"

    return "False"


result = arraycheck([1, 1, 2, 3, 4, 5])
print(result)

# Problem 2:


def stringBits(str):
    result1 = ""
    for i in range(len(str)):
        if i % 2 == 0:
            result1 = result + str[i]
    return result1


result1 = stringBits("hello")
print(result1)

# Problem 3:


# Problem 4:


def doubleChar(str):
    for string in str:
        return string*string


print(doubleChar("Hi"))

# Problem 5:
