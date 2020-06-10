
from django.urls import path, include

from knox.views import LogoutView

from .views import UserAPIView, RegisterAPIView, LoginAPIView, CrudListCreate

app_name = "cruds"


urlpatterns = [
    path('', include('knox.urls')),
    path('auth/user/', UserAPIView.as_view()),
    path('auth/register/', RegisterAPIView.as_view()),
    path('auth/crud/', CrudListCreate),
    path('auth/login/', LoginAPIView.as_view()),
    path('auth/logout/', LogoutView.as_view(), name='knox_logout')
]