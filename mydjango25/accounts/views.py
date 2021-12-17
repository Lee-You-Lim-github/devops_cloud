from django.contrib.auth.decorators import login_required
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.views import LoginView, LogoutView
from django.shortcuts import render
from django.urls import reverse_lazy
from django.views.generic import CreateView, TemplateView

signup = CreateView.as_view(
    form_class = UserCreationForm,
    success_url=reverse_lazy("accounts:login"),
    template_name='accounts/signup_form.html'
)

login = LoginView.as_view(
    template_name="accounts/login_form.html",
)

# TODO: 커스텀 CBV를 만든다면, LoginRequiredMixin를 상속 받도록 할 수 있습니다.
profile = login_required(TemplateView.as_view(
    template_name='accounts/profile.html'
    )
)
# login을 하면 디폴트값으로 profile로 가도록 되어 있음.
# 장식자를 쓰지 않으면 user가 로그인을 하지 않아도 /accounts/profile/로 들어갈 수 있음.
# 고로 login이 되어야 profile을 보여주는 장식자를 사용해야 함.


logout = LogoutView.as_view(
    # next_page="account:login",
    next_page="root",
)

