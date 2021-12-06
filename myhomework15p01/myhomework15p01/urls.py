from django.contrib import admin
from django.urls import path
from jeju.views import tour_list, tour_detail

urlpatterns = [
    path('admin/', admin.site.urls),
    path('jeju/', tour_list),
    path('jeju/<int:pk>/', tour_detail),
]


