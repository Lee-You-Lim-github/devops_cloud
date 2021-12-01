from django.http import HttpRequest, HttpResponse
from django.shortcuts import render
from blog.models import Post

def index(request):
    return render(request, "blog/index.html")

               # request의 타입을 명시
def post_list(request: HttpRequest) -> HttpResponse:
    request.GET     # QueryString Values
    request.POST    # Post 요청 Values
    request.FILES   # Post 요청에서 파일 Values

    qs = Post.objects.all()  #QuerySet Type
    qs = qs.order_by("-pk")   # -pk: 내림차순

    # request.GET   # 하나의 사전   ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ 원하는 단어로 검색 시, 그 단어가 들어간 값이 나옴.
    q = request.GET.get("q", "") # q에 할당된 값이 없으면 빈 문자열을 반환하라.
    if q:
        qs = qs.filter(title__icontains=q) # q라는 문자열이 호환이 된다면. 'i'를 넣으면 대소문자 구분X

    # blog/tmeplates/blog/post_list.html
    return render(request, "blog/post_list.html", {
        "post_list": qs,
    })
# 사전을 넣을 때 괄호 안에 넣어야 함.

def post_detail(request: HttpRequest, pk: int) -> HttpResponse:
    # pk = 1
    post = Post.objects.get(pk=pk)
    return render(request, "blog/post_detail.html", {"post": post,})
