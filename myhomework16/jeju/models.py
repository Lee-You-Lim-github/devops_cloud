from django.core.validators import RegexValidator
from django.db import models

class Tour(models.Model):
    place = models.CharField(max_length=100, db_index=True)
    description = models.TextField(blank=True)
    address = models.CharField(max_length=100)
    latitude = models.FloatField(verbose_name="위도")
    longitude = models.FloatField(verbose_name="경도")
    telephone = models.CharField\
        (max_length=15,
         validators=[
             RegexValidator(r"^\d{0,4}-?\d{3,4}-?\d{4}$",
                            message="전화번호를 입력하세요."),
         ])
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
