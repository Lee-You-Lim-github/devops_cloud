# 사전
age = "..."

tom = {"name": "Tom", "age": 10, "ag" + "e": 10, age: 10}

## f-string => string Interpolation ㅡㅡㅡㅡㅡㅡㅡㅡㅡ
name = "Tom"
age = 10

tom1 = {
    "name": name,
    "age": age,
}

# f-string => string Interpolation
print(f"안녕 나는 {name}이야. {age}살이지.")

print(
    f"""안녕. 
나는 {name}이야. 
{age}살이지."""
)
