# # 포스팅 : 제목, 내용, 글쓴이
#
# post = ("제목", "내용", "글쓴이", "작성일자")
# post[0]
# post[1]
# post[2]    # 글쓴이
#
# # namedtuple
#
# from collections import namedtuple
#
# Post = namedtuple('Post', 'title content author_name')
# post = Post("제목", "내용", "글쓴이")
# post[0], post[1], post[2]
# post.title, post.content, post.author_name
#
# def check_content(content: str) -> bool:
#     if len(content) == 0:
#         # error ...
#
# # CapitalCase
#         # 생성자(Contructor)
# class Post:     # 속성을 묶어주기 위해 함수 생성
#             # __()__: 역할을 따를 때에만 __사용 가능.
#     def __init__(self, ttt, content, author_name):  # self는 정의되어 있지만 없다고 생각해도 됨. / 호출한 class의 인자를 함수가 받음.
#         # title = ""         # 지역변수, 함수 안에서 생성된 후 함수가 끝나면 사라짐   -> self.title로 변경
#         self.title = ttt     # self.title에 인자(ttt)를 붙잡아 둠.
#         self.content = content
#         self.author_name = author_name
#
#     def check_content(self):
#         if len(self.content) == 0:
#             # error ...
#             pass
#
# post = Post("제목", "내용", "글쓴이")   # 호출한 class의 인자를 함수가 받음.
# post.title           # self.title의 title임.
# post.content
# post.author_name
#
# post.check_content()   # 두 번째 함수 호출출
