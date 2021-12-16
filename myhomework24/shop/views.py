from django.shortcuts import render
from django.views.generic import ListView, DetailView, CreateView, UpdateView, DeleteView

from shop.forms import PostForm
from shop.models import Post, Category, Review, Tag

# post/
post_list = ListView.as_view(
    model=Post,
)

# post/<int:pk>
post_detail = DetailView.as_view(
    model=Post,
)

# post/new
post_new = CreateView.as_view(
    model=Post,
    form_class=PostForm,
)

# post/<int:pk>/edit
post_edit = UpdateView.as_view(
    model=Post,
    form_class=PostForm,
)

# post/<int:pk>/delete
post_delete = DeleteView.as_view(
    model=Post,
)




