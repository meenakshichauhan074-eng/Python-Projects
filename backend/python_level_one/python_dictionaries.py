# Dictionaries have key value pair like in object in python
myDic = {'key1': 'value', 'key2': 'value2', 'key3': {'123': [1, 3, 'grabme']}}
print(myDic['key2'])
print(myDic)
print(myDic['key3']['123'][2])
print(myDic['key3']['123'][2].upper())

myItem = {"breakfast": "milk", "lunch": "pizza"}
myItem['breakfast'] = "Chilla"  # reassign new value to an key
myItem['dinner'] = "Rice"  # Add new item to a dictionary
# print(myItem)
