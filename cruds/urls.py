from django.urls import path
from .views import CrudListCreate

app_name = "cruds"

urlpatterns = [
    path('api/crud/', CrudListCreate.as_view()),
]