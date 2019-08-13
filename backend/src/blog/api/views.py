from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

from blog.models import Blog, Blogger, Comment
from blog.api.serializers import BlogSerializer, BloggerSerializer, CommentSerializer


class BlogViewSet(viewsets.ModelViewSet):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer


class BloggerViewSet(viewsets.ModelViewSet):
    queryset = Blogger.objects.all()
    serializer_class = BloggerSerializer


class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
