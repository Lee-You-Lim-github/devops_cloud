from django.core.validators import RegexValidator
from django.db import models

class TimestampedModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True    # 다른 모델 클래스가 상송 받을 목적

class Category(TimestampedModel):
    name = models.CharField(max_length=100, unique=True)

    def __str__(self) -> str:
        return self.name

    class Meta:
        ordering = ["-id"]

class Shop(TimestampedModel):
    category = models.ForeignKey(Category, on_delete=models.CASCADE)  # 필수 필드 # Category와 Shop은 1:1
    name = models.CharField(max_length=100, db_index=True)
    description = models.TextField(blank=True)
    telephone = models.CharField(max_length=14,
                                 validators=[
                                     RegexValidator(r"^\d{3}-?\d{4}-?\d{4}$", message="전화번호를 입력해 주세요."),
                                 ],
                                 help_text="입력 예) 042-1234-1234")
    tag_set = models.ManyToManyField('Tag', blank=True)

    def __str__(self) -> str:
        return self.name

    class Meta:
        ordering = ["-id"]   # 최신 작성 내용으로 내림차순 정렬

class Review(TimestampedModel):
    shop = models.ForeignKey(Shop, on_delete=models.CASCADE)  # 폭포처럼 Shop을 지우면 Review가 지워짐.
    author_name = models.CharField(max_length=20)
    message = models.TextField()

    class Meta:
        ordering = ["-id"]


class Tag(TimestampedModel):
    name = models.CharField(max_length=100, unique = True)
                                                # unique = True: form에서 알아서 유효성 검사해줌.
    class Meta:
        ordering = ["name"]

    def __str__(self) -> str:
        return self.name

