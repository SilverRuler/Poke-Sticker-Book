export interface PokemonForm {
  formId: string;
  name: string;
  image: string;
  types: string[];
}

export interface PokemonEntry {
  id: number;
  name: string;
  forms: PokemonForm[];
}

export const pokemonData: PokemonEntry[] = [
  {
    "id": 1,
    "name": "이상해씨",
    "forms": [
      {
        "formId": "01",
        "name": "이상해씨",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/000101.png",
        "types": [
          "풀",
          "독"
        ]
      }
    ]
  },
  {
    "id": 2,
    "name": "이상해풀",
    "forms": [
      {
        "formId": "01",
        "name": "이상해풀",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/000201.png",
        "types": [
          "풀",
          "독"
        ]
      }
    ]
  },
  {
    "id": 3,
    "name": "이상해꽃",
    "forms": [
      {
        "formId": "01",
        "name": "이상해꽃",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/000301.png",
        "types": [
          "풀",
          "독"
        ]
      },
      {
        "formId": "02",
        "name": "메가이상해꽃",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/000302.png",
        "types": [
          "풀",
          "독"
        ]
      },
      {
        "formId": "03",
        "name": "거다이맥스 이상해꽃",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/000303.png",
        "types": [
          "풀",
          "독"
        ]
      }
    ]
  },
  {
    "id": 4,
    "name": "파이리",
    "forms": [
      {
        "formId": "01",
        "name": "파이리",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/000401.png",
        "types": [
          "불꽃"
        ]
      }
    ]
  },
  {
    "id": 5,
    "name": "리자드",
    "forms": [
      {
        "formId": "01",
        "name": "리자드",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/000501.png",
        "types": [
          "불꽃"
        ]
      }
    ]
  },
  {
    "id": 6,
    "name": "리자몽",
    "forms": [
      {
        "formId": "01",
        "name": "리자몽",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/000601.png",
        "types": [
          "불꽃",
          "비행"
        ]
      },
      {
        "formId": "02",
        "name": "메가리자몽X",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/000602.png",
        "types": [
          "불꽃",
          "드래곤"
        ]
      },
      {
        "formId": "03",
        "name": "메가리자몽Y",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/000603.png",
        "types": [
          "불꽃",
          "비행"
        ]
      },
      {
        "formId": "04",
        "name": "거다이맥스 리자몽",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/000604.png",
        "types": [
          "불꽃",
          "비행"
        ]
      }
    ]
  },
  {
    "id": 7,
    "name": "꼬부기",
    "forms": [
      {
        "formId": "01",
        "name": "꼬부기",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/000701.png",
        "types": [
          "물"
        ]
      }
    ]
  },
  {
    "id": 8,
    "name": "어니부기",
    "forms": [
      {
        "formId": "01",
        "name": "어니부기",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/000801.png",
        "types": [
          "물"
        ]
      }
    ]
  },
  {
    "id": 9,
    "name": "거북왕",
    "forms": [
      {
        "formId": "01",
        "name": "거북왕",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/000901.png",
        "types": [
          "물"
        ]
      },
      {
        "formId": "02",
        "name": "메가거북왕",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/000902.png",
        "types": [
          "물"
        ]
      },
      {
        "formId": "03",
        "name": "거다이맥스 거북왕",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/000903.png",
        "types": [
          "물"
        ]
      }
    ]
  },
  {
    "id": 10,
    "name": "캐터피",
    "forms": [
      {
        "formId": "01",
        "name": "캐터피",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/001001.png",
        "types": [
          "벌레"
        ]
      }
    ]
  },
  {
    "id": 11,
    "name": "단데기",
    "forms": [
      {
        "formId": "01",
        "name": "단데기",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/001101.png",
        "types": [
          "벌레"
        ]
      }
    ]
  },
  {
    "id": 12,
    "name": "버터플",
    "forms": [
      {
        "formId": "01",
        "name": "버터플",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/001201.png",
        "types": [
          "벌레",
          "비행"
        ]
      },
      {
        "formId": "02",
        "name": "거다이맥스 버터플",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/001202.png",
        "types": [
          "벌레",
          "비행"
        ]
      }
    ]
  },
  {
    "id": 13,
    "name": "뿔충이",
    "forms": [
      {
        "formId": "01",
        "name": "뿔충이",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/001301.png",
        "types": [
          "벌레",
          "독"
        ]
      }
    ]
  },
  {
    "id": 14,
    "name": "딱충이",
    "forms": [
      {
        "formId": "01",
        "name": "딱충이",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/001401.png",
        "types": [
          "벌레",
          "독"
        ]
      }
    ]
  },
  {
    "id": 15,
    "name": "독침붕",
    "forms": [
      {
        "formId": "01",
        "name": "독침붕",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/001501.png",
        "types": [
          "벌레",
          "독"
        ]
      },
      {
        "formId": "02",
        "name": "메가독침붕",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/001502.png",
        "types": [
          "벌레",
          "독"
        ]
      }
    ]
  },
  {
    "id": 16,
    "name": "구구",
    "forms": [
      {
        "formId": "01",
        "name": "구구",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/001601.png",
        "types": [
          "노말",
          "비행"
        ]
      }
    ]
  },
  {
    "id": 17,
    "name": "피죤",
    "forms": [
      {
        "formId": "01",
        "name": "피죤",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/001701.png",
        "types": [
          "노말",
          "비행"
        ]
      }
    ]
  },
  {
    "id": 18,
    "name": "피죤투",
    "forms": [
      {
        "formId": "01",
        "name": "피죤투",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/001801.png",
        "types": [
          "노말",
          "비행"
        ]
      },
      {
        "formId": "02",
        "name": "메가피죤투",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/001802.png",
        "types": [
          "노말",
          "비행"
        ]
      }
    ]
  },
  {
    "id": 19,
    "name": "꼬렛",
    "forms": [
      {
        "formId": "01",
        "name": "꼬렛",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/001901.png",
        "types": [
          "노말"
        ]
      },
      {
        "formId": "02",
        "name": "알로라 꼬렛",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/001902.png",
        "types": [
          "악",
          "노말"
        ]
      }
    ]
  },
  {
    "id": 20,
    "name": "레트라",
    "forms": [
      {
        "formId": "01",
        "name": "레트라",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/002001.png",
        "types": [
          "노말"
        ]
      },
      {
        "formId": "02",
        "name": "알로라 레트라",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/002002.png",
        "types": [
          "악",
          "노말"
        ]
      }
    ]
  },
  {
    "id": 21,
    "name": "깨비참",
    "forms": [
      {
        "formId": "01",
        "name": "깨비참",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/002101.png",
        "types": [
          "노말",
          "비행"
        ]
      }
    ]
  },
  {
    "id": 22,
    "name": "깨비드릴조",
    "forms": [
      {
        "formId": "01",
        "name": "깨비드릴조",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/002201.png",
        "types": [
          "노말",
          "비행"
        ]
      }
    ]
  },
  {
    "id": 23,
    "name": "아보",
    "forms": [
      {
        "formId": "01",
        "name": "아보",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/002301.png",
        "types": [
          "독"
        ]
      }
    ]
  },
  {
    "id": 24,
    "name": "아보크",
    "forms": [
      {
        "formId": "01",
        "name": "아보크",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/002401.png",
        "types": [
          "독"
        ]
      }
    ]
  },
  {
    "id": 25,
    "name": "피카츄",
    "forms": [
      {
        "formId": "01",
        "name": "피카츄",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/002501.png",
        "types": [
          "전기"
        ]
      },
      {
        "formId": "02",
        "name": "거다이맥스 피카츄",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/002502.png",
        "types": [
          "전기"
        ]
      }
    ]
  },
  {
    "id": 26,
    "name": "라이츄",
    "forms": [
      {
        "formId": "01",
        "name": "라이츄",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/002601.png",
        "types": [
          "전기"
        ]
      },
      {
        "formId": "02",
        "name": "알로라 라이츄",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/002602.png",
        "types": [
          "전기",
          "에스퍼"
        ]
      }
    ]
  },
  {
    "id": 27,
    "name": "모래두지",
    "forms": [
      {
        "formId": "01",
        "name": "모래두지",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/002701.png",
        "types": [
          "땅"
        ]
      },
      {
        "formId": "02",
        "name": "알로라 모래두지",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/002702.png",
        "types": [
          "얼음",
          "강철"
        ]
      }
    ]
  },
  {
    "id": 28,
    "name": "고지",
    "forms": [
      {
        "formId": "01",
        "name": "고지",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/002801.png",
        "types": [
          "땅"
        ]
      },
      {
        "formId": "02",
        "name": "알로라 고지",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/002802.png",
        "types": [
          "얼음",
          "강철"
        ]
      }
    ]
  },
  {
    "id": 29,
    "name": "니드런♀",
    "forms": [
      {
        "formId": "01",
        "name": "니드런♀",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/002901.png",
        "types": [
          "독"
        ]
      }
    ]
  },
  {
    "id": 30,
    "name": "니드리나",
    "forms": [
      {
        "formId": "01",
        "name": "니드리나",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/003001.png",
        "types": [
          "독"
        ]
      }
    ]
  },
  {
    "id": 31,
    "name": "니드퀸",
    "forms": [
      {
        "formId": "01",
        "name": "니드퀸",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/003101.png",
        "types": [
          "독",
          "땅"
        ]
      }
    ]
  },
  {
    "id": 32,
    "name": "니드런♂",
    "forms": [
      {
        "formId": "01",
        "name": "니드런♂",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/003201.png",
        "types": [
          "독"
        ]
      }
    ]
  },
  {
    "id": 33,
    "name": "니드리노",
    "forms": [
      {
        "formId": "01",
        "name": "니드리노",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/003301.png",
        "types": [
          "독"
        ]
      }
    ]
  },
  {
    "id": 34,
    "name": "니드킹",
    "forms": [
      {
        "formId": "01",
        "name": "니드킹",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/003401.png",
        "types": [
          "독",
          "땅"
        ]
      }
    ]
  },
  {
    "id": 35,
    "name": "삐삐",
    "forms": [
      {
        "formId": "01",
        "name": "삐삐",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/003501.png",
        "types": [
          "페어리"
        ]
      }
    ]
  },
  {
    "id": 36,
    "name": "픽시",
    "forms": [
      {
        "formId": "01",
        "name": "픽시",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/003601.png",
        "types": [
          "페어리"
        ]
      }
    ]
  },
  {
    "id": 37,
    "name": "식스테일",
    "forms": [
      {
        "formId": "01",
        "name": "식스테일",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/003701.png",
        "types": [
          "불꽃"
        ]
      },
      {
        "formId": "02",
        "name": "알로라 식스테일",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/003702.png",
        "types": [
          "얼음"
        ]
      }
    ]
  },
  {
    "id": 38,
    "name": "나인테일",
    "forms": [
      {
        "formId": "01",
        "name": "나인테일",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/003801.png",
        "types": [
          "불꽃"
        ]
      },
      {
        "formId": "02",
        "name": "알로라 나인테일",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/003802.png",
        "types": [
          "얼음",
          "페어리"
        ]
      }
    ]
  },
  {
    "id": 39,
    "name": "푸린",
    "forms": [
      {
        "formId": "01",
        "name": "푸린",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/003901.png",
        "types": [
          "노말",
          "페어리"
        ]
      }
    ]
  },
  {
    "id": 40,
    "name": "푸크린",
    "forms": [
      {
        "formId": "01",
        "name": "푸크린",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/004001.png",
        "types": [
          "노말",
          "페어리"
        ]
      }
    ]
  },
  {
    "id": 41,
    "name": "주뱃",
    "forms": [
      {
        "formId": "01",
        "name": "주뱃",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/004101.png",
        "types": [
          "독",
          "비행"
        ]
      }
    ]
  },
  {
    "id": 42,
    "name": "골뱃",
    "forms": [
      {
        "formId": "01",
        "name": "골뱃",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/004201.png",
        "types": [
          "독",
          "비행"
        ]
      }
    ]
  },
  {
    "id": 43,
    "name": "뚜벅쵸",
    "forms": [
      {
        "formId": "01",
        "name": "뚜벅쵸",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/004301.png",
        "types": [
          "풀",
          "독"
        ]
      }
    ]
  },
  {
    "id": 44,
    "name": "냄새꼬",
    "forms": [
      {
        "formId": "01",
        "name": "냄새꼬",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/004401.png",
        "types": [
          "풀",
          "독"
        ]
      }
    ]
  },
  {
    "id": 45,
    "name": "라플레시아",
    "forms": [
      {
        "formId": "01",
        "name": "라플레시아",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/004501.png",
        "types": [
          "풀",
          "독"
        ]
      }
    ]
  },
  {
    "id": 46,
    "name": "파라스",
    "forms": [
      {
        "formId": "01",
        "name": "파라스",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/004601.png",
        "types": [
          "벌레",
          "풀"
        ]
      }
    ]
  },
  {
    "id": 47,
    "name": "파라섹트",
    "forms": [
      {
        "formId": "01",
        "name": "파라섹트",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/004701.png",
        "types": [
          "벌레",
          "풀"
        ]
      }
    ]
  },
  {
    "id": 48,
    "name": "콘팡",
    "forms": [
      {
        "formId": "01",
        "name": "콘팡",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/004801.png",
        "types": [
          "벌레",
          "독"
        ]
      }
    ]
  },
  {
    "id": 49,
    "name": "도나리",
    "forms": [
      {
        "formId": "01",
        "name": "도나리",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/004901.png",
        "types": [
          "벌레",
          "독"
        ]
      }
    ]
  },
  {
    "id": 50,
    "name": "디그다",
    "forms": [
      {
        "formId": "01",
        "name": "디그다",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/005001.png",
        "types": [
          "땅"
        ]
      },
      {
        "formId": "02",
        "name": "알로라 디그다",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/005002.png",
        "types": [
          "땅",
          "강철"
        ]
      }
    ]
  },
  {
    "id": 51,
    "name": "닥트리오",
    "forms": [
      {
        "formId": "01",
        "name": "닥트리오",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/005101.png",
        "types": [
          "땅"
        ]
      },
      {
        "formId": "02",
        "name": "알로라 닥트리오",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/005102.png",
        "types": [
          "땅",
          "강철"
        ]
      }
    ]
  },
  {
    "id": 52,
    "name": "나옹",
    "forms": [
      {
        "formId": "01",
        "name": "나옹",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/005201.png",
        "types": [
          "노말"
        ]
      },
      {
        "formId": "04",
        "name": "거다이맥스 나옹",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/005204.png",
        "types": [
          "노말"
        ]
      },
      {
        "formId": "02",
        "name": "알로라 나옹",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/005202.png",
        "types": [
          "악"
        ]
      },
      {
        "formId": "03",
        "name": "가라르 나옹",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/005203.png",
        "types": [
          "강철"
        ]
      }
    ]
  },
  {
    "id": 53,
    "name": "페르시온",
    "forms": [
      {
        "formId": "01",
        "name": "페르시온",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/005301.png",
        "types": [
          "노말"
        ]
      },
      {
        "formId": "02",
        "name": "알로라 페르시온",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/005302.png",
        "types": [
          "악"
        ]
      }
    ]
  },
  {
    "id": 54,
    "name": "고라파덕",
    "forms": [
      {
        "formId": "01",
        "name": "고라파덕",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/005401.png",
        "types": [
          "물"
        ]
      }
    ]
  },
  {
    "id": 55,
    "name": "골덕",
    "forms": [
      {
        "formId": "01",
        "name": "골덕",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/005501.png",
        "types": [
          "물"
        ]
      }
    ]
  },
  {
    "id": 56,
    "name": "망키",
    "forms": [
      {
        "formId": "01",
        "name": "망키",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/005601.png",
        "types": [
          "격투"
        ]
      }
    ]
  },
  {
    "id": 57,
    "name": "성원숭",
    "forms": [
      {
        "formId": "01",
        "name": "성원숭",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/005701.png",
        "types": [
          "격투"
        ]
      }
    ]
  },
  {
    "id": 58,
    "name": "가디",
    "forms": [
      {
        "formId": "01",
        "name": "가디",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/005801.png",
        "types": [
          "불꽃"
        ]
      },
      {
        "formId": "02",
        "name": "히스이 가디",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/005802.png",
        "types": [
          "불꽃",
          "바위"
        ]
      }
    ]
  },
  {
    "id": 59,
    "name": "윈디",
    "forms": [
      {
        "formId": "01",
        "name": "윈디",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/005901.png",
        "types": [
          "불꽃"
        ]
      },
      {
        "formId": "02",
        "name": "히스이 윈디",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/005902.png",
        "types": [
          "불꽃",
          "바위"
        ]
      }
    ]
  },
  {
    "id": 60,
    "name": "발챙이",
    "forms": [
      {
        "formId": "01",
        "name": "발챙이",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/006001.png",
        "types": [
          "물"
        ]
      }
    ]
  },
  {
    "id": 61,
    "name": "슈륙챙이",
    "forms": [
      {
        "formId": "01",
        "name": "슈륙챙이",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/006101.png",
        "types": [
          "물"
        ]
      }
    ]
  },
  {
    "id": 62,
    "name": "강챙이",
    "forms": [
      {
        "formId": "01",
        "name": "강챙이",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/006201.png",
        "types": [
          "물",
          "격투"
        ]
      }
    ]
  },
  {
    "id": 63,
    "name": "캐이시",
    "forms": [
      {
        "formId": "01",
        "name": "캐이시",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/006301.png",
        "types": [
          "에스퍼"
        ]
      }
    ]
  },
  {
    "id": 64,
    "name": "윤겔라",
    "forms": [
      {
        "formId": "01",
        "name": "윤겔라",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/006401.png",
        "types": [
          "에스퍼"
        ]
      }
    ]
  },
  {
    "id": 65,
    "name": "후딘",
    "forms": [
      {
        "formId": "01",
        "name": "후딘",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/006501.png",
        "types": [
          "에스퍼"
        ]
      },
      {
        "formId": "02",
        "name": "메가후딘",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/006502.png",
        "types": [
          "에스퍼"
        ]
      }
    ]
  },
  {
    "id": 66,
    "name": "알통몬",
    "forms": [
      {
        "formId": "01",
        "name": "알통몬",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/006601.png",
        "types": [
          "격투"
        ]
      }
    ]
  },
  {
    "id": 67,
    "name": "근육몬",
    "forms": [
      {
        "formId": "01",
        "name": "근육몬",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/006701.png",
        "types": [
          "격투"
        ]
      }
    ]
  },
  {
    "id": 68,
    "name": "괴력몬",
    "forms": [
      {
        "formId": "01",
        "name": "괴력몬",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/006801.png",
        "types": [
          "격투"
        ]
      },
      {
        "formId": "02",
        "name": "거다이맥스 괴력몬",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/006802.png",
        "types": [
          "격투"
        ]
      }
    ]
  },
  {
    "id": 69,
    "name": "모다피",
    "forms": [
      {
        "formId": "01",
        "name": "모다피",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/006901.png",
        "types": [
          "풀",
          "독"
        ]
      }
    ]
  },
  {
    "id": 70,
    "name": "우츠동",
    "forms": [
      {
        "formId": "01",
        "name": "우츠동",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/007001.png",
        "types": [
          "풀",
          "독"
        ]
      }
    ]
  },
  {
    "id": 71,
    "name": "우츠보트",
    "forms": [
      {
        "formId": "01",
        "name": "우츠보트",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/007101.png",
        "types": [
          "풀",
          "독"
        ]
      }
    ]
  },
  {
    "id": 72,
    "name": "왕눈해",
    "forms": [
      {
        "formId": "01",
        "name": "왕눈해",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/007201.png",
        "types": [
          "물",
          "독"
        ]
      }
    ]
  },
  {
    "id": 73,
    "name": "독파리",
    "forms": [
      {
        "formId": "01",
        "name": "독파리",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/007301.png",
        "types": [
          "물",
          "독"
        ]
      }
    ]
  },
  {
    "id": 74,
    "name": "꼬마돌",
    "forms": [
      {
        "formId": "01",
        "name": "꼬마돌",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/007401.png",
        "types": [
          "바위",
          "땅"
        ]
      },
      {
        "formId": "02",
        "name": "알로라 꼬마돌",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/007402.png",
        "types": [
          "바위",
          "전기"
        ]
      }
    ]
  },
  {
    "id": 75,
    "name": "데구리",
    "forms": [
      {
        "formId": "01",
        "name": "데구리",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/007501.png",
        "types": [
          "바위",
          "땅"
        ]
      },
      {
        "formId": "02",
        "name": "알로라 데구리",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/007502.png",
        "types": [
          "바위",
          "전기"
        ]
      }
    ]
  },
  {
    "id": 76,
    "name": "딱구리",
    "forms": [
      {
        "formId": "01",
        "name": "딱구리",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/007601.png",
        "types": [
          "바위",
          "땅"
        ]
      },
      {
        "formId": "02",
        "name": "알로라 딱구리",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/007602.png",
        "types": [
          "바위",
          "전기"
        ]
      }
    ]
  },
  {
    "id": 77,
    "name": "포니타",
    "forms": [
      {
        "formId": "01",
        "name": "포니타",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/007701.png",
        "types": [
          "불꽃"
        ]
      },
      {
        "formId": "02",
        "name": "가라르 포니타",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/007702.png",
        "types": [
          "에스퍼"
        ]
      }
    ]
  },
  {
    "id": 78,
    "name": "날쌩마",
    "forms": [
      {
        "formId": "01",
        "name": "날쌩마",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/007801.png",
        "types": [
          "불꽃"
        ]
      },
      {
        "formId": "02",
        "name": "가라르 날쌩마",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/007802.png",
        "types": [
          "에스퍼",
          "페어리"
        ]
      }
    ]
  },
  {
    "id": 79,
    "name": "야돈",
    "forms": [
      {
        "formId": "01",
        "name": "야돈",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/007901.png",
        "types": [
          "물",
          "에스퍼"
        ]
      },
      {
        "formId": "02",
        "name": "가라르 야돈",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/007902.png",
        "types": [
          "에스퍼"
        ]
      }
    ]
  },
  {
    "id": 80,
    "name": "야도란",
    "forms": [
      {
        "formId": "01",
        "name": "야도란",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/008001.png",
        "types": [
          "물",
          "에스퍼"
        ]
      },
      {
        "formId": "02",
        "name": "메가야도란",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/008002.png",
        "types": [
          "물",
          "에스퍼"
        ]
      },
      {
        "formId": "03",
        "name": "가라르 야도란",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/008003.png",
        "types": [
          "독",
          "에스퍼"
        ]
      }
    ]
  },
  {
    "id": 81,
    "name": "코일",
    "forms": [
      {
        "formId": "01",
        "name": "코일",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/008101.png",
        "types": [
          "전기",
          "강철"
        ]
      }
    ]
  },
  {
    "id": 82,
    "name": "레어코일",
    "forms": [
      {
        "formId": "01",
        "name": "레어코일",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/008201.png",
        "types": [
          "전기",
          "강철"
        ]
      }
    ]
  },
  {
    "id": 83,
    "name": "파오리",
    "forms": [
      {
        "formId": "01",
        "name": "파오리",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/008301.png",
        "types": [
          "노말",
          "비행"
        ]
      },
      {
        "formId": "02",
        "name": "가라르 파오리",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/008302.png",
        "types": [
          "격투"
        ]
      }
    ]
  },
  {
    "id": 84,
    "name": "두두",
    "forms": [
      {
        "formId": "01",
        "name": "두두",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/008401.png",
        "types": [
          "노말",
          "비행"
        ]
      }
    ]
  },
  {
    "id": 85,
    "name": "두트리오",
    "forms": [
      {
        "formId": "01",
        "name": "두트리오",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/008501.png",
        "types": [
          "노말",
          "비행"
        ]
      }
    ]
  },
  {
    "id": 86,
    "name": "쥬쥬",
    "forms": [
      {
        "formId": "01",
        "name": "쥬쥬",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/008601.png",
        "types": [
          "물"
        ]
      }
    ]
  },
  {
    "id": 87,
    "name": "쥬레곤",
    "forms": [
      {
        "formId": "01",
        "name": "쥬레곤",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/008701.png",
        "types": [
          "물",
          "얼음"
        ]
      }
    ]
  },
  {
    "id": 88,
    "name": "질퍽이",
    "forms": [
      {
        "formId": "01",
        "name": "질퍽이",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/008801.png",
        "types": [
          "독"
        ]
      },
      {
        "formId": "02",
        "name": "알로라 질퍽이",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/008802.png",
        "types": [
          "독",
          "악"
        ]
      }
    ]
  },
  {
    "id": 89,
    "name": "질뻐기",
    "forms": [
      {
        "formId": "01",
        "name": "질뻐기",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/008901.png",
        "types": [
          "독"
        ]
      },
      {
        "formId": "02",
        "name": "알로라 질뻐기",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/008902.png",
        "types": [
          "독",
          "악"
        ]
      }
    ]
  },
  {
    "id": 90,
    "name": "셀러",
    "forms": [
      {
        "formId": "01",
        "name": "셀러",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/009001.png",
        "types": [
          "물"
        ]
      }
    ]
  },
  {
    "id": 91,
    "name": "파르셀",
    "forms": [
      {
        "formId": "01",
        "name": "파르셀",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/009101.png",
        "types": [
          "물",
          "얼음"
        ]
      }
    ]
  },
  {
    "id": 92,
    "name": "고오스",
    "forms": [
      {
        "formId": "01",
        "name": "고오스",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/009201.png",
        "types": [
          "고스트",
          "독"
        ]
      }
    ]
  },
  {
    "id": 93,
    "name": "고우스트",
    "forms": [
      {
        "formId": "01",
        "name": "고우스트",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/009301.png",
        "types": [
          "고스트",
          "독"
        ]
      }
    ]
  },
  {
    "id": 94,
    "name": "팬텀",
    "forms": [
      {
        "formId": "01",
        "name": "팬텀",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/009401.png",
        "types": [
          "고스트",
          "독"
        ]
      },
      {
        "formId": "02",
        "name": "메가팬텀",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/009402.png",
        "types": [
          "고스트",
          "독"
        ]
      },
      {
        "formId": "03",
        "name": "거다이맥스 팬텀",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/009403.png",
        "types": [
          "고스트",
          "독"
        ]
      }
    ]
  },
  {
    "id": 95,
    "name": "롱스톤",
    "forms": [
      {
        "formId": "01",
        "name": "롱스톤",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/009501.png",
        "types": [
          "바위",
          "땅"
        ]
      }
    ]
  },
  {
    "id": 96,
    "name": "슬리프",
    "forms": [
      {
        "formId": "01",
        "name": "슬리프",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/009601.png",
        "types": [
          "에스퍼"
        ]
      }
    ]
  },
  {
    "id": 97,
    "name": "슬리퍼",
    "forms": [
      {
        "formId": "01",
        "name": "슬리퍼",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/009701.png",
        "types": [
          "에스퍼"
        ]
      }
    ]
  },
  {
    "id": 98,
    "name": "크랩",
    "forms": [
      {
        "formId": "01",
        "name": "크랩",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/009801.png",
        "types": [
          "물"
        ]
      }
    ]
  },
  {
    "id": 99,
    "name": "킹크랩",
    "forms": [
      {
        "formId": "01",
        "name": "킹크랩",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/009901.png",
        "types": [
          "물"
        ]
      },
      {
        "formId": "02",
        "name": "거다이맥스 킹크랩",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/009902.png",
        "types": [
          "물"
        ]
      }
    ]
  },
  {
    "id": 100,
    "name": "찌리리공",
    "forms": [
      {
        "formId": "01",
        "name": "찌리리공",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/010001.png",
        "types": [
          "전기"
        ]
      },
      {
        "formId": "02",
        "name": "히스이 찌리리공",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/010002.png",
        "types": [
          "전기",
          "풀"
        ]
      }
    ]
  },
  {
    "id": 101,
    "name": "붐볼",
    "forms": [
      {
        "formId": "01",
        "name": "붐볼",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/010101.png",
        "types": [
          "전기"
        ]
      },
      {
        "formId": "02",
        "name": "히스이 붐볼",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/010102.png",
        "types": [
          "전기",
          "풀"
        ]
      }
    ]
  },
  {
    "id": 102,
    "name": "아라리",
    "forms": [
      {
        "formId": "01",
        "name": "아라리",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/010201.png",
        "types": [
          "풀",
          "에스퍼"
        ]
      }
    ]
  },
  {
    "id": 103,
    "name": "나시",
    "forms": [
      {
        "formId": "01",
        "name": "나시",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/010301.png",
        "types": [
          "풀",
          "에스퍼"
        ]
      },
      {
        "formId": "02",
        "name": "알로라 나시",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/010302.png",
        "types": [
          "풀",
          "드래곤"
        ]
      }
    ]
  },
  {
    "id": 104,
    "name": "탕구리",
    "forms": [
      {
        "formId": "01",
        "name": "탕구리",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/010401.png",
        "types": [
          "땅"
        ]
      }
    ]
  },
  {
    "id": 105,
    "name": "텅구리",
    "forms": [
      {
        "formId": "01",
        "name": "텅구리",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/010501.png",
        "types": [
          "땅"
        ]
      },
      {
        "formId": "02",
        "name": "알로라 텅구리",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/010502.png",
        "types": [
          "불꽃",
          "고스트"
        ]
      }
    ]
  },
  {
    "id": 106,
    "name": "시라소몬",
    "forms": [
      {
        "formId": "01",
        "name": "시라소몬",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/010601.png",
        "types": [
          "격투"
        ]
      }
    ]
  },
  {
    "id": 107,
    "name": "홍수몬",
    "forms": [
      {
        "formId": "01",
        "name": "홍수몬",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/010701.png",
        "types": [
          "격투"
        ]
      }
    ]
  },
  {
    "id": 108,
    "name": "내루미",
    "forms": [
      {
        "formId": "01",
        "name": "내루미",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/010801.png",
        "types": [
          "노말"
        ]
      }
    ]
  },
  {
    "id": 109,
    "name": "또가스",
    "forms": [
      {
        "formId": "01",
        "name": "또가스",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/010901.png",
        "types": [
          "독"
        ]
      }
    ]
  },
  {
    "id": 110,
    "name": "또도가스",
    "forms": [
      {
        "formId": "01",
        "name": "또도가스",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/011001.png",
        "types": [
          "독"
        ]
      },
      {
        "formId": "02",
        "name": "가라르 또도가스",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/011002.png",
        "types": [
          "독",
          "페어리"
        ]
      }
    ]
  },
  {
    "id": 111,
    "name": "뿔카노",
    "forms": [
      {
        "formId": "01",
        "name": "뿔카노",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/011101.png",
        "types": [
          "땅",
          "바위"
        ]
      }
    ]
  },
  {
    "id": 112,
    "name": "코뿌리",
    "forms": [
      {
        "formId": "01",
        "name": "코뿌리",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/011201.png",
        "types": [
          "땅",
          "바위"
        ]
      }
    ]
  },
  {
    "id": 113,
    "name": "럭키",
    "forms": [
      {
        "formId": "01",
        "name": "럭키",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/011301.png",
        "types": [
          "노말"
        ]
      }
    ]
  },
  {
    "id": 114,
    "name": "덩쿠리",
    "forms": [
      {
        "formId": "01",
        "name": "덩쿠리",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/011401.png",
        "types": [
          "풀"
        ]
      }
    ]
  },
  {
    "id": 115,
    "name": "캥카",
    "forms": [
      {
        "formId": "01",
        "name": "캥카",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/011501.png",
        "types": [
          "노말"
        ]
      },
      {
        "formId": "02",
        "name": "메가캥카",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/011502.png",
        "types": [
          "노말"
        ]
      }
    ]
  },
  {
    "id": 116,
    "name": "쏘드라",
    "forms": [
      {
        "formId": "01",
        "name": "쏘드라",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/011601.png",
        "types": [
          "물"
        ]
      }
    ]
  },
  {
    "id": 117,
    "name": "시드라",
    "forms": [
      {
        "formId": "01",
        "name": "시드라",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/011701.png",
        "types": [
          "물"
        ]
      }
    ]
  },
  {
    "id": 118,
    "name": "콘치",
    "forms": [
      {
        "formId": "01",
        "name": "콘치",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/011801.png",
        "types": [
          "물"
        ]
      }
    ]
  },
  {
    "id": 119,
    "name": "왕콘치",
    "forms": [
      {
        "formId": "01",
        "name": "왕콘치",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/011901.png",
        "types": [
          "물"
        ]
      }
    ]
  },
  {
    "id": 120,
    "name": "별가사리",
    "forms": [
      {
        "formId": "01",
        "name": "별가사리",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/012001.png",
        "types": [
          "물"
        ]
      }
    ]
  },
  {
    "id": 121,
    "name": "아쿠스타",
    "forms": [
      {
        "formId": "01",
        "name": "아쿠스타",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/012101.png",
        "types": [
          "물",
          "에스퍼"
        ]
      }
    ]
  },
  {
    "id": 122,
    "name": "마임맨",
    "forms": [
      {
        "formId": "01",
        "name": "마임맨",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/012201.png",
        "types": [
          "에스퍼",
          "페어리"
        ]
      },
      {
        "formId": "02",
        "name": "가라르 마임맨",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/012202.png",
        "types": [
          "얼음",
          "에스퍼"
        ]
      }
    ]
  },
  {
    "id": 123,
    "name": "스라크",
    "forms": [
      {
        "formId": "01",
        "name": "스라크",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/012301.png",
        "types": [
          "벌레",
          "비행"
        ]
      }
    ]
  },
  {
    "id": 124,
    "name": "루주라",
    "forms": [
      {
        "formId": "01",
        "name": "루주라",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/012401.png",
        "types": [
          "얼음",
          "에스퍼"
        ]
      }
    ]
  },
  {
    "id": 125,
    "name": "에레브",
    "forms": [
      {
        "formId": "01",
        "name": "에레브",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/012501.png",
        "types": [
          "전기"
        ]
      }
    ]
  },
  {
    "id": 126,
    "name": "마그마",
    "forms": [
      {
        "formId": "01",
        "name": "마그마",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/012601.png",
        "types": [
          "불꽃"
        ]
      }
    ]
  },
  {
    "id": 127,
    "name": "쁘사이저",
    "forms": [
      {
        "formId": "01",
        "name": "쁘사이저",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/012701.png",
        "types": [
          "벌레"
        ]
      },
      {
        "formId": "02",
        "name": "메가쁘사이저",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/012702.png",
        "types": [
          "벌레",
          "비행"
        ]
      }
    ]
  },
  {
    "id": 128,
    "name": "켄타로스",
    "forms": [
      {
        "formId": "01",
        "name": "켄타로스",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/012801.png",
        "types": [
          "노말"
        ]
      },
      {
        "formId": "02",
        "name": "팔데아 켄타로스(컴뱃)",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/012802.png",
        "types": [
          "격투"
        ]
      },
      {
        "formId": "03",
        "name": "팔데아 켄타로스(블레이즈)",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/012803.png",
        "types": [
          "격투",
          "불꽃"
        ]
      },
      {
        "formId": "04",
        "name": "팔데아 켄타로스(워터)",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/012804.png",
        "types": [
          "격투",
          "물"
        ]
      }
    ]
  },
  {
    "id": 129,
    "name": "잉어킹",
    "forms": [
      {
        "formId": "01",
        "name": "잉어킹",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/012901.png",
        "types": [
          "물"
        ]
      }
    ]
  },
  {
    "id": 130,
    "name": "갸라도스",
    "forms": [
      {
        "formId": "01",
        "name": "갸라도스",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/013001.png",
        "types": [
          "물",
          "비행"
        ]
      },
      {
        "formId": "02",
        "name": "메가갸라도스",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/013002.png",
        "types": [
          "물",
          "악"
        ]
      }
    ]
  },
  {
    "id": 131,
    "name": "라프라스",
    "forms": [
      {
        "formId": "01",
        "name": "라프라스",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/013101.png",
        "types": [
          "물",
          "얼음"
        ]
      },
      {
        "formId": "02",
        "name": "거다이맥스 라프라스",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/013102.png",
        "types": [
          "물",
          "얼음"
        ]
      }
    ]
  },
  {
    "id": 132,
    "name": "메타몽",
    "forms": [
      {
        "formId": "01",
        "name": "메타몽",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/013201.png",
        "types": [
          "노말"
        ]
      }
    ]
  },
  {
    "id": 133,
    "name": "이브이",
    "forms": [
      {
        "formId": "01",
        "name": "이브이",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/013301.png",
        "types": [
          "노말"
        ]
      },
      {
        "formId": "02",
        "name": "거다이맥스 이브이",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/013302.png",
        "types": [
          "노말"
        ]
      }
    ]
  },
  {
    "id": 134,
    "name": "샤미드",
    "forms": [
      {
        "formId": "01",
        "name": "샤미드",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/013401.png",
        "types": [
          "물"
        ]
      }
    ]
  },
  {
    "id": 135,
    "name": "쥬피썬더",
    "forms": [
      {
        "formId": "01",
        "name": "쥬피썬더",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/013501.png",
        "types": [
          "전기"
        ]
      }
    ]
  },
  {
    "id": 136,
    "name": "부스터",
    "forms": [
      {
        "formId": "01",
        "name": "부스터",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/013601.png",
        "types": [
          "불꽃"
        ]
      }
    ]
  },
  {
    "id": 137,
    "name": "폴리곤",
    "forms": [
      {
        "formId": "01",
        "name": "폴리곤",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/013701.png",
        "types": [
          "노말"
        ]
      }
    ]
  },
  {
    "id": 138,
    "name": "암나이트",
    "forms": [
      {
        "formId": "01",
        "name": "암나이트",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/013801.png",
        "types": [
          "바위",
          "물"
        ]
      }
    ]
  },
  {
    "id": 139,
    "name": "암스타",
    "forms": [
      {
        "formId": "01",
        "name": "암스타",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/013901.png",
        "types": [
          "바위",
          "물"
        ]
      }
    ]
  },
  {
    "id": 140,
    "name": "투구",
    "forms": [
      {
        "formId": "01",
        "name": "투구",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/014001.png",
        "types": [
          "바위",
          "물"
        ]
      }
    ]
  },
  {
    "id": 141,
    "name": "투구푸스",
    "forms": [
      {
        "formId": "01",
        "name": "투구푸스",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/014101.png",
        "types": [
          "바위",
          "물"
        ]
      }
    ]
  },
  {
    "id": 142,
    "name": "프테라",
    "forms": [
      {
        "formId": "01",
        "name": "프테라",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/014201.png",
        "types": [
          "바위",
          "비행"
        ]
      },
      {
        "formId": "02",
        "name": "메가프테라",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/014202.png",
        "types": [
          "바위",
          "비행"
        ]
      }
    ]
  },
  {
    "id": 143,
    "name": "잠만보",
    "forms": [
      {
        "formId": "01",
        "name": "잠만보",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/014301.png",
        "types": [
          "노말"
        ]
      },
      {
        "formId": "02",
        "name": "거다이맥스 잠만보",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/014302.png",
        "types": [
          "노말"
        ]
      }
    ]
  },
  {
    "id": 144,
    "name": "프리져",
    "forms": [
      {
        "formId": "01",
        "name": "프리져",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/014401.png",
        "types": [
          "얼음",
          "비행"
        ]
      },
      {
        "formId": "02",
        "name": "가라르 프리져",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/014402.png",
        "types": [
          "에스퍼",
          "비행"
        ]
      }
    ]
  },
  {
    "id": 145,
    "name": "썬더",
    "forms": [
      {
        "formId": "01",
        "name": "썬더",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/014501.png",
        "types": [
          "전기",
          "비행"
        ]
      },
      {
        "formId": "02",
        "name": "가라르 썬더",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/014502.png",
        "types": [
          "격투",
          "비행"
        ]
      }
    ]
  },
  {
    "id": 146,
    "name": "파이어",
    "forms": [
      {
        "formId": "01",
        "name": "파이어",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/014601.png",
        "types": [
          "불꽃",
          "비행"
        ]
      },
      {
        "formId": "02",
        "name": "가라르 파이어",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/014602.png",
        "types": [
          "악",
          "비행"
        ]
      }
    ]
  },
  {
    "id": 147,
    "name": "미뇽",
    "forms": [
      {
        "formId": "01",
        "name": "미뇽",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/014701.png",
        "types": [
          "드래곤"
        ]
      }
    ]
  },
  {
    "id": 148,
    "name": "신뇽",
    "forms": [
      {
        "formId": "01",
        "name": "신뇽",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/014801.png",
        "types": [
          "드래곤"
        ]
      }
    ]
  },
  {
    "id": 149,
    "name": "망나뇽",
    "forms": [
      {
        "formId": "01",
        "name": "망나뇽",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/014901.png",
        "types": [
          "드래곤",
          "비행"
        ]
      }
    ]
  },
  {
    "id": 150,
    "name": "뮤츠",
    "forms": [
      {
        "formId": "01",
        "name": "뮤츠",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/015001.png",
        "types": [
          "에스퍼"
        ]
      },
      {
        "formId": "02",
        "name": "메가뮤츠X",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/015002.png",
        "types": [
          "에스퍼",
          "격투"
        ]
      },
      {
        "formId": "03",
        "name": "메가뮤츠Y",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/015003.png",
        "types": [
          "에스퍼"
        ]
      }
    ]
  },
  {
    "id": 151,
    "name": "뮤",
    "forms": [
      {
        "formId": "01",
        "name": "뮤",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/015101.png",
        "types": [
          "에스퍼"
        ]
      }
    ]
  },
  {
    "id": 152,
    "name": "치코리타",
    "forms": [
      {
        "formId": "01",
        "name": "치코리타",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/015201.png",
        "types": [
          "풀"
        ]
      }
    ]
  },
  {
    "id": 153,
    "name": "베이리프",
    "forms": [
      {
        "formId": "01",
        "name": "베이리프",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/015301.png",
        "types": [
          "풀"
        ]
      }
    ]
  },
  {
    "id": 154,
    "name": "메가니움",
    "forms": [
      {
        "formId": "01",
        "name": "메가니움",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/015401.png",
        "types": [
          "풀"
        ]
      }
    ]
  },
  {
    "id": 155,
    "name": "브케인",
    "forms": [
      {
        "formId": "01",
        "name": "브케인",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/015501.png",
        "types": [
          "불꽃"
        ]
      }
    ]
  },
  {
    "id": 156,
    "name": "마그케인",
    "forms": [
      {
        "formId": "01",
        "name": "마그케인",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/015601.png",
        "types": [
          "불꽃"
        ]
      }
    ]
  },
  {
    "id": 157,
    "name": "블레이범",
    "forms": [
      {
        "formId": "01",
        "name": "블레이범",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/015701.png",
        "types": [
          "불꽃"
        ]
      },
      {
        "formId": "02",
        "name": "히스이 블레이범",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/015702.png",
        "types": [
          "불꽃",
          "고스트"
        ]
      }
    ]
  },
  {
    "id": 158,
    "name": "리아코",
    "forms": [
      {
        "formId": "01",
        "name": "리아코",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/015801.png",
        "types": [
          "물"
        ]
      }
    ]
  },
  {
    "id": 159,
    "name": "엘리게이",
    "forms": [
      {
        "formId": "01",
        "name": "엘리게이",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/015901.png",
        "types": [
          "물"
        ]
      }
    ]
  },
  {
    "id": 160,
    "name": "장크로다일",
    "forms": [
      {
        "formId": "01",
        "name": "장크로다일",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/016001.png",
        "types": [
          "물"
        ]
      }
    ]
  },
  {
    "id": 161,
    "name": "꼬리선",
    "forms": [
      {
        "formId": "01",
        "name": "꼬리선",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/016101.png",
        "types": [
          "노말"
        ]
      }
    ]
  },
  {
    "id": 162,
    "name": "다꼬리",
    "forms": [
      {
        "formId": "01",
        "name": "다꼬리",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/016201.png",
        "types": [
          "노말"
        ]
      }
    ]
  },
  {
    "id": 163,
    "name": "부우부",
    "forms": [
      {
        "formId": "01",
        "name": "부우부",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/016301.png",
        "types": [
          "노말",
          "비행"
        ]
      }
    ]
  },
  {
    "id": 164,
    "name": "야부엉",
    "forms": [
      {
        "formId": "01",
        "name": "야부엉",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/016401.png",
        "types": [
          "노말",
          "비행"
        ]
      }
    ]
  },
  {
    "id": 165,
    "name": "레디바",
    "forms": [
      {
        "formId": "01",
        "name": "레디바",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/016501.png",
        "types": [
          "벌레",
          "비행"
        ]
      }
    ]
  },
  {
    "id": 166,
    "name": "레디안",
    "forms": [
      {
        "formId": "01",
        "name": "레디안",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/016601.png",
        "types": [
          "벌레",
          "비행"
        ]
      }
    ]
  },
  {
    "id": 167,
    "name": "페이검",
    "forms": [
      {
        "formId": "01",
        "name": "페이검",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/016701.png",
        "types": [
          "벌레",
          "독"
        ]
      }
    ]
  },
  {
    "id": 168,
    "name": "아리아도스",
    "forms": [
      {
        "formId": "01",
        "name": "아리아도스",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/016801.png",
        "types": [
          "벌레",
          "독"
        ]
      }
    ]
  },
  {
    "id": 169,
    "name": "크로뱃",
    "forms": [
      {
        "formId": "01",
        "name": "크로뱃",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/016901.png",
        "types": [
          "독",
          "비행"
        ]
      }
    ]
  },
  {
    "id": 170,
    "name": "초라기",
    "forms": [
      {
        "formId": "01",
        "name": "초라기",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/017001.png",
        "types": [
          "물",
          "전기"
        ]
      }
    ]
  },
  {
    "id": 171,
    "name": "랜턴",
    "forms": [
      {
        "formId": "01",
        "name": "랜턴",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/017101.png",
        "types": [
          "물",
          "전기"
        ]
      }
    ]
  },
  {
    "id": 172,
    "name": "피츄",
    "forms": [
      {
        "formId": "01",
        "name": "피츄",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/017201.png",
        "types": [
          "전기"
        ]
      }
    ]
  },
  {
    "id": 173,
    "name": "삐",
    "forms": [
      {
        "formId": "01",
        "name": "삐",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/017301.png",
        "types": [
          "페어리"
        ]
      }
    ]
  },
  {
    "id": 174,
    "name": "푸푸린",
    "forms": [
      {
        "formId": "01",
        "name": "푸푸린",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/017401.png",
        "types": [
          "노말",
          "페어리"
        ]
      }
    ]
  },
  {
    "id": 175,
    "name": "토게피",
    "forms": [
      {
        "formId": "01",
        "name": "토게피",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/017501.png",
        "types": [
          "페어리"
        ]
      }
    ]
  },
  {
    "id": 176,
    "name": "토게틱",
    "forms": [
      {
        "formId": "01",
        "name": "토게틱",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/017601.png",
        "types": [
          "페어리",
          "비행"
        ]
      }
    ]
  },
  {
    "id": 177,
    "name": "네이티",
    "forms": [
      {
        "formId": "01",
        "name": "네이티",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/017701.png",
        "types": [
          "에스퍼",
          "비행"
        ]
      }
    ]
  },
  {
    "id": 178,
    "name": "네이티오",
    "forms": [
      {
        "formId": "01",
        "name": "네이티오",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/017801.png",
        "types": [
          "에스퍼",
          "비행"
        ]
      }
    ]
  },
  {
    "id": 179,
    "name": "메리프",
    "forms": [
      {
        "formId": "01",
        "name": "메리프",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/017901.png",
        "types": [
          "전기"
        ]
      }
    ]
  },
  {
    "id": 180,
    "name": "보송송",
    "forms": [
      {
        "formId": "01",
        "name": "보송송",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/018001.png",
        "types": [
          "전기"
        ]
      }
    ]
  },
  {
    "id": 181,
    "name": "전룡",
    "forms": [
      {
        "formId": "01",
        "name": "전룡",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/018101.png",
        "types": [
          "전기"
        ]
      },
      {
        "formId": "02",
        "name": "메가전룡",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/018102.png",
        "types": [
          "전기",
          "드래곤"
        ]
      }
    ]
  },
  {
    "id": 182,
    "name": "아르코",
    "forms": [
      {
        "formId": "01",
        "name": "아르코",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/018201.png",
        "types": [
          "풀"
        ]
      }
    ]
  },
  {
    "id": 183,
    "name": "마릴",
    "forms": [
      {
        "formId": "01",
        "name": "마릴",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/018301.png",
        "types": [
          "물",
          "페어리"
        ]
      }
    ]
  },
  {
    "id": 184,
    "name": "마릴리",
    "forms": [
      {
        "formId": "01",
        "name": "마릴리",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/018401.png",
        "types": [
          "물",
          "페어리"
        ]
      }
    ]
  },
  {
    "id": 185,
    "name": "꼬지모",
    "forms": [
      {
        "formId": "01",
        "name": "꼬지모",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/018501.png",
        "types": [
          "바위"
        ]
      }
    ]
  },
  {
    "id": 186,
    "name": "왕구리",
    "forms": [
      {
        "formId": "01",
        "name": "왕구리",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/018601.png",
        "types": [
          "물"
        ]
      }
    ]
  },
  {
    "id": 187,
    "name": "통통코",
    "forms": [
      {
        "formId": "01",
        "name": "통통코",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/018701.png",
        "types": [
          "풀",
          "비행"
        ]
      }
    ]
  },
  {
    "id": 188,
    "name": "두코",
    "forms": [
      {
        "formId": "01",
        "name": "두코",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/018801.png",
        "types": [
          "풀",
          "비행"
        ]
      }
    ]
  },
  {
    "id": 189,
    "name": "솜솜코",
    "forms": [
      {
        "formId": "01",
        "name": "솜솜코",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/018901.png",
        "types": [
          "풀",
          "비행"
        ]
      }
    ]
  },
  {
    "id": 190,
    "name": "에이팜",
    "forms": [
      {
        "formId": "01",
        "name": "에이팜",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/019001.png",
        "types": [
          "노말"
        ]
      }
    ]
  },
  {
    "id": 191,
    "name": "해너츠",
    "forms": [
      {
        "formId": "01",
        "name": "해너츠",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/019101.png",
        "types": [
          "풀"
        ]
      }
    ]
  },
  {
    "id": 192,
    "name": "해루미",
    "forms": [
      {
        "formId": "01",
        "name": "해루미",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/019201.png",
        "types": [
          "풀"
        ]
      }
    ]
  },
  {
    "id": 193,
    "name": "왕자리",
    "forms": [
      {
        "formId": "01",
        "name": "왕자리",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/019301.png",
        "types": [
          "벌레",
          "비행"
        ]
      }
    ]
  },
  {
    "id": 194,
    "name": "우파",
    "forms": [
      {
        "formId": "01",
        "name": "우파",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/019401.png",
        "types": [
          "물",
          "땅"
        ]
      },
      {
        "formId": "02",
        "name": "팔데아 우파",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/019402.png",
        "types": [
          "독",
          "땅"
        ]
      }
    ]
  },
  {
    "id": 195,
    "name": "누오",
    "forms": [
      {
        "formId": "01",
        "name": "누오",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/019501.png",
        "types": [
          "물",
          "땅"
        ]
      }
    ]
  },
  {
    "id": 196,
    "name": "에브이",
    "forms": [
      {
        "formId": "01",
        "name": "에브이",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/019601.png",
        "types": [
          "에스퍼"
        ]
      }
    ]
  },
  {
    "id": 197,
    "name": "블래키",
    "forms": [
      {
        "formId": "01",
        "name": "블래키",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/019701.png",
        "types": [
          "악"
        ]
      }
    ]
  },
  {
    "id": 198,
    "name": "니로우",
    "forms": [
      {
        "formId": "01",
        "name": "니로우",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/019801.png",
        "types": [
          "악",
          "비행"
        ]
      }
    ]
  },
  {
    "id": 199,
    "name": "야도킹",
    "forms": [
      {
        "formId": "01",
        "name": "야도킹",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/019901.png",
        "types": [
          "물",
          "에스퍼"
        ]
      },
      {
        "formId": "02",
        "name": "가라르 야도킹",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/019902.png",
        "types": [
          "독",
          "에스퍼"
        ]
      }
    ]
  },
  {
    "id": 200,
    "name": "무우마",
    "forms": [
      {
        "formId": "01",
        "name": "무우마",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/020001.png",
        "types": [
          "고스트"
        ]
      }
    ]
  },
  {
    "id": 201,
    "name": "안농",
    "forms": [
      {
        "formId": "01",
        "name": "안농",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/020101.png",
        "types": [
          "에스퍼"
        ]
      }
    ]
  },
  {
    "id": 202,
    "name": "마자용",
    "forms": [
      {
        "formId": "01",
        "name": "마자용",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/020201.png",
        "types": [
          "에스퍼"
        ]
      }
    ]
  },
  {
    "id": 203,
    "name": "키링키",
    "forms": [
      {
        "formId": "01",
        "name": "키링키",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/020301.png",
        "types": [
          "노말",
          "에스퍼"
        ]
      }
    ]
  },
  {
    "id": 204,
    "name": "피콘",
    "forms": [
      {
        "formId": "01",
        "name": "피콘",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/020401.png",
        "types": [
          "벌레"
        ]
      }
    ]
  },
  {
    "id": 205,
    "name": "쏘콘",
    "forms": [
      {
        "formId": "01",
        "name": "쏘콘",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/020501.png",
        "types": [
          "벌레",
          "강철"
        ]
      }
    ]
  },
  {
    "id": 206,
    "name": "노고치",
    "forms": [
      {
        "formId": "01",
        "name": "노고치",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/020601.png",
        "types": [
          "노말"
        ]
      }
    ]
  },
  {
    "id": 207,
    "name": "글라이거",
    "forms": [
      {
        "formId": "01",
        "name": "글라이거",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/020701.png",
        "types": [
          "땅",
          "비행"
        ]
      }
    ]
  },
  {
    "id": 208,
    "name": "강철톤",
    "forms": [
      {
        "formId": "01",
        "name": "강철톤",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/020801.png",
        "types": [
          "강철",
          "땅"
        ]
      },
      {
        "formId": "02",
        "name": "메가강철톤",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/020802.png",
        "types": [
          "강철",
          "땅"
        ]
      }
    ]
  },
  {
    "id": 209,
    "name": "블루",
    "forms": [
      {
        "formId": "01",
        "name": "블루",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/020901.png",
        "types": [
          "페어리"
        ]
      }
    ]
  },
  {
    "id": 210,
    "name": "그랑블루",
    "forms": [
      {
        "formId": "01",
        "name": "그랑블루",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/021001.png",
        "types": [
          "페어리"
        ]
      }
    ]
  },
  {
    "id": 211,
    "name": "침바루",
    "forms": [
      {
        "formId": "01",
        "name": "침바루",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/021101.png",
        "types": [
          "물",
          "독"
        ]
      },
      {
        "formId": "02",
        "name": "히스이 침바루",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/021102.png",
        "types": [
          "악",
          "독"
        ]
      }
    ]
  },
  {
    "id": 212,
    "name": "핫삼",
    "forms": [
      {
        "formId": "01",
        "name": "핫삼",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/021201.png",
        "types": [
          "벌레",
          "강철"
        ]
      },
      {
        "formId": "02",
        "name": "메가핫삼",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/021202.png",
        "types": [
          "벌레",
          "강철"
        ]
      }
    ]
  },
  {
    "id": 213,
    "name": "단단지",
    "forms": [
      {
        "formId": "01",
        "name": "단단지",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/021301.png",
        "types": [
          "벌레",
          "바위"
        ]
      }
    ]
  },
  {
    "id": 214,
    "name": "헤라크로스",
    "forms": [
      {
        "formId": "01",
        "name": "헤라크로스",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/021401.png",
        "types": [
          "벌레",
          "격투"
        ]
      },
      {
        "formId": "02",
        "name": "메가헤라크로스",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/021402.png",
        "types": [
          "벌레",
          "격투"
        ]
      }
    ]
  },
  {
    "id": 215,
    "name": "포푸니",
    "forms": [
      {
        "formId": "01",
        "name": "포푸니",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/021501.png",
        "types": [
          "악",
          "얼음"
        ]
      },
      {
        "formId": "02",
        "name": "히스이 포푸니",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/021502.png",
        "types": [
          "격투",
          "독"
        ]
      }
    ]
  },
  {
    "id": 216,
    "name": "깜지곰",
    "forms": [
      {
        "formId": "01",
        "name": "깜지곰",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/021601.png",
        "types": [
          "노말"
        ]
      }
    ]
  },
  {
    "id": 217,
    "name": "링곰",
    "forms": [
      {
        "formId": "01",
        "name": "링곰",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/021701.png",
        "types": [
          "노말"
        ]
      }
    ]
  },
  {
    "id": 218,
    "name": "마그마그",
    "forms": [
      {
        "formId": "01",
        "name": "마그마그",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/021801.png",
        "types": [
          "불꽃"
        ]
      }
    ]
  },
  {
    "id": 219,
    "name": "마그카르고",
    "forms": [
      {
        "formId": "01",
        "name": "마그카르고",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/021901.png",
        "types": [
          "불꽃",
          "바위"
        ]
      }
    ]
  },
  {
    "id": 220,
    "name": "꾸꾸리",
    "forms": [
      {
        "formId": "01",
        "name": "꾸꾸리",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/022001.png",
        "types": [
          "얼음",
          "땅"
        ]
      }
    ]
  },
  {
    "id": 221,
    "name": "메꾸리",
    "forms": [
      {
        "formId": "01",
        "name": "메꾸리",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/022101.png",
        "types": [
          "얼음",
          "땅"
        ]
      }
    ]
  },
  {
    "id": 222,
    "name": "코산호",
    "forms": [
      {
        "formId": "01",
        "name": "코산호",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/022201.png",
        "types": [
          "물",
          "바위"
        ]
      }
    ]
  },
  {
    "id": 223,
    "name": "총어",
    "forms": [
      {
        "formId": "01",
        "name": "총어",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/022301.png",
        "types": [
          "물"
        ]
      }
    ]
  },
  {
    "id": 224,
    "name": "대포무노",
    "forms": [
      {
        "formId": "01",
        "name": "대포무노",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/022401.png",
        "types": [
          "물"
        ]
      }
    ]
  },
  {
    "id": 225,
    "name": "딜리버드",
    "forms": [
      {
        "formId": "01",
        "name": "딜리버드",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/022501.png",
        "types": [
          "얼음",
          "비행"
        ]
      }
    ]
  },
  {
    "id": 226,
    "name": "만타인",
    "forms": [
      {
        "formId": "01",
        "name": "만타인",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/022601.png",
        "types": [
          "물",
          "비행"
        ]
      }
    ]
  },
  {
    "id": 227,
    "name": "무장조",
    "forms": [
      {
        "formId": "01",
        "name": "무장조",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/022701.png",
        "types": [
          "강철",
          "비행"
        ]
      }
    ]
  },
  {
    "id": 228,
    "name": "델빌",
    "forms": [
      {
        "formId": "01",
        "name": "델빌",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/022801.png",
        "types": [
          "악",
          "불꽃"
        ]
      }
    ]
  },
  {
    "id": 229,
    "name": "헬가",
    "forms": [
      {
        "formId": "01",
        "name": "헬가",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/022901.png",
        "types": [
          "악",
          "불꽃"
        ]
      },
      {
        "formId": "02",
        "name": "메가헬가",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/022902.png",
        "types": [
          "악",
          "불꽃"
        ]
      }
    ]
  },
  {
    "id": 230,
    "name": "킹드라",
    "forms": [
      {
        "formId": "01",
        "name": "킹드라",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/023001.png",
        "types": [
          "물",
          "드래곤"
        ]
      }
    ]
  },
  {
    "id": 231,
    "name": "코코리",
    "forms": [
      {
        "formId": "01",
        "name": "코코리",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/023101.png",
        "types": [
          "땅"
        ]
      }
    ]
  },
  {
    "id": 232,
    "name": "코리갑",
    "forms": [
      {
        "formId": "01",
        "name": "코리갑",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/023201.png",
        "types": [
          "땅"
        ]
      }
    ]
  },
  {
    "id": 233,
    "name": "폴리곤2",
    "forms": [
      {
        "formId": "01",
        "name": "폴리곤2",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/023301.png",
        "types": [
          "노말"
        ]
      }
    ]
  },
  {
    "id": 234,
    "name": "노라키",
    "forms": [
      {
        "formId": "01",
        "name": "노라키",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/023401.png",
        "types": [
          "노말"
        ]
      }
    ]
  },
  {
    "id": 235,
    "name": "루브도",
    "forms": [
      {
        "formId": "01",
        "name": "루브도",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/023501.png",
        "types": [
          "노말"
        ]
      }
    ]
  },
  {
    "id": 236,
    "name": "배루키",
    "forms": [
      {
        "formId": "01",
        "name": "배루키",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/023601.png",
        "types": [
          "격투"
        ]
      }
    ]
  },
  {
    "id": 237,
    "name": "카포에라",
    "forms": [
      {
        "formId": "01",
        "name": "카포에라",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/023701.png",
        "types": [
          "격투"
        ]
      }
    ]
  },
  {
    "id": 238,
    "name": "뽀뽀라",
    "forms": [
      {
        "formId": "01",
        "name": "뽀뽀라",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/023801.png",
        "types": [
          "얼음",
          "에스퍼"
        ]
      }
    ]
  },
  {
    "id": 239,
    "name": "에레키드",
    "forms": [
      {
        "formId": "01",
        "name": "에레키드",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/023901.png",
        "types": [
          "전기"
        ]
      }
    ]
  },
  {
    "id": 240,
    "name": "마그비",
    "forms": [
      {
        "formId": "01",
        "name": "마그비",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/024001.png",
        "types": [
          "불꽃"
        ]
      }
    ]
  },
  {
    "id": 241,
    "name": "밀탱크",
    "forms": [
      {
        "formId": "01",
        "name": "밀탱크",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/024101.png",
        "types": [
          "노말"
        ]
      }
    ]
  },
  {
    "id": 242,
    "name": "해피너스",
    "forms": [
      {
        "formId": "01",
        "name": "해피너스",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/024201.png",
        "types": [
          "노말"
        ]
      }
    ]
  },
  {
    "id": 243,
    "name": "라이코",
    "forms": [
      {
        "formId": "01",
        "name": "라이코",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/024301.png",
        "types": [
          "전기"
        ]
      }
    ]
  },
  {
    "id": 244,
    "name": "앤테이",
    "forms": [
      {
        "formId": "01",
        "name": "앤테이",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/024401.png",
        "types": [
          "불꽃"
        ]
      }
    ]
  },
  {
    "id": 245,
    "name": "스이쿤",
    "forms": [
      {
        "formId": "01",
        "name": "스이쿤",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/024501.png",
        "types": [
          "물"
        ]
      }
    ]
  },
  {
    "id": 246,
    "name": "애버라스",
    "forms": [
      {
        "formId": "01",
        "name": "애버라스",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/024601.png",
        "types": [
          "바위",
          "땅"
        ]
      }
    ]
  },
  {
    "id": 247,
    "name": "데기라스",
    "forms": [
      {
        "formId": "01",
        "name": "데기라스",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/024701.png",
        "types": [
          "바위",
          "땅"
        ]
      }
    ]
  },
  {
    "id": 248,
    "name": "마기라스",
    "forms": [
      {
        "formId": "01",
        "name": "마기라스",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/024801.png",
        "types": [
          "바위",
          "악"
        ]
      },
      {
        "formId": "02",
        "name": "메가마기라스",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/024802.png",
        "types": [
          "바위",
          "악"
        ]
      }
    ]
  },
  {
    "id": 249,
    "name": "루기아",
    "forms": [
      {
        "formId": "01",
        "name": "루기아",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/024901.png",
        "types": [
          "에스퍼",
          "비행"
        ]
      }
    ]
  },
  {
    "id": 250,
    "name": "칠색조",
    "forms": [
      {
        "formId": "01",
        "name": "칠색조",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/025001.png",
        "types": [
          "불꽃",
          "비행"
        ]
      }
    ]
  },
  {
    "id": 251,
    "name": "세레비",
    "forms": [
      {
        "formId": "01",
        "name": "세레비",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/025101.png",
        "types": [
          "에스퍼",
          "풀"
        ]
      }
    ]
  },
  {
    "id": 252,
    "name": "나무지기",
    "forms": [
      {
        "formId": "01",
        "name": "나무지기",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/025201.png",
        "types": [
          "풀"
        ]
      }
    ]
  },
  {
    "id": 253,
    "name": "나무돌이",
    "forms": [
      {
        "formId": "01",
        "name": "나무돌이",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/025301.png",
        "types": [
          "풀"
        ]
      }
    ]
  },
  {
    "id": 254,
    "name": "나무킹",
    "forms": [
      {
        "formId": "01",
        "name": "나무킹",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/025401.png",
        "types": [
          "풀"
        ]
      },
      {
        "formId": "02",
        "name": "메가나무킹",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/025402.png",
        "types": [
          "풀",
          "드래곤"
        ]
      }
    ]
  },
  {
    "id": 255,
    "name": "아차모",
    "forms": [
      {
        "formId": "01",
        "name": "아차모",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/025501.png",
        "types": [
          "불꽃"
        ]
      }
    ]
  },
  {
    "id": 256,
    "name": "영치코",
    "forms": [
      {
        "formId": "01",
        "name": "영치코",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/025601.png",
        "types": [
          "불꽃",
          "격투"
        ]
      }
    ]
  },
  {
    "id": 257,
    "name": "번치코",
    "forms": [
      {
        "formId": "01",
        "name": "번치코",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/025701.png",
        "types": [
          "불꽃",
          "격투"
        ]
      },
      {
        "formId": "02",
        "name": "메가번치코",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/025702.png",
        "types": [
          "불꽃",
          "격투"
        ]
      }
    ]
  },
  {
    "id": 258,
    "name": "물짱이",
    "forms": [
      {
        "formId": "01",
        "name": "물짱이",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/025801.png",
        "types": [
          "물"
        ]
      }
    ]
  },
  {
    "id": 259,
    "name": "늪짱이",
    "forms": [
      {
        "formId": "01",
        "name": "늪짱이",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/025901.png",
        "types": [
          "물",
          "땅"
        ]
      }
    ]
  },
  {
    "id": 260,
    "name": "대짱이",
    "forms": [
      {
        "formId": "01",
        "name": "대짱이",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/026001.png",
        "types": [
          "물",
          "땅"
        ]
      },
      {
        "formId": "02",
        "name": "메가대짱이",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/026002.png",
        "types": [
          "물",
          "땅"
        ]
      }
    ]
  },
  {
    "id": 261,
    "name": "포챠나",
    "forms": [
      {
        "formId": "01",
        "name": "포챠나",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/026101.png",
        "types": [
          "악"
        ]
      }
    ]
  },
  {
    "id": 262,
    "name": "그라에나",
    "forms": [
      {
        "formId": "01",
        "name": "그라에나",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/026201.png",
        "types": [
          "악"
        ]
      }
    ]
  },
  {
    "id": 263,
    "name": "지그제구리",
    "forms": [
      {
        "formId": "01",
        "name": "지그제구리",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/026301.png",
        "types": [
          "노말"
        ]
      },
      {
        "formId": "02",
        "name": "가라르 지그제구리",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/026302.png",
        "types": [
          "악",
          "노말"
        ]
      }
    ]
  },
  {
    "id": 264,
    "name": "직구리",
    "forms": [
      {
        "formId": "01",
        "name": "직구리",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/026401.png",
        "types": [
          "노말"
        ]
      },
      {
        "formId": "02",
        "name": "가라르 직구리",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/026402.png",
        "types": [
          "악",
          "노말"
        ]
      }
    ]
  },
  {
    "id": 265,
    "name": "개무소",
    "forms": [
      {
        "formId": "01",
        "name": "개무소",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/026501.png",
        "types": [
          "벌레"
        ]
      }
    ]
  },
  {
    "id": 266,
    "name": "실쿤",
    "forms": [
      {
        "formId": "01",
        "name": "실쿤",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/026601.png",
        "types": [
          "벌레"
        ]
      }
    ]
  },
  {
    "id": 267,
    "name": "뷰티플라이",
    "forms": [
      {
        "formId": "01",
        "name": "뷰티플라이",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/026701.png",
        "types": [
          "벌레",
          "비행"
        ]
      }
    ]
  },
  {
    "id": 268,
    "name": "카스쿤",
    "forms": [
      {
        "formId": "01",
        "name": "카스쿤",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/026801.png",
        "types": [
          "벌레"
        ]
      }
    ]
  },
  {
    "id": 269,
    "name": "독케일",
    "forms": [
      {
        "formId": "01",
        "name": "독케일",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/026901.png",
        "types": [
          "벌레",
          "독"
        ]
      }
    ]
  },
  {
    "id": 270,
    "name": "연꽃몬",
    "forms": [
      {
        "formId": "01",
        "name": "연꽃몬",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/027001.png",
        "types": [
          "물",
          "풀"
        ]
      }
    ]
  },
  {
    "id": 271,
    "name": "로토스",
    "forms": [
      {
        "formId": "01",
        "name": "로토스",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/027101.png",
        "types": [
          "물",
          "풀"
        ]
      }
    ]
  },
  {
    "id": 272,
    "name": "로파파",
    "forms": [
      {
        "formId": "01",
        "name": "로파파",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/027201.png",
        "types": [
          "물",
          "풀"
        ]
      }
    ]
  },
  {
    "id": 273,
    "name": "도토링",
    "forms": [
      {
        "formId": "01",
        "name": "도토링",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/027301.png",
        "types": [
          "풀"
        ]
      }
    ]
  },
  {
    "id": 274,
    "name": "잎새코",
    "forms": [
      {
        "formId": "01",
        "name": "잎새코",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/027401.png",
        "types": [
          "풀",
          "악"
        ]
      }
    ]
  },
  {
    "id": 275,
    "name": "다탱구",
    "forms": [
      {
        "formId": "01",
        "name": "다탱구",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/027501.png",
        "types": [
          "풀",
          "악"
        ]
      }
    ]
  },
  {
    "id": 276,
    "name": "테일로",
    "forms": [
      {
        "formId": "01",
        "name": "테일로",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/027601.png",
        "types": [
          "노말",
          "비행"
        ]
      }
    ]
  },
  {
    "id": 277,
    "name": "스왈로",
    "forms": [
      {
        "formId": "01",
        "name": "스왈로",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/027701.png",
        "types": [
          "노말",
          "비행"
        ]
      }
    ]
  },
  {
    "id": 278,
    "name": "갈모매",
    "forms": [
      {
        "formId": "01",
        "name": "갈모매",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/027801.png",
        "types": [
          "물",
          "비행"
        ]
      }
    ]
  },
  {
    "id": 279,
    "name": "패리퍼",
    "forms": [
      {
        "formId": "01",
        "name": "패리퍼",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/027901.png",
        "types": [
          "물",
          "비행"
        ]
      }
    ]
  },
  {
    "id": 280,
    "name": "랄토스",
    "forms": [
      {
        "formId": "01",
        "name": "랄토스",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/028001.png",
        "types": [
          "에스퍼",
          "페어리"
        ]
      }
    ]
  },
  {
    "id": 281,
    "name": "킬리아",
    "forms": [
      {
        "formId": "01",
        "name": "킬리아",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/028101.png",
        "types": [
          "에스퍼",
          "페어리"
        ]
      }
    ]
  },
  {
    "id": 282,
    "name": "가디안",
    "forms": [
      {
        "formId": "01",
        "name": "가디안",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/028201.png",
        "types": [
          "에스퍼",
          "페어리"
        ]
      }
    ]
  },
  {
    "id": 283,
    "name": "비구술",
    "forms": [
      {
        "formId": "01",
        "name": "비구술",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/028301.png",
        "types": [
          "벌레",
          "물"
        ]
      }
    ]
  },
  {
    "id": 284,
    "name": "비나방",
    "forms": [
      {
        "formId": "01",
        "name": "비나방",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/028401.png",
        "types": [
          "벌레",
          "비행"
        ]
      }
    ]
  },
  {
    "id": 285,
    "name": "버섯꼬",
    "forms": [
      {
        "formId": "01",
        "name": "버섯꼬",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/028501.png",
        "types": [
          "풀"
        ]
      }
    ]
  },
  {
    "id": 286,
    "name": "버섯모",
    "forms": [
      {
        "formId": "01",
        "name": "버섯모",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/028601.png",
        "types": [
          "풀",
          "격투"
        ]
      }
    ]
  },
  {
    "id": 287,
    "name": "게을로",
    "forms": [
      {
        "formId": "01",
        "name": "게을로",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/028701.png",
        "types": [
          "노말"
        ]
      }
    ]
  },
  {
    "id": 288,
    "name": "발바로",
    "forms": [
      {
        "formId": "01",
        "name": "발바로",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/028801.png",
        "types": [
          "노말"
        ]
      }
    ]
  },
  {
    "id": 289,
    "name": "게을킹",
    "forms": [
      {
        "formId": "01",
        "name": "게을킹",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/028901.png",
        "types": [
          "노말"
        ]
      }
    ]
  },
  {
    "id": 290,
    "name": "토중몬",
    "forms": [
      {
        "formId": "01",
        "name": "토중몬",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/029001.png",
        "types": [
          "벌레",
          "땅"
        ]
      }
    ]
  },
  {
    "id": 291,
    "name": "아이스크",
    "forms": [
      {
        "formId": "01",
        "name": "아이스크",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/029101.png",
        "types": [
          "벌레",
          "비행"
        ]
      }
    ]
  },
  {
    "id": 292,
    "name": "껍질몬",
    "forms": [
      {
        "formId": "01",
        "name": "껍질몬",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/029201.png",
        "types": [
          "벌레",
          "고스트"
        ]
      }
    ]
  },
  {
    "id": 293,
    "name": "소곤룡",
    "forms": [
      {
        "formId": "01",
        "name": "소곤룡",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/029301.png",
        "types": [
          "노말"
        ]
      }
    ]
  },
  {
    "id": 294,
    "name": "노공룡",
    "forms": [
      {
        "formId": "01",
        "name": "노공룡",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/029401.png",
        "types": [
          "노말"
        ]
      }
    ]
  },
  {
    "id": 295,
    "name": "폭음룡",
    "forms": [
      {
        "formId": "01",
        "name": "폭음룡",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/029501.png",
        "types": [
          "노말"
        ]
      }
    ]
  },
  {
    "id": 296,
    "name": "마크탕",
    "forms": [
      {
        "formId": "01",
        "name": "마크탕",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/029601.png",
        "types": [
          "격투"
        ]
      }
    ]
  },
  {
    "id": 297,
    "name": "하리뭉",
    "forms": [
      {
        "formId": "01",
        "name": "하리뭉",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/029701.png",
        "types": [
          "격투"
        ]
      }
    ]
  },
  {
    "id": 298,
    "name": "루리리",
    "forms": [
      {
        "formId": "01",
        "name": "루리리",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/029801.png",
        "types": [
          "노말",
          "페어리"
        ]
      }
    ]
  },
  {
    "id": 299,
    "name": "코코파스",
    "forms": [
      {
        "formId": "01",
        "name": "코코파스",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/029901.png",
        "types": [
          "바위"
        ]
      }
    ]
  },
  {
    "id": 300,
    "name": "에나비",
    "forms": [
      {
        "formId": "01",
        "name": "에나비",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/030001.png",
        "types": [
          "노말"
        ]
      }
    ]
  },
  {
    "id": 301,
    "name": "델케티",
    "forms": [
      {
        "formId": "01",
        "name": "델케티",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/030101.png",
        "types": [
          "노말"
        ]
      }
    ]
  },
  {
    "id": 302,
    "name": "깜까미",
    "forms": [
      {
        "formId": "01",
        "name": "깜까미",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/030201.png",
        "types": [
          "악",
          "고스트"
        ]
      },
      {
        "formId": "02",
        "name": "메가깜까미",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/030202.png",
        "types": [
          "악",
          "고스트"
        ]
      }
    ]
  },
  {
    "id": 303,
    "name": "입치트",
    "forms": [
      {
        "formId": "01",
        "name": "입치트",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/030301.png",
        "types": [
          "강철",
          "페어리"
        ]
      },
      {
        "formId": "02",
        "name": "메가입치트",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/030302.png",
        "types": [
          "강철",
          "페어리"
        ]
      }
    ]
  },
  {
    "id": 304,
    "name": "가보리",
    "forms": [
      {
        "formId": "01",
        "name": "가보리",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/030401.png",
        "types": [
          "강철",
          "바위"
        ]
      }
    ]
  },
  {
    "id": 305,
    "name": "갱도라",
    "forms": [
      {
        "formId": "01",
        "name": "갱도라",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/030501.png",
        "types": [
          "강철",
          "바위"
        ]
      }
    ]
  },
  {
    "id": 306,
    "name": "보스로라",
    "forms": [
      {
        "formId": "01",
        "name": "보스로라",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/030601.png",
        "types": [
          "강철",
          "바위"
        ]
      },
      {
        "formId": "02",
        "name": "메가보스로라",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/030602.png",
        "types": [
          "강철"
        ]
      }
    ]
  },
  {
    "id": 307,
    "name": "요가랑",
    "forms": [
      {
        "formId": "01",
        "name": "요가랑",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/030701.png",
        "types": [
          "격투",
          "에스퍼"
        ]
      }
    ]
  },
  {
    "id": 308,
    "name": "요가램",
    "forms": [
      {
        "formId": "01",
        "name": "요가램",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/030801.png",
        "types": [
          "격투",
          "에스퍼"
        ]
      },
      {
        "formId": "02",
        "name": "메가요가램",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/030802.png",
        "types": [
          "격투",
          "에스퍼"
        ]
      }
    ]
  },
  {
    "id": 309,
    "name": "썬더라이",
    "forms": [
      {
        "formId": "01",
        "name": "썬더라이",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/030901.png",
        "types": [
          "전기"
        ]
      }
    ]
  },
  {
    "id": 310,
    "name": "썬더볼트",
    "forms": [
      {
        "formId": "01",
        "name": "썬더볼트",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/031001.png",
        "types": [
          "전기"
        ]
      },
      {
        "formId": "02",
        "name": "메가썬더볼트",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/031002.png",
        "types": [
          "전기"
        ]
      }
    ]
  },
  {
    "id": 311,
    "name": "플러시",
    "forms": [
      {
        "formId": "01",
        "name": "플러시",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/031101.png",
        "types": [
          "전기"
        ]
      }
    ]
  },
  {
    "id": 312,
    "name": "마이농",
    "forms": [
      {
        "formId": "01",
        "name": "마이농",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/031201.png",
        "types": [
          "전기"
        ]
      }
    ]
  },
  {
    "id": 313,
    "name": "볼비트",
    "forms": [
      {
        "formId": "01",
        "name": "볼비트",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/031301.png",
        "types": [
          "벌레"
        ]
      }
    ]
  },
  {
    "id": 314,
    "name": "네오비트",
    "forms": [
      {
        "formId": "01",
        "name": "네오비트",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/031401.png",
        "types": [
          "벌레"
        ]
      }
    ]
  },
  {
    "id": 315,
    "name": "로젤리아",
    "forms": [
      {
        "formId": "01",
        "name": "로젤리아",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/031501.png",
        "types": [
          "풀",
          "독"
        ]
      }
    ]
  },
  {
    "id": 316,
    "name": "꼴깍몬",
    "forms": [
      {
        "formId": "01",
        "name": "꼴깍몬",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/031601.png",
        "types": [
          "독"
        ]
      }
    ]
  },
  {
    "id": 317,
    "name": "꿀꺽몬",
    "forms": [
      {
        "formId": "01",
        "name": "꿀꺽몬",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/031701.png",
        "types": [
          "독"
        ]
      }
    ]
  },
  {
    "id": 318,
    "name": "샤프니아",
    "forms": [
      {
        "formId": "01",
        "name": "샤프니아",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/031801.png",
        "types": [
          "물",
          "악"
        ]
      },
      {
        "formId": "02",
        "name": "메가샤크니아",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/031802.png",
        "types": [
          "물",
          "악"
        ]
      }
    ]
  },
  {
    "id": 319,
    "name": "샤크니아",
    "forms": [
      {
        "formId": "01",
        "name": "샤크니아",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/031901.png",
        "types": [
          "물",
          "악"
        ]
      }
    ]
  },
  {
    "id": 320,
    "name": "고래왕자",
    "forms": [
      {
        "formId": "01",
        "name": "고래왕자",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/032001.png",
        "types": [
          "물"
        ]
      }
    ]
  },
  {
    "id": 321,
    "name": "고래왕",
    "forms": [
      {
        "formId": "01",
        "name": "고래왕",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/032101.png",
        "types": [
          "물"
        ]
      }
    ]
  },
  {
    "id": 322,
    "name": "둔타",
    "forms": [
      {
        "formId": "01",
        "name": "둔타",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/032201.png",
        "types": [
          "불꽃",
          "땅"
        ]
      }
    ]
  },
  {
    "id": 323,
    "name": "폭타",
    "forms": [
      {
        "formId": "01",
        "name": "폭타",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/032301.png",
        "types": [
          "불꽃",
          "땅"
        ]
      },
      {
        "formId": "02",
        "name": "메가폭타",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/032302.png",
        "types": [
          "불꽃",
          "땅"
        ]
      }
    ]
  },
  {
    "id": 324,
    "name": "코터스",
    "forms": [
      {
        "formId": "01",
        "name": "코터스",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/032401.png",
        "types": [
          "불꽃"
        ]
      }
    ]
  },
  {
    "id": 325,
    "name": "피그점프",
    "forms": [
      {
        "formId": "01",
        "name": "피그점프",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/032501.png",
        "types": [
          "에스퍼"
        ]
      }
    ]
  },
  {
    "id": 326,
    "name": "피그킹",
    "forms": [
      {
        "formId": "01",
        "name": "피그킹",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/032601.png",
        "types": [
          "에스퍼"
        ]
      }
    ]
  },
  {
    "id": 327,
    "name": "얼루기",
    "forms": [
      {
        "formId": "01",
        "name": "얼루기",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/032701.png",
        "types": [
          "노말"
        ]
      }
    ]
  },
  {
    "id": 328,
    "name": "톱치",
    "forms": [
      {
        "formId": "01",
        "name": "톱치",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/032801.png",
        "types": [
          "땅"
        ]
      }
    ]
  },
  {
    "id": 329,
    "name": "비브라바",
    "forms": [
      {
        "formId": "01",
        "name": "비브라바",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/032901.png",
        "types": [
          "땅",
          "드래곤"
        ]
      }
    ]
  },
  {
    "id": 330,
    "name": "플라이곤",
    "forms": [
      {
        "formId": "01",
        "name": "플라이곤",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/033001.png",
        "types": [
          "땅",
          "드래곤"
        ]
      }
    ]
  },
  {
    "id": 331,
    "name": "선인왕",
    "forms": [
      {
        "formId": "01",
        "name": "선인왕",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/033101.png",
        "types": [
          "풀"
        ]
      }
    ]
  },
  {
    "id": 332,
    "name": "밤선인",
    "forms": [
      {
        "formId": "01",
        "name": "밤선인",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/033201.png",
        "types": [
          "풀",
          "악"
        ]
      }
    ]
  },
  {
    "id": 333,
    "name": "파비코",
    "forms": [
      {
        "formId": "01",
        "name": "파비코",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/033301.png",
        "types": [
          "노말",
          "비행"
        ]
      }
    ]
  },
  {
    "id": 334,
    "name": "파비코리",
    "forms": [
      {
        "formId": "01",
        "name": "파비코리",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/033401.png",
        "types": [
          "드래곤",
          "비행"
        ]
      },
      {
        "formId": "02",
        "name": "메가파비코리",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/033402.png",
        "types": [
          "드래곤",
          "페어리"
        ]
      }
    ]
  },
  {
    "id": 335,
    "name": "쟝고",
    "forms": [
      {
        "formId": "01",
        "name": "쟝고",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/033501.png",
        "types": [
          "노말"
        ]
      }
    ]
  },
  {
    "id": 336,
    "name": "세비퍼",
    "forms": [
      {
        "formId": "01",
        "name": "세비퍼",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/033601.png",
        "types": [
          "독"
        ]
      }
    ]
  },
  {
    "id": 337,
    "name": "루나톤",
    "forms": [
      {
        "formId": "01",
        "name": "루나톤",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/033701.png",
        "types": [
          "바위",
          "에스퍼"
        ]
      }
    ]
  },
  {
    "id": 338,
    "name": "솔록",
    "forms": [
      {
        "formId": "01",
        "name": "솔록",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/033801.png",
        "types": [
          "바위",
          "에스퍼"
        ]
      }
    ]
  },
  {
    "id": 339,
    "name": "미꾸리",
    "forms": [
      {
        "formId": "01",
        "name": "미꾸리",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/033901.png",
        "types": [
          "물",
          "땅"
        ]
      }
    ]
  },
  {
    "id": 340,
    "name": "메깅",
    "forms": [
      {
        "formId": "01",
        "name": "메깅",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/034001.png",
        "types": [
          "물",
          "땅"
        ]
      }
    ]
  },
  {
    "id": 341,
    "name": "가재군",
    "forms": [
      {
        "formId": "01",
        "name": "가재군",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/034101.png",
        "types": [
          "물"
        ]
      }
    ]
  },
  {
    "id": 342,
    "name": "가재장군",
    "forms": [
      {
        "formId": "01",
        "name": "가재장군",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/034201.png",
        "types": [
          "물",
          "악"
        ]
      }
    ]
  },
  {
    "id": 343,
    "name": "오뚝군",
    "forms": [
      {
        "formId": "01",
        "name": "오뚝군",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/034301.png",
        "types": [
          "땅",
          "에스퍼"
        ]
      }
    ]
  },
  {
    "id": 344,
    "name": "점토도리",
    "forms": [
      {
        "formId": "01",
        "name": "점토도리",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/034401.png",
        "types": [
          "땅",
          "에스퍼"
        ]
      }
    ]
  },
  {
    "id": 345,
    "name": "릴링",
    "forms": [
      {
        "formId": "01",
        "name": "릴링",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/034501.png",
        "types": [
          "바위",
          "풀"
        ]
      }
    ]
  },
  {
    "id": 346,
    "name": "릴리요",
    "forms": [
      {
        "formId": "01",
        "name": "릴리요",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/034601.png",
        "types": [
          "바위",
          "풀"
        ]
      }
    ]
  },
  {
    "id": 347,
    "name": "아노딥스",
    "forms": [
      {
        "formId": "01",
        "name": "아노딥스",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/034701.png",
        "types": [
          "바위",
          "벌레"
        ]
      }
    ]
  },
  {
    "id": 348,
    "name": "아말도",
    "forms": [
      {
        "formId": "01",
        "name": "아말도",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/034801.png",
        "types": [
          "바위",
          "벌레"
        ]
      }
    ]
  },
  {
    "id": 349,
    "name": "빈티나",
    "forms": [
      {
        "formId": "01",
        "name": "빈티나",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/034901.png",
        "types": [
          "물"
        ]
      }
    ]
  },
  {
    "id": 350,
    "name": "밀로틱",
    "forms": [
      {
        "formId": "01",
        "name": "밀로틱",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/035001.png",
        "types": [
          "물"
        ]
      }
    ]
  },
  {
    "id": 351,
    "name": "캐스퐁",
    "forms": [
      {
        "formId": "01",
        "name": "캐스퐁",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/035101.png",
        "types": [
          "노말"
        ]
      }
    ]
  },
  {
    "id": 352,
    "name": "켈리몬",
    "forms": [
      {
        "formId": "01",
        "name": "켈리몬",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/035201.png",
        "types": [
          "노말"
        ]
      }
    ]
  },
  {
    "id": 353,
    "name": "어둠대신",
    "forms": [
      {
        "formId": "01",
        "name": "어둠대신",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/035301.png",
        "types": [
          "고스트"
        ]
      }
    ]
  },
  {
    "id": 354,
    "name": "다크펫",
    "forms": [
      {
        "formId": "01",
        "name": "다크펫",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/035401.png",
        "types": [
          "고스트"
        ]
      },
      {
        "formId": "02",
        "name": "메가다크펫",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/035402.png",
        "types": [
          "고스트"
        ]
      }
    ]
  },
  {
    "id": 355,
    "name": "해골몽",
    "forms": [
      {
        "formId": "01",
        "name": "해골몽",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/035501.png",
        "types": [
          "고스트"
        ]
      }
    ]
  },
  {
    "id": 356,
    "name": "미라몽",
    "forms": [
      {
        "formId": "01",
        "name": "미라몽",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/035601.png",
        "types": [
          "고스트"
        ]
      }
    ]
  },
  {
    "id": 357,
    "name": "트로피우스",
    "forms": [
      {
        "formId": "01",
        "name": "트로피우스",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/035701.png",
        "types": [
          "풀",
          "비행"
        ]
      }
    ]
  },
  {
    "id": 358,
    "name": "치렁",
    "forms": [
      {
        "formId": "01",
        "name": "치렁",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/035801.png",
        "types": [
          "에스퍼"
        ]
      }
    ]
  },
  {
    "id": 359,
    "name": "앱솔",
    "forms": [
      {
        "formId": "01",
        "name": "앱솔",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/035901.png",
        "types": [
          "악"
        ]
      },
      {
        "formId": "02",
        "name": "메가앱솔",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/035902.png",
        "types": [
          "악"
        ]
      }
    ]
  },
  {
    "id": 360,
    "name": "마자",
    "forms": [
      {
        "formId": "01",
        "name": "마자",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/036001.png",
        "types": [
          "에스퍼"
        ]
      }
    ]
  },
  {
    "id": 361,
    "name": "눈꼬마",
    "forms": [
      {
        "formId": "01",
        "name": "눈꼬마",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/036101.png",
        "types": [
          "얼음"
        ]
      }
    ]
  },
  {
    "id": 362,
    "name": "얼음귀신",
    "forms": [
      {
        "formId": "01",
        "name": "얼음귀신",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/036201.png",
        "types": [
          "얼음"
        ]
      },
      {
        "formId": "02",
        "name": "메가얼음귀신",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/036202.png",
        "types": [
          "얼음"
        ]
      }
    ]
  },
  {
    "id": 363,
    "name": "대굴레오",
    "forms": [
      {
        "formId": "01",
        "name": "대굴레오",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/036301.png",
        "types": [
          "얼음",
          "물"
        ]
      }
    ]
  },
  {
    "id": 364,
    "name": "씨레오",
    "forms": [
      {
        "formId": "01",
        "name": "씨레오",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/036401.png",
        "types": [
          "얼음",
          "물"
        ]
      }
    ]
  },
  {
    "id": 365,
    "name": "씨카이저",
    "forms": [
      {
        "formId": "01",
        "name": "씨카이저",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/036501.png",
        "types": [
          "얼음",
          "물"
        ]
      }
    ]
  },
  {
    "id": 366,
    "name": "진주몽",
    "forms": [
      {
        "formId": "01",
        "name": "진주몽",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/036601.png",
        "types": [
          "물"
        ]
      }
    ]
  },
  {
    "id": 367,
    "name": "헌테일",
    "forms": [
      {
        "formId": "01",
        "name": "헌테일",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/036701.png",
        "types": [
          "물"
        ]
      }
    ]
  },
  {
    "id": 368,
    "name": "분홍장이",
    "forms": [
      {
        "formId": "01",
        "name": "분홍장이",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/036801.png",
        "types": [
          "물"
        ]
      }
    ]
  },
  {
    "id": 369,
    "name": "시라칸",
    "forms": [
      {
        "formId": "01",
        "name": "시라칸",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/036901.png",
        "types": [
          "물",
          "바위"
        ]
      }
    ]
  },
  {
    "id": 370,
    "name": "사랑동이",
    "forms": [
      {
        "formId": "01",
        "name": "사랑동이",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/037001.png",
        "types": [
          "물"
        ]
      }
    ]
  },
  {
    "id": 371,
    "name": "아공이",
    "forms": [
      {
        "formId": "01",
        "name": "아공이",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/037101.png",
        "types": [
          "드래곤"
        ]
      }
    ]
  },
  {
    "id": 372,
    "name": "쉘곤",
    "forms": [
      {
        "formId": "01",
        "name": "쉘곤",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/037201.png",
        "types": [
          "드래곤"
        ]
      }
    ]
  },
  {
    "id": 373,
    "name": "보만다",
    "forms": [
      {
        "formId": "01",
        "name": "보만다",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/037301.png",
        "types": [
          "드래곤",
          "비행"
        ]
      },
      {
        "formId": "02",
        "name": "메가보만다",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/037302.png",
        "types": [
          "드래곤",
          "비행"
        ]
      }
    ]
  },
  {
    "id": 374,
    "name": "메탕",
    "forms": [
      {
        "formId": "01",
        "name": "메탕",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/037401.png",
        "types": [
          "강철",
          "에스퍼"
        ]
      }
    ]
  },
  {
    "id": 375,
    "name": "메탕구",
    "forms": [
      {
        "formId": "01",
        "name": "메탕구",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/037501.png",
        "types": [
          "강철",
          "에스퍼"
        ]
      }
    ]
  },
  {
    "id": 376,
    "name": "메타그로스",
    "forms": [
      {
        "formId": "01",
        "name": "메타그로스",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/037601.png",
        "types": [
          "강철",
          "에스퍼"
        ]
      },
      {
        "formId": "02",
        "name": "메가메타그로스",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/037602.png",
        "types": [
          "강철",
          "에스퍼"
        ]
      }
    ]
  },
  {
    "id": 377,
    "name": "레지락",
    "forms": [
      {
        "formId": "01",
        "name": "레지락",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/037701.png",
        "types": [
          "바위"
        ]
      }
    ]
  },
  {
    "id": 378,
    "name": "레지아이스",
    "forms": [
      {
        "formId": "01",
        "name": "레지아이스",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/037801.png",
        "types": [
          "얼음"
        ]
      }
    ]
  },
  {
    "id": 379,
    "name": "레지스틸",
    "forms": [
      {
        "formId": "01",
        "name": "레지스틸",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/037901.png",
        "types": [
          "강철"
        ]
      }
    ]
  },
  {
    "id": 380,
    "name": "라티아스",
    "forms": [
      {
        "formId": "01",
        "name": "라티아스",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/038001.png",
        "types": [
          "드래곤",
          "에스퍼"
        ]
      },
      {
        "formId": "02",
        "name": "메가라티아스",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/038002.png",
        "types": [
          "드래곤",
          "에스퍼"
        ]
      }
    ]
  },
  {
    "id": 381,
    "name": "라티오스",
    "forms": [
      {
        "formId": "01",
        "name": "라티오스",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/038101.png",
        "types": [
          "드래곤",
          "에스퍼"
        ]
      },
      {
        "formId": "02",
        "name": "메가라티오스",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/038102.png",
        "types": [
          "드래곤",
          "에스퍼"
        ]
      }
    ]
  },
  {
    "id": 382,
    "name": "가이오가",
    "forms": [
      {
        "formId": "01",
        "name": "가이오가",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/038201.png",
        "types": [
          "물"
        ]
      }
    ]
  },
  {
    "id": 383,
    "name": "그란돈",
    "forms": [
      {
        "formId": "01",
        "name": "그란돈",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/038301.png",
        "types": [
          "땅"
        ]
      }
    ]
  },
  {
    "id": 384,
    "name": "레쿠쟈",
    "forms": [
      {
        "formId": "01",
        "name": "레쿠쟈",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/038401.png",
        "types": [
          "드래곤",
          "비행"
        ]
      },
      {
        "formId": "02",
        "name": "메가레쿠쟈",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/038402.png",
        "types": [
          "드래곤",
          "비행"
        ]
      }
    ]
  },
  {
    "id": 385,
    "name": "지라치",
    "forms": [
      {
        "formId": "01",
        "name": "지라치",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/038501.png",
        "types": [
          "강철",
          "에스퍼"
        ]
      }
    ]
  },
  {
    "id": 386,
    "name": "테오키스",
    "forms": [
      {
        "formId": "01",
        "name": "테오키스",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/038601.png",
        "types": [
          "에스퍼"
        ]
      }
    ]
  },
  {
    "id": 387,
    "name": "모부기",
    "forms": [
      {
        "formId": "01",
        "name": "모부기",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/038701.png",
        "types": [
          "풀"
        ]
      }
    ]
  },
  {
    "id": 388,
    "name": "수풀부기",
    "forms": [
      {
        "formId": "01",
        "name": "수풀부기",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/038801.png",
        "types": [
          "풀"
        ]
      }
    ]
  },
  {
    "id": 389,
    "name": "토대부기",
    "forms": [
      {
        "formId": "01",
        "name": "토대부기",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/038901.png",
        "types": [
          "풀",
          "땅"
        ]
      }
    ]
  },
  {
    "id": 390,
    "name": "불꽃숭이",
    "forms": [
      {
        "formId": "01",
        "name": "불꽃숭이",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/039001.png",
        "types": [
          "불꽃"
        ]
      }
    ]
  },
  {
    "id": 391,
    "name": "파이숭이",
    "forms": [
      {
        "formId": "01",
        "name": "파이숭이",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/039101.png",
        "types": [
          "불꽃",
          "격투"
        ]
      }
    ]
  },
  {
    "id": 392,
    "name": "초염몽",
    "forms": [
      {
        "formId": "01",
        "name": "초염몽",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/039201.png",
        "types": [
          "불꽃",
          "격투"
        ]
      }
    ]
  },
  {
    "id": 393,
    "name": "팽도리",
    "forms": [
      {
        "formId": "01",
        "name": "팽도리",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/039301.png",
        "types": [
          "물"
        ]
      }
    ]
  },
  {
    "id": 394,
    "name": "팽태자",
    "forms": [
      {
        "formId": "01",
        "name": "팽태자",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/039401.png",
        "types": [
          "물"
        ]
      }
    ]
  },
  {
    "id": 395,
    "name": "엠페르트",
    "forms": [
      {
        "formId": "01",
        "name": "엠페르트",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/039501.png",
        "types": [
          "물",
          "강철"
        ]
      }
    ]
  },
  {
    "id": 396,
    "name": "찌르꼬",
    "forms": [
      {
        "formId": "01",
        "name": "찌르꼬",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/039601.png",
        "types": [
          "노말",
          "비행"
        ]
      }
    ]
  },
  {
    "id": 397,
    "name": "찌르버드",
    "forms": [
      {
        "formId": "01",
        "name": "찌르버드",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/039701.png",
        "types": [
          "노말",
          "비행"
        ]
      }
    ]
  },
  {
    "id": 398,
    "name": "찌르호크",
    "forms": [
      {
        "formId": "01",
        "name": "찌르호크",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/039801.png",
        "types": [
          "노말",
          "비행"
        ]
      }
    ]
  },
  {
    "id": 399,
    "name": "비버니",
    "forms": [
      {
        "formId": "01",
        "name": "비버니",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/039901.png",
        "types": [
          "노말"
        ]
      }
    ]
  },
  {
    "id": 400,
    "name": "비버통",
    "forms": [
      {
        "formId": "01",
        "name": "비버통",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/040001.png",
        "types": [
          "노말",
          "물"
        ]
      }
    ]
  },
  {
    "id": 401,
    "name": "귀뚤뚜기",
    "forms": [
      {
        "formId": "01",
        "name": "귀뚤뚜기",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/040101.png",
        "types": [
          "벌레"
        ]
      }
    ]
  },
  {
    "id": 402,
    "name": "귀뚤톡크",
    "forms": [
      {
        "formId": "01",
        "name": "귀뚤톡크",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/040201.png",
        "types": [
          "벌레"
        ]
      }
    ]
  },
  {
    "id": 403,
    "name": "꼬링크",
    "forms": [
      {
        "formId": "01",
        "name": "꼬링크",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/040301.png",
        "types": [
          "전기"
        ]
      }
    ]
  },
  {
    "id": 404,
    "name": "럭시오",
    "forms": [
      {
        "formId": "01",
        "name": "럭시오",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/040401.png",
        "types": [
          "전기"
        ]
      }
    ]
  },
  {
    "id": 405,
    "name": "렌트라",
    "forms": [
      {
        "formId": "01",
        "name": "렌트라",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/040501.png",
        "types": [
          "전기"
        ]
      }
    ]
  },
  {
    "id": 406,
    "name": "꼬몽울",
    "forms": [
      {
        "formId": "01",
        "name": "꼬몽울",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/040601.png",
        "types": [
          "풀",
          "독"
        ]
      }
    ]
  },
  {
    "id": 407,
    "name": "로즈레이드",
    "forms": [
      {
        "formId": "01",
        "name": "로즈레이드",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/040701.png",
        "types": [
          "풀",
          "독"
        ]
      }
    ]
  },
  {
    "id": 408,
    "name": "두개도스",
    "forms": [
      {
        "formId": "01",
        "name": "두개도스",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/040801.png",
        "types": [
          "바위"
        ]
      }
    ]
  },
  {
    "id": 409,
    "name": "램펄드",
    "forms": [
      {
        "formId": "01",
        "name": "램펄드",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/040901.png",
        "types": [
          "바위"
        ]
      }
    ]
  },
  {
    "id": 410,
    "name": "방패톱스",
    "forms": [
      {
        "formId": "01",
        "name": "방패톱스",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/041001.png",
        "types": [
          "바위",
          "강철"
        ]
      }
    ]
  },
  {
    "id": 411,
    "name": "바리톱스",
    "forms": [
      {
        "formId": "01",
        "name": "바리톱스",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/041101.png",
        "types": [
          "바위",
          "강철"
        ]
      }
    ]
  },
  {
    "id": 412,
    "name": "도롱충이",
    "forms": [
      {
        "formId": "01",
        "name": "도롱충이",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/041201.png",
        "types": [
          "벌레"
        ]
      }
    ]
  },
  {
    "id": 413,
    "name": "도롱마담",
    "forms": [
      {
        "formId": "01",
        "name": "도롱마담",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/041301.png",
        "types": [
          "벌레",
          "풀"
        ]
      }
    ]
  },
  {
    "id": 414,
    "name": "나메일",
    "forms": [
      {
        "formId": "01",
        "name": "나메일",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/041401.png",
        "types": [
          "벌레",
          "비행"
        ]
      }
    ]
  },
  {
    "id": 415,
    "name": "세꿀버리",
    "forms": [
      {
        "formId": "01",
        "name": "세꿀버리",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/041501.png",
        "types": [
          "벌레",
          "비행"
        ]
      }
    ]
  },
  {
    "id": 416,
    "name": "비퀸",
    "forms": [
      {
        "formId": "01",
        "name": "비퀸",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/041601.png",
        "types": [
          "벌레",
          "비행"
        ]
      }
    ]
  },
  {
    "id": 417,
    "name": "파치리스",
    "forms": [
      {
        "formId": "01",
        "name": "파치리스",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/041701.png",
        "types": [
          "전기"
        ]
      }
    ]
  },
  {
    "id": 418,
    "name": "브이젤",
    "forms": [
      {
        "formId": "01",
        "name": "브이젤",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/041801.png",
        "types": [
          "물"
        ]
      }
    ]
  },
  {
    "id": 419,
    "name": "플로젤",
    "forms": [
      {
        "formId": "01",
        "name": "플로젤",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/041901.png",
        "types": [
          "물"
        ]
      }
    ]
  },
  {
    "id": 420,
    "name": "체리버",
    "forms": [
      {
        "formId": "01",
        "name": "체리버",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/042001.png",
        "types": [
          "풀"
        ]
      }
    ]
  },
  {
    "id": 421,
    "name": "체리꼬",
    "forms": [
      {
        "formId": "01",
        "name": "체리꼬",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/042101.png",
        "types": [
          "풀"
        ]
      }
    ]
  },
  {
    "id": 422,
    "name": "깝질무",
    "forms": [
      {
        "formId": "01",
        "name": "깝질무",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/042201.png",
        "types": [
          "물"
        ]
      }
    ]
  },
  {
    "id": 423,
    "name": "트리토돈",
    "forms": [
      {
        "formId": "01",
        "name": "트리토돈",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/042301.png",
        "types": [
          "물",
          "땅"
        ]
      }
    ]
  },
  {
    "id": 424,
    "name": "겟핸보숭",
    "forms": [
      {
        "formId": "01",
        "name": "겟핸보숭",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/042401.png",
        "types": [
          "노말"
        ]
      }
    ]
  },
  {
    "id": 425,
    "name": "흔들풍손",
    "forms": [
      {
        "formId": "01",
        "name": "흔들풍손",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/042501.png",
        "types": [
          "고스트",
          "비행"
        ]
      }
    ]
  },
  {
    "id": 426,
    "name": "둥실라이드",
    "forms": [
      {
        "formId": "01",
        "name": "둥실라이드",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/042601.png",
        "types": [
          "고스트",
          "비행"
        ]
      }
    ]
  },
  {
    "id": 427,
    "name": "이어롤",
    "forms": [
      {
        "formId": "01",
        "name": "이어롤",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/042701.png",
        "types": [
          "노말"
        ]
      }
    ]
  },
  {
    "id": 428,
    "name": "이어롭",
    "forms": [
      {
        "formId": "01",
        "name": "이어롭",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/042801.png",
        "types": [
          "노말"
        ]
      },
      {
        "formId": "02",
        "name": "메가이어롭",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/042802.png",
        "types": [
          "노말",
          "격투"
        ]
      }
    ]
  },
  {
    "id": 429,
    "name": "무우마직",
    "forms": [
      {
        "formId": "01",
        "name": "무우마직",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/042901.png",
        "types": [
          "고스트"
        ]
      }
    ]
  },
  {
    "id": 430,
    "name": "돈크로우",
    "forms": [
      {
        "formId": "01",
        "name": "돈크로우",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/043001.png",
        "types": [
          "악",
          "비행"
        ]
      }
    ]
  },
  {
    "id": 431,
    "name": "나옹마",
    "forms": [
      {
        "formId": "01",
        "name": "나옹마",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/043101.png",
        "types": [
          "노말"
        ]
      }
    ]
  },
  {
    "id": 432,
    "name": "몬냥이",
    "forms": [
      {
        "formId": "01",
        "name": "몬냥이",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/043201.png",
        "types": [
          "노말"
        ]
      }
    ]
  },
  {
    "id": 433,
    "name": "랑딸랑",
    "forms": [
      {
        "formId": "01",
        "name": "랑딸랑",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/043301.png",
        "types": [
          "에스퍼"
        ]
      }
    ]
  },
  {
    "id": 434,
    "name": "스컹뿡",
    "forms": [
      {
        "formId": "01",
        "name": "스컹뿡",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/043401.png",
        "types": [
          "독",
          "악"
        ]
      }
    ]
  },
  {
    "id": 435,
    "name": "스컹탱크",
    "forms": [
      {
        "formId": "01",
        "name": "스컹탱크",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/043501.png",
        "types": [
          "독",
          "악"
        ]
      }
    ]
  },
  {
    "id": 436,
    "name": "동미러",
    "forms": [
      {
        "formId": "01",
        "name": "동미러",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/043601.png",
        "types": [
          "강철",
          "에스퍼"
        ]
      }
    ]
  },
  {
    "id": 437,
    "name": "동탁군",
    "forms": [
      {
        "formId": "01",
        "name": "동탁군",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/043701.png",
        "types": [
          "강철",
          "에스퍼"
        ]
      }
    ]
  },
  {
    "id": 438,
    "name": "꼬지지",
    "forms": [
      {
        "formId": "01",
        "name": "꼬지지",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/043801.png",
        "types": [
          "바위"
        ]
      }
    ]
  },
  {
    "id": 439,
    "name": "흉내내",
    "forms": [
      {
        "formId": "01",
        "name": "흉내내",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/043901.png",
        "types": [
          "에스퍼",
          "페어리"
        ]
      }
    ]
  },
  {
    "id": 440,
    "name": "핑복",
    "forms": [
      {
        "formId": "01",
        "name": "핑복",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/044001.png",
        "types": [
          "노말"
        ]
      }
    ]
  },
  {
    "id": 441,
    "name": "페라페",
    "forms": [
      {
        "formId": "01",
        "name": "페라페",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/044101.png",
        "types": [
          "노말",
          "비행"
        ]
      }
    ]
  },
  {
    "id": 442,
    "name": "화강돌",
    "forms": [
      {
        "formId": "01",
        "name": "화강돌",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/044201.png",
        "types": [
          "고스트",
          "악"
        ]
      }
    ]
  },
  {
    "id": 443,
    "name": "딥상어동",
    "forms": [
      {
        "formId": "01",
        "name": "딥상어동",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/044301.png",
        "types": [
          "드래곤",
          "땅"
        ]
      }
    ]
  },
  {
    "id": 444,
    "name": "한바이트",
    "forms": [
      {
        "formId": "01",
        "name": "한바이트",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/044401.png",
        "types": [
          "드래곤",
          "땅"
        ]
      }
    ]
  },
  {
    "id": 445,
    "name": "한카리아스",
    "forms": [
      {
        "formId": "01",
        "name": "한카리아스",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/044501.png",
        "types": [
          "드래곤",
          "땅"
        ]
      },
      {
        "formId": "02",
        "name": "메가한카리아스",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/044502.png",
        "types": [
          "드래곤",
          "땅"
        ]
      }
    ]
  },
  {
    "id": 446,
    "name": "먹고자",
    "forms": [
      {
        "formId": "01",
        "name": "먹고자",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/044601.png",
        "types": [
          "노말"
        ]
      }
    ]
  },
  {
    "id": 447,
    "name": "리오르",
    "forms": [
      {
        "formId": "01",
        "name": "리오르",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/044701.png",
        "types": [
          "격투"
        ]
      }
    ]
  },
  {
    "id": 448,
    "name": "루카리오",
    "forms": [
      {
        "formId": "01",
        "name": "루카리오",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/044801.png",
        "types": [
          "격투",
          "강철"
        ]
      },
      {
        "formId": "02",
        "name": "메가루카리오",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/044802.png",
        "types": [
          "격투",
          "강철"
        ]
      }
    ]
  },
  {
    "id": 449,
    "name": "히포포타스",
    "forms": [
      {
        "formId": "01",
        "name": "히포포타스",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/044901.png",
        "types": [
          "땅"
        ]
      }
    ]
  },
  {
    "id": 450,
    "name": "하마돈",
    "forms": [
      {
        "formId": "01",
        "name": "하마돈",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/045001.png",
        "types": [
          "땅"
        ]
      }
    ]
  },
  {
    "id": 451,
    "name": "스콜피",
    "forms": [
      {
        "formId": "01",
        "name": "스콜피",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/045101.png",
        "types": [
          "독",
          "벌레"
        ]
      }
    ]
  },
  {
    "id": 452,
    "name": "드래피온",
    "forms": [
      {
        "formId": "01",
        "name": "드래피온",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/045201.png",
        "types": [
          "독",
          "악"
        ]
      }
    ]
  },
  {
    "id": 453,
    "name": "삐딱구리",
    "forms": [
      {
        "formId": "01",
        "name": "삐딱구리",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/045301.png",
        "types": [
          "독",
          "격투"
        ]
      }
    ]
  },
  {
    "id": 454,
    "name": "독개굴",
    "forms": [
      {
        "formId": "01",
        "name": "독개굴",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/045401.png",
        "types": [
          "독",
          "격투"
        ]
      }
    ]
  },
  {
    "id": 455,
    "name": "무스틈니",
    "forms": [
      {
        "formId": "01",
        "name": "무스틈니",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/045501.png",
        "types": [
          "풀"
        ]
      }
    ]
  },
  {
    "id": 456,
    "name": "형광어",
    "forms": [
      {
        "formId": "01",
        "name": "형광어",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/045601.png",
        "types": [
          "물"
        ]
      }
    ]
  },
  {
    "id": 457,
    "name": "네오라이트",
    "forms": [
      {
        "formId": "01",
        "name": "네오라이트",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/045701.png",
        "types": [
          "물"
        ]
      }
    ]
  },
  {
    "id": 458,
    "name": "타만타",
    "forms": [
      {
        "formId": "01",
        "name": "타만타",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/045801.png",
        "types": [
          "물",
          "비행"
        ]
      }
    ]
  },
  {
    "id": 459,
    "name": "눈쓰개",
    "forms": [
      {
        "formId": "01",
        "name": "눈쓰개",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/045901.png",
        "types": [
          "풀",
          "얼음"
        ]
      }
    ]
  },
  {
    "id": 460,
    "name": "눈설왕",
    "forms": [
      {
        "formId": "01",
        "name": "눈설왕",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/046001.png",
        "types": [
          "풀",
          "얼음"
        ]
      },
      {
        "formId": "02",
        "name": "메가눈설왕",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/046002.png",
        "types": [
          "풀",
          "얼음"
        ]
      }
    ]
  },
  {
    "id": 461,
    "name": "포푸니라",
    "forms": [
      {
        "formId": "01",
        "name": "포푸니라",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/046101.png",
        "types": [
          "악",
          "얼음"
        ]
      }
    ]
  },
  {
    "id": 462,
    "name": "자포코일",
    "forms": [
      {
        "formId": "01",
        "name": "자포코일",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/046201.png",
        "types": [
          "전기",
          "강철"
        ]
      }
    ]
  },
  {
    "id": 463,
    "name": "내룸벨트",
    "forms": [
      {
        "formId": "01",
        "name": "내룸벨트",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/046301.png",
        "types": [
          "노말"
        ]
      }
    ]
  },
  {
    "id": 464,
    "name": "거대코뿌리",
    "forms": [
      {
        "formId": "01",
        "name": "거대코뿌리",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/046401.png",
        "types": [
          "땅",
          "바위"
        ]
      }
    ]
  },
  {
    "id": 465,
    "name": "덩쿠림보",
    "forms": [
      {
        "formId": "01",
        "name": "덩쿠림보",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/046501.png",
        "types": [
          "풀"
        ]
      }
    ]
  },
  {
    "id": 466,
    "name": "에레키블",
    "forms": [
      {
        "formId": "01",
        "name": "에레키블",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/046601.png",
        "types": [
          "전기"
        ]
      }
    ]
  },
  {
    "id": 467,
    "name": "마그마번",
    "forms": [
      {
        "formId": "01",
        "name": "마그마번",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/046701.png",
        "types": [
          "불꽃"
        ]
      }
    ]
  },
  {
    "id": 468,
    "name": "토게키스",
    "forms": [
      {
        "formId": "01",
        "name": "토게키스",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/046801.png",
        "types": [
          "페어리",
          "비행"
        ]
      }
    ]
  },
  {
    "id": 469,
    "name": "메가자리",
    "forms": [
      {
        "formId": "01",
        "name": "메가자리",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/046901.png",
        "types": [
          "벌레",
          "비행"
        ]
      }
    ]
  },
  {
    "id": 470,
    "name": "리피아",
    "forms": [
      {
        "formId": "01",
        "name": "리피아",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/047001.png",
        "types": [
          "풀"
        ]
      }
    ]
  },
  {
    "id": 471,
    "name": "글레이시아",
    "forms": [
      {
        "formId": "01",
        "name": "글레이시아",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/047101.png",
        "types": [
          "얼음"
        ]
      }
    ]
  },
  {
    "id": 472,
    "name": "글라이온",
    "forms": [
      {
        "formId": "01",
        "name": "글라이온",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/047201.png",
        "types": [
          "땅",
          "비행"
        ]
      }
    ]
  },
  {
    "id": 473,
    "name": "맘모꾸리",
    "forms": [
      {
        "formId": "01",
        "name": "맘모꾸리",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/047301.png",
        "types": [
          "얼음",
          "땅"
        ]
      }
    ]
  },
  {
    "id": 474,
    "name": "폴리곤Z",
    "forms": [
      {
        "formId": "01",
        "name": "폴리곤Z",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/047401.png",
        "types": [
          "노말"
        ]
      }
    ]
  },
  {
    "id": 475,
    "name": "엘레이드",
    "forms": [
      {
        "formId": "01",
        "name": "엘레이드",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/047501.png",
        "types": [
          "에스퍼",
          "격투"
        ]
      },
      {
        "formId": "02",
        "name": "메가엘레이드",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/047502.png",
        "types": [
          "에스퍼",
          "격투"
        ]
      }
    ]
  },
  {
    "id": 476,
    "name": "대코파스",
    "forms": [
      {
        "formId": "01",
        "name": "대코파스",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/047601.png",
        "types": [
          "바위",
          "강철"
        ]
      }
    ]
  },
  {
    "id": 477,
    "name": "야느와르몽",
    "forms": [
      {
        "formId": "01",
        "name": "야느와르몽",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/047701.png",
        "types": [
          "고스트"
        ]
      }
    ]
  },
  {
    "id": 478,
    "name": "눈여아",
    "forms": [
      {
        "formId": "01",
        "name": "눈여아",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/047801.png",
        "types": [
          "얼음",
          "고스트"
        ]
      }
    ]
  },
  {
    "id": 479,
    "name": "로토무",
    "forms": [
      {
        "formId": "01",
        "name": "로토무",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/047901.png",
        "types": [
          "전기",
          "고스트"
        ]
      }
    ]
  },
  {
    "id": 480,
    "name": "유크시",
    "forms": [
      {
        "formId": "01",
        "name": "유크시",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/048001.png",
        "types": [
          "에스퍼"
        ]
      }
    ]
  },
  {
    "id": 481,
    "name": "엠라이트",
    "forms": [
      {
        "formId": "01",
        "name": "엠라이트",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/048101.png",
        "types": [
          "에스퍼"
        ]
      }
    ]
  },
  {
    "id": 482,
    "name": "아그놈",
    "forms": [
      {
        "formId": "01",
        "name": "아그놈",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/048201.png",
        "types": [
          "에스퍼"
        ]
      }
    ]
  },
  {
    "id": 483,
    "name": "디아루가",
    "forms": [
      {
        "formId": "01",
        "name": "디아루가",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/048301.png",
        "types": [
          "강철",
          "드래곤"
        ]
      }
    ]
  },
  {
    "id": 484,
    "name": "펄기아",
    "forms": [
      {
        "formId": "01",
        "name": "펄기아",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/048401.png",
        "types": [
          "물",
          "드래곤"
        ]
      }
    ]
  },
  {
    "id": 485,
    "name": "히드런",
    "forms": [
      {
        "formId": "01",
        "name": "히드런",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/048501.png",
        "types": [
          "불꽃",
          "강철"
        ]
      }
    ]
  },
  {
    "id": 486,
    "name": "레지기가스",
    "forms": [
      {
        "formId": "01",
        "name": "레지기가스",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/048601.png",
        "types": [
          "노말"
        ]
      }
    ]
  },
  {
    "id": 487,
    "name": "기라티나",
    "forms": [
      {
        "formId": "01",
        "name": "기라티나",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/048701.png",
        "types": [
          "고스트",
          "드래곤"
        ]
      }
    ]
  },
  {
    "id": 488,
    "name": "크레세리아",
    "forms": [
      {
        "formId": "01",
        "name": "크레세리아",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/048801.png",
        "types": [
          "에스퍼"
        ]
      }
    ]
  },
  {
    "id": 489,
    "name": "피오네",
    "forms": [
      {
        "formId": "01",
        "name": "피오네",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/048901.png",
        "types": [
          "물"
        ]
      }
    ]
  },
  {
    "id": 490,
    "name": "마나피",
    "forms": [
      {
        "formId": "01",
        "name": "마나피",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/049001.png",
        "types": [
          "물"
        ]
      }
    ]
  },
  {
    "id": 491,
    "name": "다크라이",
    "forms": [
      {
        "formId": "01",
        "name": "다크라이",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/049101.png",
        "types": [
          "악"
        ]
      }
    ]
  },
  {
    "id": 492,
    "name": "쉐이미",
    "forms": [
      {
        "formId": "01",
        "name": "쉐이미",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/049201.png",
        "types": [
          "풀"
        ]
      }
    ]
  },
  {
    "id": 493,
    "name": "아르세우스",
    "forms": [
      {
        "formId": "01",
        "name": "아르세우스",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/049301.png",
        "types": [
          "노말"
        ]
      }
    ]
  },
  {
    "id": 494,
    "name": "비크티니",
    "forms": [
      {
        "formId": "01",
        "name": "비크티니",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/049401.png",
        "types": [
          "에스퍼",
          "불꽃"
        ]
      }
    ]
  },
  {
    "id": 495,
    "name": "주리비얀",
    "forms": [
      {
        "formId": "01",
        "name": "주리비얀",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/049501.png",
        "types": [
          "풀"
        ]
      }
    ]
  },
  {
    "id": 496,
    "name": "샤비",
    "forms": [
      {
        "formId": "01",
        "name": "샤비",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/049601.png",
        "types": [
          "풀"
        ]
      }
    ]
  },
  {
    "id": 497,
    "name": "샤로다",
    "forms": [
      {
        "formId": "01",
        "name": "샤로다",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/049701.png",
        "types": [
          "풀"
        ]
      }
    ]
  },
  {
    "id": 498,
    "name": "뚜꾸리",
    "forms": [
      {
        "formId": "01",
        "name": "뚜꾸리",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/049801.png",
        "types": [
          "불꽃"
        ]
      }
    ]
  },
  {
    "id": 499,
    "name": "차오꿀",
    "forms": [
      {
        "formId": "01",
        "name": "차오꿀",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/049901.png",
        "types": [
          "불꽃",
          "격투"
        ]
      }
    ]
  },
  {
    "id": 500,
    "name": "염무왕",
    "forms": [
      {
        "formId": "01",
        "name": "염무왕",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/050001.png",
        "types": [
          "불꽃",
          "격투"
        ]
      }
    ]
  },
  {
    "id": 501,
    "name": "수댕이",
    "forms": [
      {
        "formId": "01",
        "name": "수댕이",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/050101.png",
        "types": [
          "물"
        ]
      }
    ]
  },
  {
    "id": 502,
    "name": "쌍검자비",
    "forms": [
      {
        "formId": "01",
        "name": "쌍검자비",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/050201.png",
        "types": [
          "물"
        ]
      }
    ]
  },
  {
    "id": 503,
    "name": "대검귀",
    "forms": [
      {
        "formId": "01",
        "name": "대검귀",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/050301.png",
        "types": [
          "물"
        ]
      },
      {
        "formId": "02",
        "name": "히스이 대검귀",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/050302.png",
        "types": [
          "물",
          "악"
        ]
      }
    ]
  },
  {
    "id": 504,
    "name": "보르쥐",
    "forms": [
      {
        "formId": "01",
        "name": "보르쥐",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/050401.png",
        "types": [
          "노말"
        ]
      }
    ]
  },
  {
    "id": 505,
    "name": "보르그",
    "forms": [
      {
        "formId": "01",
        "name": "보르그",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/050501.png",
        "types": [
          "노말"
        ]
      }
    ]
  },
  {
    "id": 506,
    "name": "요테리",
    "forms": [
      {
        "formId": "01",
        "name": "요테리",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/050601.png",
        "types": [
          "노말"
        ]
      }
    ]
  },
  {
    "id": 507,
    "name": "하데리어",
    "forms": [
      {
        "formId": "01",
        "name": "하데리어",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/050701.png",
        "types": [
          "노말"
        ]
      }
    ]
  },
  {
    "id": 508,
    "name": "바랜드",
    "forms": [
      {
        "formId": "01",
        "name": "바랜드",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/050801.png",
        "types": [
          "노말"
        ]
      }
    ]
  },
  {
    "id": 509,
    "name": "쌔비냥",
    "forms": [
      {
        "formId": "01",
        "name": "쌔비냥",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/050901.png",
        "types": [
          "악"
        ]
      }
    ]
  },
  {
    "id": 510,
    "name": "레파르다스",
    "forms": [
      {
        "formId": "01",
        "name": "레파르다스",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/051001.png",
        "types": [
          "악"
        ]
      }
    ]
  },
  {
    "id": 511,
    "name": "야나프",
    "forms": [
      {
        "formId": "01",
        "name": "야나프",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/051101.png",
        "types": [
          "풀"
        ]
      }
    ]
  },
  {
    "id": 512,
    "name": "야나키",
    "forms": [
      {
        "formId": "01",
        "name": "야나키",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/051201.png",
        "types": [
          "풀"
        ]
      }
    ]
  },
  {
    "id": 513,
    "name": "바오프",
    "forms": [
      {
        "formId": "01",
        "name": "바오프",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/051301.png",
        "types": [
          "불꽃"
        ]
      }
    ]
  },
  {
    "id": 514,
    "name": "바오키",
    "forms": [
      {
        "formId": "01",
        "name": "바오키",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/051401.png",
        "types": [
          "불꽃"
        ]
      }
    ]
  },
  {
    "id": 515,
    "name": "앗차프",
    "forms": [
      {
        "formId": "01",
        "name": "앗차프",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/051501.png",
        "types": [
          "물"
        ]
      }
    ]
  },
  {
    "id": 516,
    "name": "앗차키",
    "forms": [
      {
        "formId": "01",
        "name": "앗차키",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/051601.png",
        "types": [
          "물"
        ]
      }
    ]
  },
  {
    "id": 517,
    "name": "몽나",
    "forms": [
      {
        "formId": "01",
        "name": "몽나",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/051701.png",
        "types": [
          "에스퍼"
        ]
      }
    ]
  },
  {
    "id": 518,
    "name": "몽얌나",
    "forms": [
      {
        "formId": "01",
        "name": "몽얌나",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/051801.png",
        "types": [
          "에스퍼"
        ]
      }
    ]
  },
  {
    "id": 519,
    "name": "콩둘기",
    "forms": [
      {
        "formId": "01",
        "name": "콩둘기",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/051901.png",
        "types": [
          "노말",
          "비행"
        ]
      }
    ]
  },
  {
    "id": 520,
    "name": "유토브",
    "forms": [
      {
        "formId": "01",
        "name": "유토브",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/052001.png",
        "types": [
          "노말",
          "비행"
        ]
      }
    ]
  },
  {
    "id": 521,
    "name": "켄호로우",
    "forms": [
      {
        "formId": "01",
        "name": "켄호로우",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/052101.png",
        "types": [
          "노말",
          "비행"
        ]
      }
    ]
  },
  {
    "id": 522,
    "name": "줄뮤마",
    "forms": [
      {
        "formId": "01",
        "name": "줄뮤마",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/052201.png",
        "types": [
          "전기"
        ]
      }
    ]
  },
  {
    "id": 523,
    "name": "제브라이카",
    "forms": [
      {
        "formId": "01",
        "name": "제브라이카",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/052301.png",
        "types": [
          "전기"
        ]
      }
    ]
  },
  {
    "id": 524,
    "name": "단굴",
    "forms": [
      {
        "formId": "01",
        "name": "단굴",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/052401.png",
        "types": [
          "바위"
        ]
      }
    ]
  },
  {
    "id": 525,
    "name": "암트르",
    "forms": [
      {
        "formId": "01",
        "name": "암트르",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/052501.png",
        "types": [
          "바위"
        ]
      }
    ]
  },
  {
    "id": 526,
    "name": "기가이어스",
    "forms": [
      {
        "formId": "01",
        "name": "기가이어스",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/052601.png",
        "types": [
          "바위"
        ]
      }
    ]
  },
  {
    "id": 527,
    "name": "또르박쥐",
    "forms": [
      {
        "formId": "01",
        "name": "또르박쥐",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/052701.png",
        "types": [
          "에스퍼",
          "비행"
        ]
      }
    ]
  },
  {
    "id": 528,
    "name": "맘박쥐",
    "forms": [
      {
        "formId": "01",
        "name": "맘박쥐",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/052801.png",
        "types": [
          "에스퍼",
          "비행"
        ]
      }
    ]
  },
  {
    "id": 529,
    "name": "두더류",
    "forms": [
      {
        "formId": "01",
        "name": "두더류",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/052901.png",
        "types": [
          "땅"
        ]
      }
    ]
  },
  {
    "id": 530,
    "name": "몰드류",
    "forms": [
      {
        "formId": "01",
        "name": "몰드류",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/053001.png",
        "types": [
          "땅",
          "강철"
        ]
      }
    ]
  },
  {
    "id": 531,
    "name": "다부니",
    "forms": [
      {
        "formId": "01",
        "name": "다부니",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/053101.png",
        "types": [
          "노말"
        ]
      },
      {
        "formId": "02",
        "name": "메가다부니",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/053102.png",
        "types": [
          "노말"
        ]
      }
    ]
  },
  {
    "id": 532,
    "name": "으랏차",
    "forms": [
      {
        "formId": "01",
        "name": "으랏차",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/053201.png",
        "types": [
          "격투"
        ]
      }
    ]
  },
  {
    "id": 533,
    "name": "토쇠골",
    "forms": [
      {
        "formId": "01",
        "name": "토쇠골",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/053301.png",
        "types": [
          "격투"
        ]
      }
    ]
  },
  {
    "id": 534,
    "name": "노보청",
    "forms": [
      {
        "formId": "01",
        "name": "노보청",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/053401.png",
        "types": [
          "격투"
        ]
      }
    ]
  },
  {
    "id": 535,
    "name": "동챙이",
    "forms": [
      {
        "formId": "01",
        "name": "동챙이",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/053501.png",
        "types": [
          "물"
        ]
      }
    ]
  },
  {
    "id": 536,
    "name": "두까비",
    "forms": [
      {
        "formId": "01",
        "name": "두까비",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/053601.png",
        "types": [
          "물",
          "땅"
        ]
      }
    ]
  },
  {
    "id": 537,
    "name": "두빅굴",
    "forms": [
      {
        "formId": "01",
        "name": "두빅굴",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/053701.png",
        "types": [
          "물",
          "땅"
        ]
      }
    ]
  },
  {
    "id": 538,
    "name": "던지미",
    "forms": [
      {
        "formId": "01",
        "name": "던지미",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/053801.png",
        "types": [
          "격투"
        ]
      }
    ]
  },
  {
    "id": 539,
    "name": "타격귀",
    "forms": [
      {
        "formId": "01",
        "name": "타격귀",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/053901.png",
        "types": [
          "격투"
        ]
      }
    ]
  },
  {
    "id": 540,
    "name": "두르보",
    "forms": [
      {
        "formId": "01",
        "name": "두르보",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/054001.png",
        "types": [
          "벌레",
          "풀"
        ]
      }
    ]
  },
  {
    "id": 541,
    "name": "두르쿤",
    "forms": [
      {
        "formId": "01",
        "name": "두르쿤",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/054101.png",
        "types": [
          "벌레",
          "풀"
        ]
      }
    ]
  },
  {
    "id": 542,
    "name": "모아머",
    "forms": [
      {
        "formId": "01",
        "name": "모아머",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/054201.png",
        "types": [
          "벌레",
          "풀"
        ]
      }
    ]
  },
  {
    "id": 543,
    "name": "마디네",
    "forms": [
      {
        "formId": "01",
        "name": "마디네",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/054301.png",
        "types": [
          "벌레",
          "독"
        ]
      }
    ]
  },
  {
    "id": 544,
    "name": "휠구",
    "forms": [
      {
        "formId": "01",
        "name": "휠구",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/054401.png",
        "types": [
          "벌레",
          "독"
        ]
      }
    ]
  },
  {
    "id": 545,
    "name": "펜드라",
    "forms": [
      {
        "formId": "01",
        "name": "펜드라",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/054501.png",
        "types": [
          "벌레",
          "독"
        ]
      }
    ]
  },
  {
    "id": 546,
    "name": "소미안",
    "forms": [
      {
        "formId": "01",
        "name": "소미안",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/054601.png",
        "types": [
          "풀",
          "페어리"
        ]
      }
    ]
  },
  {
    "id": 547,
    "name": "엘풍",
    "forms": [
      {
        "formId": "01",
        "name": "엘풍",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/054701.png",
        "types": [
          "풀",
          "페어리"
        ]
      }
    ]
  },
  {
    "id": 548,
    "name": "치릴리",
    "forms": [
      {
        "formId": "01",
        "name": "치릴리",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/054801.png",
        "types": [
          "풀"
        ]
      }
    ]
  },
  {
    "id": 549,
    "name": "드레디어",
    "forms": [
      {
        "formId": "01",
        "name": "드레디어",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/054901.png",
        "types": [
          "풀"
        ]
      },
      {
        "formId": "02",
        "name": "히스이 드레디어",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/054902.png",
        "types": [
          "풀",
          "격투"
        ]
      }
    ]
  },
  {
    "id": 550,
    "name": "배쓰나이",
    "forms": [
      {
        "formId": "01",
        "name": "배쓰나이",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/055001.png",
        "types": [
          "물"
        ]
      }
    ]
  },
  {
    "id": 551,
    "name": "깜눈크",
    "forms": [
      {
        "formId": "01",
        "name": "깜눈크",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/055101.png",
        "types": [
          "땅",
          "악"
        ]
      }
    ]
  },
  {
    "id": 552,
    "name": "악비르",
    "forms": [
      {
        "formId": "01",
        "name": "악비르",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/055201.png",
        "types": [
          "땅",
          "악"
        ]
      }
    ]
  },
  {
    "id": 553,
    "name": "악비아르",
    "forms": [
      {
        "formId": "01",
        "name": "악비아르",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/055301.png",
        "types": [
          "땅",
          "악"
        ]
      }
    ]
  },
  {
    "id": 554,
    "name": "달막화",
    "forms": [
      {
        "formId": "01",
        "name": "달막화",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/055401.png",
        "types": [
          "불꽃"
        ]
      },
      {
        "formId": "02",
        "name": "가라르 달막화",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/055402.png",
        "types": [
          "얼음"
        ]
      }
    ]
  },
  {
    "id": 555,
    "name": "불비달마",
    "forms": [
      {
        "formId": "01",
        "name": "불비달마",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/055501.png",
        "types": [
          "불꽃"
        ]
      },
      {
        "formId": "02",
        "name": "가라르 불비달마",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/055502.png",
        "types": [
          "얼음"
        ]
      }
    ]
  },
  {
    "id": 556,
    "name": "마라카치",
    "forms": [
      {
        "formId": "01",
        "name": "마라카치",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/055601.png",
        "types": [
          "풀"
        ]
      }
    ]
  },
  {
    "id": 557,
    "name": "돌살이",
    "forms": [
      {
        "formId": "01",
        "name": "돌살이",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/055701.png",
        "types": [
          "벌레",
          "바위"
        ]
      }
    ]
  },
  {
    "id": 558,
    "name": "암팰리스",
    "forms": [
      {
        "formId": "01",
        "name": "암팰리스",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/055801.png",
        "types": [
          "벌레",
          "바위"
        ]
      }
    ]
  },
  {
    "id": 559,
    "name": "곤율랭",
    "forms": [
      {
        "formId": "01",
        "name": "곤율랭",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/055901.png",
        "types": [
          "악",
          "격투"
        ]
      }
    ]
  },
  {
    "id": 560,
    "name": "곤율거니",
    "forms": [
      {
        "formId": "01",
        "name": "곤율거니",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/056001.png",
        "types": [
          "악",
          "격투"
        ]
      }
    ]
  },
  {
    "id": 561,
    "name": "심보러",
    "forms": [
      {
        "formId": "01",
        "name": "심보러",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/056101.png",
        "types": [
          "에스퍼",
          "비행"
        ]
      }
    ]
  },
  {
    "id": 562,
    "name": "데스마스",
    "forms": [
      {
        "formId": "01",
        "name": "데스마스",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/056201.png",
        "types": [
          "고스트"
        ]
      },
      {
        "formId": "02",
        "name": "가라르 데스마스",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/056202.png",
        "types": [
          "땅",
          "고스트"
        ]
      }
    ]
  },
  {
    "id": 563,
    "name": "데스니칸",
    "forms": [
      {
        "formId": "01",
        "name": "데스니칸",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/056301.png",
        "types": [
          "고스트"
        ]
      }
    ]
  },
  {
    "id": 564,
    "name": "프로토가",
    "forms": [
      {
        "formId": "01",
        "name": "프로토가",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/056401.png",
        "types": [
          "물",
          "바위"
        ]
      }
    ]
  },
  {
    "id": 565,
    "name": "늑골라",
    "forms": [
      {
        "formId": "01",
        "name": "늑골라",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/056501.png",
        "types": [
          "물",
          "바위"
        ]
      }
    ]
  },
  {
    "id": 566,
    "name": "아켄",
    "forms": [
      {
        "formId": "01",
        "name": "아켄",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/056601.png",
        "types": [
          "바위",
          "비행"
        ]
      }
    ]
  },
  {
    "id": 567,
    "name": "아케오스",
    "forms": [
      {
        "formId": "01",
        "name": "아케오스",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/056701.png",
        "types": [
          "바위",
          "비행"
        ]
      }
    ]
  },
  {
    "id": 568,
    "name": "깨봉이",
    "forms": [
      {
        "formId": "01",
        "name": "깨봉이",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/056801.png",
        "types": [
          "독"
        ]
      }
    ]
  },
  {
    "id": 569,
    "name": "더스트나",
    "forms": [
      {
        "formId": "01",
        "name": "더스트나",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/056901.png",
        "types": [
          "독"
        ]
      },
      {
        "formId": "02",
        "name": "거다이맥스 더스트나",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/056902.png",
        "types": [
          "독"
        ]
      }
    ]
  },
  {
    "id": 570,
    "name": "조로아",
    "forms": [
      {
        "formId": "01",
        "name": "조로아",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/057001.png",
        "types": [
          "악"
        ]
      },
      {
        "formId": "02",
        "name": "히스이 조로아",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/057002.png",
        "types": [
          "노말",
          "고스트"
        ]
      }
    ]
  },
  {
    "id": 571,
    "name": "조로아크",
    "forms": [
      {
        "formId": "01",
        "name": "조로아크",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/057101.png",
        "types": [
          "악"
        ]
      },
      {
        "formId": "02",
        "name": "히스이 Zoroark",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/057102.png",
        "types": [
          "악"
        ]
      }
    ]
  },
  {
    "id": 572,
    "name": "치라미",
    "forms": [
      {
        "formId": "01",
        "name": "치라미",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/057201.png",
        "types": [
          "노말"
        ]
      }
    ]
  },
  {
    "id": 573,
    "name": "치라치노",
    "forms": [
      {
        "formId": "01",
        "name": "치라치노",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/057301.png",
        "types": [
          "노말"
        ]
      }
    ]
  },
  {
    "id": 574,
    "name": "고디탱",
    "forms": [
      {
        "formId": "01",
        "name": "고디탱",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/057401.png",
        "types": [
          "에스퍼"
        ]
      }
    ]
  },
  {
    "id": 575,
    "name": "고디보미",
    "forms": [
      {
        "formId": "01",
        "name": "고디보미",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/057501.png",
        "types": [
          "에스퍼"
        ]
      }
    ]
  },
  {
    "id": 576,
    "name": "고디모아젤",
    "forms": [
      {
        "formId": "01",
        "name": "고디모아젤",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/057601.png",
        "types": [
          "에스퍼"
        ]
      }
    ]
  },
  {
    "id": 577,
    "name": "유니란",
    "forms": [
      {
        "formId": "01",
        "name": "유니란",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/057701.png",
        "types": [
          "에스퍼"
        ]
      }
    ]
  },
  {
    "id": 578,
    "name": "듀란",
    "forms": [
      {
        "formId": "01",
        "name": "듀란",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/057801.png",
        "types": [
          "에스퍼"
        ]
      }
    ]
  },
  {
    "id": 579,
    "name": "란쿨루스",
    "forms": [
      {
        "formId": "01",
        "name": "란쿨루스",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/057901.png",
        "types": [
          "에스퍼"
        ]
      }
    ]
  },
  {
    "id": 580,
    "name": "꼬지보리",
    "forms": [
      {
        "formId": "01",
        "name": "꼬지보리",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/058001.png",
        "types": [
          "물",
          "비행"
        ]
      }
    ]
  },
  {
    "id": 581,
    "name": "스완나",
    "forms": [
      {
        "formId": "01",
        "name": "스완나",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/058101.png",
        "types": [
          "물",
          "비행"
        ]
      }
    ]
  },
  {
    "id": 582,
    "name": "바닐프티",
    "forms": [
      {
        "formId": "01",
        "name": "바닐프티",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/058201.png",
        "types": [
          "얼음"
        ]
      }
    ]
  },
  {
    "id": 583,
    "name": "바닐리치",
    "forms": [
      {
        "formId": "01",
        "name": "바닐리치",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/058301.png",
        "types": [
          "얼음"
        ]
      }
    ]
  },
  {
    "id": 584,
    "name": "배바닐라",
    "forms": [
      {
        "formId": "01",
        "name": "배바닐라",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/058401.png",
        "types": [
          "얼음"
        ]
      }
    ]
  },
  {
    "id": 585,
    "name": "사철록",
    "forms": [
      {
        "formId": "01",
        "name": "사철록",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/058501.png",
        "types": [
          "노말",
          "풀"
        ]
      }
    ]
  },
  {
    "id": 586,
    "name": "바라철록",
    "forms": [
      {
        "formId": "01",
        "name": "바라철록",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/058601.png",
        "types": [
          "노말",
          "풀"
        ]
      }
    ]
  },
  {
    "id": 587,
    "name": "에몽가",
    "forms": [
      {
        "formId": "01",
        "name": "에몽가",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/058701.png",
        "types": [
          "전기",
          "비행"
        ]
      }
    ]
  },
  {
    "id": 588,
    "name": "딱정곤",
    "forms": [
      {
        "formId": "01",
        "name": "딱정곤",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/058801.png",
        "types": [
          "벌레"
        ]
      }
    ]
  },
  {
    "id": 589,
    "name": "슈바르고",
    "forms": [
      {
        "formId": "01",
        "name": "슈바르고",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/058901.png",
        "types": [
          "벌레",
          "강철"
        ]
      }
    ]
  },
  {
    "id": 590,
    "name": "깜놀버슬",
    "forms": [
      {
        "formId": "01",
        "name": "깜놀버슬",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/059001.png",
        "types": [
          "풀",
          "독"
        ]
      }
    ]
  },
  {
    "id": 591,
    "name": "뽀록나",
    "forms": [
      {
        "formId": "01",
        "name": "뽀록나",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/059101.png",
        "types": [
          "풀",
          "독"
        ]
      }
    ]
  },
  {
    "id": 592,
    "name": "탱그릴",
    "forms": [
      {
        "formId": "01",
        "name": "탱그릴",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/059201.png",
        "types": [
          "물",
          "고스트"
        ]
      }
    ]
  },
  {
    "id": 593,
    "name": "탱탱겔",
    "forms": [
      {
        "formId": "01",
        "name": "탱탱겔",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/059301.png",
        "types": [
          "물",
          "고스트"
        ]
      }
    ]
  },
  {
    "id": 594,
    "name": "맘복치",
    "forms": [
      {
        "formId": "01",
        "name": "맘복치",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/059401.png",
        "types": [
          "물"
        ]
      }
    ]
  },
  {
    "id": 595,
    "name": "파쪼옥",
    "forms": [
      {
        "formId": "01",
        "name": "파쪼옥",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/059501.png",
        "types": [
          "벌레",
          "전기"
        ]
      }
    ]
  },
  {
    "id": 596,
    "name": "전툴라",
    "forms": [
      {
        "formId": "01",
        "name": "전툴라",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/059601.png",
        "types": [
          "벌레",
          "전기"
        ]
      }
    ]
  },
  {
    "id": 597,
    "name": "철시드",
    "forms": [
      {
        "formId": "01",
        "name": "철시드",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/059701.png",
        "types": [
          "풀",
          "강철"
        ]
      }
    ]
  },
  {
    "id": 598,
    "name": "너트령",
    "forms": [
      {
        "formId": "01",
        "name": "너트령",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/059801.png",
        "types": [
          "풀",
          "강철"
        ]
      }
    ]
  },
  {
    "id": 599,
    "name": "기어르",
    "forms": [
      {
        "formId": "01",
        "name": "기어르",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/059901.png",
        "types": [
          "강철"
        ]
      }
    ]
  },
  {
    "id": 600,
    "name": "기기어르",
    "forms": [
      {
        "formId": "01",
        "name": "기기어르",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/060001.png",
        "types": [
          "강철"
        ]
      }
    ]
  },
  {
    "id": 601,
    "name": "기기기어르",
    "forms": [
      {
        "formId": "01",
        "name": "기기기어르",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/060101.png",
        "types": [
          "강철"
        ]
      }
    ]
  },
  {
    "id": 602,
    "name": "저리어",
    "forms": [
      {
        "formId": "01",
        "name": "저리어",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/060201.png",
        "types": [
          "전기"
        ]
      }
    ]
  },
  {
    "id": 603,
    "name": "저리릴",
    "forms": [
      {
        "formId": "01",
        "name": "저리릴",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/060301.png",
        "types": [
          "전기"
        ]
      }
    ]
  },
  {
    "id": 604,
    "name": "저리더프",
    "forms": [
      {
        "formId": "01",
        "name": "저리더프",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/060401.png",
        "types": [
          "전기"
        ]
      }
    ]
  },
  {
    "id": 605,
    "name": "리그레",
    "forms": [
      {
        "formId": "01",
        "name": "리그레",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/060501.png",
        "types": [
          "에스퍼"
        ]
      }
    ]
  },
  {
    "id": 606,
    "name": "벰크",
    "forms": [
      {
        "formId": "01",
        "name": "벰크",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/060601.png",
        "types": [
          "에스퍼"
        ]
      }
    ]
  },
  {
    "id": 607,
    "name": "불켜미",
    "forms": [
      {
        "formId": "01",
        "name": "불켜미",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/060701.png",
        "types": [
          "고스트",
          "불꽃"
        ]
      }
    ]
  },
  {
    "id": 608,
    "name": "램프라",
    "forms": [
      {
        "formId": "01",
        "name": "램프라",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/060801.png",
        "types": [
          "고스트",
          "불꽃"
        ]
      }
    ]
  },
  {
    "id": 609,
    "name": "샹델라",
    "forms": [
      {
        "formId": "01",
        "name": "샹델라",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/060901.png",
        "types": [
          "고스트",
          "불꽃"
        ]
      }
    ]
  },
  {
    "id": 610,
    "name": "터검니",
    "forms": [
      {
        "formId": "01",
        "name": "터검니",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/061001.png",
        "types": [
          "드래곤"
        ]
      }
    ]
  },
  {
    "id": 611,
    "name": "액슨도",
    "forms": [
      {
        "formId": "01",
        "name": "액슨도",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/061101.png",
        "types": [
          "드래곤"
        ]
      }
    ]
  },
  {
    "id": 612,
    "name": "액스라이즈",
    "forms": [
      {
        "formId": "01",
        "name": "액스라이즈",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/061201.png",
        "types": [
          "드래곤"
        ]
      }
    ]
  },
  {
    "id": 613,
    "name": "코고미",
    "forms": [
      {
        "formId": "01",
        "name": "코고미",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/061301.png",
        "types": [
          "얼음"
        ]
      }
    ]
  },
  {
    "id": 614,
    "name": "툰베어",
    "forms": [
      {
        "formId": "01",
        "name": "툰베어",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/061401.png",
        "types": [
          "얼음"
        ]
      }
    ]
  },
  {
    "id": 615,
    "name": "프리지오",
    "forms": [
      {
        "formId": "01",
        "name": "프리지오",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/061501.png",
        "types": [
          "얼음"
        ]
      }
    ]
  },
  {
    "id": 616,
    "name": "쪼마리",
    "forms": [
      {
        "formId": "01",
        "name": "쪼마리",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/061601.png",
        "types": [
          "벌레"
        ]
      }
    ]
  },
  {
    "id": 617,
    "name": "어지리더",
    "forms": [
      {
        "formId": "01",
        "name": "어지리더",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/061701.png",
        "types": [
          "벌레"
        ]
      }
    ]
  },
  {
    "id": 618,
    "name": "메더",
    "forms": [
      {
        "formId": "01",
        "name": "메더",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/061801.png",
        "types": [
          "땅",
          "전기"
        ]
      },
      {
        "formId": "02",
        "name": "가라르 메더",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/061802.png",
        "types": [
          "땅",
          "강철"
        ]
      }
    ]
  },
  {
    "id": 619,
    "name": "비조푸",
    "forms": [
      {
        "formId": "01",
        "name": "비조푸",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/061901.png",
        "types": [
          "격투"
        ]
      }
    ]
  },
  {
    "id": 620,
    "name": "비조도",
    "forms": [
      {
        "formId": "01",
        "name": "비조도",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/062001.png",
        "types": [
          "격투"
        ]
      }
    ]
  },
  {
    "id": 621,
    "name": "크리만",
    "forms": [
      {
        "formId": "01",
        "name": "크리만",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/062101.png",
        "types": [
          "드래곤"
        ]
      }
    ]
  },
  {
    "id": 622,
    "name": "골비람",
    "forms": [
      {
        "formId": "01",
        "name": "골비람",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/062201.png",
        "types": [
          "땅",
          "고스트"
        ]
      }
    ]
  },
  {
    "id": 623,
    "name": "골루그",
    "forms": [
      {
        "formId": "01",
        "name": "골루그",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/062301.png",
        "types": [
          "땅",
          "고스트"
        ]
      }
    ]
  },
  {
    "id": 624,
    "name": "자망칼",
    "forms": [
      {
        "formId": "01",
        "name": "자망칼",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/062401.png",
        "types": [
          "악",
          "강철"
        ]
      }
    ]
  },
  {
    "id": 625,
    "name": "절각참",
    "forms": [
      {
        "formId": "01",
        "name": "절각참",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/062501.png",
        "types": [
          "악",
          "강철"
        ]
      }
    ]
  },
  {
    "id": 626,
    "name": "버프론",
    "forms": [
      {
        "formId": "01",
        "name": "버프론",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/062601.png",
        "types": [
          "노말"
        ]
      }
    ]
  },
  {
    "id": 627,
    "name": "수리둥보",
    "forms": [
      {
        "formId": "01",
        "name": "수리둥보",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/062701.png",
        "types": [
          "노말",
          "비행"
        ]
      }
    ]
  },
  {
    "id": 628,
    "name": "워글",
    "forms": [
      {
        "formId": "01",
        "name": "워글",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/062801.png",
        "types": [
          "노말",
          "비행"
        ]
      },
      {
        "formId": "02",
        "name": "히스이 워글",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/062802.png",
        "types": [
          "에스퍼",
          "비행"
        ]
      }
    ]
  },
  {
    "id": 629,
    "name": "벌차이",
    "forms": [
      {
        "formId": "01",
        "name": "벌차이",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/062901.png",
        "types": [
          "악",
          "비행"
        ]
      }
    ]
  },
  {
    "id": 630,
    "name": "버랜지나",
    "forms": [
      {
        "formId": "01",
        "name": "버랜지나",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/063001.png",
        "types": [
          "악",
          "비행"
        ]
      }
    ]
  },
  {
    "id": 631,
    "name": "앤티골",
    "forms": [
      {
        "formId": "01",
        "name": "앤티골",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/063101.png",
        "types": [
          "불꽃"
        ]
      }
    ]
  },
  {
    "id": 632,
    "name": "아이앤트",
    "forms": [
      {
        "formId": "01",
        "name": "아이앤트",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/063201.png",
        "types": [
          "벌레",
          "강철"
        ]
      }
    ]
  },
  {
    "id": 633,
    "name": "모노두",
    "forms": [
      {
        "formId": "01",
        "name": "모노두",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/063301.png",
        "types": [
          "악",
          "드래곤"
        ]
      }
    ]
  },
  {
    "id": 634,
    "name": "디헤드",
    "forms": [
      {
        "formId": "01",
        "name": "디헤드",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/063401.png",
        "types": [
          "악",
          "드래곤"
        ]
      }
    ]
  },
  {
    "id": 635,
    "name": "삼삼드래",
    "forms": [
      {
        "formId": "01",
        "name": "삼삼드래",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/063501.png",
        "types": [
          "악",
          "드래곤"
        ]
      }
    ]
  },
  {
    "id": 636,
    "name": "활화르바",
    "forms": [
      {
        "formId": "01",
        "name": "활화르바",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/063601.png",
        "types": [
          "벌레",
          "불꽃"
        ]
      }
    ]
  },
  {
    "id": 637,
    "name": "불카모스",
    "forms": [
      {
        "formId": "01",
        "name": "불카모스",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/063701.png",
        "types": [
          "벌레",
          "불꽃"
        ]
      }
    ]
  },
  {
    "id": 638,
    "name": "코바르온",
    "forms": [
      {
        "formId": "01",
        "name": "코바르온",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/063801.png",
        "types": [
          "강철",
          "격투"
        ]
      }
    ]
  },
  {
    "id": 639,
    "name": "테라키온",
    "forms": [
      {
        "formId": "01",
        "name": "테라키온",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/063901.png",
        "types": [
          "바위",
          "격투"
        ]
      }
    ]
  },
  {
    "id": 640,
    "name": "비리디온",
    "forms": [
      {
        "formId": "01",
        "name": "비리디온",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/064001.png",
        "types": [
          "풀",
          "격투"
        ]
      }
    ]
  },
  {
    "id": 641,
    "name": "토네로스",
    "forms": [
      {
        "formId": "01",
        "name": "토네로스",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/064101.png",
        "types": [
          "비행"
        ]
      }
    ]
  },
  {
    "id": 642,
    "name": "볼트로스",
    "forms": [
      {
        "formId": "01",
        "name": "볼트로스",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/064201.png",
        "types": [
          "전기",
          "비행"
        ]
      }
    ]
  },
  {
    "id": 643,
    "name": "레시라무",
    "forms": [
      {
        "formId": "01",
        "name": "레시라무",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/064301.png",
        "types": [
          "드래곤",
          "불꽃"
        ]
      }
    ]
  },
  {
    "id": 644,
    "name": "제크로무",
    "forms": [
      {
        "formId": "01",
        "name": "제크로무",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/064401.png",
        "types": [
          "드래곤",
          "전기"
        ]
      }
    ]
  },
  {
    "id": 645,
    "name": "랜드로스",
    "forms": [
      {
        "formId": "01",
        "name": "랜드로스",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/064501.png",
        "types": [
          "땅",
          "비행"
        ]
      }
    ]
  },
  {
    "id": 646,
    "name": "큐레무",
    "forms": [
      {
        "formId": "01",
        "name": "큐레무",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/064601.png",
        "types": [
          "드래곤",
          "얼음"
        ]
      }
    ]
  },
  {
    "id": 647,
    "name": "케르디오",
    "forms": [
      {
        "formId": "01",
        "name": "케르디오",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/064701.png",
        "types": [
          "물",
          "격투"
        ]
      }
    ]
  },
  {
    "id": 648,
    "name": "메로엣타",
    "forms": [
      {
        "formId": "01",
        "name": "메로엣타",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/064801.png",
        "types": [
          "노말",
          "에스퍼"
        ]
      }
    ]
  },
  {
    "id": 649,
    "name": "게노세크트",
    "forms": [
      {
        "formId": "01",
        "name": "게노세크트",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/064901.png",
        "types": [
          "벌레",
          "강철"
        ]
      }
    ]
  },
  {
    "id": 650,
    "name": "도치마론",
    "forms": [
      {
        "formId": "01",
        "name": "도치마론",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/065001.png",
        "types": [
          "풀"
        ]
      }
    ]
  },
  {
    "id": 651,
    "name": "도치보구",
    "forms": [
      {
        "formId": "01",
        "name": "도치보구",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/065101.png",
        "types": [
          "풀"
        ]
      }
    ]
  },
  {
    "id": 652,
    "name": "브리가론",
    "forms": [
      {
        "formId": "01",
        "name": "브리가론",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/065201.png",
        "types": [
          "풀",
          "격투"
        ]
      }
    ]
  },
  {
    "id": 653,
    "name": "푸호꼬",
    "forms": [
      {
        "formId": "01",
        "name": "푸호꼬",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/065301.png",
        "types": [
          "불꽃"
        ]
      }
    ]
  },
  {
    "id": 654,
    "name": "테르나",
    "forms": [
      {
        "formId": "01",
        "name": "테르나",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/065401.png",
        "types": [
          "불꽃"
        ]
      }
    ]
  },
  {
    "id": 655,
    "name": "마폭시",
    "forms": [
      {
        "formId": "01",
        "name": "마폭시",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/065501.png",
        "types": [
          "불꽃",
          "에스퍼"
        ]
      }
    ]
  },
  {
    "id": 656,
    "name": "개구마르",
    "forms": [
      {
        "formId": "01",
        "name": "개구마르",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/065601.png",
        "types": [
          "물"
        ]
      }
    ]
  },
  {
    "id": 657,
    "name": "개굴반장",
    "forms": [
      {
        "formId": "01",
        "name": "개굴반장",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/065701.png",
        "types": [
          "물"
        ]
      }
    ]
  },
  {
    "id": 658,
    "name": "개굴닌자",
    "forms": [
      {
        "formId": "01",
        "name": "개굴닌자",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/065801.png",
        "types": [
          "물",
          "악"
        ]
      }
    ]
  },
  {
    "id": 659,
    "name": "파르빗",
    "forms": [
      {
        "formId": "01",
        "name": "파르빗",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/065901.png",
        "types": [
          "노말"
        ]
      }
    ]
  },
  {
    "id": 660,
    "name": "파르토",
    "forms": [
      {
        "formId": "01",
        "name": "파르토",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/066001.png",
        "types": [
          "노말",
          "땅"
        ]
      }
    ]
  },
  {
    "id": 661,
    "name": "화살꼬빈",
    "forms": [
      {
        "formId": "01",
        "name": "화살꼬빈",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/066101.png",
        "types": [
          "노말",
          "비행"
        ]
      }
    ]
  },
  {
    "id": 662,
    "name": "불화살빈",
    "forms": [
      {
        "formId": "01",
        "name": "불화살빈",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/066201.png",
        "types": [
          "불꽃",
          "비행"
        ]
      }
    ]
  },
  {
    "id": 663,
    "name": "파이어로",
    "forms": [
      {
        "formId": "01",
        "name": "파이어로",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/066301.png",
        "types": [
          "불꽃",
          "비행"
        ]
      }
    ]
  },
  {
    "id": 664,
    "name": "분이벌레",
    "forms": [
      {
        "formId": "01",
        "name": "분이벌레",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/066401.png",
        "types": [
          "벌레"
        ]
      }
    ]
  },
  {
    "id": 665,
    "name": "분떠도리",
    "forms": [
      {
        "formId": "01",
        "name": "분떠도리",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/066501.png",
        "types": [
          "벌레"
        ]
      }
    ]
  },
  {
    "id": 666,
    "name": "비비용",
    "forms": [
      {
        "formId": "01",
        "name": "비비용",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/066601.png",
        "types": [
          "벌레",
          "비행"
        ]
      }
    ]
  },
  {
    "id": 667,
    "name": "레오꼬",
    "forms": [
      {
        "formId": "01",
        "name": "레오꼬",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/066701.png",
        "types": [
          "불꽃",
          "노말"
        ]
      }
    ]
  },
  {
    "id": 668,
    "name": "화염레오",
    "forms": [
      {
        "formId": "01",
        "name": "화염레오",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/066801.png",
        "types": [
          "불꽃",
          "노말"
        ]
      }
    ]
  },
  {
    "id": 669,
    "name": "플라베베",
    "forms": [
      {
        "formId": "01",
        "name": "플라베베",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/066901.png",
        "types": [
          "페어리"
        ]
      }
    ]
  },
  {
    "id": 670,
    "name": "플라엣테",
    "forms": [
      {
        "formId": "01",
        "name": "플라엣테",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/067001.png",
        "types": [
          "페어리"
        ]
      }
    ]
  },
  {
    "id": 671,
    "name": "플라제스",
    "forms": [
      {
        "formId": "01",
        "name": "플라제스",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/067101.png",
        "types": [
          "페어리"
        ]
      }
    ]
  },
  {
    "id": 672,
    "name": "메이클",
    "forms": [
      {
        "formId": "01",
        "name": "메이클",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/067201.png",
        "types": [
          "풀"
        ]
      }
    ]
  },
  {
    "id": 673,
    "name": "고고트",
    "forms": [
      {
        "formId": "01",
        "name": "고고트",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/067301.png",
        "types": [
          "풀"
        ]
      }
    ]
  },
  {
    "id": 674,
    "name": "판짱",
    "forms": [
      {
        "formId": "01",
        "name": "판짱",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/067401.png",
        "types": [
          "격투"
        ]
      }
    ]
  },
  {
    "id": 675,
    "name": "부란다",
    "forms": [
      {
        "formId": "01",
        "name": "부란다",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/067501.png",
        "types": [
          "격투",
          "악"
        ]
      }
    ]
  },
  {
    "id": 676,
    "name": "트리미앙",
    "forms": [
      {
        "formId": "01",
        "name": "트리미앙",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/067601.png",
        "types": [
          "노말"
        ]
      }
    ]
  },
  {
    "id": 677,
    "name": "냐스퍼",
    "forms": [
      {
        "formId": "01",
        "name": "냐스퍼",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/067701.png",
        "types": [
          "에스퍼"
        ]
      }
    ]
  },
  {
    "id": 678,
    "name": "냐오닉스",
    "forms": [
      {
        "formId": "01",
        "name": "냐오닉스",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/067801.png",
        "types": [
          "에스퍼"
        ]
      }
    ]
  },
  {
    "id": 679,
    "name": "단칼빙",
    "forms": [
      {
        "formId": "01",
        "name": "단칼빙",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/067901.png",
        "types": [
          "강철",
          "고스트"
        ]
      }
    ]
  },
  {
    "id": 680,
    "name": "쌍검킬",
    "forms": [
      {
        "formId": "01",
        "name": "쌍검킬",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/068001.png",
        "types": [
          "강철",
          "고스트"
        ]
      }
    ]
  },
  {
    "id": 681,
    "name": "킬가르도",
    "forms": [
      {
        "formId": "01",
        "name": "킬가르도",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/068101.png",
        "types": [
          "강철",
          "고스트"
        ]
      }
    ]
  },
  {
    "id": 682,
    "name": "슈쁘",
    "forms": [
      {
        "formId": "01",
        "name": "슈쁘",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/068201.png",
        "types": [
          "페어리"
        ]
      }
    ]
  },
  {
    "id": 683,
    "name": "프레프티르",
    "forms": [
      {
        "formId": "01",
        "name": "프레프티르",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/068301.png",
        "types": [
          "페어리"
        ]
      }
    ]
  },
  {
    "id": 684,
    "name": "나룸퍼프",
    "forms": [
      {
        "formId": "01",
        "name": "나룸퍼프",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/068401.png",
        "types": [
          "페어리"
        ]
      }
    ]
  },
  {
    "id": 685,
    "name": "나루림",
    "forms": [
      {
        "formId": "01",
        "name": "나루림",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/068501.png",
        "types": [
          "페어리"
        ]
      }
    ]
  },
  {
    "id": 686,
    "name": "오케이징",
    "forms": [
      {
        "formId": "01",
        "name": "오케이징",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/068601.png",
        "types": [
          "악",
          "에스퍼"
        ]
      }
    ]
  },
  {
    "id": 687,
    "name": "칼라마네로",
    "forms": [
      {
        "formId": "01",
        "name": "칼라마네로",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/068701.png",
        "types": [
          "악",
          "에스퍼"
        ]
      }
    ]
  },
  {
    "id": 688,
    "name": "거북손손",
    "forms": [
      {
        "formId": "01",
        "name": "거북손손",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/068801.png",
        "types": [
          "바위",
          "물"
        ]
      }
    ]
  },
  {
    "id": 689,
    "name": "거북손데스",
    "forms": [
      {
        "formId": "01",
        "name": "거북손데스",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/068901.png",
        "types": [
          "바위",
          "물"
        ]
      }
    ]
  },
  {
    "id": 690,
    "name": "수레기",
    "forms": [
      {
        "formId": "01",
        "name": "수레기",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/069001.png",
        "types": [
          "독",
          "물"
        ]
      }
    ]
  },
  {
    "id": 691,
    "name": "드래캄",
    "forms": [
      {
        "formId": "01",
        "name": "드래캄",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/069101.png",
        "types": [
          "독",
          "드래곤"
        ]
      }
    ]
  },
  {
    "id": 692,
    "name": "완철포",
    "forms": [
      {
        "formId": "01",
        "name": "완철포",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/069201.png",
        "types": [
          "물"
        ]
      }
    ]
  },
  {
    "id": 693,
    "name": "블로스터",
    "forms": [
      {
        "formId": "01",
        "name": "블로스터",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/069301.png",
        "types": [
          "물"
        ]
      }
    ]
  },
  {
    "id": 694,
    "name": "목도리키텔",
    "forms": [
      {
        "formId": "01",
        "name": "목도리키텔",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/069401.png",
        "types": [
          "전기",
          "노말"
        ]
      }
    ]
  },
  {
    "id": 695,
    "name": "일레도리자드",
    "forms": [
      {
        "formId": "01",
        "name": "일레도리자드",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/069501.png",
        "types": [
          "전기",
          "노말"
        ]
      }
    ]
  },
  {
    "id": 696,
    "name": "티고라스",
    "forms": [
      {
        "formId": "01",
        "name": "티고라스",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/069601.png",
        "types": [
          "바위",
          "드래곤"
        ]
      }
    ]
  },
  {
    "id": 697,
    "name": "견고라스",
    "forms": [
      {
        "formId": "01",
        "name": "견고라스",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/069701.png",
        "types": [
          "바위",
          "드래곤"
        ]
      }
    ]
  },
  {
    "id": 698,
    "name": "아마루스",
    "forms": [
      {
        "formId": "01",
        "name": "아마루스",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/069801.png",
        "types": [
          "바위",
          "얼음"
        ]
      }
    ]
  },
  {
    "id": 699,
    "name": "아마루르가",
    "forms": [
      {
        "formId": "01",
        "name": "아마루르가",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/069901.png",
        "types": [
          "바위",
          "얼음"
        ]
      }
    ]
  },
  {
    "id": 700,
    "name": "님피아",
    "forms": [
      {
        "formId": "01",
        "name": "님피아",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/070001.png",
        "types": [
          "페어리"
        ]
      }
    ]
  },
  {
    "id": 701,
    "name": "루차불",
    "forms": [
      {
        "formId": "01",
        "name": "루차불",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/070101.png",
        "types": [
          "격투",
          "비행"
        ]
      }
    ]
  },
  {
    "id": 702,
    "name": "데덴네",
    "forms": [
      {
        "formId": "01",
        "name": "데덴네",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/070201.png",
        "types": [
          "전기",
          "페어리"
        ]
      }
    ]
  },
  {
    "id": 703,
    "name": "멜리시",
    "forms": [
      {
        "formId": "01",
        "name": "멜리시",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/070301.png",
        "types": [
          "바위",
          "페어리"
        ]
      }
    ]
  },
  {
    "id": 704,
    "name": "미끄메라",
    "forms": [
      {
        "formId": "01",
        "name": "미끄메라",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/070401.png",
        "types": [
          "드래곤"
        ]
      }
    ]
  },
  {
    "id": 705,
    "name": "미끄네일",
    "forms": [
      {
        "formId": "01",
        "name": "미끄네일",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/070501.png",
        "types": [
          "드래곤"
        ]
      },
      {
        "formId": "02",
        "name": "히스이 미끄네일",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/070502.png",
        "types": [
          "강철",
          "드래곤"
        ]
      }
    ]
  },
  {
    "id": 706,
    "name": "미끄래곤",
    "forms": [
      {
        "formId": "01",
        "name": "미끄래곤",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/070601.png",
        "types": [
          "드래곤"
        ]
      },
      {
        "formId": "02",
        "name": "히스이 미끄래곤",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/070602.png",
        "types": [
          "강철",
          "드래곤"
        ]
      }
    ]
  },
  {
    "id": 707,
    "name": "클레피",
    "forms": [
      {
        "formId": "01",
        "name": "클레피",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/070701.png",
        "types": [
          "강철",
          "페어리"
        ]
      }
    ]
  },
  {
    "id": 708,
    "name": "나목령",
    "forms": [
      {
        "formId": "01",
        "name": "나목령",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/070801.png",
        "types": [
          "고스트",
          "풀"
        ]
      }
    ]
  },
  {
    "id": 709,
    "name": "대로트",
    "forms": [
      {
        "formId": "01",
        "name": "대로트",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/070901.png",
        "types": [
          "고스트",
          "풀"
        ]
      }
    ]
  },
  {
    "id": 710,
    "name": "호바귀",
    "forms": [
      {
        "formId": "01",
        "name": "호바귀",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/071001.png",
        "types": [
          "고스트",
          "풀"
        ]
      }
    ]
  },
  {
    "id": 711,
    "name": "펌킨인",
    "forms": [
      {
        "formId": "01",
        "name": "펌킨인",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/071101.png",
        "types": [
          "고스트",
          "풀"
        ]
      }
    ]
  },
  {
    "id": 712,
    "name": "꽁어름",
    "forms": [
      {
        "formId": "01",
        "name": "꽁어름",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/071201.png",
        "types": [
          "얼음"
        ]
      }
    ]
  },
  {
    "id": 713,
    "name": "크레베이스",
    "forms": [
      {
        "formId": "01",
        "name": "크레베이스",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/071301.png",
        "types": [
          "얼음"
        ]
      },
      {
        "formId": "02",
        "name": "히스이 크레베이스",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/071302.png",
        "types": [
          "얼음",
          "바위"
        ]
      }
    ]
  },
  {
    "id": 714,
    "name": "음뱃",
    "forms": [
      {
        "formId": "01",
        "name": "음뱃",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/071401.png",
        "types": [
          "비행",
          "드래곤"
        ]
      }
    ]
  },
  {
    "id": 715,
    "name": "음번",
    "forms": [
      {
        "formId": "01",
        "name": "음번",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/071501.png",
        "types": [
          "비행",
          "드래곤"
        ]
      }
    ]
  },
  {
    "id": 716,
    "name": "제르네아스",
    "forms": [
      {
        "formId": "01",
        "name": "제르네아스",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/071601.png",
        "types": [
          "페어리"
        ]
      }
    ]
  },
  {
    "id": 717,
    "name": "이벨타르",
    "forms": [
      {
        "formId": "01",
        "name": "이벨타르",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/071701.png",
        "types": [
          "악",
          "비행"
        ]
      }
    ]
  },
  {
    "id": 718,
    "name": "지가르데",
    "forms": [
      {
        "formId": "01",
        "name": "지가르데",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/071801.png",
        "types": [
          "드래곤",
          "땅"
        ]
      }
    ]
  },
  {
    "id": 719,
    "name": "디안시",
    "forms": [
      {
        "formId": "01",
        "name": "디안시",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/071901.png",
        "types": [
          "바위",
          "페어리"
        ]
      },
      {
        "formId": "02",
        "name": "메가디안시",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/071902.png",
        "types": [
          "바위",
          "페어리"
        ]
      }
    ]
  },
  {
    "id": 720,
    "name": "후파",
    "forms": [
      {
        "formId": "01",
        "name": "후파",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/072001.png",
        "types": [
          "에스퍼",
          "고스트"
        ]
      }
    ]
  },
  {
    "id": 721,
    "name": "볼케니온",
    "forms": [
      {
        "formId": "01",
        "name": "볼케니온",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/072101.png",
        "types": [
          "불꽃",
          "물"
        ]
      }
    ]
  },
  {
    "id": 722,
    "name": "나몰빼미",
    "forms": [
      {
        "formId": "01",
        "name": "나몰빼미",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/072201.png",
        "types": [
          "풀",
          "비행"
        ]
      }
    ]
  },
  {
    "id": 723,
    "name": "빼미스로우",
    "forms": [
      {
        "formId": "01",
        "name": "빼미스로우",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/072301.png",
        "types": [
          "풀",
          "비행"
        ]
      }
    ]
  },
  {
    "id": 724,
    "name": "모크나이퍼",
    "forms": [
      {
        "formId": "01",
        "name": "모크나이퍼",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/072401.png",
        "types": [
          "풀",
          "고스트"
        ]
      },
      {
        "formId": "02",
        "name": "히스이 모크나이퍼",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/072402.png",
        "types": [
          "풀",
          "격투"
        ]
      }
    ]
  },
  {
    "id": 725,
    "name": "냐오불",
    "forms": [
      {
        "formId": "01",
        "name": "냐오불",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/072501.png",
        "types": [
          "불꽃"
        ]
      }
    ]
  },
  {
    "id": 726,
    "name": "냐오히트",
    "forms": [
      {
        "formId": "01",
        "name": "냐오히트",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/072601.png",
        "types": [
          "불꽃"
        ]
      }
    ]
  },
  {
    "id": 727,
    "name": "어흥염",
    "forms": [
      {
        "formId": "01",
        "name": "어흥염",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/072701.png",
        "types": [
          "불꽃",
          "악"
        ]
      }
    ]
  },
  {
    "id": 728,
    "name": "누리공",
    "forms": [
      {
        "formId": "01",
        "name": "누리공",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/072801.png",
        "types": [
          "물"
        ]
      }
    ]
  },
  {
    "id": 729,
    "name": "키요공",
    "forms": [
      {
        "formId": "01",
        "name": "키요공",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/072901.png",
        "types": [
          "물"
        ]
      }
    ]
  },
  {
    "id": 730,
    "name": "누리레느",
    "forms": [
      {
        "formId": "01",
        "name": "누리레느",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/073001.png",
        "types": [
          "물",
          "페어리"
        ]
      }
    ]
  },
  {
    "id": 731,
    "name": "콕코구리",
    "forms": [
      {
        "formId": "01",
        "name": "콕코구리",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/073101.png",
        "types": [
          "노말",
          "비행"
        ]
      }
    ]
  },
  {
    "id": 732,
    "name": "크라파",
    "forms": [
      {
        "formId": "01",
        "name": "크라파",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/073201.png",
        "types": [
          "노말",
          "비행"
        ]
      }
    ]
  },
  {
    "id": 733,
    "name": "왕큰부리",
    "forms": [
      {
        "formId": "01",
        "name": "왕큰부리",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/073301.png",
        "types": [
          "노말",
          "비행"
        ]
      }
    ]
  },
  {
    "id": 734,
    "name": "영구스",
    "forms": [
      {
        "formId": "01",
        "name": "영구스",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/073401.png",
        "types": [
          "노말"
        ]
      }
    ]
  },
  {
    "id": 735,
    "name": "형사구스",
    "forms": [
      {
        "formId": "01",
        "name": "형사구스",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/073501.png",
        "types": [
          "노말"
        ]
      }
    ]
  },
  {
    "id": 736,
    "name": "턱지충이",
    "forms": [
      {
        "formId": "01",
        "name": "턱지충이",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/073601.png",
        "types": [
          "벌레"
        ]
      }
    ]
  },
  {
    "id": 737,
    "name": "전지충이",
    "forms": [
      {
        "formId": "01",
        "name": "전지충이",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/073701.png",
        "types": [
          "벌레",
          "전기"
        ]
      }
    ]
  },
  {
    "id": 738,
    "name": "투구뿌논",
    "forms": [
      {
        "formId": "01",
        "name": "투구뿌논",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/073801.png",
        "types": [
          "벌레",
          "전기"
        ]
      }
    ]
  },
  {
    "id": 739,
    "name": "오기지게",
    "forms": [
      {
        "formId": "01",
        "name": "오기지게",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/073901.png",
        "types": [
          "격투"
        ]
      }
    ]
  },
  {
    "id": 740,
    "name": "모단단게",
    "forms": [
      {
        "formId": "01",
        "name": "모단단게",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/074001.png",
        "types": [
          "격투",
          "얼음"
        ]
      }
    ]
  },
  {
    "id": 741,
    "name": "춤추새",
    "forms": [
      {
        "formId": "01",
        "name": "춤추새",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/074101.png",
        "types": [
          "불꽃",
          "비행"
        ]
      }
    ]
  },
  {
    "id": 742,
    "name": "에블리",
    "forms": [
      {
        "formId": "01",
        "name": "에블리",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/074201.png",
        "types": [
          "벌레",
          "페어리"
        ]
      }
    ]
  },
  {
    "id": 743,
    "name": "에리본",
    "forms": [
      {
        "formId": "01",
        "name": "에리본",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/074301.png",
        "types": [
          "벌레",
          "페어리"
        ]
      }
    ]
  },
  {
    "id": 744,
    "name": "암멍이",
    "forms": [
      {
        "formId": "01",
        "name": "암멍이",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/074401.png",
        "types": [
          "바위"
        ]
      }
    ]
  },
  {
    "id": 745,
    "name": "루가루암",
    "forms": [
      {
        "formId": "01",
        "name": "루가루암",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/074501.png",
        "types": [
          "바위"
        ]
      }
    ]
  },
  {
    "id": 746,
    "name": "약어리",
    "forms": [
      {
        "formId": "01",
        "name": "약어리",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/074601.png",
        "types": [
          "물"
        ]
      }
    ]
  },
  {
    "id": 747,
    "name": "시마사리",
    "forms": [
      {
        "formId": "01",
        "name": "시마사리",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/074701.png",
        "types": [
          "독",
          "물"
        ]
      }
    ]
  },
  {
    "id": 748,
    "name": "더시마사리",
    "forms": [
      {
        "formId": "01",
        "name": "더시마사리",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/074801.png",
        "types": [
          "독",
          "물"
        ]
      }
    ]
  },
  {
    "id": 749,
    "name": "머드나기",
    "forms": [
      {
        "formId": "01",
        "name": "머드나기",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/074901.png",
        "types": [
          "땅"
        ]
      }
    ]
  },
  {
    "id": 750,
    "name": "만마드",
    "forms": [
      {
        "formId": "01",
        "name": "만마드",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/075001.png",
        "types": [
          "땅"
        ]
      }
    ]
  },
  {
    "id": 751,
    "name": "물거미",
    "forms": [
      {
        "formId": "01",
        "name": "물거미",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/075101.png",
        "types": [
          "물",
          "벌레"
        ]
      }
    ]
  },
  {
    "id": 752,
    "name": "깨비물거미",
    "forms": [
      {
        "formId": "01",
        "name": "깨비물거미",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/075201.png",
        "types": [
          "물",
          "벌레"
        ]
      }
    ]
  },
  {
    "id": 753,
    "name": "짜랑랑",
    "forms": [
      {
        "formId": "01",
        "name": "짜랑랑",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/075301.png",
        "types": [
          "풀"
        ]
      }
    ]
  },
  {
    "id": 754,
    "name": "라란티스",
    "forms": [
      {
        "formId": "01",
        "name": "라란티스",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/075401.png",
        "types": [
          "풀"
        ]
      }
    ]
  },
  {
    "id": 755,
    "name": "자마슈",
    "forms": [
      {
        "formId": "01",
        "name": "자마슈",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/075501.png",
        "types": [
          "풀",
          "페어리"
        ]
      }
    ]
  },
  {
    "id": 756,
    "name": "마셰이드",
    "forms": [
      {
        "formId": "01",
        "name": "마셰이드",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/075601.png",
        "types": [
          "풀",
          "페어리"
        ]
      }
    ]
  },
  {
    "id": 757,
    "name": "야도뇽",
    "forms": [
      {
        "formId": "01",
        "name": "야도뇽",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/075701.png",
        "types": [
          "독",
          "불꽃"
        ]
      }
    ]
  },
  {
    "id": 758,
    "name": "염뉴트",
    "forms": [
      {
        "formId": "01",
        "name": "염뉴트",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/075801.png",
        "types": [
          "독",
          "불꽃"
        ]
      }
    ]
  },
  {
    "id": 759,
    "name": "포곰곰",
    "forms": [
      {
        "formId": "01",
        "name": "포곰곰",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/075901.png",
        "types": [
          "노말",
          "격투"
        ]
      }
    ]
  },
  {
    "id": 760,
    "name": "이븐곰",
    "forms": [
      {
        "formId": "01",
        "name": "이븐곰",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/076001.png",
        "types": [
          "노말",
          "격투"
        ]
      }
    ]
  },
  {
    "id": 761,
    "name": "달콤아",
    "forms": [
      {
        "formId": "01",
        "name": "달콤아",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/076101.png",
        "types": [
          "풀"
        ]
      }
    ]
  },
  {
    "id": 762,
    "name": "달무리나",
    "forms": [
      {
        "formId": "01",
        "name": "달무리나",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/076201.png",
        "types": [
          "풀"
        ]
      }
    ]
  },
  {
    "id": 763,
    "name": "달코퀸",
    "forms": [
      {
        "formId": "01",
        "name": "달코퀸",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/076301.png",
        "types": [
          "풀"
        ]
      }
    ]
  },
  {
    "id": 764,
    "name": "큐아링",
    "forms": [
      {
        "formId": "01",
        "name": "큐아링",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/076401.png",
        "types": [
          "페어리"
        ]
      }
    ]
  },
  {
    "id": 765,
    "name": "하랑우탄",
    "forms": [
      {
        "formId": "01",
        "name": "하랑우탄",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/076501.png",
        "types": [
          "노말",
          "에스퍼"
        ]
      }
    ]
  },
  {
    "id": 766,
    "name": "내던숭이",
    "forms": [
      {
        "formId": "01",
        "name": "내던숭이",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/076601.png",
        "types": [
          "격투"
        ]
      }
    ]
  },
  {
    "id": 767,
    "name": "꼬시레",
    "forms": [
      {
        "formId": "01",
        "name": "꼬시레",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/076701.png",
        "types": [
          "벌레",
          "물"
        ]
      }
    ]
  },
  {
    "id": 768,
    "name": "갑주무사",
    "forms": [
      {
        "formId": "01",
        "name": "갑주무사",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/076801.png",
        "types": [
          "벌레",
          "물"
        ]
      }
    ]
  },
  {
    "id": 769,
    "name": "모래꿍",
    "forms": [
      {
        "formId": "01",
        "name": "모래꿍",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/076901.png",
        "types": [
          "고스트",
          "땅"
        ]
      }
    ]
  },
  {
    "id": 770,
    "name": "모래성이당",
    "forms": [
      {
        "formId": "01",
        "name": "모래성이당",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/077001.png",
        "types": [
          "고스트",
          "땅"
        ]
      }
    ]
  },
  {
    "id": 771,
    "name": "해무기",
    "forms": [
      {
        "formId": "01",
        "name": "해무기",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/077101.png",
        "types": [
          "물"
        ]
      }
    ]
  },
  {
    "id": 772,
    "name": "타입:널",
    "forms": [
      {
        "formId": "01",
        "name": "타입:널",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/077201.png",
        "types": [
          "노말"
        ]
      }
    ]
  },
  {
    "id": 773,
    "name": "실버디",
    "forms": [
      {
        "formId": "01",
        "name": "실버디",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/077301.png",
        "types": [
          "노말"
        ]
      }
    ]
  },
  {
    "id": 774,
    "name": "메테노",
    "forms": [
      {
        "formId": "01",
        "name": "메테노",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/077401.png",
        "types": [
          "바위",
          "비행"
        ]
      }
    ]
  },
  {
    "id": 775,
    "name": "자말라",
    "forms": [
      {
        "formId": "01",
        "name": "자말라",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/077501.png",
        "types": [
          "노말"
        ]
      }
    ]
  },
  {
    "id": 776,
    "name": "폭거북스",
    "forms": [
      {
        "formId": "01",
        "name": "폭거북스",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/077601.png",
        "types": [
          "불꽃",
          "드래곤"
        ]
      }
    ]
  },
  {
    "id": 777,
    "name": "토게데마루",
    "forms": [
      {
        "formId": "01",
        "name": "토게데마루",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/077701.png",
        "types": [
          "전기",
          "강철"
        ]
      }
    ]
  },
  {
    "id": 778,
    "name": "따라큐",
    "forms": [
      {
        "formId": "01",
        "name": "따라큐",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/077801.png",
        "types": [
          "고스트",
          "페어리"
        ]
      }
    ]
  },
  {
    "id": 779,
    "name": "치갈기",
    "forms": [
      {
        "formId": "01",
        "name": "치갈기",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/077901.png",
        "types": [
          "물",
          "에스퍼"
        ]
      }
    ]
  },
  {
    "id": 780,
    "name": "할비롱",
    "forms": [
      {
        "formId": "01",
        "name": "할비롱",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/078001.png",
        "types": [
          "노말",
          "드래곤"
        ]
      }
    ]
  },
  {
    "id": 781,
    "name": "타타륜",
    "forms": [
      {
        "formId": "01",
        "name": "타타륜",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/078101.png",
        "types": [
          "고스트",
          "풀"
        ]
      }
    ]
  },
  {
    "id": 782,
    "name": "짜랑꼬",
    "forms": [
      {
        "formId": "01",
        "name": "짜랑꼬",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/078201.png",
        "types": [
          "드래곤"
        ]
      }
    ]
  },
  {
    "id": 783,
    "name": "짜랑고우",
    "forms": [
      {
        "formId": "01",
        "name": "짜랑고우",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/078301.png",
        "types": [
          "드래곤",
          "격투"
        ]
      }
    ]
  },
  {
    "id": 784,
    "name": "짜랑고우거",
    "forms": [
      {
        "formId": "01",
        "name": "짜랑고우거",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/078401.png",
        "types": [
          "드래곤",
          "격투"
        ]
      }
    ]
  },
  {
    "id": 785,
    "name": "카푸꼬꼬꼭",
    "forms": [
      {
        "formId": "01",
        "name": "카푸꼬꼬꼭",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/078501.png",
        "types": [
          "전기",
          "페어리"
        ]
      }
    ]
  },
  {
    "id": 786,
    "name": "카푸나비나",
    "forms": [
      {
        "formId": "01",
        "name": "카푸나비나",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/078601.png",
        "types": [
          "에스퍼",
          "페어리"
        ]
      }
    ]
  },
  {
    "id": 787,
    "name": "카푸브루루",
    "forms": [
      {
        "formId": "01",
        "name": "카푸브루루",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/078701.png",
        "types": [
          "풀",
          "페어리"
        ]
      }
    ]
  },
  {
    "id": 788,
    "name": "카푸느지느",
    "forms": [
      {
        "formId": "01",
        "name": "카푸느지느",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/078801.png",
        "types": [
          "물",
          "페어리"
        ]
      }
    ]
  },
  {
    "id": 789,
    "name": "코스모그",
    "forms": [
      {
        "formId": "01",
        "name": "코스모그",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/078901.png",
        "types": [
          "에스퍼"
        ]
      }
    ]
  },
  {
    "id": 790,
    "name": "코스모움",
    "forms": [
      {
        "formId": "01",
        "name": "코스모움",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/079001.png",
        "types": [
          "에스퍼"
        ]
      }
    ]
  },
  {
    "id": 791,
    "name": "솔가레오",
    "forms": [
      {
        "formId": "01",
        "name": "솔가레오",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/079101.png",
        "types": [
          "에스퍼",
          "강철"
        ]
      }
    ]
  },
  {
    "id": 792,
    "name": "루나아라",
    "forms": [
      {
        "formId": "01",
        "name": "루나아라",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/079201.png",
        "types": [
          "에스퍼",
          "고스트"
        ]
      }
    ]
  },
  {
    "id": 793,
    "name": "텅비드",
    "forms": [
      {
        "formId": "01",
        "name": "텅비드",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/079301.png",
        "types": [
          "바위",
          "독"
        ]
      }
    ]
  },
  {
    "id": 794,
    "name": "매시붕",
    "forms": [
      {
        "formId": "01",
        "name": "매시붕",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/079401.png",
        "types": [
          "벌레",
          "격투"
        ]
      }
    ]
  },
  {
    "id": 795,
    "name": "페로코체",
    "forms": [
      {
        "formId": "01",
        "name": "페로코체",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/079501.png",
        "types": [
          "벌레",
          "격투"
        ]
      }
    ]
  },
  {
    "id": 796,
    "name": "전수목",
    "forms": [
      {
        "formId": "01",
        "name": "전수목",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/079601.png",
        "types": [
          "전기"
        ]
      }
    ]
  },
  {
    "id": 797,
    "name": "철화구야",
    "forms": [
      {
        "formId": "01",
        "name": "철화구야",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/079701.png",
        "types": [
          "강철",
          "비행"
        ]
      }
    ]
  },
  {
    "id": 798,
    "name": "종이신도",
    "forms": [
      {
        "formId": "01",
        "name": "종이신도",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/079801.png",
        "types": [
          "풀",
          "강철"
        ]
      }
    ]
  },
  {
    "id": 799,
    "name": "악식킹",
    "forms": [
      {
        "formId": "01",
        "name": "악식킹",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/079901.png",
        "types": [
          "악",
          "드래곤"
        ]
      }
    ]
  },
  {
    "id": 800,
    "name": "네크로즈마",
    "forms": [
      {
        "formId": "01",
        "name": "네크로즈마",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/080001.png",
        "types": [
          "에스퍼"
        ]
      }
    ]
  },
  {
    "id": 801,
    "name": "마기아나",
    "forms": [
      {
        "formId": "01",
        "name": "마기아나",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/080101.png",
        "types": [
          "강철",
          "페어리"
        ]
      }
    ]
  },
  {
    "id": 802,
    "name": "마샤도",
    "forms": [
      {
        "formId": "01",
        "name": "마샤도",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/080201.png",
        "types": [
          "격투",
          "고스트"
        ]
      }
    ]
  },
  {
    "id": 803,
    "name": "베베놈",
    "forms": [
      {
        "formId": "01",
        "name": "베베놈",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/080301.png",
        "types": [
          "독"
        ]
      }
    ]
  },
  {
    "id": 804,
    "name": "아고용",
    "forms": [
      {
        "formId": "01",
        "name": "아고용",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/080401.png",
        "types": [
          "독",
          "드래곤"
        ]
      }
    ]
  },
  {
    "id": 805,
    "name": "차곡차곡",
    "forms": [
      {
        "formId": "01",
        "name": "차곡차곡",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/080501.png",
        "types": [
          "바위",
          "강철"
        ]
      }
    ]
  },
  {
    "id": 806,
    "name": "두파팡",
    "forms": [
      {
        "formId": "01",
        "name": "두파팡",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/080601.png",
        "types": [
          "불꽃",
          "고스트"
        ]
      }
    ]
  },
  {
    "id": 807,
    "name": "제라오라",
    "forms": [
      {
        "formId": "01",
        "name": "제라오라",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/080701.png",
        "types": [
          "전기"
        ]
      }
    ]
  },
  {
    "id": 808,
    "name": "멜탄",
    "forms": [
      {
        "formId": "01",
        "name": "멜탄",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/080801.png",
        "types": [
          "강철"
        ]
      }
    ]
  },
  {
    "id": 809,
    "name": "멜메탈",
    "forms": [
      {
        "formId": "01",
        "name": "멜메탈",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/080901.png",
        "types": [
          "강철"
        ]
      },
      {
        "formId": "02",
        "name": "거다이맥스 멜메탈",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/080902.png",
        "types": [
          "강철"
        ]
      }
    ]
  },
  {
    "id": 810,
    "name": "흥나숭",
    "forms": [
      {
        "formId": "01",
        "name": "흥나숭",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/081001.png",
        "types": [
          "풀"
        ]
      }
    ]
  },
  {
    "id": 811,
    "name": "채키몽",
    "forms": [
      {
        "formId": "01",
        "name": "채키몽",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/081101.png",
        "types": [
          "풀"
        ]
      }
    ]
  },
  {
    "id": 812,
    "name": "고릴타",
    "forms": [
      {
        "formId": "01",
        "name": "고릴타",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/081201.png",
        "types": [
          "풀"
        ]
      },
      {
        "formId": "02",
        "name": "거다이맥스 고릴타",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/081202.png",
        "types": [
          "풀"
        ]
      }
    ]
  },
  {
    "id": 813,
    "name": "염버니",
    "forms": [
      {
        "formId": "01",
        "name": "염버니",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/081301.png",
        "types": [
          "불꽃"
        ]
      }
    ]
  },
  {
    "id": 814,
    "name": "래비풋",
    "forms": [
      {
        "formId": "01",
        "name": "래비풋",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/081401.png",
        "types": [
          "불꽃"
        ]
      }
    ]
  },
  {
    "id": 815,
    "name": "에이스번",
    "forms": [
      {
        "formId": "01",
        "name": "에이스번",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/081501.png",
        "types": [
          "불꽃"
        ]
      },
      {
        "formId": "02",
        "name": "거다이맥스 에이스번",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/081502.png",
        "types": [
          "불꽃"
        ]
      }
    ]
  },
  {
    "id": 816,
    "name": "울머기",
    "forms": [
      {
        "formId": "01",
        "name": "울머기",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/081601.png",
        "types": [
          "물"
        ]
      }
    ]
  },
  {
    "id": 817,
    "name": "누겔레온",
    "forms": [
      {
        "formId": "01",
        "name": "누겔레온",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/081701.png",
        "types": [
          "물"
        ]
      }
    ]
  },
  {
    "id": 818,
    "name": "인텔리레온",
    "forms": [
      {
        "formId": "01",
        "name": "인텔리레온",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/081801.png",
        "types": [
          "물"
        ]
      },
      {
        "formId": "02",
        "name": "거다이맥스 인텔리레온",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/081802.png",
        "types": [
          "물"
        ]
      }
    ]
  },
  {
    "id": 819,
    "name": "탐리스",
    "forms": [
      {
        "formId": "01",
        "name": "탐리스",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/081901.png",
        "types": [
          "노말"
        ]
      }
    ]
  },
  {
    "id": 820,
    "name": "요씽리스",
    "forms": [
      {
        "formId": "01",
        "name": "요씽리스",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/082001.png",
        "types": [
          "노말"
        ]
      }
    ]
  },
  {
    "id": 821,
    "name": "파라꼬",
    "forms": [
      {
        "formId": "01",
        "name": "파라꼬",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/082101.png",
        "types": [
          "비행"
        ]
      }
    ]
  },
  {
    "id": 822,
    "name": "파크로우",
    "forms": [
      {
        "formId": "01",
        "name": "파크로우",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/082201.png",
        "types": [
          "비행"
        ]
      }
    ]
  },
  {
    "id": 823,
    "name": "아머까오",
    "forms": [
      {
        "formId": "01",
        "name": "아머까오",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/082301.png",
        "types": [
          "비행",
          "강철"
        ]
      },
      {
        "formId": "02",
        "name": "거다이맥스 아머까오",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/082302.png",
        "types": [
          "비행",
          "강철"
        ]
      }
    ]
  },
  {
    "id": 824,
    "name": "두루지벌레",
    "forms": [
      {
        "formId": "01",
        "name": "두루지벌레",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/082401.png",
        "types": [
          "벌레"
        ]
      }
    ]
  },
  {
    "id": 825,
    "name": "레돔벌레",
    "forms": [
      {
        "formId": "01",
        "name": "레돔벌레",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/082501.png",
        "types": [
          "벌레",
          "에스퍼"
        ]
      }
    ]
  },
  {
    "id": 826,
    "name": "이올브",
    "forms": [
      {
        "formId": "01",
        "name": "이올브",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/082601.png",
        "types": [
          "벌레",
          "에스퍼"
        ]
      },
      {
        "formId": "02",
        "name": "거다이맥스 이올브",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/082602.png",
        "types": [
          "벌레",
          "에스퍼"
        ]
      }
    ]
  },
  {
    "id": 827,
    "name": "훔처우",
    "forms": [
      {
        "formId": "01",
        "name": "훔처우",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/082701.png",
        "types": [
          "악"
        ]
      }
    ]
  },
  {
    "id": 828,
    "name": "폭슬라이",
    "forms": [
      {
        "formId": "01",
        "name": "폭슬라이",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/082801.png",
        "types": [
          "악"
        ]
      }
    ]
  },
  {
    "id": 829,
    "name": "꼬모카",
    "forms": [
      {
        "formId": "01",
        "name": "꼬모카",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/082901.png",
        "types": [
          "풀"
        ]
      }
    ]
  },
  {
    "id": 830,
    "name": "백솜모카",
    "forms": [
      {
        "formId": "01",
        "name": "백솜모카",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/083001.png",
        "types": [
          "풀"
        ]
      }
    ]
  },
  {
    "id": 831,
    "name": "우르",
    "forms": [
      {
        "formId": "01",
        "name": "우르",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/083101.png",
        "types": [
          "노말"
        ]
      }
    ]
  },
  {
    "id": 832,
    "name": "배우르",
    "forms": [
      {
        "formId": "01",
        "name": "배우르",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/083201.png",
        "types": [
          "노말"
        ]
      }
    ]
  },
  {
    "id": 833,
    "name": "깨물부기",
    "forms": [
      {
        "formId": "01",
        "name": "깨물부기",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/083301.png",
        "types": [
          "물"
        ]
      }
    ]
  },
  {
    "id": 834,
    "name": "갈가부기",
    "forms": [
      {
        "formId": "01",
        "name": "갈가부기",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/083401.png",
        "types": [
          "물",
          "바위"
        ]
      },
      {
        "formId": "02",
        "name": "거다이맥스 갈가부기",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/083402.png",
        "types": [
          "물",
          "바위"
        ]
      }
    ]
  },
  {
    "id": 835,
    "name": "멍파치",
    "forms": [
      {
        "formId": "01",
        "name": "멍파치",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/083501.png",
        "types": [
          "전기"
        ]
      }
    ]
  },
  {
    "id": 836,
    "name": "펄스멍",
    "forms": [
      {
        "formId": "01",
        "name": "펄스멍",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/083601.png",
        "types": [
          "전기"
        ]
      }
    ]
  },
  {
    "id": 837,
    "name": "탄동",
    "forms": [
      {
        "formId": "01",
        "name": "탄동",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/083701.png",
        "types": [
          "바위"
        ]
      }
    ]
  },
  {
    "id": 838,
    "name": "탄차곤",
    "forms": [
      {
        "formId": "01",
        "name": "탄차곤",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/083801.png",
        "types": [
          "바위",
          "불꽃"
        ]
      }
    ]
  },
  {
    "id": 839,
    "name": "석탄산",
    "forms": [
      {
        "formId": "01",
        "name": "석탄산",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/083901.png",
        "types": [
          "바위",
          "불꽃"
        ]
      },
      {
        "formId": "02",
        "name": "거다이맥스 석탄산",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/083902.png",
        "types": [
          "바위",
          "불꽃"
        ]
      }
    ]
  },
  {
    "id": 840,
    "name": "과사삭벌레",
    "forms": [
      {
        "formId": "01",
        "name": "과사삭벌레",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/084001.png",
        "types": [
          "풀",
          "드래곤"
        ]
      }
    ]
  },
  {
    "id": 841,
    "name": "애프룡",
    "forms": [
      {
        "formId": "01",
        "name": "애프룡",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/084101.png",
        "types": [
          "풀",
          "드래곤"
        ]
      },
      {
        "formId": "02",
        "name": "거다이맥스 애프룡",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/084102.png",
        "types": [
          "풀",
          "드래곤"
        ]
      }
    ]
  },
  {
    "id": 842,
    "name": "단지래플",
    "forms": [
      {
        "formId": "01",
        "name": "단지래플",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/084201.png",
        "types": [
          "풀",
          "드래곤"
        ]
      },
      {
        "formId": "02",
        "name": "거다이맥스 단지래플",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/084202.png",
        "types": [
          "풀",
          "드래곤"
        ]
      }
    ]
  },
  {
    "id": 843,
    "name": "모래뱀",
    "forms": [
      {
        "formId": "01",
        "name": "모래뱀",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/084301.png",
        "types": [
          "땅"
        ]
      }
    ]
  },
  {
    "id": 844,
    "name": "사다이사",
    "forms": [
      {
        "formId": "01",
        "name": "사다이사",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/084401.png",
        "types": [
          "땅"
        ]
      },
      {
        "formId": "02",
        "name": "거다이맥스 사다이사",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/084402.png",
        "types": [
          "땅"
        ]
      }
    ]
  },
  {
    "id": 845,
    "name": "윽우지",
    "forms": [
      {
        "formId": "01",
        "name": "윽우지",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/084501.png",
        "types": [
          "비행",
          "물"
        ]
      }
    ]
  },
  {
    "id": 846,
    "name": "찌로꼬치",
    "forms": [
      {
        "formId": "01",
        "name": "찌로꼬치",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/084601.png",
        "types": [
          "물"
        ]
      }
    ]
  },
  {
    "id": 847,
    "name": "꼬치조",
    "forms": [
      {
        "formId": "01",
        "name": "꼬치조",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/084701.png",
        "types": [
          "물"
        ]
      }
    ]
  },
  {
    "id": 848,
    "name": "일레즌",
    "forms": [
      {
        "formId": "01",
        "name": "일레즌",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/084801.png",
        "types": [
          "전기",
          "독"
        ]
      }
    ]
  },
  {
    "id": 849,
    "name": "스트린더",
    "forms": [
      {
        "formId": "01",
        "name": "스트린더",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/084901.png",
        "types": [
          "전기",
          "독"
        ]
      },
      {
        "formId": "03",
        "name": "거다이맥스 스트린더(하이)",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/084903.png",
        "types": [
          "전기",
          "독"
        ]
      }
    ]
  },
  {
    "id": 850,
    "name": "태우지네",
    "forms": [
      {
        "formId": "01",
        "name": "태우지네",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/085001.png",
        "types": [
          "불꽃",
          "벌레"
        ]
      }
    ]
  },
  {
    "id": 851,
    "name": "다태우지네",
    "forms": [
      {
        "formId": "01",
        "name": "다태우지네",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/085101.png",
        "types": [
          "불꽃",
          "벌레"
        ]
      },
      {
        "formId": "02",
        "name": "거다이맥스 다태우지네",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/085102.png",
        "types": [
          "불꽃",
          "벌레"
        ]
      }
    ]
  },
  {
    "id": 852,
    "name": "때때무노",
    "forms": [
      {
        "formId": "01",
        "name": "때때무노",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/085201.png",
        "types": [
          "격투"
        ]
      }
    ]
  },
  {
    "id": 853,
    "name": "케오퍼스",
    "forms": [
      {
        "formId": "01",
        "name": "케오퍼스",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/085301.png",
        "types": [
          "격투"
        ]
      }
    ]
  },
  {
    "id": 854,
    "name": "데인차",
    "forms": [
      {
        "formId": "01",
        "name": "데인차",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/085401.png",
        "types": [
          "고스트"
        ]
      }
    ]
  },
  {
    "id": 855,
    "name": "포트데스",
    "forms": [
      {
        "formId": "01",
        "name": "포트데스",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/085501.png",
        "types": [
          "고스트"
        ]
      }
    ]
  },
  {
    "id": 856,
    "name": "몸지브림",
    "forms": [
      {
        "formId": "01",
        "name": "몸지브림",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/085601.png",
        "types": [
          "에스퍼"
        ]
      }
    ]
  },
  {
    "id": 857,
    "name": "손지브림",
    "forms": [
      {
        "formId": "01",
        "name": "손지브림",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/085701.png",
        "types": [
          "에스퍼"
        ]
      }
    ]
  },
  {
    "id": 858,
    "name": "브리무음",
    "forms": [
      {
        "formId": "01",
        "name": "브리무음",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/085801.png",
        "types": [
          "에스퍼",
          "페어리"
        ]
      },
      {
        "formId": "02",
        "name": "거다이맥스 브리무음",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/085802.png",
        "types": [
          "에스퍼",
          "페어리"
        ]
      }
    ]
  },
  {
    "id": 859,
    "name": "메롱꿍",
    "forms": [
      {
        "formId": "01",
        "name": "메롱꿍",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/085901.png",
        "types": [
          "악",
          "페어리"
        ]
      }
    ]
  },
  {
    "id": 860,
    "name": "쏘겨모",
    "forms": [
      {
        "formId": "01",
        "name": "쏘겨모",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/086001.png",
        "types": [
          "악",
          "페어리"
        ]
      }
    ]
  },
  {
    "id": 861,
    "name": "오롱털",
    "forms": [
      {
        "formId": "01",
        "name": "오롱털",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/086101.png",
        "types": [
          "악",
          "페어리"
        ]
      },
      {
        "formId": "02",
        "name": "거다이맥스 오롱털",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/086102.png",
        "types": [
          "악",
          "페어리"
        ]
      }
    ]
  },
  {
    "id": 862,
    "name": "가로막구리",
    "forms": [
      {
        "formId": "01",
        "name": "가로막구리",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/086201.png",
        "types": [
          "악",
          "노말"
        ]
      }
    ]
  },
  {
    "id": 863,
    "name": "나이킹",
    "forms": [
      {
        "formId": "01",
        "name": "나이킹",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/086301.png",
        "types": [
          "강철"
        ]
      }
    ]
  },
  {
    "id": 864,
    "name": "산호르곤",
    "forms": [
      {
        "formId": "01",
        "name": "산호르곤",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/086401.png",
        "types": [
          "고스트"
        ]
      }
    ]
  },
  {
    "id": 865,
    "name": "창파나이트",
    "forms": [
      {
        "formId": "01",
        "name": "창파나이트",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/086501.png",
        "types": [
          "격투"
        ]
      }
    ]
  },
  {
    "id": 866,
    "name": "마임꽁꽁",
    "forms": [
      {
        "formId": "01",
        "name": "마임꽁꽁",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/086601.png",
        "types": [
          "얼음",
          "에스퍼"
        ]
      }
    ]
  },
  {
    "id": 867,
    "name": "데스판",
    "forms": [
      {
        "formId": "01",
        "name": "데스판",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/086701.png",
        "types": [
          "땅",
          "고스트"
        ]
      }
    ]
  },
  {
    "id": 868,
    "name": "마빌크",
    "forms": [
      {
        "formId": "01",
        "name": "마빌크",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/086801.png",
        "types": [
          "페어리"
        ]
      }
    ]
  },
  {
    "id": 869,
    "name": "마휘핑",
    "forms": [
      {
        "formId": "01",
        "name": "마휘핑",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/086901.png",
        "types": [
          "페어리"
        ]
      },
      {
        "formId": "02",
        "name": "거다이맥스 마휘핑",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/086902.png",
        "types": [
          "페어리"
        ]
      }
    ]
  },
  {
    "id": 870,
    "name": "대여르",
    "forms": [
      {
        "formId": "01",
        "name": "대여르",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/087001.png",
        "types": [
          "격투"
        ]
      }
    ]
  },
  {
    "id": 871,
    "name": "찌르성게",
    "forms": [
      {
        "formId": "01",
        "name": "찌르성게",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/087101.png",
        "types": [
          "전기"
        ]
      }
    ]
  },
  {
    "id": 872,
    "name": "누니머기",
    "forms": [
      {
        "formId": "01",
        "name": "누니머기",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/087201.png",
        "types": [
          "얼음",
          "벌레"
        ]
      }
    ]
  },
  {
    "id": 873,
    "name": "모스노우",
    "forms": [
      {
        "formId": "01",
        "name": "모스노우",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/087301.png",
        "types": [
          "얼음",
          "벌레"
        ]
      }
    ]
  },
  {
    "id": 874,
    "name": "돌헨진",
    "forms": [
      {
        "formId": "01",
        "name": "돌헨진",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/087401.png",
        "types": [
          "바위"
        ]
      }
    ]
  },
  {
    "id": 875,
    "name": "빙큐보",
    "forms": [
      {
        "formId": "01",
        "name": "빙큐보",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/087501.png",
        "types": [
          "얼음"
        ]
      }
    ]
  },
  {
    "id": 876,
    "name": "에써르",
    "forms": [
      {
        "formId": "01",
        "name": "에써르",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/087601.png",
        "types": [
          "에스퍼",
          "노말"
        ]
      }
    ]
  },
  {
    "id": 877,
    "name": "모르페코",
    "forms": [
      {
        "formId": "01",
        "name": "모르페코",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/087701.png",
        "types": [
          "전기",
          "악"
        ]
      }
    ]
  },
  {
    "id": 878,
    "name": "끼리동",
    "forms": [
      {
        "formId": "01",
        "name": "끼리동",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/087801.png",
        "types": [
          "강철"
        ]
      }
    ]
  },
  {
    "id": 879,
    "name": "대왕끼리동",
    "forms": [
      {
        "formId": "01",
        "name": "대왕끼리동",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/087901.png",
        "types": [
          "강철"
        ]
      },
      {
        "formId": "02",
        "name": "거다이맥스 대왕끼리동",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/087902.png",
        "types": [
          "강철"
        ]
      }
    ]
  },
  {
    "id": 880,
    "name": "파치래곤",
    "forms": [
      {
        "formId": "01",
        "name": "파치래곤",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/088001.png",
        "types": [
          "전기",
          "드래곤"
        ]
      }
    ]
  },
  {
    "id": 881,
    "name": "파치르돈",
    "forms": [
      {
        "formId": "01",
        "name": "파치르돈",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/088101.png",
        "types": [
          "전기",
          "얼음"
        ]
      }
    ]
  },
  {
    "id": 882,
    "name": "어래곤",
    "forms": [
      {
        "formId": "01",
        "name": "어래곤",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/088201.png",
        "types": [
          "물",
          "드래곤"
        ]
      }
    ]
  },
  {
    "id": 883,
    "name": "어치르돈",
    "forms": [
      {
        "formId": "01",
        "name": "어치르돈",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/088301.png",
        "types": [
          "물",
          "얼음"
        ]
      }
    ]
  },
  {
    "id": 884,
    "name": "두랄루돈",
    "forms": [
      {
        "formId": "01",
        "name": "두랄루돈",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/088401.png",
        "types": [
          "강철",
          "드래곤"
        ]
      },
      {
        "formId": "02",
        "name": "거다이맥스 두랄루돈",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/088402.png",
        "types": [
          "강철",
          "드래곤"
        ]
      }
    ]
  },
  {
    "id": 885,
    "name": "드라꼰",
    "forms": [
      {
        "formId": "01",
        "name": "드라꼰",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/088501.png",
        "types": [
          "드래곤",
          "고스트"
        ]
      }
    ]
  },
  {
    "id": 886,
    "name": "드래런치",
    "forms": [
      {
        "formId": "01",
        "name": "드래런치",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/088601.png",
        "types": [
          "드래곤",
          "고스트"
        ]
      }
    ]
  },
  {
    "id": 887,
    "name": "드래펄트",
    "forms": [
      {
        "formId": "01",
        "name": "드래펄트",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/088701.png",
        "types": [
          "드래곤",
          "고스트"
        ]
      }
    ]
  },
  {
    "id": 888,
    "name": "자시안",
    "forms": [
      {
        "formId": "01",
        "name": "자시안",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/088801.png",
        "types": [
          "페어리"
        ]
      }
    ]
  },
  {
    "id": 889,
    "name": "자마젠타",
    "forms": [
      {
        "formId": "01",
        "name": "자마젠타",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/088901.png",
        "types": [
          "격투"
        ]
      }
    ]
  },
  {
    "id": 890,
    "name": "무한다이노",
    "forms": [
      {
        "formId": "01",
        "name": "무한다이노",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/089001.png",
        "types": [
          "독",
          "드래곤"
        ]
      }
    ]
  },
  {
    "id": 891,
    "name": "치고마",
    "forms": [
      {
        "formId": "01",
        "name": "치고마",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/089101.png",
        "types": [
          "격투"
        ]
      }
    ]
  },
  {
    "id": 892,
    "name": "우라오스",
    "forms": [
      {
        "formId": "01",
        "name": "우라오스",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/089201.png",
        "types": [
          "격투",
          "악"
        ]
      },
      {
        "formId": "03",
        "name": "거다이맥스 우라오스(일격)",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/089203.png",
        "types": [
          "격투",
          "악"
        ]
      },
      {
        "formId": "04",
        "name": "거다이맥스 우라오스(연격)",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/089204.png",
        "types": [
          "격투",
          "악"
        ]
      }
    ]
  },
  {
    "id": 893,
    "name": "자루도",
    "forms": [
      {
        "formId": "01",
        "name": "자루도",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/089301.png",
        "types": [
          "악",
          "풀"
        ]
      }
    ]
  },
  {
    "id": 894,
    "name": "레지에레키",
    "forms": [
      {
        "formId": "01",
        "name": "레지에레키",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/089401.png",
        "types": [
          "전기"
        ]
      }
    ]
  },
  {
    "id": 895,
    "name": "레지드래고",
    "forms": [
      {
        "formId": "01",
        "name": "레지드래고",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/089501.png",
        "types": [
          "드래곤"
        ]
      }
    ]
  },
  {
    "id": 896,
    "name": "블리자포스",
    "forms": [
      {
        "formId": "01",
        "name": "블리자포스",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/089601.png",
        "types": [
          "얼음"
        ]
      }
    ]
  },
  {
    "id": 897,
    "name": "레이스포스",
    "forms": [
      {
        "formId": "01",
        "name": "레이스포스",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/089701.png",
        "types": [
          "고스트"
        ]
      }
    ]
  },
  {
    "id": 898,
    "name": "버드렉스",
    "forms": [
      {
        "formId": "01",
        "name": "버드렉스",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/089801.png",
        "types": [
          "에스퍼",
          "풀"
        ]
      }
    ]
  },
  {
    "id": 899,
    "name": "신비록",
    "forms": [
      {
        "formId": "01",
        "name": "신비록",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/089901.png",
        "types": [
          "노말",
          "에스퍼"
        ]
      }
    ]
  },
  {
    "id": 900,
    "name": "사마자르",
    "forms": [
      {
        "formId": "01",
        "name": "사마자르",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/090001.png",
        "types": [
          "벌레",
          "바위"
        ]
      }
    ]
  },
  {
    "id": 901,
    "name": "다투곰",
    "forms": [
      {
        "formId": "01",
        "name": "다투곰",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/090101.png",
        "types": [
          "땅",
          "노말"
        ]
      }
    ]
  },
  {
    "id": 902,
    "name": "대쓰여너",
    "forms": [
      {
        "formId": "01",
        "name": "대쓰여너",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/090201.png",
        "types": [
          "물",
          "고스트"
        ]
      }
    ]
  },
  {
    "id": 903,
    "name": "포푸니크",
    "forms": [
      {
        "formId": "01",
        "name": "포푸니크",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/090301.png",
        "types": [
          "격투",
          "독"
        ]
      }
    ]
  },
  {
    "id": 904,
    "name": "장침바루",
    "forms": [
      {
        "formId": "01",
        "name": "장침바루",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/090401.png",
        "types": [
          "악",
          "독"
        ]
      }
    ]
  },
  {
    "id": 905,
    "name": "러브로스",
    "forms": [
      {
        "formId": "01",
        "name": "러브로스",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/090501.png",
        "types": [
          "페어리",
          "비행"
        ]
      }
    ]
  },
  {
    "id": 906,
    "name": "나오하",
    "forms": [
      {
        "formId": "01",
        "name": "나오하",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/090601.png",
        "types": [
          "풀"
        ]
      }
    ]
  },
  {
    "id": 907,
    "name": "나로테",
    "forms": [
      {
        "formId": "01",
        "name": "나로테",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/090701.png",
        "types": [
          "풀"
        ]
      }
    ]
  },
  {
    "id": 908,
    "name": "마스카나",
    "forms": [
      {
        "formId": "01",
        "name": "마스카나",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/090801.png",
        "types": [
          "풀",
          "악"
        ]
      }
    ]
  },
  {
    "id": 909,
    "name": "뜨아거",
    "forms": [
      {
        "formId": "01",
        "name": "뜨아거",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/090901.png",
        "types": [
          "불꽃"
        ]
      }
    ]
  },
  {
    "id": 910,
    "name": "악뜨거",
    "forms": [
      {
        "formId": "01",
        "name": "악뜨거",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/091001.png",
        "types": [
          "불꽃"
        ]
      }
    ]
  },
  {
    "id": 911,
    "name": "라우드본",
    "forms": [
      {
        "formId": "01",
        "name": "라우드본",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/091101.png",
        "types": [
          "불꽃",
          "고스트"
        ]
      }
    ]
  },
  {
    "id": 912,
    "name": "꾸왁스",
    "forms": [
      {
        "formId": "01",
        "name": "꾸왁스",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/091201.png",
        "types": [
          "물"
        ]
      }
    ]
  },
  {
    "id": 913,
    "name": "아꾸왁",
    "forms": [
      {
        "formId": "01",
        "name": "아꾸왁",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/091301.png",
        "types": [
          "물"
        ]
      }
    ]
  },
  {
    "id": 914,
    "name": "웨이니발",
    "forms": [
      {
        "formId": "01",
        "name": "웨이니발",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/091401.png",
        "types": [
          "물",
          "격투"
        ]
      }
    ]
  },
  {
    "id": 915,
    "name": "맛보돈",
    "forms": [
      {
        "formId": "01",
        "name": "맛보돈",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/091501.png",
        "types": [
          "노말"
        ]
      }
    ]
  },
  {
    "id": 916,
    "name": "퍼퓨돈",
    "forms": [
      {
        "formId": "01",
        "name": "퍼퓨돈",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/091601.png",
        "types": [
          "노말"
        ]
      }
    ]
  },
  {
    "id": 917,
    "name": "타랜툴라",
    "forms": [
      {
        "formId": "01",
        "name": "타랜툴라",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/091701.png",
        "types": [
          "벌레"
        ]
      }
    ]
  },
  {
    "id": 918,
    "name": "트래피더",
    "forms": [
      {
        "formId": "01",
        "name": "트래피더",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/091801.png",
        "types": [
          "벌레"
        ]
      }
    ]
  },
  {
    "id": 919,
    "name": "콩알뚜기",
    "forms": [
      {
        "formId": "01",
        "name": "콩알뚜기",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/091901.png",
        "types": [
          "벌레"
        ]
      }
    ]
  },
  {
    "id": 920,
    "name": "엑스레그",
    "forms": [
      {
        "formId": "01",
        "name": "엑스레그",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/092001.png",
        "types": [
          "벌레",
          "악"
        ]
      }
    ]
  },
  {
    "id": 921,
    "name": "빠모",
    "forms": [
      {
        "formId": "01",
        "name": "빠모",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/092101.png",
        "types": [
          "전기"
        ]
      }
    ]
  },
  {
    "id": 922,
    "name": "빠모트",
    "forms": [
      {
        "formId": "01",
        "name": "빠모트",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/092201.png",
        "types": [
          "전기",
          "격투"
        ]
      }
    ]
  },
  {
    "id": 923,
    "name": "빠르모트",
    "forms": [
      {
        "formId": "01",
        "name": "빠르모트",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/092301.png",
        "types": [
          "전기",
          "격투"
        ]
      }
    ]
  },
  {
    "id": 924,
    "name": "두리쥐",
    "forms": [
      {
        "formId": "01",
        "name": "두리쥐",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/092401.png",
        "types": [
          "노말"
        ]
      }
    ]
  },
  {
    "id": 925,
    "name": "파밀리쥐",
    "forms": [
      {
        "formId": "01",
        "name": "파밀리쥐",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/092501.png",
        "types": [
          "노말"
        ]
      }
    ]
  },
  {
    "id": 926,
    "name": "쫀도기",
    "forms": [
      {
        "formId": "01",
        "name": "쫀도기",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/092601.png",
        "types": [
          "페어리"
        ]
      }
    ]
  },
  {
    "id": 927,
    "name": "바우첼",
    "forms": [
      {
        "formId": "01",
        "name": "바우첼",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/092701.png",
        "types": [
          "페어리"
        ]
      }
    ]
  },
  {
    "id": 928,
    "name": "미니브",
    "forms": [
      {
        "formId": "01",
        "name": "미니브",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/092801.png",
        "types": [
          "풀",
          "노말"
        ]
      }
    ]
  },
  {
    "id": 929,
    "name": "올리뇨",
    "forms": [
      {
        "formId": "01",
        "name": "올리뇨",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/092901.png",
        "types": [
          "풀",
          "노말"
        ]
      }
    ]
  },
  {
    "id": 930,
    "name": "올리르바",
    "forms": [
      {
        "formId": "01",
        "name": "올리르바",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/093001.png",
        "types": [
          "풀",
          "노말"
        ]
      }
    ]
  },
  {
    "id": 931,
    "name": "시비꼬",
    "forms": [
      {
        "formId": "01",
        "name": "시비꼬",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/093101.png",
        "types": [
          "노말",
          "비행"
        ]
      }
    ]
  },
  {
    "id": 932,
    "name": "베베솔트",
    "forms": [
      {
        "formId": "01",
        "name": "베베솔트",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/093201.png",
        "types": [
          "바위"
        ]
      }
    ]
  },
  {
    "id": 933,
    "name": "스태솔트",
    "forms": [
      {
        "formId": "01",
        "name": "스태솔트",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/093301.png",
        "types": [
          "바위"
        ]
      }
    ]
  },
  {
    "id": 934,
    "name": "콜로솔트",
    "forms": [
      {
        "formId": "01",
        "name": "콜로솔트",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/093401.png",
        "types": [
          "바위"
        ]
      }
    ]
  },
  {
    "id": 935,
    "name": "카르본",
    "forms": [
      {
        "formId": "01",
        "name": "카르본",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/093501.png",
        "types": [
          "불꽃"
        ]
      }
    ]
  },
  {
    "id": 936,
    "name": "카디나르마",
    "forms": [
      {
        "formId": "01",
        "name": "카디나르마",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/093601.png",
        "types": [
          "불꽃",
          "에스퍼"
        ]
      }
    ]
  },
  {
    "id": 937,
    "name": "파라블레이즈",
    "forms": [
      {
        "formId": "01",
        "name": "파라블레이즈",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/093701.png",
        "types": [
          "불꽃",
          "고스트"
        ]
      }
    ]
  },
  {
    "id": 938,
    "name": "빈나두",
    "forms": [
      {
        "formId": "01",
        "name": "빈나두",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/093801.png",
        "types": [
          "전기"
        ]
      }
    ]
  },
  {
    "id": 939,
    "name": "찌리배리",
    "forms": [
      {
        "formId": "01",
        "name": "찌리배리",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/093901.png",
        "types": [
          "전기"
        ]
      }
    ]
  },
  {
    "id": 940,
    "name": "찌리비",
    "forms": [
      {
        "formId": "01",
        "name": "찌리비",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/094001.png",
        "types": [
          "전기",
          "비행"
        ]
      }
    ]
  },
  {
    "id": 941,
    "name": "찌리비크",
    "forms": [
      {
        "formId": "01",
        "name": "찌리비크",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/094101.png",
        "types": [
          "전기",
          "비행"
        ]
      }
    ]
  },
  {
    "id": 942,
    "name": "오라티프",
    "forms": [
      {
        "formId": "01",
        "name": "오라티프",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/094201.png",
        "types": [
          "악"
        ]
      }
    ]
  },
  {
    "id": 943,
    "name": "마피티프",
    "forms": [
      {
        "formId": "01",
        "name": "마피티프",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/094301.png",
        "types": [
          "악"
        ]
      }
    ]
  },
  {
    "id": 944,
    "name": "땃쭈르",
    "forms": [
      {
        "formId": "01",
        "name": "땃쭈르",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/094401.png",
        "types": [
          "독",
          "노말"
        ]
      }
    ]
  },
  {
    "id": 945,
    "name": "태깅구르",
    "forms": [
      {
        "formId": "01",
        "name": "태깅구르",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/094501.png",
        "types": [
          "독",
          "노말"
        ]
      }
    ]
  },
  {
    "id": 946,
    "name": "그푸리",
    "forms": [
      {
        "formId": "01",
        "name": "그푸리",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/094601.png",
        "types": [
          "풀",
          "고스트"
        ]
      }
    ]
  },
  {
    "id": 947,
    "name": "공푸리",
    "forms": [
      {
        "formId": "01",
        "name": "공푸리",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/094701.png",
        "types": [
          "풀",
          "고스트"
        ]
      }
    ]
  },
  {
    "id": 948,
    "name": "들눈해",
    "forms": [
      {
        "formId": "01",
        "name": "들눈해",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/094801.png",
        "types": [
          "땅",
          "풀"
        ]
      }
    ]
  },
  {
    "id": 949,
    "name": "육파리",
    "forms": [
      {
        "formId": "01",
        "name": "육파리",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/094901.png",
        "types": [
          "땅",
          "풀"
        ]
      }
    ]
  },
  {
    "id": 950,
    "name": "절벼게",
    "forms": [
      {
        "formId": "01",
        "name": "절벼게",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/095001.png",
        "types": [
          "바위"
        ]
      }
    ]
  },
  {
    "id": 951,
    "name": "캡싸이",
    "forms": [
      {
        "formId": "01",
        "name": "캡싸이",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/095101.png",
        "types": [
          "풀"
        ]
      }
    ]
  },
  {
    "id": 952,
    "name": "스코빌런",
    "forms": [
      {
        "formId": "01",
        "name": "스코빌런",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/095201.png",
        "types": [
          "풀",
          "불꽃"
        ]
      }
    ]
  },
  {
    "id": 953,
    "name": "구르데",
    "forms": [
      {
        "formId": "01",
        "name": "구르데",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/095301.png",
        "types": [
          "벌레"
        ]
      }
    ]
  },
  {
    "id": 954,
    "name": "베라카스",
    "forms": [
      {
        "formId": "01",
        "name": "베라카스",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/095401.png",
        "types": [
          "벌레",
          "에스퍼"
        ]
      }
    ]
  },
  {
    "id": 955,
    "name": "하느라기",
    "forms": [
      {
        "formId": "01",
        "name": "하느라기",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/095501.png",
        "types": [
          "에스퍼"
        ]
      }
    ]
  },
  {
    "id": 956,
    "name": "클레스퍼트라",
    "forms": [
      {
        "formId": "01",
        "name": "클레스퍼트라",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/095601.png",
        "types": [
          "에스퍼"
        ]
      }
    ]
  },
  {
    "id": 957,
    "name": "어리짱",
    "forms": [
      {
        "formId": "01",
        "name": "어리짱",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/095701.png",
        "types": [
          "페어리",
          "강철"
        ]
      }
    ]
  },
  {
    "id": 958,
    "name": "벼리짱",
    "forms": [
      {
        "formId": "01",
        "name": "벼리짱",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/095801.png",
        "types": [
          "페어리",
          "강철"
        ]
      }
    ]
  },
  {
    "id": 959,
    "name": "두드리짱",
    "forms": [
      {
        "formId": "01",
        "name": "두드리짱",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/095901.png",
        "types": [
          "페어리",
          "강철"
        ]
      }
    ]
  },
  {
    "id": 960,
    "name": "바다그다",
    "forms": [
      {
        "formId": "01",
        "name": "바다그다",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/096001.png",
        "types": [
          "물"
        ]
      }
    ]
  },
  {
    "id": 961,
    "name": "바닥트리오",
    "forms": [
      {
        "formId": "01",
        "name": "바닥트리오",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/096101.png",
        "types": [
          "물"
        ]
      }
    ]
  },
  {
    "id": 962,
    "name": "떨구새",
    "forms": [
      {
        "formId": "01",
        "name": "떨구새",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/096201.png",
        "types": [
          "비행",
          "악"
        ]
      }
    ]
  },
  {
    "id": 963,
    "name": "맨돌핀",
    "forms": [
      {
        "formId": "01",
        "name": "맨돌핀",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/096301.png",
        "types": [
          "물"
        ]
      }
    ]
  },
  {
    "id": 964,
    "name": "돌핀맨",
    "forms": [
      {
        "formId": "01",
        "name": "돌핀맨",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/096401.png",
        "types": [
          "물"
        ]
      }
    ]
  },
  {
    "id": 965,
    "name": "부르롱",
    "forms": [
      {
        "formId": "01",
        "name": "부르롱",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/096501.png",
        "types": [
          "강철",
          "독"
        ]
      }
    ]
  },
  {
    "id": 966,
    "name": "부르르룸",
    "forms": [
      {
        "formId": "01",
        "name": "부르르룸",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/096601.png",
        "types": [
          "강철",
          "독"
        ]
      }
    ]
  },
  {
    "id": 967,
    "name": "모토마",
    "forms": [
      {
        "formId": "01",
        "name": "모토마",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/096701.png",
        "types": [
          "드래곤",
          "노말"
        ]
      }
    ]
  },
  {
    "id": 968,
    "name": "꿈트렁",
    "forms": [
      {
        "formId": "01",
        "name": "꿈트렁",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/096801.png",
        "types": [
          "강철"
        ]
      }
    ]
  },
  {
    "id": 969,
    "name": "초롱순",
    "forms": [
      {
        "formId": "01",
        "name": "초롱순",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/096901.png",
        "types": [
          "바위",
          "독"
        ]
      }
    ]
  },
  {
    "id": 970,
    "name": "킬라플로르",
    "forms": [
      {
        "formId": "01",
        "name": "킬라플로르",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/097001.png",
        "types": [
          "바위",
          "독"
        ]
      }
    ]
  },
  {
    "id": 971,
    "name": "망망이",
    "forms": [
      {
        "formId": "01",
        "name": "망망이",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/097101.png",
        "types": [
          "고스트"
        ]
      }
    ]
  },
  {
    "id": 972,
    "name": "묘두기",
    "forms": [
      {
        "formId": "01",
        "name": "묘두기",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/097201.png",
        "types": [
          "고스트"
        ]
      }
    ]
  },
  {
    "id": 973,
    "name": "꼬이밍고",
    "forms": [
      {
        "formId": "01",
        "name": "꼬이밍고",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/097301.png",
        "types": [
          "비행",
          "격투"
        ]
      }
    ]
  },
  {
    "id": 974,
    "name": "터벅고래",
    "forms": [
      {
        "formId": "01",
        "name": "터벅고래",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/097401.png",
        "types": [
          "얼음"
        ]
      }
    ]
  },
  {
    "id": 975,
    "name": "우락고래",
    "forms": [
      {
        "formId": "01",
        "name": "우락고래",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/097501.png",
        "types": [
          "얼음"
        ]
      }
    ]
  },
  {
    "id": 976,
    "name": "가비루사",
    "forms": [
      {
        "formId": "01",
        "name": "가비루사",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/097601.png",
        "types": [
          "물",
          "에스퍼"
        ]
      }
    ]
  },
  {
    "id": 977,
    "name": "어써러셔",
    "forms": [
      {
        "formId": "01",
        "name": "어써러셔",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/097701.png",
        "types": [
          "물"
        ]
      }
    ]
  },
  {
    "id": 978,
    "name": "싸리용",
    "forms": [
      {
        "formId": "01",
        "name": "싸리용",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/097801.png",
        "types": [
          "드래곤",
          "물"
        ]
      }
    ]
  },
  {
    "id": 979,
    "name": "저승갓숭",
    "forms": [
      {
        "formId": "01",
        "name": "저승갓숭",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/097901.png",
        "types": [
          "격투",
          "고스트"
        ]
      }
    ]
  },
  {
    "id": 980,
    "name": "토오",
    "forms": [
      {
        "formId": "01",
        "name": "토오",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/098001.png",
        "types": [
          "독",
          "땅"
        ]
      }
    ]
  },
  {
    "id": 981,
    "name": "키키링",
    "forms": [
      {
        "formId": "01",
        "name": "키키링",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/098101.png",
        "types": [
          "노말",
          "에스퍼"
        ]
      }
    ]
  },
  {
    "id": 982,
    "name": "노고고치",
    "forms": [
      {
        "formId": "01",
        "name": "노고고치",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/098201.png",
        "types": [
          "노말"
        ]
      }
    ]
  },
  {
    "id": 983,
    "name": "대도각참",
    "forms": [
      {
        "formId": "01",
        "name": "대도각참",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/098301.png",
        "types": [
          "악",
          "강철"
        ]
      }
    ]
  },
  {
    "id": 984,
    "name": "위대한엄니",
    "forms": [
      {
        "formId": "01",
        "name": "위대한엄니",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/098401.png",
        "types": [
          "땅",
          "격투"
        ]
      }
    ]
  },
  {
    "id": 985,
    "name": "우렁찬꼬리",
    "forms": [
      {
        "formId": "01",
        "name": "우렁찬꼬리",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/098501.png",
        "types": [
          "페어리",
          "에스퍼"
        ]
      }
    ]
  },
  {
    "id": 986,
    "name": "사나운버섯",
    "forms": [
      {
        "formId": "01",
        "name": "사나운버섯",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/098601.png",
        "types": [
          "풀",
          "악"
        ]
      }
    ]
  },
  {
    "id": 987,
    "name": "날개치는머리",
    "forms": [
      {
        "formId": "01",
        "name": "날개치는머리",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/098701.png",
        "types": [
          "고스트",
          "페어리"
        ]
      }
    ]
  },
  {
    "id": 988,
    "name": "땅을기는날개",
    "forms": [
      {
        "formId": "01",
        "name": "땅을기는날개",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/098801.png",
        "types": [
          "벌레",
          "격투"
        ]
      }
    ]
  },
  {
    "id": 989,
    "name": "모래털가죽",
    "forms": [
      {
        "formId": "01",
        "name": "모래털가죽",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/098901.png",
        "types": [
          "전기",
          "땅"
        ]
      }
    ]
  },
  {
    "id": 990,
    "name": "무쇠바퀴",
    "forms": [
      {
        "formId": "01",
        "name": "무쇠바퀴",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/099001.png",
        "types": [
          "땅",
          "강철"
        ]
      }
    ]
  },
  {
    "id": 991,
    "name": "무쇠보따리",
    "forms": [
      {
        "formId": "01",
        "name": "무쇠보따리",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/099101.png",
        "types": [
          "얼음",
          "물"
        ]
      }
    ]
  },
  {
    "id": 992,
    "name": "무쇠손",
    "forms": [
      {
        "formId": "01",
        "name": "무쇠손",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/099201.png",
        "types": [
          "격투",
          "전기"
        ]
      }
    ]
  },
  {
    "id": 993,
    "name": "무쇠머리",
    "forms": [
      {
        "formId": "01",
        "name": "무쇠머리",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/099301.png",
        "types": [
          "악",
          "비행"
        ]
      }
    ]
  },
  {
    "id": 994,
    "name": "무쇠독나방",
    "forms": [
      {
        "formId": "01",
        "name": "무쇠독나방",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/099401.png",
        "types": [
          "불꽃",
          "독"
        ]
      }
    ]
  },
  {
    "id": 995,
    "name": "무쇠가시",
    "forms": [
      {
        "formId": "01",
        "name": "무쇠가시",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/099501.png",
        "types": [
          "바위",
          "전기"
        ]
      }
    ]
  },
  {
    "id": 996,
    "name": "드니차",
    "forms": [
      {
        "formId": "01",
        "name": "드니차",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/099601.png",
        "types": [
          "드래곤",
          "얼음"
        ]
      }
    ]
  },
  {
    "id": 997,
    "name": "드니꽁",
    "forms": [
      {
        "formId": "01",
        "name": "드니꽁",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/099701.png",
        "types": [
          "드래곤",
          "얼음"
        ]
      }
    ]
  },
  {
    "id": 998,
    "name": "드닐레이브",
    "forms": [
      {
        "formId": "01",
        "name": "드닐레이브",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/099801.png",
        "types": [
          "드래곤",
          "얼음"
        ]
      }
    ]
  },
  {
    "id": 999,
    "name": "모으령",
    "forms": [
      {
        "formId": "01",
        "name": "모으령",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/099901.png",
        "types": [
          "고스트"
        ]
      }
    ]
  },
  {
    "id": 1000,
    "name": "타부자고",
    "forms": [
      {
        "formId": "01",
        "name": "타부자고",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/100001.png",
        "types": [
          "강철",
          "고스트"
        ]
      }
    ]
  },
  {
    "id": 1001,
    "name": "총지엔",
    "forms": [
      {
        "formId": "01",
        "name": "총지엔",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/100101.png",
        "types": [
          "악",
          "풀"
        ]
      }
    ]
  },
  {
    "id": 1002,
    "name": "파오젠",
    "forms": [
      {
        "formId": "01",
        "name": "파오젠",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/100201.png",
        "types": [
          "악",
          "얼음"
        ]
      }
    ]
  },
  {
    "id": 1003,
    "name": "딩루",
    "forms": [
      {
        "formId": "01",
        "name": "딩루",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/100301.png",
        "types": [
          "악",
          "땅"
        ]
      }
    ]
  },
  {
    "id": 1004,
    "name": "위유이",
    "forms": [
      {
        "formId": "01",
        "name": "위유이",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/100401.png",
        "types": [
          "악",
          "불꽃"
        ]
      }
    ]
  },
  {
    "id": 1005,
    "name": "고동치는달",
    "forms": [
      {
        "formId": "01",
        "name": "고동치는달",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/100501.png",
        "types": [
          "드래곤",
          "악"
        ]
      }
    ]
  },
  {
    "id": 1006,
    "name": "무쇠무인",
    "forms": [
      {
        "formId": "01",
        "name": "무쇠무인",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/100601.png",
        "types": [
          "페어리",
          "격투"
        ]
      }
    ]
  },
  {
    "id": 1007,
    "name": "코라이돈",
    "forms": [
      {
        "formId": "01",
        "name": "코라이돈",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/100701.png",
        "types": [
          "격투",
          "드래곤"
        ]
      }
    ]
  },
  {
    "id": 1008,
    "name": "미라이돈",
    "forms": [
      {
        "formId": "01",
        "name": "미라이돈",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/100801.png",
        "types": [
          "전기",
          "드래곤"
        ]
      }
    ]
  },
  {
    "id": 1009,
    "name": "굽이치는물결",
    "forms": [
      {
        "formId": "01",
        "name": "굽이치는물결",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/100901.png",
        "types": [
          "물",
          "드래곤"
        ]
      }
    ]
  },
  {
    "id": 1010,
    "name": "무쇠잎새",
    "forms": [
      {
        "formId": "01",
        "name": "무쇠잎새",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/101001.png",
        "types": [
          "풀",
          "에스퍼"
        ]
      }
    ]
  },
  {
    "id": 1011,
    "name": "과미르",
    "forms": [
      {
        "formId": "01",
        "name": "과미르",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/101101.png",
        "types": [
          "풀",
          "드래곤"
        ]
      }
    ]
  },
  {
    "id": 1012,
    "name": "차데스",
    "forms": [
      {
        "formId": "01",
        "name": "차데스",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/101201.png",
        "types": [
          "풀",
          "고스트"
        ]
      }
    ]
  },
  {
    "id": 1013,
    "name": "그우린차",
    "forms": [
      {
        "formId": "01",
        "name": "그우린차",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/101301.png",
        "types": [
          "풀",
          "고스트"
        ]
      }
    ]
  },
  {
    "id": 1014,
    "name": "조타구",
    "forms": [
      {
        "formId": "01",
        "name": "조타구",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/101401.png",
        "types": [
          "독",
          "격투"
        ]
      }
    ]
  },
  {
    "id": 1015,
    "name": "이야후",
    "forms": [
      {
        "formId": "01",
        "name": "이야후",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/101501.png",
        "types": [
          "독",
          "에스퍼"
        ]
      }
    ]
  },
  {
    "id": 1016,
    "name": "기로치",
    "forms": [
      {
        "formId": "01",
        "name": "기로치",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/101601.png",
        "types": [
          "독",
          "페어리"
        ]
      }
    ]
  },
  {
    "id": 1017,
    "name": "오거폰",
    "forms": [
      {
        "formId": "01",
        "name": "오거폰",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/101701.png",
        "types": [
          "풀"
        ]
      }
    ]
  },
  {
    "id": 1018,
    "name": "브리두라스",
    "forms": [
      {
        "formId": "01",
        "name": "브리두라스",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/101801.png",
        "types": [
          "강철",
          "드래곤"
        ]
      }
    ]
  },
  {
    "id": 1019,
    "name": "과미드라",
    "forms": [
      {
        "formId": "01",
        "name": "과미드라",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/101901.png",
        "types": [
          "풀",
          "드래곤"
        ]
      }
    ]
  },
  {
    "id": 1020,
    "name": "꿰뚫는화염",
    "forms": [
      {
        "formId": "01",
        "name": "꿰뚫는화염",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/102001.png",
        "types": [
          "불꽃",
          "드래곤"
        ]
      }
    ]
  },
  {
    "id": 1021,
    "name": "날뛰는우레",
    "forms": [
      {
        "formId": "01",
        "name": "날뛰는우레",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/102101.png",
        "types": [
          "전기",
          "드래곤"
        ]
      }
    ]
  },
  {
    "id": 1022,
    "name": "무쇠암석",
    "forms": [
      {
        "formId": "01",
        "name": "무쇠암석",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/102201.png",
        "types": [
          "바위",
          "에스퍼"
        ]
      }
    ]
  },
  {
    "id": 1023,
    "name": "무쇠감투",
    "forms": [
      {
        "formId": "01",
        "name": "무쇠감투",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/102301.png",
        "types": [
          "강철",
          "에스퍼"
        ]
      }
    ]
  },
  {
    "id": 1024,
    "name": "테라파고스",
    "forms": [
      {
        "formId": "01",
        "name": "테라파고스",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/102401.png",
        "types": [
          "노말"
        ]
      }
    ]
  },
  {
    "id": 1025,
    "name": "복숭악동",
    "forms": [
      {
        "formId": "01",
        "name": "복숭악동",
        "image": "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/102501.png",
        "types": [
          "독",
          "고스트"
        ]
      }
    ]
  },
  {
    "id": 9999,
    "name": "피카츄로 변신한 메타몽",
    "forms": [
      {
        "formId": "01",
        "name": "피카츄로 변신한 메타몽",
        "image": "/ditto_pika.png",
        "types": [
          "특별"
        ]
      }
    ]
  },
  {
    "id": 9998,
    "name": "기타",
    "forms": [
      {
        "formId": "01",
        "name": "기타",
        "image": "/etc.png",
        "types": [
          "특별"
        ]
      }
    ]
  }
];
