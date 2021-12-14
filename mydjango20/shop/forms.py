from django import forms
from shop.models import Shop, Review, Tag


class ShopForm(forms.ModelForm):
    tags = forms.CharField()

    # 부모 클래스의 생성자에서 어떤 인자를 지원하는 지는 잘 모르겠지만,
    # 생성자 호출 시에 받을 인자 그대로
    # 부모에게 전달하겠다.

# 가지고 있던 태그값 호출
    def __init__(self, *args, **kwargs):  # 받을 시: pack
        super().__init__(*args, **kwargs) # 호출 시: unpack
        # tags는 우리가 Form 클래스에 직접 추가한 필드니깐
        # 초기값도 우리가 직접 지정해주어야 합니다.

# 초기값 기억하기
        if self.instance.pk: # 수정 시
            tag_qs = self.instance.tag_set.all()
            tags = ", ".join([tag.name for tag in tag_qs])
            self.fields["tags"].initial = tags
        # else:   # 새롭게 생성 시
        #     pass

# 폼내부에서 태그입력가능
    def _save_m2m(self):
        # 부모의 save를 호출해 주어야 함.         # 부모의 save 호출 X
        super()._save_m2m()

        # 부가적인 연산을 수행할 수 있음.
        tag_list = []
        tags = self.cleaned_data.get("tags", "")
        for word in tags.split(","):
            tag_name = word.strip()
            tag, __ = Tag.objects.get_or_create(name=tag_name)
            tag_list.append(tag)

        self.instance.tag_set.clear()  # 간단구현을 위해 clear 호출
        self.instance.tag_set.add(*tag_list)



    class Meta:
        model = Shop
        fields = [
            "category",
            "name",
            "telephone",
            "description",

        ]

class ReviewForm(forms.ModelForm):
    class Meta:
        model = Review
        fields = ["author_name", "message"]