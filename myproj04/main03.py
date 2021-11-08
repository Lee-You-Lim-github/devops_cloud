# 자연수를 인자로 받아, 천단위 절사한 값을 리턴하는 함수를 작성하세요.
# 예) 정수 1234567을 인자로 받아, 1234000을 반환


def get_rounded_number(number):
    return (number // 1000) * 1000


print(get_rounded_number(1234567))
