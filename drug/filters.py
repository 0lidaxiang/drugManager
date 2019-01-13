from rest_framework.filters import BaseFilterBackend
from django.db.models import Q
import operator
from functools import reduce

class UserNameFilter(BaseFilterBackend):
    def filter_queryset(self, request, queryset, view):
        userId: str = request.query_params.get('id')
        if not userId:
            return queryset
        return queryset.filter(id=str(userId))
