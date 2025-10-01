from appTwo import views
from django.urls import path

urlpatterns = [
    # path('', views.index, name='index'),
    path('', views.users, name='users'),
]
