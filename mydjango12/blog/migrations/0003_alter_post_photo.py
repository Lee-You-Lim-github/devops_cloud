# Generated by Django 3.2.9 on 2021-11-30 07:11

import blog.upload_to
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0002_post_photo'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='photo',
            field=models.ImageField(blank=True, upload_to=blog.upload_to.uuid_name_upload_to),
        ),
    ]
