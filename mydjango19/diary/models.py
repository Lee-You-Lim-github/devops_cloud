from django.db import models

class TimestampedModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True   # 추상 클래스로서, DB 테이블이 생기지 않습니다.

class Post(TimestampedModel):    # pk: id(int)
    author_name = models.CharField(max_length=20)
    title = models.CharField(max_length=200, db_index=True)
    content = models.TextField()
    photo = models.ImageField(upload_to="diary/post/%Y/%m/%d")
    tag_set = models.ManyToManyField('Tag', blank=True)


    # 인스턴스에 대한 문자열 포현을 기대
    # post.title
    # print(post)    # 내부적으로 post.__str__을 찾아서 호출해서 반환값을 출력
    # print(post.__str__())과 같은.
    def __str__(self) -> str:
        return self.title

    class Meta:
        verbose_name = "포스팅"
        verbose_name_plural = "포스팅 목록"


class Comment(TimestampedModel):
    post = models.ForeignKey(Post, on_delete=models.CASCADE)    # Post를 지울 때, 댓글(comment)도 같이 지워줌.
    author_name = models.CharField(max_length=20)
    message = models.TextField()

    class Meta:
        verbose_name = "댓글"
        verbose_name_plural = "댓글 목록"

class Tag(models.Model):
    name = models.CharField(max_length=100, unique=True)    # 같은 Tag가 있을 시 검색 X -> unique 해야 함.

    def __str__(self) -> str:
        return self.name

    class Meta:
        verbose_name = "태크"
        verbose_name_plural = "태크 목록"