from django.contrib import admin

from shop.form import ShopForm
from shop.models import Category, Shop, Tag, Review


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    pass

@admin.register(Shop)
class ShopAdmin(admin.ModelAdmin):
    form = ShopForm

@admin.register(Tag)
class TagAdmin(admin.ModelAdmin):
    pass

@admin.register(Review)
class ReviewAdmin(admin.ModelAdmin):
    pass
