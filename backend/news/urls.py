from django.urls import path
from . import views


urlpatterns = [
    # posts
    path('', views.PostListCreateView.as_view(), name='posts_list'),
    path('posts/<str:category_name>/',
         views.PostListByCategoryView.as_view(), name='posts-by-category'),

    # categories
    path('categories/', views.CategoryListCreateView.as_view(),
         name='categories_list'),



]
