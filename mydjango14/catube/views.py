from django.http import HttpRequest, HttpResponse
from django.shortcuts import render
from django.views.generic import ListView

from catube.models import Video

# Class Based View (CBV)
# index = ListView.as_view(model=Video, template_name="catube/index.html")

# Function Based View (FBV)  -- 기본 능력
def index(request: HttpRequest) -> HttpResponse:
    qs = Video.objects.all()
    return render(
        request,
        "catube/index.html",
        {"video_list": qs},
    )  # 앱 이름을 써 줌. -> 어떤 뷰에서 사용하는 구나.


def video_detail(request: HttpRequest, pk: int) -> HttpResponse:
    video = Video.objects.get(pk=pk)
    return render(request, "catube/vedeo_detail.html", {"video": video})
