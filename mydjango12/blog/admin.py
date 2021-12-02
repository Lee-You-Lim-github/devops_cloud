from django.contrib import admin
from blog.models import Post

class PostAdmin(admin.ModelAdmin):   #함수명을 PostAdmin라고 지은 이유 Post와 admin을 연결시키기 위해
    list_display = ["title", "author_name", "created_at"]
    search_fields = ["title"]




admin.site.register(Post, PostAdmin)  #등록만 하는 것, 디폴트로 설정됨.

