from django.contrib import admin
from triptube.models import Video


class VideoAdmin(admin.ModelAdmin):
    pass

admin.site.register(Video, VideoAdmin)
