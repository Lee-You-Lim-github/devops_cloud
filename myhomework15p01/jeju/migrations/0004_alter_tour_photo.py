# Generated by Django 3.2.9 on 2021-12-04 11:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('jeju', '0003_alter_tour_photo'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tour',
            name='photo',
            field=models.ImageField(null=True, upload_to=''),
        ),
    ]