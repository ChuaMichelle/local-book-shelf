var express = require("express");
var router = express.Router();
var glob = require("glob");
const goodreadsNode = require("goodreads-api-node");
var dataTemp = require("../public/data.json");

const myCredentials = {
  key: "kd5SbVhM7EYzGXoAc62dLQ",
  secret: "75iHdl07HtutzRpBN0DSSyK3bbC3zVg4FA0IyVm8uo",
};

const goodreads = goodreadsNode(myCredentials);

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}

const data = [
  {
    id: "16103060",
    title: "I'll Cover You",
    isbn: "",
    isbn13: "9780988525009",
    asin: "",
    kindle_asin: "",
    marketplace_id: "",
    country_code: "FR",
    image_url:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1350947541l/16103060._SX98_.jpg",
    small_image_url:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1350947541l/16103060._SY75_.jpg",
    publication_year: "2012",
    publication_month: "10",
    publication_day: "18",
    publisher: "Gable Books",
    language_code: "eng",
    is_ebook: "true",
    description:
      "Kate Stewart has the weight of the world on her shoulders. As the first female President of the United States, she's got a lot on her mind. However, it's a certain Secret Service agent named Emmy Harris whom she can't get out of her head . . . or her heart. Their searing and erotic passion for one another causes quite the stir in the White House. But will their passion be enough to survive the stresses of being in the public eye? Or will they both be left burned?",
    work: {
      id: {
        _: "21914130",
        type: "integer",
      },
      books_count: {
        _: "2",
        type: "integer",
      },
      best_book_id: {
        _: "16103060",
        type: "integer",
      },
      reviews_count: {
        _: "264",
        type: "integer",
      },
      ratings_sum: {
        _: "554",
        type: "integer",
      },
      ratings_count: {
        _: "156",
        type: "integer",
      },
      text_reviews_count: {
        _: "7",
        type: "integer",
      },
      original_publication_year: {
        _: "2012",
        type: "integer",
      },
      original_publication_month: {
        _: "10",
        type: "integer",
      },
      original_publication_day: {
        _: "18",
        type: "integer",
      },
      original_title: "",
      original_language_id: {
        type: "integer",
        nil: "true",
      },
      media_type: "book",
      rating_dist: "5:46|4:35|3:47|2:15|1:13|total:156",
      desc_user_id: {
        _: "24492797",
        type: "integer",
      },
      default_chaptering_book_id: {
        type: "integer",
        nil: "true",
      },
      default_description_language_code: {
        nil: "true",
      },
      work_uri: "kca://work/amzn1.gr.work.v1.ODfsz8kI76DFjHWZz_tucA",
    },
    average_rating: "3.55",
    num_pages: "241",
    format: "ebook",
    edition_information: "",
    ratings_count: "156",
    text_reviews_count: "7",
    url: "https://www.goodreads.com/book/show/16103060-i-ll-cover-you",
    link: "https://www.goodreads.com/book/show/16103060-i-ll-cover-you",
    authors: {
      author: {
        id: "6562508",
        name: "A.C. Grey",
        role: "",
        image_url: {
          _:
            "\nhttps://s.gr-assets.com/assets/nophoto/user/f_200x266-3061b784cc8e7f021c6430c9aba94587.png\n",
          nophoto: "true",
        },
        small_image_url: {
          _:
            "\nhttps://s.gr-assets.com/assets/nophoto/user/f_50x66-6a03a5c12233c941481992b82eea8d23.png\n",
          nophoto: "true",
        },
        link: "https://www.goodreads.com/author/show/6562508.A_C_Grey",
        average_rating: "3.69",
        ratings_count: "250",
        text_reviews_count: "12",
      },
    },
    reviews_widget: "",
    popular_shelves: {
      shelf: [
        {
          name: "to-read",
          count: "66",
        },
        {
          name: "currently-reading",
          count: "9",
        },
        {
          name: "lesbian",
          count: "5",
        },
        {
          name: "romance",
          count: "5",
        },
        {
          name: "lgbt",
          count: "3",
        },
        {
          name: "ff",
          count: "3",
        },
        {
          name: "f-f",
          count: "3",
        },
        {
          name: "glbt",
          count: "3",
        },
        {
          name: "political",
          count: "2",
        },
        {
          name: "kindle",
          count: "2",
        },
        {
          name: "contemporary",
          count: "2",
        },
        {
          name: "lesfic",
          count: "2",
        },
        {
          name: "bodyguards",
          count: "2",
        },
        {
          name: "later",
          count: "1",
        },
        {
          name: "realistic",
          count: "1",
        },
        {
          name: "i-will",
          count: "1",
        },
        {
          name: "pc-k",
          count: "1",
        },
        {
          name: "stand-alone",
          count: "1",
        },
        {
          name: "got",
          count: "1",
        },
        {
          name: "don-t-remember-reading",
          count: "1",
        },
        {
          name: "writing",
          count: "1",
        },
        {
          name: "sirrah",
          count: "1",
        },
        {
          name: "aldiko",
          count: "1",
        },
        {
          name: "read-lesfic",
          count: "1",
        },
        {
          name: "best-ff-couples",
          count: "1",
        },
        {
          name: "e-reader",
          count: "1",
        },
        {
          name: "read-2018",
          count: "1",
        },
        {
          name: "f-f-workplace",
          count: "1",
        },
        {
          name: "f-f-women-in-uniform",
          count: "1",
        },
        {
          name: "f-f-politics",
          count: "1",
        },
        {
          name: "e-library",
          count: "1",
        },
        {
          name: "read-lgbt",
          count: "1",
        },
        {
          name: "reading-challenge",
          count: "1",
        },
        {
          name: "04-stars",
          count: "1",
        },
        {
          name: "read-in-2016",
          count: "1",
        },
        {
          name: "have",
          count: "1",
        },
        {
          name: "lgbt-fic",
          count: "1",
        },
        {
          name: "washington-dc",
          count: "1",
        },
        {
          name: "romance-drama",
          count: "1",
        },
        {
          name: "default",
          count: "1",
        },
        {
          name: "ff-romance",
          count: "1",
        },
        {
          name: "fbi-secret-service",
          count: "1",
        },
        {
          name: "erotica",
          count: "1",
        },
        {
          name: "did-not-finish",
          count: "1",
        },
        {
          name: "harlequin-er",
          count: "1",
        },
        {
          name: "good-just-ok",
          count: "1",
        },
        {
          name: "my-stuff-done",
          count: "1",
        },
        {
          name: "e-books",
          count: "1",
        },
        {
          name: "electronic",
          count: "1",
        },
        {
          name: "calibre",
          count: "1",
        },
        {
          name: "l-books",
          count: "1",
        },
        {
          name: "suspense-thiller",
          count: "1",
        },
        {
          name: "kindle-book",
          count: "1",
        },
        {
          name: "oya",
          count: "1",
        },
        {
          name: "published-2012",
          count: "1",
        },
        {
          name: "own-it-not-yet-read",
          count: "1",
        },
        {
          name: "lgbt-character",
          count: "1",
        },
        {
          name: "lesbian-fiction",
          count: "1",
        },
        {
          name: "goodreads-author",
          count: "1",
        },
        {
          name: "f-f-romance",
          count: "1",
        },
        {
          name: "ff-romances",
          count: "1",
        },
        {
          name: "random",
          count: "1",
        },
        {
          name: "fiction-book",
          count: "1",
        },
        {
          name: "a-sure-thing",
          count: "-1",
        },
        {
          name: "2015-my-stuff-done",
          count: "-1",
        },
      ],
    },
    book_links: {
      book_link: {
        id: "8",
        name: "Libraries",
        link: "https://www.goodreads.com/book_link/follow/8",
      },
    },
    buy_links: {
      buy_link: [
        {
          id: "1",
          name: "Amazon",
          link: "https://www.goodreads.com/book_link/follow/1",
        },
        {
          id: "10",
          name: "Audible",
          link: "https://www.goodreads.com/book_link/follow/10",
        },
        {
          id: "3",
          name: "Barnes & Noble",
          link: "https://www.goodreads.com/book_link/follow/3",
        },
        {
          id: "1027",
          name: "Walmart eBooks",
          link: "https://www.goodreads.com/book_link/follow/1027",
        },
        {
          id: "2102",
          name: "Apple Books",
          link: "https://www.goodreads.com/book_link/follow/2102",
        },
        {
          id: "8036",
          name: "Google Play",
          link: "https://www.goodreads.com/book_link/follow/8036",
        },
        {
          id: "4",
          name: "Abebooks",
          link: "https://www.goodreads.com/book_link/follow/4",
        },
        {
          id: "882",
          name: "Book Depository",
          link: "https://www.goodreads.com/book_link/follow/882",
        },
        {
          id: "5",
          name: "Alibris",
          link: "https://www.goodreads.com/book_link/follow/5",
        },
        {
          id: "9",
          name: "Indigo",
          link: "https://www.goodreads.com/book_link/follow/9",
        },
        {
          id: "107",
          name: "Better World Books",
          link: "https://www.goodreads.com/book_link/follow/107",
        },
        {
          id: "7",
          name: "IndieBound",
          link: "https://www.goodreads.com/book_link/follow/7",
        },
      ],
    },
    series_works: "\n    \n  ",
    similar_books: {
      book: [
        {
          id: "129559",
          title: "Tropical Storm (Dar and Kerry, #1)",
          title_without_series: "Tropical Storm",
          link: "https://www.goodreads.com/book/show/129559.Tropical_Storm",
          small_image_url:
            "https://s.gr-assets.com/assets/nophoto/book/50x75-a91bf249278a81aabab721ef782c4a74.png",
          image_url:
            "https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png",
          num_pages: "476",
          work: {
            id: "124781",
          },
          isbn: "1932300600",
          isbn13: "9781932300604",
          average_rating: "3.55",
          ratings_count: "156",
          publication_year: "2006",
          publication_month: "7",
          publication_day: "23",
          authors: {
            author: {
              id: "74507",
              name: "Melissa Good",
              link: "https://www.goodreads.com/author/show/74507.Melissa_Good",
            },
          },
        },
        {
          id: "18190776",
          title: "Love Thy Neighbour",
          title_without_series: "Love Thy Neighbour",
          link:
            "https://www.goodreads.com/book/show/18190776-love-thy-neighbour",
          small_image_url:
            "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1406361668l/18190776._SY75_.jpg",
          image_url:
            "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1406361668l/18190776._SX98_.jpg",
          num_pages: "24",
          work: {
            id: "25593692",
          },
          isbn: "",
          isbn13: "",
          average_rating: "3.55",
          ratings_count: "156",
          publication_year: "",
          publication_month: "",
          publication_day: "",
          authors: {
            author: {
              id: "815922",
              name: "A.K. Naten",
              link: "https://www.goodreads.com/author/show/815922.A_K_Naten",
            },
          },
        },
        {
          id: "6069426",
          title: "Destiny",
          title_without_series: "Destiny",
          link: "https://www.goodreads.com/book/show/6069426-destiny",
          small_image_url:
            "https://s.gr-assets.com/assets/nophoto/book/50x75-a91bf249278a81aabab721ef782c4a74.png",
          image_url:
            "https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png",
          num_pages: "103",
          work: {
            id: "6245809",
          },
          isbn: "",
          isbn13: "0001554107075",
          average_rating: "3.55",
          ratings_count: "156",
          publication_year: "2006",
          publication_month: "",
          publication_day: "",
          authors: {
            author: {
              id: "999635",
              name: "Kira Chase",
              link: "https://www.goodreads.com/author/show/999635.Kira_Chase",
            },
          },
        },
        {
          id: "2280972",
          title: "Private Passions",
          title_without_series: "Private Passions",
          link: "https://www.goodreads.com/book/show/2280972.Private_Passions",
          small_image_url:
            "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1355122344l/2280972._SY75_.jpg",
          image_url:
            "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1355122344l/2280972._SX98_.jpg",
          num_pages: "",
          work: {
            id: "2287101",
          },
          isbn: "1562802151",
          isbn13: "9781562802158",
          average_rating: "3.55",
          ratings_count: "156",
          publication_year: "",
          publication_month: "",
          publication_day: "",
          authors: {
            author: {
              id: "135761",
              name: "Laura DeHart Young",
              link:
                "https://www.goodreads.com/author/show/135761.Laura_DeHart_Young",
            },
          },
        },
        {
          id: "17669605",
          title: "The Prize",
          title_without_series: "The Prize",
          link: "https://www.goodreads.com/book/show/17669605-the-prize",
          small_image_url:
            "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1378585025l/17669605._SY75_.jpg",
          image_url:
            "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1378585025l/17669605._SX98_.jpg",
          num_pages: "34",
          work: {
            id: "24666709",
          },
          isbn: "",
          isbn13: "9781554872817",
          average_rating: "3.55",
          ratings_count: "156",
          publication_year: "2010",
          publication_month: "7",
          publication_day: "1",
          authors: {
            author: {
              id: "999635",
              name: "Kira Chase",
              link: "https://www.goodreads.com/author/show/999635.Kira_Chase",
            },
          },
        },
        {
          id: "13236303",
          title: "The Writing on the Wall (Del & Lola, #1)",
          title_without_series: "The Writing on the Wall",
          link:
            "https://www.goodreads.com/book/show/13236303-the-writing-on-the-wall",
          small_image_url:
            "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1502614875l/13236303._SX50_.jpg",
          image_url:
            "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1502614875l/13236303._SX98_.jpg",
          num_pages: "264",
          work: {
            id: "18433825",
          },
          isbn: "1594932905",
          isbn13: "9781594932908",
          average_rating: "3.55",
          ratings_count: "156",
          publication_year: "2012",
          publication_month: "6",
          publication_day: "26",
          authors: {
            author: {
              id: "4788024",
              name: "Jenna Rae",
              link: "https://www.goodreads.com/author/show/4788024.Jenna_Rae",
            },
          },
        },
        {
          id: "15817952",
          title: "Seven Minutes in Heaven (The Lying Game, #6)",
          title_without_series: "Seven Minutes in Heaven",
          link:
            "https://www.goodreads.com/book/show/15817952-seven-minutes-in-heaven",
          small_image_url:
            "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1351415558l/15817952._SY75_.jpg",
          image_url:
            "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1351415558l/15817952._SX98_.jpg",
          num_pages: "371",
          work: {
            id: "21545437",
          },
          isbn: "0062128221",
          isbn13: "9780062128225",
          average_rating: "3.55",
          ratings_count: "156",
          publication_year: "2013",
          publication_month: "7",
          publication_day: "30",
          authors: {
            author: {
              id: "93970",
              name: "Sara Shepard",
              link: "https://www.goodreads.com/author/show/93970.Sara_Shepard",
            },
          },
        },
        {
          id: "7733",
          title: "Gulliver's Travels",
          title_without_series: "Gulliver's Travels",
          link: "https://www.goodreads.com/book/show/7733.Gulliver_s_Travels",
          small_image_url:
            "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1427829692l/7733._SY75_.jpg",
          image_url:
            "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1427829692l/7733._SX98_.jpg",
          num_pages: "306",
          work: {
            id: "2394716",
          },
          isbn: "0141439491",
          isbn13: "9780141439495",
          average_rating: "3.55",
          ratings_count: "156",
          publication_year: "2003",
          publication_month: "1",
          publication_day: "30",
          authors: {
            author: {
              id: "1831",
              name: "Jonathan Swift",
              link: "https://www.goodreads.com/author/show/1831.Jonathan_Swift",
            },
          },
        },
        {
          id: "32323507",
          title: "The Gift",
          title_without_series: "The Gift",
          link: "https://www.goodreads.com/book/show/32323507-the-gift",
          small_image_url:
            "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1508955068l/32323507._SY75_.jpg",
          image_url:
            "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1508955068l/32323507._SX98_.jpg",
          num_pages: "65",
          work: {
            id: "52956534",
          },
          isbn: "",
          isbn13: "",
          average_rating: "3.55",
          ratings_count: "156",
          publication_year: "2009",
          publication_month: "4",
          publication_day: "",
          authors: {
            author: {
              id: "71090",
              name: "Meghan O'Brien",
              link:
                "https://www.goodreads.com/author/show/71090.Meghan_O_Brien",
            },
          },
        },
        {
          id: "18246747",
          title: "Endgame",
          title_without_series: "Endgame",
          link: "https://www.goodreads.com/book/show/18246747-endgame",
          small_image_url:
            "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1508957318l/18246747._SY75_.jpg",
          image_url:
            "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1508957318l/18246747._SX98_.jpg",
          num_pages: "73",
          work: {
            id: "25697795",
          },
          isbn: "",
          isbn13: "",
          average_rating: "3.55",
          ratings_count: "156",
          publication_year: "2002",
          publication_month: "",
          publication_day: "",
          authors: {
            author: {
              id: "71090",
              name: "Meghan O'Brien",
              link:
                "https://www.goodreads.com/author/show/71090.Meghan_O_Brien",
            },
          },
        },
        {
          id: "15716154",
          title: "Cross My Heart, Hope to Die (The Lying Game, #5)",
          title_without_series: "Cross My Heart, Hope to Die",
          link:
            "https://www.goodreads.com/book/show/15716154-cross-my-heart-hope-to-die",
          small_image_url:
            "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1340310216l/15716154._SX50_.jpg",
          image_url:
            "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1340310216l/15716154._SX98_.jpg",
          num_pages: "321",
          work: {
            id: "21386077",
          },
          isbn: "0062128191",
          isbn13: "9780062128195",
          average_rating: "3.55",
          ratings_count: "156",
          publication_year: "2013",
          publication_month: "2",
          publication_day: "5",
          authors: {
            author: {
              id: "93970",
              name: "Sara Shepard",
              link: "https://www.goodreads.com/author/show/93970.Sara_Shepard",
            },
          },
        },
        {
          id: "1257588",
          title: "Silent Heart",
          title_without_series: "Silent Heart",
          link: "https://www.goodreads.com/book/show/1257588.Silent_Heart",
          small_image_url:
            "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1361639395l/1257588._SY75_.jpg",
          image_url:
            "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1361639395l/1257588._SX98_.jpg",
          num_pages: "203",
          work: {
            id: "1246395",
          },
          isbn: "1594930449",
          isbn13: "9781594930447",
          average_rating: "3.55",
          ratings_count: "156",
          publication_year: "2005",
          publication_month: "9",
          publication_day: "1",
          authors: {
            author: {
              id: "16889",
              name: "Claire McNab",
              link: "https://www.goodreads.com/author/show/16889.Claire_McNab",
            },
          },
        },
        {
          id: "35249535",
          title: "Sex Sells - Eine lesbische Kurzgeschichte",
          title_without_series: "Sex Sells - Eine lesbische Kurzgeschichte",
          link:
            "https://www.goodreads.com/book/show/35249535-sex-sells---eine-lesbische-kurzgeschichte",
          small_image_url:
            "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1496004641l/35249535._SY75_.jpg",
          image_url:
            "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1496004641l/35249535._SX98_.jpg",
          num_pages: "21",
          work: {
            id: "56600637",
          },
          isbn: "",
          isbn13: "",
          average_rating: "3.55",
          ratings_count: "156",
          publication_year: "2016",
          publication_month: "6",
          publication_day: "",
          authors: {
            author: {
              id: "2749820",
              name: "Jae",
              link: "https://www.goodreads.com/author/show/2749820.Jae",
            },
          },
        },
        {
          id: "11218174",
          title: "Looking Through Windows",
          title_without_series: "Looking Through Windows",
          link:
            "https://www.goodreads.com/book/show/11218174-looking-through-windows",
          small_image_url:
            "https://s.gr-assets.com/assets/nophoto/book/50x75-a91bf249278a81aabab721ef782c4a74.png",
          image_url:
            "https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png",
          num_pages: "265",
          work: {
            id: "16143800",
          },
          isbn: "1590925955",
          isbn13: "9781590925959",
          average_rating: "3.55",
          ratings_count: "156",
          publication_year: "2008",
          publication_month: "8",
          publication_day: "",
          authors: {
            author: {
              id: "4815447",
              name: "Caren J. Werlinger",
              link:
                "https://www.goodreads.com/author/show/4815447.Caren_J_Werlinger",
            },
          },
        },
        {
          id: "619962",
          title: "And Playing the Role of Herself",
          title_without_series: "And Playing the Role of Herself",
          link:
            "https://www.goodreads.com/book/show/619962.And_Playing_the_Role_of_Herself",
          small_image_url:
            "https://s.gr-assets.com/assets/nophoto/book/50x75-a91bf249278a81aabab721ef782c4a74.png",
          image_url:
            "https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png",
          num_pages: "",
          work: {
            id: "606341",
          },
          isbn: "1932300724",
          isbn13: "9781932300727",
          average_rating: "3.55",
          ratings_count: "156",
          publication_year: "2007",
          publication_month: "1",
          publication_day: "7",
          authors: {
            author: {
              id: "335181",
              name: "K.E.  Lane",
              link: "https://www.goodreads.com/author/show/335181.K_E_Lane",
            },
          },
        },
        {
          id: "31302227",
          title: "A marche forcée",
          title_without_series: "A marche forcée",
          link: "https://www.goodreads.com/book/show/31302227-a-marche-forc-e",
          small_image_url:
            "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1469969516l/31302227._SY75_.jpg",
          image_url:
            "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1469969516l/31302227._SX98_.jpg",
          num_pages: "",
          work: {
            id: "51970330",
          },
          isbn: "2913066577",
          isbn13: "",
          average_rating: "3.55",
          ratings_count: "156",
          publication_year: "",
          publication_month: "",
          publication_day: "",
          authors: {
            author: {
              id: "11357525",
              name: "Kadyan",
              link: "https://www.goodreads.com/author/show/11357525.Kadyan",
            },
          },
        },
        {
          id: "12924312",
          title: "Hide and Seek (The Lying Game, #4)",
          title_without_series: "Hide and Seek",
          link: "https://www.goodreads.com/book/show/12924312-hide-and-seek",
          small_image_url:
            "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1321122514l/12924312._SY75_.jpg",
          image_url:
            "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1321122514l/12924312._SX98_.jpg",
          num_pages: "288",
          work: {
            id: "18079758",
          },
          isbn: "0061869767",
          isbn13: "9780061869761",
          average_rating: "3.55",
          ratings_count: "156",
          publication_year: "2012",
          publication_month: "7",
          publication_day: "31",
          authors: {
            author: {
              id: "93970",
              name: "Sara Shepard",
              link: "https://www.goodreads.com/author/show/93970.Sara_Shepard",
            },
          },
        },
        {
          id: "11103746",
          title: "Waiting in the Wings",
          title_without_series: "Waiting in the Wings",
          link:
            "https://www.goodreads.com/book/show/11103746-waiting-in-the-wings",
          small_image_url:
            "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1304664407l/11103746._SY75_.jpg",
          image_url:
            "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1304664407l/11103746._SX98_.jpg",
          num_pages: "249",
          work: {
            id: "16025897",
          },
          isbn: "1602825610",
          isbn13: "9781602825611",
          average_rating: "3.55",
          ratings_count: "156",
          publication_year: "2011",
          publication_month: "9",
          publication_day: "20",
          authors: {
            author: {
              id: "4789680",
              name: "Melissa Brayden",
              link:
                "https://www.goodreads.com/author/show/4789680.Melissa_Brayden",
            },
          },
        },
      ],
    },
  },
];

/* GET home page. */
router.get("/", async function (req, res, next) {
  let books = [];
  function listFunctions() {
    return new Promise(async (resolve, reject) => {
      var getDirectories = function (src, callback) {
        glob("**/*", { cwd: src }, callback);
      };
      getDirectories(
        "C:/Users/fritz/Documents/Books/books/Src/lib",
        async function (err, res) {
          if (err) {
            console.log("Error", err);
            reject(err);
          } else {
            let goodreadsBooks = [];
            await asyncForEach(res.slice(0, 10), async (bookTitle) => {
              bookTitle = bookTitle.substring(0, bookTitle.lastIndexOf("."));
              let bookRes = await goodreads.searchBooks({
                q: bookTitle,
                field: "all",
              });
              if (bookRes.search["total-results"] == 1) {
                //goodreadsBooks.push(bookRes.search.results.work);
                let getBook = await goodreads.showBook(
                  bookRes.search.results.work.best_book.id._
                );
                goodreadsBooks.push(getBook.book);
              } else {
                goodreadsBooks.push({
                  //best_book: {
                  title: bookTitle.substring(
                    bookTitle.length,
                    bookTitle.indexOf("-") + 2
                  ),
                  url: `https://www.google.com/search?q=${bookTitle.substring(
                    bookTitle.length,
                    bookTitle.indexOf("-") + 2
                  )}`,
                  ratings_count: 0,
                  publication_year: "-",
                  description: "-",
                  average_rating: 0,
                  authors: {
                    author: {
                      name: bookTitle.substring(0, bookTitle.indexOf("-")),
                      link: `https://www.google.com/search?q=${bookTitle.substring(
                        0,
                        bookTitle.indexOf("-")
                      )}`,
                    },
                  },
                  image_url:
                    "https://dhmckee.com/wp-content/uploads/2018/11/defbookcover-min.jpg",
                  small_image_url:
                    "https://dhmckee.com/wp-content/uploads/2018/11/defbookcover-min.jpg",
                  //},
                });
              }
            });
            resolve(goodreadsBooks);
          }
        }
      );
    });
  }
  /*books = await listFunctions();
  console.log("books :>> ", books);
  console.log("books.length :>> ", books.length);
  */
  //console.log("dataTemp :>> ", dataTemp);
  res.render("index", {
    string: JSON.stringify(dataTemp, null, 2),
    title: "Expresssss",
    books: dataTemp,
    num: 20
  });
});

module.exports = router;
