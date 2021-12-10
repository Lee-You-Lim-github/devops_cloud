from django.core.validators import RegexValidator
from django.db import models

class TimestampedModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True    # 다른 모델 클래스가 상송 받을 목적

class Shop(TimestampedModel):
    name = models.CharField(max_length=100, db_index=True)
    description = models.TextField(blank=True)
    telephone = models.CharField(max_length=14,
                                 validators=[
                                     RegexValidator(r"^\d{3}-?\d{4}-?\d{4}$", message="전화번호를 입력해 주세요."),
                                 ],
                                 help_text="입력 예) 042-1234-1234")
    tag_set = models.ManyToManyField('Tag', blank=True)

class Review(TimestampedModel):
    shop = models.ForeignKey(Shop, on_delete=models.CASCADE)  # 폭포처럼 Shop을 지우면 Review가 지워짐.
    author_name = models.CharField(max_length=20)
    message = models.TextField()

class Tag(TimestampedModel):
    name = models.CharField(max_length=100, unique = True)
                                                # unique = True: form에서 알아서 유효성 검사해줌.

