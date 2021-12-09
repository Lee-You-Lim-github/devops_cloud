from django.db import models

class TimestampedModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True   # 추상 클래스로서, created_at, created_at의 DB 테이블이 생기지 않습니다.

class Post(TimestampedModel):
    author_name = models.CharField(max_length=20)
    title = models.CharField(max_length=200, db_index=True)  # db_index=True: 검색 기능을 위해
    content = models.TextField()
    photo = models.ImageField(upload_to="diary/post/%Y/%m/%d")
    tag_set = models.ManyToManyField("Tag", blank=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = "포스팅"
        verbose_name_plural = "포스팅 목록"

class Comment(TimestampedModel):
    post = models.ForeignKey(Post, on_delete=models.CASCADE)  # on_delete=models.CASCADE: 포스팅을 지우면 댓글도 같이 지워 줌.
    author_name = models.CharField(max_length=20)
    message = models.TextField()

    class Meta:
        verbose_name = "댓글"
        verbose_name_plural = "댓글 목록"


class Tag(TimestampedModel):
    name = models.CharField(max_length=200, db_index=True)  # db_index=True: 검색 기능을 위해

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "태그"
        verbose_name_plural = "태그 목록"