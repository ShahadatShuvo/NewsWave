from django.urls import path
from . import views


urlpatterns = [
    # posts
    path('', views.PostListCreateView.as_view(), name='posts_list'),
    path('posts/<str:category_name>/',
         views.PostListByCategoryView.as_view(), name='posts-by-category'),

    path('<int:pk>/', views.SinglePostView.as_view(),
         name='single_post'),

    # categories
    path('categories/', views.CategoryListCreateView.as_view(),
         name='categories_list'),



]
