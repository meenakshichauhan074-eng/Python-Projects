from first_app import views
from django.urls import path

urlpatterns = [
    path('', views.index, name='index'),
    path('static_files', views.static_files, name='static_files')
]
