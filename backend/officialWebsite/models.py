from django.db import models
from django.contrib.auth.models import AbstractBaseUser, AbstractUser
from django import forms

# Create your models here.


class User(AbstractUser):
    username = models.CharField(max_length=20, unique=True)
    password = models.CharField(max_length=500)


class Image(models.Model):
    image = models.ImageField(upload_to='image', verbose_name='图片')
    timestamp = models.DateTimeField(auto_now_add=True)


class File(models.Model):
    file = models.FileField(upload_to='file', verbose_name='文件')
    remark = models.CharField(max_length=20)
    timestamp = models.DateTimeField(auto_now_add=True)
