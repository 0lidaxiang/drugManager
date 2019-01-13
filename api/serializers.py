from rest_framework import serializers

from drug.models import Drug
from django.utils import timezone

# from jike.files.serializers import ModuleFileSerializer
# import logging


# logger = logging.getLogger('main')


class DrugSerializer(serializers.ModelSerializer):
    # createTime = serializers.CharField(write_only=True)
    class Meta:
        model = Drug
        fields = ('userName', 'age', 'height', 'weight','bust','city', 'area', 'money', 'creditValue','image1')

        # Tuple of serialized model fields (see link [2])
        # fields =  ('userName', 'age', 'height', 'weight')
        modified = serializers.HiddenField(default=timezone.now)
        write_only_fields = ('createTime')

