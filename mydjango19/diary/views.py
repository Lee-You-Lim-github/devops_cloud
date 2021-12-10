from django.contrib import messages
from django.http import HttpRequest, HttpResponse
from django.shortcuts import render, redirect
from diary.forms import PostForm, CommentForm
from diary.models import Post


def tag_detail(request: HttpRequest, tag_name:str) -> HttpResponse:
    qs = Post.objects.all()
    qs = qs.filter(tag_set__name=tag_name)
    return render(request, "diary/tag_detail.html", {"tag_name":tag_name,"post_list":qs},)


def post_list(request: HttpRequest) -> HttpResponse:
    qs = Post.objects.all()
    query = request.GET.get("query","")   # 검색기능 - get
    if query:
        qs = qs.filter(title__icontains=query)
    return render(request, "diary/post_list.html", {"post_list": qs})


def post_detail(request: HttpRequest, pk: int) -> HttpResponse:
    post = Post.objects.get(pk=pk)
    comment_list = post.comment_set.all()
    tag_list = post.tag_set.all()
    return render(request,"diary/post_detail.html",{
        "post": post, "comment_list": comment_list, "tag_list" : tag_list,
    })


def post_new(request: HttpRequest) -> HttpResponse:
    if request.method == "POST":
        form = PostForm(request.POST, request.FILES)   # FILES를 지정 해야 파일을 받을 수 있음. / post_form.html에도 enctype="multipart/form-data"를 넣어줘야 함.
        if form.is_valid():
            post = form.save(commit=False)
            post.ip = request.META["REMOTE_ADDR"]
            form.save()
            messages.success(request, "성공적")
            return redirect("diary:post_list")

    else:  # GET이라면
        form = PostForm()

    return render(request, "diary/post_form.html", {
        "form": form,
    })

def post_edit(request: HttpRequest, pk: int) -> HttpResponse:

    # 아래 코드는 ModelForm에 한해서 동작하는 코드
    post = Post.objects.get(pk=pk)

    if request.method == "POST":
        form = PostForm(request.POST, request.FILES, instance=post)
        if form.is_valid():   # 유효성 검사
            form.save()
            messages.success(request, "성공적으로 수정했습니다.")
            return redirect("diary:post_list")

    # POST와 같은 line: POST가 아닐 때 수행되는 else
    else:
        form = PostForm(instance=post)

    return render(request, "diary/post_form.html", {
        "form": form,
    })

#/diary/100/comments/new/
def comment_new(request: HttpRequest, post_pk:int) -> HttpResponse:
    if request.method == "POST":  # 항상 대문자
        form = CommentForm(request.POST, request.FILES)
        if form.is_valid():
            # form.cleaned_data   # 유효성 검사에 통과한 값들 (dict)
            save_comment = form.save()   # db 알아서 넣어 줌.
            return redirect("diary:post_detail", post_pk)
    else:
        form = CommentForm()   # GET
    return render(request, "diary/comment_form.html", {
        "form": form,
    })


# /diary/100/comments/20/edit/
def comment_edit(request:HttpRequest, post_pk:int, pk:int) -> HttpResponse:
    pass


