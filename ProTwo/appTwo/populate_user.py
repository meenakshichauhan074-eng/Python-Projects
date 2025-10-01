

import os
import sys

# ✅ Add your project path BEFORE importing Django modules
sys.path.append(r'C:\Users\meenakshi chauhan\Documents\python\django\ProTwo')
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'ProTwo.settings')

import django
django.setup()

# ✅ Now it's safe to import your app models
from appTwo.models import User
from faker import Faker

# Fake Pop Script

fakegen = Faker()


def populate(N=5):
    for entry in range(N):
        fake_name = fakegen.name().split()
        fake_first_name = fake_name[0]
        fake_last_name = fake_name[1]
        fake_email = fakegen.email()

        # Create user inside the loop
        user = User.objects.get_or_create(
            first_name=fake_first_name,
            last_name=fake_last_name,
            email=fake_email
        )[0]


if __name__ == '__main__':
    print("Populating Script....")
    populate(20)
    print("populating completed!!!")
