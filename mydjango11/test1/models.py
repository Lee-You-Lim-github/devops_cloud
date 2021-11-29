from django.db import models



class Netflix(models.Model):
    # name, address, mobile, menu
    title = models.CharField(max_length=100, verbose_name="제목")
    genre = models.CharField(max_length=100, verbose_name="장르")
    episodes = models.IntegerField(verbose_name="회차")
    country = models.CharField(max_length=100, verbose_name="국가")
    english = models.BooleanField(verbose_name="영어를 하는가?")






