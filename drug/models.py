import django.utils.timezone as timezone
from django.db import models


# Create your models here.
class Drug(models.Model):
    # id = models.AutoField(primary_key=True)
    name =models.CharField(max_length=100)
    number = models.IntegerField( blank=True, null=True)
    status = models.IntegerField(blank=True, null=True)
    endTime = models.DateTimeField('有效截止日期',default = timezone.now )
    category = models.IntegerField( blank=True, null=True)
    source = models.CharField(max_length=20, blank=True, null=True)
    use = models.CharField(max_length=20, blank=True, null=True)

    createTime = models.DateTimeField('创建日期',default = timezone.now )
    modifyTime = models.DateTimeField('修改日期',default = timezone.now )
    creator = models.CharField(max_length=100, blank=True, null=True)
    editor = models.CharField(max_length=100, blank=True, null=True)

    class Meta:
        db_table = 'userinfo'