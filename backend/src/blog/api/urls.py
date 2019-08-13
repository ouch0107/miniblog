from django.urls import path, include
from rest_framework import routers

from blog.api.views import BlogViewSet, BloggerViewSet, CommentViewSet

router = routers.DefaultRouter()
router.register(r'api/blog', BlogViewSet)
router.register(r'api/blogger', BloggerViewSet)
router.register(r'api/comment', CommentViewSet)

urlpatterns = [
    path('', include(router.urls))
]
