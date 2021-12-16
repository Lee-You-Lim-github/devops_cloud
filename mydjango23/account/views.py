from django.contrib.auth.decorators import login_required
from django.contrib.auth.views import LoginView, LogoutView
from django.http import HttpRequest, HttpResponse
from django.shortcuts import render, redirect
from django.urls import reverse_lazy
from PIL import Image

from account.forms import LoginForm, Signupform


def profile_image(request:HttpRequest) -> HttpResponse:
    canvas = Image.new("RGBA", (256,256), (255,0,0,255))
     # text/image               # 가로, 세로
    response = HttpResponse(content_type="image/png")
    canvas.save(response, "PNG")

    return response

login = LoginView.as_view(
    form_class = LoginForm,
    template_name="account/login_form.html",
)


# 새로운 User  인스턴스를 만드는 것.
def signup(request):
    if request.method == "POST":
        form = Signupform(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            return redirect("account:login")
    else:
        form = Signupform()
    return render(
        request,
        "account/signup_form.html",
        {
        "form": form,
        })

# signup = CreateView.as_view(
#     form_class=UserCreationForm,
#     success_url=reverse_lazy("account:login"),
#     template_name= "account/signup_form.html",
# )

@login_required  # 로그인이 필요하다.
def profile(request):
    return render(request, "account/profile.html")

logout = LogoutView.as_view(
    next_page="account:login",
)


