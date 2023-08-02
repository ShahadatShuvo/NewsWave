from rest_framework import generics
from news.models import Post
from news.serializers import PostSerializer
from django_filters.rest_framework import DjangoFilterBackend


class PostListCreateView(generics.ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class PostListByCategoryView(generics.ListAPIView):
    serializer_class = PostSerializer

    def get_queryset(self):
        category_name = self.kwargs['category_name']
        return Post.objects.filter(category__name=category_name)


class SinglePostView(generics.RetrieveAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
