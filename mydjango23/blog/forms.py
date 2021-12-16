import re

from django import forms
from blog.models import Post, Tag, Subscriber


class PostForm(forms.ModelForm):
    tags = forms.CharField()

# 초기값 지정
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

# 초기값 기억하기  -> 수정 시
        if self.instance.pk:
            tag_qs = self.instance.tag_set.all()
            initial = ", ".join([tag.name for tag in tag_qs])
            self.fields["tags"].initial = initial

# 폼내부에서 태그입력가능
    def _save_m2m(self):
                # 부모의 save 호출 -> # 부모의 save를 호출해 주어야 함.
        super()._save_m2m()

        # 부가적인 연산을 수행할 수 있음.
        tag_list = []
        tags = self.cleaned_data.get("tags", "")
        for word in tags.split(","):
            tag_name = word.strip()
            tag, __ = Tag.objects.get_or_create(name=tag_name)
            tag_list.append(tag)

            self.instance.tag_set.clear()  # 간단 구현을 위해 clear 호출
            self.instance.tag_set.add(*tag_list)


    class Meta:
        model = Post
        fields = [
            "category",
            "title",
            "content",
            "phote",
            "status",
        ]

    def clean_content(self):
        content = self.cleaned_data.get("content")
        if content:
            # script 태그를 제거
            content = re.sub(
                r'<script.*?>.*?</script>',
                '',
                content,
                flags=re.I | re.S)
        return content

class SubscriberForm(forms.ModelForm):
    class Meta:
        model = Subscriber    # 모델에서 validators로 이미 유효성 검사함.
        fields = "__all__"

    # 2. Form만의 유효성 검사 방법  +  데이터 변환 기능 제공
    def clean_phone(self):   # clean_필드명
        phone = self.cleaned_data.get("phone")
        if phone:
            if not phone.startswith("010"):
                raise forms.ValidationError("010으로 시작토록 입력해주세요.")
            return phone.replace("-", "")

        return phone