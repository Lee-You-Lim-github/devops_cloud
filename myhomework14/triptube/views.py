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

def video_detail(request: HttpRequest, pk:int) -> HttpResponse:
    video = Video.objects.get(pk=pk)
    return render(
        request,
        "triptube/video_detail.html",
        {
            "video": video,
        },
    )
