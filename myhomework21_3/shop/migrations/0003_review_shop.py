# Generated by Django 3.2.10 on 2021-12-14 01:34

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0002_review'),
    ]

    operations = [
        migrations.AddField(
            model_name='review',
            name='shop',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='shop.shop'),
            preserve_default=False,
        ),
    ]
