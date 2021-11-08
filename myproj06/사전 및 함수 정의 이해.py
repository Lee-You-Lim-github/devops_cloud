from _typeshed import SupportsTrunc


numbers = [1, 2, 3, 4, 5]
numbers[0]  # 1


def fn(number):
    print(number)

fn(numbers[0])  # 1
fn(numbers)     # [1, 2, 3, 4, 5]

students = [
    {"name": "철수", "height": 150},
    {"name": "영희", "height": 160},
]

for student in students # 리스트     # students[0](사전), students[1](사전) - 총 2번 실행해야 됨.


def fn(x):
    print(x["name"])   

fn(students[0])      # "철수"