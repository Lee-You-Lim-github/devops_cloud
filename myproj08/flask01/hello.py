# pip install flask

from flask import Flask, render_template  # 어떤 경로에 post~가 있을거고 찾음.

app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/profile")
def profile():
    # DB Access
    like_foods = ["제육볶음", "참치찌개", "해물 파전", "치킨", "탕수육"]

    return render_template("profile.html", like_foods=like_foods)


@app.route("/posts")  # /posts 로 처리하겠다. 함수명이 아니라 /posts로 들어감
def post_list():
    return render_template("post_list.html")  # post_list.html 파일을 리턴해줌.
