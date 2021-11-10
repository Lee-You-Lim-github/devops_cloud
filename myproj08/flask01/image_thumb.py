# pip install pillow

from PIL import Image  # 파이썬 이미지 라이브러리

im = Image.open("static/flower.jpg")
im.thumbnail((800, 600))
im.save("static/flower.jpg")
