from django.shortcuts import render, get_object_or_404, redirect
from django.http import HttpRequest, HttpResponse

from shop.forms import PostForm
from shop.models import Post

# shop/
def shop_list(request:HttpRequest) -> HttpResponse:
    shop_qs = Post.objects.all()
    query = request.GET.get("query", "")
    if query:
        shop_qs = shop_qs.filter(name__icontains=query)
        return render(request, "shop/post_list.html", {
            "post_list": shop_qs,
        })

# shop/<int:pk>/
def shop_detail(request:HttpRequest, post_pk:int) -> HttpResponse:
    post = get_object_or_404(Post, pk=post_pk)

    return render(request, "shop/post_detail.html", {
        "post": post,
    })

# shop/new
def shop_new(request:HttpRequest) -> HttpResponse:
    if request.method == "POST":
        form = PostFrom(request.POST, request.FILES)
        if form.is_valid():
            saved_post = form.save()
            return redirect("shop:post_detail", saved_post.pk)
    else:
        form = PostForm()
    return render(request, "shop/post_form.html", {
        "form":form,
    })

# shop/<int:pk>/edit
def shop_edit(request:HttpRequest, post_pk:int) -> HttpResponse:
    post = get_object_or_404(Post, pk=post_pk)

    if request.method == 'POST':
        form = PostForm(request.POST, request.FILES, instance=post)
        if form.is_valid():
            saved_post = form.save()
            return redirect("shop:post_detail", saved_post.pk)
    else:
        form = PostForm(instance=post)
    return render(request, "shop/post_form.html", {
        "form" : form,
        "post" : post,
    })

# shop/<int:pk>/delete
def shop_delete(request:HttpRequest, shop_pk:int) -> HttpResponse:
    pass