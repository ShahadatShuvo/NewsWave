from django.urls import path
from . import views


urlpatterns = [
    path('', views.PostsList.as_view()),
    path('posts/<int:pk>/', views.PostDetail.as_view()),

]
