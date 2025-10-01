class sample():
    pass


x = sample()
print(type(x))

# Attributes


class Dog():
    def __init__(self, breed, name):  # __init__ initilize the object
        self.breed = breed
        self.name = name


myDog = Dog(breed="Lap", name="Pammy")
# Create another instance of class
otherDog = Dog(breed="Dusky")
print(myDog.breed)
print(myDog.name)
print(otherDog.breed)

# Class Object Attributes


class Dog1():
    species = "Mammals"

    def __init__(self, breed, name):
        self.breed = breed
        self.name = name


myDog1 = Dog1(breed="Lap", name="Dummy")
print(myDog1.species)


class Circle():
    pi = 3.14

    def __init__(self, radius=1):
        self.radius = radius

    def area(self):
        return self.radius*self.radius*Circle.pi

    def setRadius(self, new_r):
        self.radius = new_r


mycircle = Circle(3)
mycircle.radius = 100
mycircle.setRadius(1000)
print(mycircle.radius)
print(mycircle.area())
