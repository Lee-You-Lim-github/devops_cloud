# 4 구구단 퀴즈 break 안 쓴 버전

for number in range(2, 10):
    print(f"### {number}단 ###")
    for i in range(1, 10):
        if number >= i:
            total = number * i
            print(f"{number} * {i} = {total}")
