from django.urls import path
from . import views


urlpatterns = [
    path('', views.PostListCreateView.as_view(), name='posts_list'),

]
