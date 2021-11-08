# 문자열을 인자로 받아, 공백을 제외한 글자수를 반환하는 함수를 작성하세요.
# 예) "우리는 파이썬을 즐겨요."를 인자를 받아, 10을 반환
# 힌트) 문자열을 순회가능한 객체


def get_ch_count_except_space(s):
    count = 0
    for ch in s:
        if ch != "":
            count += 1
    return count


print(get_ch_count_except_space("우리는 파이썬을 즐겨요"))
