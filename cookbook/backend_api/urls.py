from django.conf.urls import include
from django.urls import path
from rest_framework import routers
from . import views


router = routers.DefaultRouter()
router.register(r'recipes', views.RecipeViewSet)
router.register('', views.CategoryViewSet)


urlpatterns = [
    path('', include(router.urls)),
]