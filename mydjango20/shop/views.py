from django.contrib import messages
from django.http import HttpRequest, HttpResponse
from django.shortcuts import render, redirect, get_object_or_404
from shop.forms import ShopForm, ReviewForm
from shop.models import Shop, Review, Category


# shop/
def shop_list(request: HttpRequest) -> HttpResponse:
    category_qs = Category.objects.all()
    qs = Shop.objects.all()  # .order_by("-id")

    category_id = request.GET.get("category_id", "")
    if category_id:
        qs = qs.filter(category__pk=category_id)

    query = request.GET.get("query", "")  # 키 명이 query 없다면 빈문자열("")을 가져옴.
    if query:
        qs = qs.filter(name__icontains=query) # 대소문자 구별 X
    return render(request, "shop/shop_list.html", {
        "shop_list": qs,    # qs라는 변수의 이름을 (shop_list)라는 이름으로 접근하겠다.
        "category_list": category_qs,
    })


# /shop/100/
def shop_detail(request: HttpRequest, pk:int) -> HttpResponse:
    shop = get_object_or_404(Shop, pk=pk)

    review_list = shop.review_set.all()
    tag_list = shop.tag_set.all()
    return render(request, "shop/shop_detail.html", {
        "shop": shop,
        "review_list": review_list,
        "tag_list": tag_list,
    })


# /shop/new
def shop_new(request: HttpRequest) -> HttpResponse:
    # raise NotImplementedError("구현 예정 ")   # 아직 구현하지 않았다.

    if request.method == "POST":
        form = ShopForm(request.POST, request.FILES)
        if form.is_vaild():
            saved_post = form.save()
            # shop_detail 뷰를 구현했다면!!
            return redirect("shop:shop_detail", saved_post.pk)
    else:
        form = ShopForm()
    return render(request, "shop/shop_form.html", {
        "form": form,
    })

def shop_edit(request: HttpRequest, pk:int) -> HttpResponse:
    shop = get_object_or_404(Shop, pk=pk)

    if request.method == "POST":
        form = ShopForm(request.POST, request.FILES, instance=shop)
        if form.is_valid():
            form.save()
            messages.success(request, "수정되었습니다!!")
            return redirect("shop/shop_list")
    else:
        form = ShopForm(instance=shop)

    return render(request, "shop/shop_form.html", {
        "form": form
    })

# /shop/100/reviews/new
def review_new(request:HttpRequest, shop_pk:int) -> HttpResponse:
    shop = get_object_or_404(Shop, pk=shop_pk)

    if request.method == "POST":
        form = ReviewForm(request.POST, request.FILES)
        if form.is_valid():
            review = form.save(commit=False)
            review.shop = shop
            review.save()
            return redirect("shop:shop_detail", shop_pk)
    else:
        form = ReviewForm()

    return render(request, "shop/review_form.html", {
        "form": form,
    })

# /shop/100/reviews/100
def reviews_edit(request:HttpRequest, shop_pk: int, pk:int) -> HttpResponse:
    review = get_object_or_404(Review, pk=pk)

    if request.method == "POST":
        form = ReviewForm(request.POST, request.FILES, instance=review)
        if form.is_valid():
            form.save()
            return redirect("shop:shop_detail", shop_pk)
    else:
        form = ReviewForm(instance=review)

    return render(request, "shop/review_form.html", {
        "form": form,
    })