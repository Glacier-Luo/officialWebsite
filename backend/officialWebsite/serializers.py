from rest_framework import serializers
from .models import File, Image


class FileSerializer(serializers.ModelSerializer):
    class Meta():
        model = File
        fields = ('file', 'remark', 'timestamp')


class ImageSerializer(serializers.ModelSerializer):
    class Meta():
        model = Image
        fields = ('image', 'timestamp')
