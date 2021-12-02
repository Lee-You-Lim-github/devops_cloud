numbers = [1, 2, 3, 4, 5]
numbers[0]  # 1


def fn(number):
    print(number)

fn(numbers[0]) # 1
fn(numbers) # [1, 2, 3, 4, 5]
# ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

students = [
    {"name": "철수", "height": 150},
    {"name": "영희", "height": 160},
]

def fn(x):
    print(x["name"])  # = students[0]["name"] = "철수"

fn(students[0])