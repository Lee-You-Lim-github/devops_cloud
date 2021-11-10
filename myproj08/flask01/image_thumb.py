# pip install pillow

from PIL import Image

im = Image.open("static/flower.jpg")
im.thumbnail((800, 600))
im.save("static/flower.jpg")
