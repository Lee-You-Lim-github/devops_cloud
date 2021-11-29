import pymysql
from tkinter import *
from tkinter import messagebox


# ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

def click_TVpro_btn_select():
    conn = None
    cur = None

    lTitle, lEpisodes, lCountry, lGenre, lEnglish, lHour_viewed = [], [], [], [], [], []

    # 데이터베이스 접속
    conn = pymysql.connect(host="127.0.0.1", user="root", password="1234", db="sqlDB", charset="utf8")
    # 커서
    cur = conn.cursor()

    # 데이터 초기화
    lTitle.append("제목")
    lTitle.append("-----------")

    lEpisodes.append("회차")
    lEpisodes.append("-----------")

    lCountry.append("국가")
    lCountry.append("-----------")

    lGenre.append("장르")
    lGenre.append("-----------")

    lEnglish.append("영어를 쓰는가?")
    lEnglish.append("-----------")

    lHour_viewed.append("시청 시간")
    lHour_viewed.append("-----------")

    # select 기능 구현
    sql = "SELECT title, IFNULL(episodes, '???'), IFNULL(country, '???'), genre, english, hour_viewed " \
          "from netflixTV_nonTBL " \
          "ORDER BY hour_viewed DESC"
    cur.execute(sql)

    while (True):
        row = cur.fetchone()  # db에서 가져온 값
        if row == None:
            break

    lTitle.append(row[0])  # db에서 가져온 값
    lEpisodes.append(row[1])
    lCountry.append(row[2])
    lGenre.append(row[3])
    lEnglish.append(row[3])
    lHour_viewed.append(row[3])

    # 1) 리스트 박스 초기화(기존 데이터 삭제)
    listTitle.delete(0, listTitle.size() -1)   #listUserID는 gui
    listEpisodes.delete(0, listEpisodes.size() - 1)
    listCountry.delete(0, listCountry.size() - 1)
    listGenre.delete(0, listGenre.size() - 1)
    listEnglish.delete(0, listEnglish.size() - 1)
    listHour_viewed.delete(0, listHour_viewed.size() - 1)

    # 2) select 해온 데이터 insert
    for item1, item2, item3, item4, item5, item6 in zip(lTitle, lEpisodes, lCountry, lGenre, lEnglish, lHour_viewed):
        listTitle.insert(END, item1)
        listEpisodes.insert(END, item2)
        listCountry.insert(END, item3)
        listGenre.insert(END, item4)
        listEnglish.insert(END, item5)
        listHour_viewed.insert(END, item6)

    conn.close()

# ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

# GUI 화면 구성
window = Tk()
window.geometry("1300x1000")
window.title("NETFLIX TOP10")
window.configure(background = "black")

# 제목 라벨 선언
nexflix_first_titile = Label(window, text = "NEFLIX", bg="black", font=("System", 40), fg = "red")
nexflix_second_titile = Label(window, text="TOP10", bg="black", font=("System", 30), fg="white")
nexflix_first_titile.pack()
nexflix_second_titile.pack()

editFrame = Frame(window)
editFrame.pack()

listFrame = Frame(window)
listFrame.pack(side = BOTTOM, fill = BOTH, expand = 1)

# ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

# 라벨링
label1 = Label(editFrame, text = "제목")
label1.pack(side = LEFT, padx = 10, pady = 10)

edt1 = Entry(editFrame, width = 10)
edt1.pack(side = LEFT, padx = 10, pady = 10)

label2 = Label(editFrame, text = "회차")
label2.pack(side = LEFT, padx = 10, pady = 10)

edt2 = Entry(editFrame, width = 10)
edt2.pack(side = LEFT, padx = 10, pady = 10)

label3 = Label(editFrame, text = "국가")
label3.pack(side = LEFT, padx = 10, pady = 10)

edt3 = Entry(editFrame, width = 10)
edt3.pack(side = LEFT, padx = 10, pady = 10)

label4 = Label(editFrame, text = "장르")
label4.pack(side = LEFT, padx = 10, pady = 10)

edt4 = Entry(editFrame, width = 10)
edt4.pack(side = LEFT, padx = 10, pady = 10)

label5 = Label(editFrame, text = "영어를 쓰는가?")
label5.pack(side = LEFT, padx = 10, pady = 10)

edt5 = Entry(editFrame, width = 10)
edt5.pack(side = LEFT, padx = 10, pady = 10)

label6 = Label(editFrame, text = "시청 시간")
label6.pack(side = LEFT, padx = 10, pady = 10)

edt6 = Entry(editFrame, width = 10)
edt6.pack(side = LEFT, padx = 10, pady = 10)
# ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

# 버튼 설정
btn_TVpro = Button(window, text="요기 눌러요", fg="red", bg="yellow", command=click_TVpro_btn_select)
btn_TVpro.pack(side = LEFT, padx = 300, pady = 300)


listTitle = Listbox(listFrame)
listTitle.pack(side = LEFT, fill = BOTH, expand = 1)

listEpisodes = Listbox(listFrame)
listEpisodes.pack(side = LEFT, fill = BOTH, expand = 1)

listCountry = Listbox(listFrame)
listCountry.pack(side = LEFT, fill = BOTH, expand = 1)

listGenre = Listbox(listFrame)
listGenre.pack(side = LEFT, fill = BOTH, expand = 1)

listEnglish = Listbox(listFrame)
listEnglish.pack(side = LEFT, fill = BOTH, expand = 1)

listHour_viewed = Listbox(listFrame)
listHour_viewed.pack(side = LEFT, fill = BOTH, expand = 1)






window.mainloop()