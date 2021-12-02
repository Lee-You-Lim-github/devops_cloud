from django.http import HttpRequest, HttpResponse
from django.shortcuts import render
from triptube.models import Video


def index(request: HttpRequest) -> HttpResponse:
    qs = Video.objects.all()
    return render(
        request,
        "triptube/index.html",
        {
            "video_list": qs,
        },
    )

