from django.shortcuts import render
from django.http import HttpRequest, HttpResponse
from jeju.models import Tour


def tour_list(request: HttpRequest) -> HttpResponse:
    qs = Tour.objects.all()
    query = request.GET.get("query", "")
    if query:
        qs = qs.filter(name__icontains=query)
    context_data = {
        "tour_list": qs
    }
    return render(request, "jeju/tour_list.html", context_data)
