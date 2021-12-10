from django.urls import path

from shop import views

app_name = "shop"

urlpatterns = [
    path("<int:pk>/", views.shop_detail, name = "show_detail"),
    path("new/", views.shop_new, name="show_new"),
]