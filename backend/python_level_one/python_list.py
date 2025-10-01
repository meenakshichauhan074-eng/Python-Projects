mylist = [1, 2, 3]
print(len(mylist))
mynewlist = ['string', 1, 0.5, [1, 2, 3]]
print(mynewlist)

myNew = [1, 2, 3, 4, 5]
print(myNew[0])
print(myNew[-1])
print(myNew[1:])
print(myNew[:3])
print(myNew[1:3])

# List are mutible means we can reassign new value to an item
print("Before reassignment:")
print(myNew)
print("After reassignment:")
myNew[0] = "New Item"
print(myNew)

# Adding new item to the list
myAdd = [1, 2, 3, 4]
myAdd.append([5, 6, 7])
print(myAdd)
listExt = [8, 9]
myAdd.extend(listExt)
print(myAdd)

# Removing Item from a list
myPop = [1, 2, 3, 4, 5]
item = myPop.pop()  # pop last item in the list
print(myPop)
print(item)
item = myPop.pop(0)  # pop item at specified index
print(myPop)
print(item)

# Reverse a list
myRev = [1, 2, 3, 4, 5]
myRev.reverse()
print(myRev)

# Sort a list
mySort = [1, 10, 15, 6, 43, 2]
mySort.sort()
print(mySort)

# get nested list item
myNest = [1, 2, [3, 4, 5]]
print(myNest[2][1])

# List Comprehension
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
myComp = [row[1] for row in matrix]  # This is actually a for loop
print(myComp)
