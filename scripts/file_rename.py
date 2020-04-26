import os

#num = "../test"
dstRsc = "C:/Users/fritz/Documents/Books"

def format_author(author):
    newAuthor = ""
    author = author.split(" ")
    for chars in author:
        if len(chars) == 1 and newAuthor == "":
            newAuthor = chars + "."
        if len(chars) == 2 and newAuthor == "":
            newAuthor = ".".join(chars) + "." if chars.find(".") == -1 else chars
        elif len(chars) != 0:
            #if len(chars) >= 3:
            #    newAuthor = newAuthor + " " + chars
            #else:
            #    newAuthor = newAuthor + chars
            newAuthor = newAuthor + " " + chars
    return newAuthor.strip()

def format_title(title):
    seperators = ["~","-"]
    for sep in seperators:
        count = title.count(sep)
        if count != 1 and title.find(sep) != -1:
            print("count : ", count, " | title.find(sep) : ", title.find(sep))
            title = title.split(sep)
            if title[0].find("[") != -1:
                title[0] = title[0].split("]")
                title = title[0][0].strip() + "] [" + title[0][1].strip() + "] " + title[1].strip()
            else:
                title = "[" + title[0].strip() + "] " + title[1].strip()
    return title.strip()

for count, filename in enumerate(os.listdir("../../../../Documents/Books/Src/lesfics")):
    if len(filename) >= 1 and filename[0] != ".":
        print("original: ", filename)
        author = filename.split("-", 1)[0]
        title = filename.split("-", 1)[1]
        newTitle = format_author(author) + " - " + format_title(title)
        #os.rename(dstRsc + "/Src/lesfics/" + newTitle, dstRsc + "/Src/lesfics/" + newTitle)
        print("==== Old : " + dstRsc + "/Src/lesfics/" + filename + " ====")
        print("==== New : " + dstRsc + "/Src/lesfics/" + newTitle + " ====")
        os.rename(dstRsc + "/Src/lesfics/" + filename, dstRsc + "/Src/lesfics/" + newTitle)
        print("-----------------------------------------------------------------------------------")