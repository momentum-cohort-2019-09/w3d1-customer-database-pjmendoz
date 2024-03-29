const customers = [
    {
        "gender": "male",
        "name": {
            "title": "mr",
            "first": "curtis",
            "last": "ryan"
        },
        "location": {
            "street": "8073 rolling green rd",
            "city": "south valley",
            "state": "missouri",
            "postcode": 99356
        },
        "email": "curtis.ryan@example.com",
        "login": {
            "username": "beautifulmouse544",
            "password": "beardog",
            "salt": "kL9djbKk",
            "md5": "67bedf8307958366eb547d6bc8f23a9a",
            "sha1": "33f493d4301964dff559850470758e8f4fa78c13",
            "sha256": "4a9e0d3fd2cafc6f6a1fc05cd6b35ceb0cfe08fa2b9abc07f3bfad5c977be86c"
        },
        "dob": "1967-10-29 09:16:09",
        "registered": "2007-01-12 19:26:30",
        "phone": "(518)-664-5821",
        "cell": "(385)-917-9080",
        "id": {
            "name": "SSN",
            "value": "544-97-7715"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/men/0.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/0.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/0.jpg"
        },
        "nat": "US"
    }, {
        "gender": "male",
        "name": {
            "title": "mr",
            "first": "martin",
            "last": "terry"
        },
        "location": {
            "street": "5377 hogan st",
            "city": "waterbury",
            "state": "vermont",
            "postcode": 65616
        },
        "email": "martin.terry@example.com",
        "login": {
            "username": "yellowladybug711",
            "password": "0000",
            "salt": "5sagt3A7",
            "md5": "ed93891a21468a1d63f7ded046add237",
            "sha1": "96c499ad5d969b11c5606b85603ae044dada0c1e",
            "sha256": "7f99df6b12dc28f0f335cf087126dde49c74dba55ec13efce745af9e1a24c555"
        },
        "dob": "1987-10-08 08:46:52",
        "registered": "2007-10-13 07:57:48",
        "phone": "(455)-018-0151",
        "cell": "(863)-366-8588",
        "id": {
            "name": "SSN",
            "value": "090-34-5018"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/men/6.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/6.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/6.jpg"
        },
        "nat": "US"
    }, {
        "gender": "female",
        "name": {
            "title": "miss",
            "first": "christine",
            "last": "cooper"
        },
        "location": {
            "street": "7725 fincher rd",
            "city": "utica",
            "state": "west virginia",
            "postcode": 34757
        },
        "email": "christine.cooper@example.com",
        "login": {
            "username": "bluebutterfly345",
            "password": "ninjas",
            "salt": "5xwRp1ey",
            "md5": "f03c463a8f1b0843f23701a00fa60c50",
            "sha1": "d9ceb8d070de9360aa48d7cc7ca3ac33777fe8a6",
            "sha256": "384dff47c2b45232df9a1abcdde3217ee7b44ba18a2cac64dd8f1d156113db7d"
        },
        "dob": "1974-02-16 14:38:20",
        "registered": "2007-09-25 01:51:03",
        "phone": "(953)-914-3182",
        "cell": "(758)-417-5753",
        "id": {
            "name": "SSN",
            "value": "446-75-6574"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/women/52.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/52.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/52.jpg"
        },
        "nat": "US"
    }, {
        "gender": "male",
        "name": {
            "title": "mr",
            "first": "norman",
            "last": "henderson"
        },
        "location": {
            "street": "6481 mockingbird hill",
            "city": "santa clarita",
            "state": "washington",
            "postcode": 81948
        },
        "email": "norman.henderson@example.com",
        "login": {
            "username": "ticklishswan439",
            "password": "titman",
            "salt": "pwIED2xB",
            "md5": "dbfcc403233bfbe49e02d0bbf9341ca6",
            "sha1": "fec544859b5af7176c384747791d96924fc68332",
            "sha256": "a1fa6f0fd58bf0d136ace57f8d372e47779c3a635613752861046c4f01d54a89"
        },
        "dob": "1975-04-03 23:36:46",
        "registered": "2009-03-17 08:13:20",
        "phone": "(563)-864-2175",
        "cell": "(053)-397-4254",
        "id": {
            "name": "SSN",
            "value": "472-23-6671"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/men/33.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/33.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/33.jpg"
        },
        "nat": "US"
    }, {
        "gender": "male",
        "name": {
            "title": "mr",
            "first": "jose",
            "last": "rhodes"
        },
        "location": {
            "street": "3347 hickory creek dr",
            "city": "helena",
            "state": "arkansas",
            "postcode": 81276
        },
        "email": "jose.rhodes@example.com",
        "login": {
            "username": "bigbird892",
            "password": "dingle",
            "salt": "v441ooEe",
            "md5": "d2de3a49d5095185315de87ef8f19952",
            "sha1": "d1e54813a4666498fba3d0e3e918d105acab90f0",
            "sha256": "f759f43e79b1bb214367aa7816040c30e22c2affa501945d42e403d3bc57ca1f"
        },
        "dob": "1955-11-10 22:15:13",
        "registered": "2014-01-06 20:47:53",
        "phone": "(491)-555-8040",
        "cell": "(946)-535-7837",
        "id": {
            "name": "SSN",
            "value": "290-85-8823"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/men/88.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/88.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/88.jpg"
        },
        "nat": "US"
    }, {
        "gender": "female",
        "name": {
            "title": "mrs",
            "first": "pauline",
            "last": "hughes"
        },
        "location": {
            "street": "3747 elgin st",
            "city": "roseville",
            "state": "indiana",
            "postcode": 93281
        },
        "email": "pauline.hughes@example.com",
        "login": {
            "username": "bluemouse942",
            "password": "windows",
            "salt": "oFdhGaUg",
            "md5": "5b7eaa1e96455f244e08f87e15ab7d9f",
            "sha1": "b3cf8682364d334133babfda24dd207b31ea809c",
            "sha256": "21f9c74f39325d869f159ddf3f092fc2995bf9f76fdf0d8ad4558c17c4964d90"
        },
        "dob": "1977-12-08 16:33:56",
        "registered": "2004-06-29 03:25:39",
        "phone": "(184)-510-5532",
        "cell": "(777)-970-7402",
        "id": {
            "name": "SSN",
            "value": "305-43-5842"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/women/44.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/44.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/44.jpg"
        },
        "nat": "US"
    }, {
        "gender": "male",
        "name": {
            "title": "mr",
            "first": "darren",
            "last": "hunter"
        },
        "location": {
            "street": "4226 thornridge cir",
            "city": "richmond",
            "state": "maryland",
            "postcode": 19582
        },
        "email": "darren.hunter@example.com",
        "login": {
            "username": "brownkoala114",
            "password": "comment",
            "salt": "linCTMLx",
            "md5": "285f7c342c7004faa99b4ec49e7980cc",
            "sha1": "001e6fde4ababab569e18815373d486e00ae5461",
            "sha256": "2e0042b225f488ba89f9399472f69da8a43c4b1e6786fcfab4abf9f07410734b"
        },
        "dob": "1948-01-29 05:50:58",
        "registered": "2008-11-03 10:23:45",
        "phone": "(348)-718-0403",
        "cell": "(571)-664-0652",
        "id": {
            "name": "SSN",
            "value": "963-85-5649"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/men/83.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/83.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/83.jpg"
        },
        "nat": "US"
    }, {
        "gender": "male",
        "name": {
            "title": "mr",
            "first": "oscar",
            "last": "walker"
        },
        "location": {
            "street": "7260 e north st",
            "city": "santa maria",
            "state": "oregon",
            "postcode": 80535
        },
        "email": "oscar.walker@example.com",
        "login": {
            "username": "purplewolf995",
            "password": "hustler",
            "salt": "9o1LTEt1",
            "md5": "bfcd77340ed317fc17cbed092cc65d1c",
            "sha1": "a62348dd240be9e84040f4dfa8d750a1725a2ce9",
            "sha256": "0db79ca945eefec92f62e4cea67ae054b4921771ed26d7f03cb15c7b49e20278"
        },
        "dob": "1995-07-13 12:34:13",
        "registered": "2007-09-30 16:54:34",
        "phone": "(225)-055-9383",
        "cell": "(155)-427-6299",
        "id": {
            "name": "SSN",
            "value": "017-75-9945"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/men/18.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/18.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/18.jpg"
        },
        "nat": "US"
    }, {
        "gender": "female",
        "name": {
            "title": "miss",
            "first": "ann",
            "last": "beck"
        },
        "location": {
            "street": "1989 northaven rd",
            "city": "san francisco",
            "state": "utah",
            "postcode": 78169
        },
        "email": "ann.beck@example.com",
        "login": {
            "username": "tinybutterfly529",
            "password": "7777777",
            "salt": "1dmn4m9V",
            "md5": "33511493289e296b9dd974eec85ca6be",
            "sha1": "a02f18e5097d457d0991e2b68f1ff02a8f5e6f78",
            "sha256": "82627e829749d436b499486002460d72ad08d498e5277595b7d58d9208622c58"
        },
        "dob": "1982-10-08 00:07:58",
        "registered": "2008-05-05 03:07:47",
        "phone": "(663)-070-7094",
        "cell": "(550)-019-8911",
        "id": {
            "name": "SSN",
            "value": "371-48-5948"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/women/72.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/72.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/72.jpg"
        },
        "nat": "US"
    }, {
        "gender": "female",
        "name": {
            "title": "mrs",
            "first": "harper",
            "last": "morales"
        },
        "location": {
            "street": "5443 lovers ln",
            "city": "mesa",
            "state": "indiana",
            "postcode": 74875
        },
        "email": "harper.morales@example.com",
        "login": {
            "username": "bluewolf505",
            "password": "punisher",
            "salt": "7SKFirbb",
            "md5": "c22f8d9b46886a40320fdb23df5cc382",
            "sha1": "5ce0b2825c7eaa7ad8f73480f92343b4a91ef1a9",
            "sha256": "a37ebe022807e6b3516f65b3cc310cc46b6e2f5904a1b7fbf48c3d9d8a506865"
        },
        "dob": "1948-12-31 15:33:52",
        "registered": "2016-07-20 16:29:56",
        "phone": "(428)-292-6669",
        "cell": "(704)-667-9820",
        "id": {
            "name": "SSN",
            "value": "616-15-0762"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/women/33.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/33.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/33.jpg"
        },
        "nat": "US"
    }, {
        "gender": "female",
        "name": {
            "title": "miss",
            "first": "tammy",
            "last": "hill"
        },
        "location": {
            "street": "3662 bollinger rd",
            "city": "flint",
            "state": "north dakota",
            "postcode": 64773
        },
        "email": "tammy.hill@example.com",
        "login": {
            "username": "lazyswan632",
            "password": "johndeer",
            "salt": "lbI06bwV",
            "md5": "513fa3f1abbf6ea5f83271f5472b60d1",
            "sha1": "5062381c4a596fff3a9ead006c879d1aaf8b82d1",
            "sha256": "fbc3c31bdaeaaa0cb6bf2611479cbd3f709ed48c87d0e28bcc27ea486dacd265"
        },
        "dob": "1946-06-23 13:21:17",
        "registered": "2010-05-31 00:53:06",
        "phone": "(726)-804-8431",
        "cell": "(727)-339-8784",
        "id": {
            "name": "SSN",
            "value": "141-67-4033"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/women/81.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/81.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/81.jpg"
        },
        "nat": "US"
    }, {
        "gender": "female",
        "name": {
            "title": "mrs",
            "first": "addison",
            "last": "graves"
        },
        "location": {
            "street": "5740 westheimer rd",
            "city": "burkburnett",
            "state": "oregon",
            "postcode": 64032
        },
        "email": "addison.graves@example.com",
        "login": {
            "username": "beautifulwolf111",
            "password": "homepage-",
            "salt": "rdmg2CDl",
            "md5": "0e963ed46621e96e36a9a46814eb803e",
            "sha1": "4cf44dad0c9c33bfe823484bae3450ebb8e68e81",
            "sha256": "cf8762ee50d266cb4bc128d388766d53a48f8525477ec143499c1c4a5737e2b2"
        },
        "dob": "1979-09-14 21:09:32",
        "registered": "2008-09-23 14:40:38",
        "phone": "(995)-211-0296",
        "cell": "(302)-258-3479",
        "id": {
            "name": "SSN",
            "value": "759-73-7891"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/women/41.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/41.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/41.jpg"
        },
        "nat": "US"
    }
];


