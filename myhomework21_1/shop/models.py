from django.core.validators import RegexValidator
from django.db import models


class TimestampedModels(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True
# ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
class Category(TimestampedModels):
    name = models.CharField(max_length=20, unique=True)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ["name"]
# ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
class Post(TimestampedModels):
    category = models.ForeignKey(Category, on_delete=models.CASCADE)   # 1:M
    title = models.CharField(max_length=200, db_index=True)  # 중복은 허용
    content = models.TextField()
    photo = models.ImageField(upload_to='shop/Post/%Y/%m/%d')
    telephone = models.CharField(max_length=14,
                                 validators=[
                                     RegexValidator(r"^\d{3}-?\d{4}-?\d{4}$", message="전화번호를 입력하세요."),
                                            ],
                                 help_text="입력 예? 042-1234-1234"
                                 )
    status = models.CharField(
        max_length= 1,
        choices=[
            ("D", "초안"),
            ("P", "공개"),
        ],
        db_index=True,
        default="D",
    )
    tag_set = models.ForeignKey('Tag', on_delete=models.CASCADE)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ["-id"]

# ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
class Comment(TimestampedModels):
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    message = models.TextField()

    def __str__(self):
        return self.message

    class Meta:
        ordering = ["-id"]

# ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
class Tag(TimestampedModels):
    name = models.CharField(max_length=20, unique=True)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ["name"]