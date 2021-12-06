from django.http import HttpRequest, HttpResponse
from django.shortcuts import render
from django.views.generic import CreateView
from jeju.forms import TourForm
from jeju.models import Tour


def tour_list(request: HttpRequest) -> HttpResponse:
    qs = Tour.objects.all()
    query = request.GET.get("query", "")
    if query:
        qs = qs.filter(name__icontains=query)
    context_data = {
        "tour_list": qs,
    }
    return render(request, "jeju/tour_list.html", context_data)

def tour_detail(request: HttpRequest, pk:int) -> HttpResponse:
    tour = Tour.objects.get(pk=pk)
    context_date = {
        "tour":tour,
    }
    return render(request, "jeju/tour_detail.html", context_date)

tour_new = CreateView.as_view(
    model=Tour,
    form_class=TourForm,
    success_url="/jeju/",
)