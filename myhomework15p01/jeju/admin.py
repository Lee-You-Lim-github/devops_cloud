from django.contrib import admin
from jeju.models import Tour


class TourAdmin(admin.ModelAdmin):
    list_display = ["id", "place", "description", "latitude", "longitude", "telephone"]
    list_display_links = ["place"]

admin.site.register(Tour, TourAdmin)
