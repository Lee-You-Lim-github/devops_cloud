from django.contrib import messages
from django.shortcuts import render, get_object_or_404, redirect
from django.http import HttpRequest, HttpResponse


# shop/
from shop.form import ShopForm, ReviewForm
from shop.models import Category, Shop, Review


def shop_list(request:HttpRequest) -> HttpResponse:
    category_qs = Category.objects.all()
    qs = Shop.objects.all()

    category_id = request.GET.get("category_id", "")
    if category_id:
        qs = qs.filter(category__pk=category_id)

    query = request.GET.get("query", "")
    if query:
        qs = qs.filter(name__icontains=query)

    return render(request, "shop/shop_list.html", {
        "shop_list": qs,
        "category_list": category_qs,
    })

# shop/100
def shop_detail(request:HttpRequest, pk:int) -> HttpResponse:
    shop = get_object_or_404(Shop, pk=pk)

    review = shop.review_set.all()
    tag_list = shop.tag_set.all()
    return render(request, "shop/shop_detail.html", {
        "shop": shop,
        "tag_list": tag_list,
        "review_list": review,
    })

# shop/new
def shop_new(request:HttpRequest) -> HttpResponse:
    if request.method == "POST":
        form = ShopForm(request.POST, request.FILES)
        if form.is_valid():
            saved_shop = form.save()
            return redirect("shop:shop_detail", saved_shop.pk)

    else:
        form = ShopForm()

    return render(request, "shop/shop_form.html", {
        "form": form,
    })

# shop/<int:pk>/edit
def shop_edit(request:HttpRequest, pk:int) -> HttpResponse:
    shop = get_object_or_404(Shop, pk=pk)

    if request.method == "POST":
        form = ShopForm(request.POST, request.FILES, instance=shop)
        if form.is_valid():
            saved_shop = form.save()
            messages.success(request, "수정 완료!!")
            return redirect("shop:shop_detail", saved_shop.pk)
    else:
        form = ShopForm(instance=shop)

    return render(request, "shop/shop_form.html", {
        "form": form,
    })

# shop/100/review/new
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

# shop/100/review/100/edit
def review_edit(request:HttpRequest, shop_pk:int, review_pk:int) -> HttpResponse:
    review = get_object_or_404(Review, pk=review_pk)

    if request.method == "POST":
        form = ReviewForm(request.POST, request.FILES, instance=review)
        if form.is_valid():
            form.save()
            messages.success(request, "성공적으로 수정했습니다.")
        return redirect("shop:shop_detail", shop_pk)

    else:
        form = ReviewForm(instance=review)

    return render(request, "shop/review_form.html", {
        "form": form,
    })
