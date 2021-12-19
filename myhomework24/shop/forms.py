from django import forms
from shop.models import Post


class PostForm(forms.ModelForm):  # 모델폼을 상속 받음.
    class Meta:
        model = Post
        fields = "__all__"