from django.db import models

class Post(models.Model):    # pk: id(int)
    title = models.CharField(max_length=200, db_index=True)
    content = models.TextField()
    tag_set = models.ManyToManyField('Tag', blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    # 인스턴스에 대한 문자열 포현을 기대
    # post.title
    # print(post)    # 내부적으로 post.__str__을 찾아서 호출해서 반환값을 출력
    # print(post.__str__())과 같은.
    def __str__(self) -> str:
        return self.title


class Comment(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE)    # Post를 지울 때, 댓글(comment)도 같이 지워줌.
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Tag(models.Model):
    name = models.CharField(max_length=100, unique=True)    # 같은 Tag가 있을 시 검색 X -> unique 해야 함.

    def __str__(self) -> str:
        return self.name