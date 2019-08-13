from rest_framework import serializers

from blog.models import Blog, Blogger, Comment


class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = '__all__'


class BloggerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blogger
        fields = '__all__'


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = '__all__'
