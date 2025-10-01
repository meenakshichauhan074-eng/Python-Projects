def func():
    print("func() in name_and_main.py")


print("TOP LEVEL name_and_main.py")

if __name__ == '__main__':
    print("name_and_main.py is being run directly")
else:
    print("name_and_main.py is been imported")
