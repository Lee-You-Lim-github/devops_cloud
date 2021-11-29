from django.db import models
import datetime


class Netflix(models.Model):
    # name, address, mobile, menu
    title = models.CharField(max_length=100, verbose_name="제목")
    genre = models.CharField(max_length=100, verbose_name="장르")
    episodes = models.IntegerField(verbose_name="회차")
    country = models.CharField(max_length=100, verbose_name="국가")
    english = models.BooleanField(verbose_name="영어를 하는가?")
    def what_day_is_today(self):
        now = datetime.datetime.now()
        t = ['월', '화', '수', '목', '금', '토', '일']
        r = datetime.datetime.today().weekday()
        day = str(now.year) + '년' + str(now.month) + '월' + str(now.day) + '일' +t[r] + '요일'
        return day




