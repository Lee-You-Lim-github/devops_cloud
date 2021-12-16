from django.urls import path

from shop import views

app_name = "shop"

urlpatterns = [
    path("", views.shop_list, name='post_list'),
    path("<int:pk>/", views.shop_detail, name='post_detail'),
    path("new/", views.shop_new, name='post_new'),
    path("<int:pk>/edit/", views.shop_edit, name='post_edit'),
    path("<int:pk>/delete/", views.shop_delete, name='post_delete'),
]