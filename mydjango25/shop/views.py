from django.contrib.auth.mixins import LoginRequiredMixin, UserPassesTestMixin
from django.http import HttpResponse
from django.shortcuts import redirect, get_object_or_404, resolve_url
from django.urls import reverse_lazy
from django.views.generic import ListView, DetailView, CreateView, UpdateView, DeleteView

from shop.forms import ReviewForm
from shop.mixins import ReviewUserCheckMixin
from shop.models import Shop, Category, Review


class ShopListView(ListView):
    model = Shop   # 나머지는 옵션 - default 값으로 지정됨.
    paginate_by = 5

    def get_context_data(self, **kwargs):
        context_data = super().get_context_data(**kwargs)
        context_data["category_list"] = Category.objects.all()
        return context_data

# shop/
shop_list = ShopListView.as_view()

shop_detail = DetailView.as_view(
    model=Shop,
)

# ,가 있으면 tuple로 에러남.
class ReviewCreateView(LoginRequiredMixin, CreateView):
    model = Review   # 모델을 지정하면 templates명을 유추함.
    form_class = ReviewForm
    # FIXME: shop_detail로 보내기
    # form_valid에서 직접 URL 이동을 하기에
    # 아래 success_url 설정은 불필요
    # success_url = reverse_lazy("shop:shop_list")    # super() 부모를 호출했다면 사용해야 함.

    # 유효성 검사에 통과한다면...
    def form_valid(self, form) -> HttpResponse:    # form_valid는 review.save(), success_url가 있음.
        # self.kwargs: URL Captured 값들이 사전으로 저장
        shop_pk=self.kwargs["shop_pk"]
        shop = get_object_or_404(Shop, pk=shop_pk)


        review = form.save(commit=False)
        review.shop = shop
        review.user = self.request.user   #
        review.save()
        # return redirect('shop:shop_detail', shop.pk)
        return redirect(shop)  # success_url = reverse_lazy("shop:shop_list")를 쓸 필요 없음.
                              # 구현 하려면 Shop 모델에 get_absolute_url이 있어야 함.

review_new = ReviewCreateView.as_view()

# ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

class ReviewUpdateView(LoginRequiredMixin, ReviewUserCheckMixin, UpdateView):
    model = Review
    form_class = ReviewForm
    # FIXME: shop_detail로 보내기
    # success_url = reverse_lazy("shop:shop_list") # 고정

    def get_success_url(self) -> str:
        review = self.object
        return resolve_url(review.shop)


review_edit = ReviewUpdateView.as_view()

# 로그인 하지 않아도 수정할 수 있고, 다른 사람의 리뷰를 수정할 수 있음.
# review_edit = UpdateView.as_view(
#     model=Review,
#     form_class=ReviewForm,
#     FIXME: shop_detail로 보내기
#     success_url=reverse_lazy("shop:shop_list"),
# )
