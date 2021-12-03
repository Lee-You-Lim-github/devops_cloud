from django.http import HttpRequest,HttpResponse
from django.shortcuts import render, redirect
from delicious.models import Shop

def shop_list(request: HttpRequest) -> HttpResponse:
    qs = Shop.objects.all()

    # QueryString에 query 이름의 인자를 확인
    query = request.GET.get("query", "")   # 사전과 같음.
    if query:
        qs = qs.filter(name__icontains=query)


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

# 값을 입력 받아서 db에 넣을거임.
def shop_new_1(request:HttpRequest) -> HttpResponse:
    if request.method == "GET":    # "GET", "POST" 무조건 대문자
        return render(request, "delicious/shop_form_1.html", {})
    else: # "POST"
        name = request.POST["name"]
        description = request.POST["description"]
        address = request.POST["address"]
        latitude = request.POST["latitude"]
        longitude = request.POST["longitude"]
        telephone = request.POST["telephone"]
        # TODO: 유효성 검사.....
        Shop.objects.create(
            name = name,
            description = description,
            address = address,
            latitude = latitude,
            longitude = longitude,
            telephone = telephone
        )
        return redirect("/delicious/")