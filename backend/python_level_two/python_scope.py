# Python scope follows the LEGB Rule
# locals
# Enclosing Function locals
# global
# Built-in
x = 25


def my_func():
    x = 50
    return x


# print(x)  # GLobal Scope
# print(my_func())  # Local Scope

my_func()
print(x)  # Still takes Global Scope

# Enclosing function locals
name = "This is a global name!"


def greet():
    # name = "sammy"

    def hello():
        print("Hello "+name)
    hello()


greet()
print(name)

# Built in level
y = 25


def func(y):
    print("y is :", y)
    y = 1000
    print("y after reassignment : ", y)


func(y)
print(y)

z = 50


def func1():
    global z
    z = 1000


print("Before function call z:", z)
func1()
print("After function call z:", z)

# Another way to make variable global
k = 20


def func2():
    k = 1000
    return k


k1 = func2()

print(k1)
