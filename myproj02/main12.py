import random

numbers = random.randint(1, 100)

count = 1


for random_number in range(1, 11):
    print(random_number)
    answer = int(input(">>>"))

    if random_number == answer:
        print("정확합니다.")
        print(f"{count}회 만에 성공했습니다.")

        break

    elif random_number > answer:
        print("더 큰 수를 입력해주세요.")

    elif random_number < answer:
        print("더 작은 수를 입력해주세요.")
    count += 1


if count == 11:
    print("다음 기회에...")
