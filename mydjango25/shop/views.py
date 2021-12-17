from django.views.generic import ListView, DetailView, CreateView, UpdateView, DeleteView

from shop.models import Shop, Category


class ShopListView(ListView):
    model = Shop   # 나머지는 옵션 - default 값으로 지정됨.

    def get_context_data(self, **kwargs):
        context_data = super().get_context_data(**kwargs)
        context_data["category_list"] = Category.objects.all()
        return context_data

# shop/
shop_list = ShopListView.as_view()
