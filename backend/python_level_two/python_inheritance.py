# Inheritance
class Animals():
    def __init__(self):
        print("Animal Created")

    def sleep(self):
        print("Animal Sleeping")

    def eat(self):
        print("Animal Eating")


class Dog(Animals):
    def __init__(self):

        Animals.__init__(self)
        print("Dog Created")

    def sleep(self):  # Also able to override methods
        print("Dog Sleep")


# mya = Animals()
# mya.sleep()
# mya.eat()
# myd = Dog()
# myd.sleep()
# myd.eat()


# Special Methods
class Book():

    def __init__(self, name, author, pages):
        self.name = name
        self.author = author
        self.pages = pages

    def __str__(self):
        return "Title: {}, Author : {}, Pages: {}".format(self.name, self.author, self.pages)

    def __len__(self):
        return self.pages

    def __del__(self):
        print("The Book are destroyed!")


myb = Book("python", "jose", 200)
print(myb)
print(len(myb))

del myb  # it is used to delete an item
