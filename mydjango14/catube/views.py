from django.http import HttpRequest, HttpResponse
from django.shortcuts import render

def index(request: HttpRequest) -> HttpResponse:
    return render(request, "catube/index.html")  #앱 이름을 써 줌. -> 어떤 뷰에서 사용하는 구나.