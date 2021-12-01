from django.db import models
# import datetime

class Shop(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    telephon = models.CharField(max_length = 13)
    # open_time = models.TimeField(default=datetime.time)
    photo = models.ImageField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
