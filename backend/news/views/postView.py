from news.serializers import PostSerializer
from rest_framework import generics
from news.models import Post
from rest_framework.views import APIView
from rest_framework import filters


class PostsList(generics.ListAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['title', 'content', 'category__name']


class PostDetail(generics.RetrieveAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
