from django.db import models
from django.utils.html import mark_safe


class Category(models.Model):
    name = models.CharField(max_length=255)
    image_url = models.ImageField(upload_to='category/', null=True, blank=True)

    def __str__(self):
        return f"{self.name}"

    def img_preview(self):  # new
        try:
            return mark_safe(f'<img src = "{self.image_url.url}" width = "40"/>')
        except:
            pass
