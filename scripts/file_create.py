import os
import json

with open("filenames.json", "r") as read_file:
    bookList = json.load(read_file)

def create():
    for book in bookList:
        open("../test/" + book +".epub", "w")

def delete():
    for book in bookList:
        os.remove("../test/" + book +".epub")

def rename():
    for count, filename in enumerate(os.listdir("../test")):
        src = "C:/Users/fritz/Dev/goodreads/test2/test/" + filename
        new = "C:/Users/fritz/Dev/goodreads/test2/test/" + filename + ".lol"
        os.rename(src, new)

delete()