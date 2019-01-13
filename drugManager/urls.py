from django.conf.urls import include, url
from django.contrib import admin
from django.conf import settings
# from home.view.index import *

from django.contrib import admin
from django.urls import path, include, re_path
from django.conf import settings
from drug import views


urlpatterns = [
    path('', include("drug.urls")),

    path('admin/', admin.site.urls),
    path('api/v1/', include('api.urls')),
    path('drug/', include("drug.urls")),
    # path('login/', include("login.urls")),
    # path('register/', include("register.urls")),
    # path('userinfo/', include("userinfo.urls")),
]