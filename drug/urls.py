#!/usr/bin/python
# -*- coding: UTF-8 -*-
from django.conf.urls import  include, url
from django.contrib import admin
from drug.views import  *
# from drug.view.personData import  *

# to front-page, api-urls is in api/urls
urlpatterns = [
    url('^index/$', index),
    url('^management/$', management),
    url('^addPage/$', addPage),
    # url('^uploadPhotoIndex/$', uploadPhotoIndex),
]
