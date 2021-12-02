from django.db import models
from blog.upload_to import uuid_name_upload_to

# 만든 시간, 수정 시간 추가하기

class Post(models.Model):
    author_name = models.CharField(max_length=20)
    title = models.CharField(max_length=200)
    content = models.TextField()

    # upload_to
    #   - 문자열 : 파일이 저장되는 폴더의 경로
    photo = models.ImageField(blank=True, upload_to= uuid_name_upload_to) #'blog/post/%Y/%m/%d/%H') # 기본 root는 media
    # media/blog/post에 저장 -> /%Y를 붙이면 '년도 폴더' 밑에 저장됨. (반드시 'Y')
    # /%Y/%m/%d/%H -> 년도 밑에 월 밑에 일 밑에 시간 폴더에 넣음
    # upload_to = 'blog/post/%Y/%m/%d/%H'한 뒤에 'blog/post/%Y/%m/%d/%H'를 지워도 남아 있음.

    created_at = models.DateTimeField(auto_now_add=True)   # 처음 만든 시간
    updated_at = models.DateTimeField(auto_now=True)       # 수정한 시간
