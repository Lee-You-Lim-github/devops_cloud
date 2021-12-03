from django.http import HttpRequest,HttpResponse
from django.shortcuts import render
from delicious.models import Shop

def shop_list(request: HttpRequest) -> HttpResponse:
    qs = Shop.objects.all()
    # template_name = "delicious/shop_list.html"    # 장고에서 사용하고 있는 정식 명칭
    context_data = {
        "shop_list": qs,
    }                             # 장고에서 사용하고 있는 정식 명칭
    return render(request, "delicious/shop_list.html", context_data)


def shop_detail(request: HttpRequest, pk:int) -> HttpResponse:
    shop = Shop.objects.get(pk=pk)    # pk=pk(변수명=필드값)
    # template_name = "delicious/shop_detail.html"
    context_date = {
        "shop":shop,
    }
    return render(request, "delicious/shop_detail.html", context_date)