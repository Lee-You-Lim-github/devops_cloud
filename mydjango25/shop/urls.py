from django.urls import path

from shop import views

app_name = 'shop'

urlpatterns = [
    path("", views.shop_list, name="shop_list"),
    path("<int:pk>/", views.shop_detail, name="shop_detail"),  # CBV에서는 pk가 디폴트값으로 되어 있음. 2:33
    path("<int:shop_pk>/reivews/new", views.review_new, name='review_new')
]