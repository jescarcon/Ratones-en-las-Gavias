from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import *

router = DefaultRouter()
router.register(r'games', GameViewSet)
router.register(r'test', TestViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
