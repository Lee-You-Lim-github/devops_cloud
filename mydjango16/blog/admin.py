from django.contrib import admin
from blog.models import Post, Comment, Tag

@admin.register(Post)      # admin.site.register(Post, PostAdmin)
class PostAdmin(admin.ModelAdmin):
    pass


@admin.register(Comment)   # admin.site.register(Comment, CommentAdmin)
class CommentAdmin(admin.ModelAdmin):
    list_display = ["pk", "post", "message", "created_at"]


@admin.register(Tag)
class TagAdmin(admin.ModelAdmin):
    pass