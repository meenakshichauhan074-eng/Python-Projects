# Basic strings
# String can be in single quotes or in double quotes like ('my name',"I'm ill")
print('my name is meenakshi')

# String indexing
name = 'abcdefghijk'
print(name[0])
print(name[-1])
print(name[3])

# String Slicing
print(name[2:])  # grab all letter after indexing 2
print(name[:3])  # grab all letter brfore indexing 3
print(name[2:6])  # grab letter from 2 to 6 indexing
print(name[:])  # grab all string
print(name[::2])  # grab letter one skip after other

# Strings are imutable as we can't change the string
# name[0] = 'X'
# print(name)  # this gives "'str' object does not support item assignment"

# String method
print(name.upper())  # Covert string into uppercase
print(name.lower())  # Covert string into lowercase
print(name.capitalize())  # Convert first letter in capitalize

mystring = "Hello World"
print(mystring.split())  # It convert String into a list
# when we split it from o then o will remove and convert into list
print(mystring.split('o'))

# Print Formatting
X = "Hello insert me:{}".format(" here!!!")
print(X)
# Insert multiple String in a format
Y = "Item One {} Item Two {}".format("Cat", "Dog")
Z = "Item One {x} Item Two {y}".format(x="Cat", y="Dog")
print(Z)
