def mysum2(x, y):
    return x + y + 10


def mysum3(x, y, z):
    return x + y + z + 10


# 가변인자 문법


# def mysum(*args):  # 함수의 인자를 무제한으로 받겠다 *인자 / 최소 2개 이상 받고 싶다(x, y *인자)
#     # args is tuple
#     print("args :", args)
#     return sum(args) + 10

# print(mysum()) ㅡㅡㅡ 0개도

# 최소 2개 이상 받고 싶다(x, y *인자)
def mysum(x, y, *args):
    # args is tuple
    print("args :", args)
    return x + y + sum(args) + 10


print(mysum(1, 2))
print(mysum(1, 2, 3))
print(mysum(1, 2))
print(mysum(1, 2, 3))
