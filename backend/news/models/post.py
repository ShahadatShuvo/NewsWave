from django.db import models
from .category import Category
from django.conf import settings
from ckeditor.fields import RichTextField
from django.utils.html import mark_safe


class Post(models.Model):
    title = models.CharField(max_length=255)
    author = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, null=True, related_name="posts")
    category = models.ManyToManyField(Category, blank=True)
    description = models.TextField(null=True, blank=True)
    content = RichTextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    image_url = models.ImageField(upload_to='news/img/', null=True, blank=True)

    def __str__(self):
        return f"{self.title}"

    def img_preview(self):  # new
        try:
            return mark_safe(f'<img src = "{self.image_url.url}" width = "40"/>')
        except:
            pass
