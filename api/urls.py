from django.urls import path, include

from rest_framework_nested import routers

from api.views import *
# from jike.hardware.views import DeviceViewSet
from rest_framework_jwt.views import obtain_jwt_token, refresh_jwt_token
# from jike.files.views import MarketFileViewSet, CustomerFileViewSet, StoreFileViewSet
from drug.views import DrugViewSet
# from login.views import LoginViewSet,UserLogout
# from home.view.index import *

router = routers.DefaultRouter(trailing_slash=False)

# router.register(r'login', LoginViewSet)
router.register(r'userinfo', DrugViewSet)
# router.register(r'userLogout', UserLogout.as_view())

# customer_router = routers.NestedDefaultRouter(router, 'customers', lookup='customer', trailing_slash=False)
# customer_router.register(r'files', CustomerFileViewSet)


urlpatterns = [
    path('', include(router.urls)),
    # path('accounts/', include('rest_registration.api.urls')),

    # path('approve/', include('jike.dingding.urls')),
    # path('tongtian_auth', TongtianAuthView.as_view()),
    # path('$', index),
    # path('', include('home.urls')),
    # path('hotUser/', hotUser),
    # path('aboutUs/', aboutUs),
    # path('login/', include('login.urls')),
    # path('register/', include('register.urls')),
    # path('userLogout/', UserLogout.as_view()),
    
    path('userinfo/', include('drug.urls')),
]
