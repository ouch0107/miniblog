from django.db import models


class Blog(models.Model):
    title = models.CharField(max_length=50)
    content = models.TextField()
    blogger = models.ForeignKey(
        'Blogger', on_delete=models.SET_NULL, null=True)
    time = models.DateField(null=True, blank=True)

    def __str__(self):
        return self.title


class Blogger(models.Model):
    name = models.CharField(max_length=30)
    email = models.EmailField()
    bio = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Comment(models.Model):
    name = models.CharField(max_length=30)
    comment = models.CharField(max_length=100)
    time = models.DateTimeField()
    blog = models.ForeignKey('Blog', on_delete=models.CASCADE)

    def __str__(self):
        return self.name
