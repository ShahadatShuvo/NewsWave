# Generated by Django 4.2.3 on 2023-08-02 03:11

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('news', '0007_post_category'),
    ]

    operations = [
        migrations.RenameField(
            model_name='post',
            old_name='description',
            new_name='short_description',
        ),
    ]
