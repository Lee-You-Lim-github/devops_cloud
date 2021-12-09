from django.shortcuts import render
from django.http import HttpRequest, HttpResponse
from diary.models import Post


def post_list(request: HttpRequest) -> HttpResponse:
    qs = Post.objects.all()    # 전체 포스팅 목록을 얻어올 준비, 요청이 들어오기 전까지 DB에 접속 X
    return render(request, "diary/post_list.html", {
        "post_list": qs,
    })

