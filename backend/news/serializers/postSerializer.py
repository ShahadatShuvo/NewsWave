from rest_framework import serializers
from .categorySerializer import CategorySerializer
from news.models import Post


class PostSerializer(serializers.ModelSerializer):
    category = CategorySerializer(many=True, read_only=True)

    class Meta:
        model = Post
        fields = "__all__"
