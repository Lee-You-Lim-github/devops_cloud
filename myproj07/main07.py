# def base(base_number):
#     # number = 10
#     # fn = lambda x, y: x + y + 10     # 아래 주석과 같음.
#     def fn(x, y):  # 새로운 fn이 생기는 것과 같음
#         return x + y + base_number

#     return fn


# base_10 = base(10)
# base_20 = base(20)
# print(base_10(1, 2))
# print(base_20(1, 2))

# ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
# name = "Tom"
# mysum = lambda x, y: x + y

# other_name = name
# other_fn = mysum


# def fn(x):
#     y = "hello"
#     return y


# fn(name)

import time

# 인자에 대한 리턴값을 저장
#   - key: 인자 값에 대한 튜플
#   - value: 그 인자로 함수를 수행했을 때의 리턴값
cached = {}  # 전연변수 (가급적 지양해야 함(튜플))

# def mysum2(x, y):
#         time.sleep(1)  # 1초간 대기
#         return x + y + 10


def mysum2(x, y):
    key = (x, y)
    if key not in cached:  # key 인자로서 수행된 적이 없다면
        time.sleep(1)  # 1초간 대기
        cached[key] = x + y + 10
    return cached[key]


# def mymultiply2(x, y):
#     time.sleep(1)
#     return x * y + 10

cached2 = {}


def mymultiply2(x, y):
    key = (x, y)
    if key not in cached2:
        time.sleep(1)
        cached2[key] = x * y + 10
    return cached2[key]


print(mysum2(1, 2))
print(mysum2(1, 3))
print(mysum2(1, 3))
print(mysum2(1, 2))
print(mysum2(1, 2))


print(mymultiply2(1, 2))
print(mymultiply2(1, 2))
print(mymultiply2(1, 3))
print(mymultiply2(1, 3))
