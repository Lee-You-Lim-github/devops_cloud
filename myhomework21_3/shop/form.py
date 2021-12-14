from django import forms
from shop.models import Shop, Tag, Review


class ShopForm(forms.ModelForm):
    tags = forms.CharField()

    def __int__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        if self.instance.pk:
            tag_qs = self.instance.tag_set.all()
            tags = ",".join([tag.name for tag in tag_qs])
            self.fields["tags"].initial = tags

    def save(self, commit=True):
        saved_shop = super().save()

        tag_list = []
        tags = self.cleaned_data.get("tags", "")
        for word in tags.split(","):
            tag_name = word.strip()
            tag, __ = Tag.objects.get_or_create(name = tag_name)
            tag_list.append(tag)

        saved_shop.tag_set.clear()
        saved_shop.tag_set.add(*tag_list)

        return saved_shop

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
        fields = [
            "author_name",
            "message",
        ]