# This code is related to name_and_main.py
import name_and_main
print("TOP LEVEL TWO.PY")
name_and_main.func()

if __name__ == '__main__':
    print("Two.py being run directly")
else:
    print("two is being imported")
