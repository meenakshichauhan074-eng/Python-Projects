from django.shortcuts import render
from django.http import HttpResponse
from first_app.models import Topic,AccessRecord,Webpage
# Create your views here.


def index(request):
    webpages_list = AccessRecord.objects.order_by('date')
    date_dict = {'access_records':webpages_list}
    return render(request, 'first_app/index.html', context=date_dict)


def static_files(request):
    my_dict = {'insert_me': 'Hello i am coming from first_app/index.html'}
    return render(request, 'first_app/static_files.html', context=my_dict)
