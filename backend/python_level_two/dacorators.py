def hello(name="Jose"):
    return "hello "+name


print(hello())

mynewgreet = hello
print(mynewgreet())


def hello(name="jose"):
    print("The HELLO() FUNCTION HS BEEN RUN!")

    def greet():
        return "THIS STRING IS INSIDE GREET()"

    def welcome():
        return "THIS STRING IS INSIDE WELCOME!"
    print(greet())
    print(welcome())
    print("End of hello()")


hello()


def hello():
    return "Hi Jose!"


def other(func):
    print("HELLO")
    print(func())


# other(hello)

def new_decorator(func):

    def wrap_func():
        print("CODE HERE BEFORE EXECUTING FUNC")
        func()
        print("FUNC() HAS BEEN CALLED")

    return wrap_func


@new_decorator
def func_needs_decorator():
    print("THIS FUNCTION IS IN NEED OF A DECORAtor!")


# func_needs_decorator = new_decorator(func_needs_decorator)
func_needs_decorator()
