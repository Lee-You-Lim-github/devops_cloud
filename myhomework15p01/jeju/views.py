from django.shortcuts import render
from django.http import HttpRequest, HttpResponse
from jeju.models import Tour


def tour_list(request: HttpRequest) -> HttpResponse:
    qs = Tour.objects.all()
    query = request.GET.get("query", "")
    if query:
        qs = qs.filter(name__icontatins=query)

    context_date = {
        "tour_list": qs,
    }
    return render(request, "jeju/tour_list.html", context_date)

def tour_detail(request: HttpRequest, pk:int) -> HttpResponse:
    tour = Tour.objects.get(pk=pk)
    context_date = {
        "tour":tour,
    }
    return render(request, "jeju/tour_detail.html", context_date)