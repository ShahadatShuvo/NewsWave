# Generated by Django 4.2.3 on 2023-08-02 02:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('news', '0003_remove_post_content'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='description',
            field=models.TextField(blank=True, null=True),
        ),
    ]