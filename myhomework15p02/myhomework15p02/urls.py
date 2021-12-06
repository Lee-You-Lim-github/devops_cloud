from django.conf import settings
from django.contrib import admin
from django.urls import path, include
from jeju.views import tour_list, tour_detail, tour_new

urlpatterns = [
    path('admin/', admin.site.urls),
    path('jeju/', tour_list),
    path('jeju/<int:pk>', tour_detail),
    path('jeju/new/', tour_new),
]

if settings.DEBUG:
    import debug_toolbar
    urlpatterns += [
        path('__debug__/', include(debug_toolbar.urls)),
    ]
