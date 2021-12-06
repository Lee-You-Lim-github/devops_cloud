from django import forms
from jeju.models import Tour

class TourForm(forms.ModelForm):
    class Meta:
        model = Tour
        fields = "__all__"

