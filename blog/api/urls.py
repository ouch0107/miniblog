from django.urls import path, include
from rest_framework import routers

from blog.api.views import BlogViewSet, BloggerViewSet, CommentViewSet

router = routers.DefaultRouter()
router.register(r'blog', BlogViewSet)
router.register(r'blogger', BloggerViewSet)
router.register(r'comment', CommentViewSet)

urlpatterns = [
    path('', include(router.urls))
]
