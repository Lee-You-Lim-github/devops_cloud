from django.contrib import admin
from django.urls import path, include
from mydjango15 import settings
from delicious.views import shop_list, shop_detail, shop_new_1

urlpatterns = [
    path('admin/', admin.site.urls),
    path('delicious/', shop_list),
    path('delicious/<int:pk>/', shop_detail),
    path('delicious/new1/', shop_new_1),
]

if settings.DEBUG:
    import debug_toolbar
    urlpatterns += [
        path('__debug__/', include(debug_toolbar.urls)),
    ]