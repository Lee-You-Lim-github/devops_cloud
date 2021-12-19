from django.contrib.auth.mixins import LoginRequiredMixin
from django.http import HttpResponse
from django.shortcuts import render, get_object_or_404, redirect
from django.urls import reverse
from django.views.generic import ListView, DetailView, CreateView, UpdateView, DeleteView

from shop.forms import PostForm
from shop.models import Post, Category, Review, Tag

# post/ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
post_list = ListView.as_view(
    model=Post,
)

# post/<int:pk>/ ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
post_detail = DetailView.as_view(
    model=Post
)

# post/new/ ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
class PostCreateView(CreateView):
    model = Post
    form_class = PostForm

    def get_success_url(self):
        post_pk = self.object.pk
        return reverse("blog:post_detail", args=[post_pk])

post_new = PostCreateView.as_view()


# # post/<int:pk>/edit
class PostUpdateView(UpdateView):
    model=Post
    form_class=PostForm

    def get_success_url(self):
        post_pk = self.object.pk
        return reverse("blog:post_detail", args=[post_pk])

post_edit = PostUpdateView.as_view()

class ReviewCreateView(LoginRequiredMixin, CreateView):
    model = Review   
    form_class = ReviewForm



    def form_valid(self, form) -> HttpResponse:    
        shop_pk=self.kwargs["shop_pk"]
        shop = get_object_or_404(Post, pk=post_pk)


        review = form.save(commit=False)
        review.shop = shop
        review.user = self.request.user   
        review.save()

        return redirect(shop)  

review_new = ReviewCreateView.as_view()

# ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

class ReviewUserCheckMixin:
    pass


class ReviewUpdateView(LoginRequiredMixin, ReviewUserCheckMixin, UpdateView):
    model = Review
    form_class = ReviewForm

    def get_success_url(self) -> str:
        review = self.object
        return resolve_url(review.shop)


review_edit = ReviewUpdateView.as_view()




