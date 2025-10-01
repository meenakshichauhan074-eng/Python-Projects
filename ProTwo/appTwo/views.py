from django.shortcuts import render
# from django.http import HttpResponse
# from appTwo.models import User
from  appTwo.forms import NewUser
# Create your views here.


def index(request):
    return render(request, "ProTwo/index.html")


# def users(request):
#     user_list = User.objects.order_by('first_name')
#     user_dict = {'users': user_list}
#     return render(request, "ProTwo/user.html", context=user_dict)

def users(request):
    form = NewUser()

    if request.method == "POST":
        form = NewUser(request.POST)

        if form.is_valid():
            form.save(commit=True)
            return index(request)
        else:
            print("Return for invalid!!!!")

    return render(request,'ProTwo/user.html',{'form':form})