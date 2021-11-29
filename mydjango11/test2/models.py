from django.db import models

class Travel(models.Model):
    # name, address, mobile, menu
    country = models.CharField(max_length=100, verbose_name="국가")
    city = models.CharField(max_length=100, verbose_name="도시")
    day_to_go = models.DateField(verbose_name="가는 날")
    day_to_come = models.DateField(verbose_name="오는 날")

# 바꿈 
