from django import forms
from django.contrib.auth.forms import AuthenticationForm, UserCreationForm

# TODO: email을 추가로 입력 받으려 함.
# User 모델에 대한 ModelForm
#    - Meta.fields => ["username"]
#    - cnrk form fields => password1, password2
class Signupform(UserCreationForm):
    class Meta(UserCreationForm.Meta):
        fields = ["username", "email"]


class LoginForm(AuthenticationForm):  # 부모
    answer = forms.CharField(
        label="퀴즈답",
        help_text="3 + 3 = ?",
    )

    def clean_answer(self):
        answer = self.cleaned_data.get("answer")
        if answer != '6':
            raise forms.ValidationError("땡~!!!!!")
        return answer
