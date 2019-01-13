from django.shortcuts import render
import rest_framework.viewsets as viewsets
from rest_framework.response import Response
from rest_framework.decorators import action
from drug.models import Drug
from django.db.models import  Count
from api.serializers import DrugSerializer
from drug.filters import UserNameFilter
from rest_framework import status
from rest_framework import permissions



# Create your views here.
class DrugViewSet(viewsets.ModelViewSet):
    queryset = Drug.objects.annotate(num_ages=Count('name'))
    serializer_class = DrugSerializer
    filter_backends = viewsets.ModelViewSet.filter_backends + [UserNameFilter]
    filter_fields = ('userName', 'age', 'height', 'weight')
    ordering_fields = '__all__'
    ordering = ('-id')
    search_fields = ('userName', 'age', 'height', 'weight')


    # permission_classes = [
    #     permissions.AllowAny  # Or anon users can't register
    # ]

    def get_permissions(self):
        if self.request.method != 'PUT':
            return []
        return super().get_permissions()


def index(request):
    context	= {}
    return render(request, 'home/index.html', context)

def management(request):
    context	= {}
    return render(request, 'drug/management.html', context)

def addPage(request):
    context	= {}
    return render(request, 'drug/addPage.html', context)