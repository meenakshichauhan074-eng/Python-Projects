import random
# Get Guess


def get_guess():
    return list(input("What is your guess?"))
# Generate computer code 123


def generate_code():
    digits = [str(num) for num in range(10)]
    random.shuffle(digits)
    return digits[:3]
# Generates the clues


def generate_clues(code, user_guess):
    if user_guess == code:
        return "Code Cracked!"
    clues = []
    for ind, num in enumerate(user_guess):
        if num == code[ind]:
            clues.append("Match")
        elif num in code:
            clues.append("Close")

    if clues == []:
        return ["None"]
    else:
        return clues


# Run Game Logic
print("Welcome to the Game")
secret_code = generate_code()

clue_report = []

while clue_report != 'Code Cracked!':
    guess = get_guess()

    clue_report = generate_clues(guess, secret_code)
    print("here is the result of the user guess")
    for clue in clue_report:
        print(clue)
