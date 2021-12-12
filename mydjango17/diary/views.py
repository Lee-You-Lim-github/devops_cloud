from django.shortcuts import render
from django.http import HttpRequest, HttpResponse
from diary.models import Post


def post_list(request: HttpRequest) -> HttpResponse:
    qs = Post.objects.all()    # 전체 포스팅 목록을 얻어올 준비, 요청이 들어오기 전까지 DB에 접속 X
    return render(request, "diary/post_list.html", {
        "post_list": qs,
    })

def post_detail(request: HttpRequest, pk: int) -> HttpResponse:
    post = Post.objects.get(pk=pk)  # 지정한 조건에 매칭되는 Post가 1개이길 기대함.  / 1개가 아니면 에러가 발생.
                        # 필드명 = 변수 값
    return render(request, "diary/post_detail.html", {
        "post": post,
    })


