import re

patterns = ['term1', 'term2']

text = 'This is a string with term1, not the other!'

for pattern in patterns:
    print("I'm searching for:" + pattern)

    if re.search(pattern, text):
        print("MATCH!")
    else:
        print("NO MATCH!")


text1 = 'This is a string with term1, not the other!'

match = re.search('term1', text1)

print(match.start())

# for email split

split_term = '@'

email = 'user@gmail.com'

print(re.split(split_term, email))

print(re.findall('match', 'This is my match string you found match here!'))


def multi_re_find(pattern, phrase):
    for pat in pattern:
        print("I am searching for {}".format(pat))
        print(re.findall(pat, phrase))
        print('\n')


test_phrase = 'sdsd..sssddd..sdddsddd...dsds...dssssss...sddddd'

test_pattern = ['sd*']

test_pattern = ['sd+']  # Find out 1 or more d's

test_pattern = ['sd?']

test_pattern = ['sd{3}']  # I want to find out three d

test_pattern = ['sd{1,3}']  # I want to find out 1 or 3 d's

test_pattern = ['s[sd]+']  # Find out start with s and followed by s or d's

test_phrase = 'This is a string! But is has punctuation. How can we remove it?'

test_pattern = ['[^!.?]+']

# Find out lower case characters

test_pattern = ['[a-z]+']

# Find out Upper case characters

test_pattern = ['[A-Z]+']

multi_re_find(test_pattern, test_phrase)
