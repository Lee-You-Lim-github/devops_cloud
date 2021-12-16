import tablib
from django.core.validators import RegexValidator
from django.db import models
from django.urls import reverse


class TimestampedModels(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True

class Category(TimestampedModels):
    name = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ["name"]

class Post(TimestampedModels):
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    title = models.CharField(max_length=200, db_index=True) # 중복은 허용
    content = models.TextField()
    phote = models.ImageField(upload_to="blog/post/%Y/%m/%d")
    tag_set = models.ManyToManyField('Tag', blank=True)
    status = models.CharField(
        max_length=1,
        # FIXME: 장고 3에서 추가된 TextChoices 기능을 활용
        choices=[
            ('D', "초안"),  # Draft -> DB저장값, Label(사용자에게만 보여짐)
            ('P', '공개'),  # Published
        ],
        db_index=True,
        default='D',  # 초안이라고 하면 안 됨.
    )

    def __str__(self):
        return self.title

    # post detall 주소 문자열을 반환
    # detail 페이지를 구현하자마자, 즉시 아래 매서드 구현합니다.
    def get_absolute_url(self):
        return reverse("blog:post_detail", args=[self.pk])

    @classmethod   # 클래스 매서드를 붙임.
    def get_tabular_data(cls, queryset, format="xlsx") -> bytes:  # 인스턴스 매서드    # cls: 파이썬이 알아서 지정(class)
                                                                  # format을 지정하지 않으면 xlsx를 반환함.
        dataset = tablib.Dataset()
        dataset.headers = ["id", "title", "created_at", "updated_at"]

        for post in queryset:    # cls = Post
            dataset.append(
                [
                post.id,
                post.title,
                post.created_at.strftime("%Y-%m-%d %H:%M:%S"),
                post.updated_at.strftime("%Y-%m-%d %H:%M:%S"),
                ])
        return dataset.export(format)


    class Meta:
        ordering = ['-id']

class Comment(TimestampedModels):
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    message = models.TextField()

    def __str__(self):
        return self.message

    class Meta:
        ordering = ['-id']

class Tag(TimestampedModels):
    name = models.CharField(max_length=20, unique=True)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ["name"]

class Subscriber(TimestampedModels):
    phone = models.CharField(
        max_length=15,
        validators=[    # 1. 유효성 검사
            RegexValidator(r"^\d{3,4}-?\d{3,4}-?\d{4}$"),
        ],
    )