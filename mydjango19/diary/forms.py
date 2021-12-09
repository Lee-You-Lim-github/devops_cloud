from django import forms
from django.core.validators import RegexValidator


# class PostForm(forms.Form):
#     title = forms.CharField()
#     content = forms.CharField()
#     phone = forms.CharField(
#         validators=[
#             RegexValidator(r"^\d{3}-?\d{4}-?\d{4}$", message="휴대폰 번호를 입력해주세요."),
#         ]
#     )

# 모델 따로 폼 따로 만드는 것이 아니라 모델과 폼을 함께 만듦.
# 모델을 수정해도 폼이 알아서 수정 됨.

from diary.models import Post

class PostForm(forms.ModelForm):
    class Meta:
        model = Post
        # fields = "__all__"

        # 유저로부터 입력받을 필드 이름을 나열
        fields = [
            "author_name",
            "title",
            "content",
            "photo",
            "tag_set",
        ]

# 이 필드에 대해서만 -> html를 보여줌, 유효성 검사, db로의 저장을 시도!!(ip 필드가 빠져 있음. -> db에 저장 시 null이 들어감.