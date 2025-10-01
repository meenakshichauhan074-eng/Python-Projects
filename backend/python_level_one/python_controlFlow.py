if 1 < 2:
    print("True")
else:
    print("False")

# multiple if else statement we use elif
if 1 == 1:
    print("1st statement")
elif 2 == 2:
    print("2nd statement")
else:
    print("last statement")

# loops
# For loops
seq = [1, 2, 3, 4, 5, 6]
for item in seq:
    print(item)

d = {"sam": 1, "frank": 2, "ram": 3}
for k in d:
    print(k)  # Gives Keys
    print(d[k])  # Gives Values

# tuples in for loop
t = [(1, 2), (3, 4), (5, 6)]
for tup1, tup2 in t:
    print(tup1)
    print(tup2)

# While loops
i = 1
while i < 10:
    print("i is {}".format(i))
    i = i+1

for item1 in range(10):
    print(item1)

for item2 in range(0, 10, 2):
    print(item2)

# for loop list comprehension
x = [1, 2, 3, 4, 5]
out = []
# for num in x:
#     out.append(num**2)
# print(out)

out = [num**2 for num in x]
print(out)

for i in range(1, 6):
    for j in range(i):
        print("*", end=" ")
    print()
