from .models import Crud
from .serializers import CrudSerializer
from rest_framework import generics

class CrudListCreate(generics.ListCreateAPIView):
    queryset = Crud.objects.all()
    serializer_class = CrudSerializer