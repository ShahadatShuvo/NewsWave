from rest_framework import serializers
from news.models import Post


class PostSerializer(serializers.Serializer):

    class Meta:
        model = Post
        fields = "__all__"
