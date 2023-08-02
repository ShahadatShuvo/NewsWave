from django.contrib import admin
from .models import Post, Category
# Register your models here.


@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ('title', 'id', 'author', 'display_categories',
                    'short_description', 'created_at', 'updated_at', 'img_preview')

    def display_categories(self, obj):
        return ", ".join([str(category) for category in obj.category.all()])


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'img_preview', 'description',
                    'created_at', 'updated_at')
