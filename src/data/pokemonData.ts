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
        "image": "/images/pokemon/1-01.png",
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
        "image": "/images/pokemon/2-01.png",
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
        "image": "/images/pokemon/3-01.png",
        "types": [
          "풀",
          "독"
        ]
      },
      {
        "formId": "02",
        "name": "메가이상해꽃",
        "image": "/images/pokemon/3-02.png",
        "types": [
          "풀",
          "독"
        ]
      },
      {
        "formId": "03",
        "name": "거다이맥스 이상해꽃",
        "image": "/images/pokemon/3-03.png",
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
        "image": "/images/pokemon/4-01.png",
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
        "image": "/images/pokemon/5-01.png",
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
        "image": "/images/pokemon/6-01.png",
        "types": [
          "불꽃",
          "비행"
        ]
      },
      {
        "formId": "02",
        "name": "메가리자몽X",
        "image": "/images/pokemon/6-02.png",
        "types": [
          "불꽃",
          "드래곤"
        ]
      },
      {
        "formId": "03",
        "name": "메가리자몽Y",
        "image": "/images/pokemon/6-03.png",
        "types": [
          "불꽃",
          "비행"
        ]
      },
      {
        "formId": "04",
        "name": "거다이맥스 리자몽",
        "image": "/images/pokemon/6-04.png",
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
        "image": "/images/pokemon/7-01.png",
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
        "image": "/images/pokemon/8-01.png",
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
        "image": "/images/pokemon/9-01.png",
        "types": [
          "물"
        ]
      },
      {
        "formId": "02",
        "name": "메가거북왕",
        "image": "/images/pokemon/9-02.png",
        "types": [
          "물"
        ]
      },
      {
        "formId": "03",
        "name": "거다이맥스 거북왕",
        "image": "/images/pokemon/9-03.png",
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
        "image": "/images/pokemon/10-01.png",
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
        "image": "/images/pokemon/11-01.png",
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
        "image": "/images/pokemon/12-01.png",
        "types": [
          "벌레",
          "비행"
        ]
      },
      {
        "formId": "02",
        "name": "거다이맥스 버터플",
        "image": "/images/pokemon/12-02.png",
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
        "image": "/images/pokemon/13-01.png",
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
        "image": "/images/pokemon/14-01.png",
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
        "image": "/images/pokemon/15-01.png",
        "types": [
          "벌레",
          "독"
        ]
      },
      {
        "formId": "02",
        "name": "메가독침붕",
        "image": "/images/pokemon/15-02.png",
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
        "image": "/images/pokemon/16-01.png",
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
        "image": "/images/pokemon/17-01.png",
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
        "image": "/images/pokemon/18-01.png",
        "types": [
          "노말",
          "비행"
        ]
      },
      {
        "formId": "02",
        "name": "메가피죤투",
        "image": "/images/pokemon/18-02.png",
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
        "image": "/images/pokemon/19-01.png",
        "types": [
          "노말"
        ]
      },
      {
        "formId": "02",
        "name": "알로라 꼬렛",
        "image": "/images/pokemon/19-02.png",
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
        "image": "/images/pokemon/20-01.png",
        "types": [
          "노말"
        ]
      },
      {
        "formId": "02",
        "name": "알로라 레트라",
        "image": "/images/pokemon/20-02.png",
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
        "image": "/images/pokemon/21-01.png",
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
        "image": "/images/pokemon/22-01.png",
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
        "image": "/images/pokemon/23-01.png",
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
        "image": "/images/pokemon/24-01.png",
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
        "image": "/images/pokemon/25-01.png",
        "types": [
          "전기"
        ]
      },
      {
        "formId": "02",
        "name": "거다이맥스 피카츄",
        "image": "/images/pokemon/25-02.png",
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
        "image": "/images/pokemon/26-01.png",
        "types": [
          "전기"
        ]
      },
      {
        "formId": "02",
        "name": "알로라 라이츄",
        "image": "/images/pokemon/26-02.png",
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
        "image": "/images/pokemon/27-01.png",
        "types": [
          "땅"
        ]
      },
      {
        "formId": "02",
        "name": "알로라 모래두지",
        "image": "/images/pokemon/27-02.png",
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
        "image": "/images/pokemon/28-01.png",
        "types": [
          "땅"
        ]
      },
      {
        "formId": "02",
        "name": "알로라 고지",
        "image": "/images/pokemon/28-02.png",
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
        "image": "/images/pokemon/29-01.png",
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
        "image": "/images/pokemon/30-01.png",
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
        "image": "/images/pokemon/31-01.png",
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
        "image": "/images/pokemon/32-01.png",
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
        "image": "/images/pokemon/33-01.png",
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
        "image": "/images/pokemon/34-01.png",
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
        "image": "/images/pokemon/35-01.png",
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
        "image": "/images/pokemon/36-01.png",
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
        "image": "/images/pokemon/37-01.png",
        "types": [
          "불꽃"
        ]
      },
      {
        "formId": "02",
        "name": "알로라 식스테일",
        "image": "/images/pokemon/37-02.png",
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
        "image": "/images/pokemon/38-01.png",
        "types": [
          "불꽃"
        ]
      },
      {
        "formId": "02",
        "name": "알로라 나인테일",
        "image": "/images/pokemon/38-02.png",
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
        "image": "/images/pokemon/39-01.png",
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
        "image": "/images/pokemon/40-01.png",
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
        "image": "/images/pokemon/41-01.png",
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
        "image": "/images/pokemon/42-01.png",
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
        "image": "/images/pokemon/43-01.png",
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
        "image": "/images/pokemon/44-01.png",
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
        "image": "/images/pokemon/45-01.png",
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
        "image": "/images/pokemon/46-01.png",
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
        "image": "/images/pokemon/47-01.png",
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
        "image": "/images/pokemon/48-01.png",
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
        "image": "/images/pokemon/49-01.png",
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
        "image": "/images/pokemon/50-01.png",
        "types": [
          "땅"
        ]
      },
      {
        "formId": "02",
        "name": "알로라 디그다",
        "image": "/images/pokemon/50-02.png",
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
        "image": "/images/pokemon/51-01.png",
        "types": [
          "땅"
        ]
      },
      {
        "formId": "02",
        "name": "알로라 닥트리오",
        "image": "/images/pokemon/51-02.png",
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
        "image": "/images/pokemon/52-01.png",
        "types": [
          "노말"
        ]
      },
      {
        "formId": "04",
        "name": "거다이맥스 나옹",
        "image": "/images/pokemon/52-04.png",
        "types": [
          "노말"
        ]
      },
      {
        "formId": "02",
        "name": "알로라 나옹",
        "image": "/images/pokemon/52-02.png",
        "types": [
          "악"
        ]
      },
      {
        "formId": "03",
        "name": "가라르 나옹",
        "image": "/images/pokemon/52-03.png",
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
        "image": "/images/pokemon/53-01.png",
        "types": [
          "노말"
        ]
      },
      {
        "formId": "02",
        "name": "알로라 페르시온",
        "image": "/images/pokemon/53-02.png",
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
        "image": "/images/pokemon/54-01.png",
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
        "image": "/images/pokemon/55-01.png",
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
        "image": "/images/pokemon/56-01.png",
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
        "image": "/images/pokemon/57-01.png",
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
        "image": "/images/pokemon/58-01.png",
        "types": [
          "불꽃"
        ]
      },
      {
        "formId": "02",
        "name": "히스이 가디",
        "image": "/images/pokemon/58-02.png",
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
        "image": "/images/pokemon/59-01.png",
        "types": [
          "불꽃"
        ]
      },
      {
        "formId": "02",
        "name": "히스이 윈디",
        "image": "/images/pokemon/59-02.png",
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
        "image": "/images/pokemon/60-01.png",
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
        "image": "/images/pokemon/61-01.png",
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
        "image": "/images/pokemon/62-01.png",
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
        "image": "/images/pokemon/63-01.png",
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
        "image": "/images/pokemon/64-01.png",
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
        "image": "/images/pokemon/65-01.png",
        "types": [
          "에스퍼"
        ]
      },
      {
        "formId": "02",
        "name": "메가후딘",
        "image": "/images/pokemon/65-02.png",
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
        "image": "/images/pokemon/66-01.png",
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
        "image": "/images/pokemon/67-01.png",
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
        "image": "/images/pokemon/68-01.png",
        "types": [
          "격투"
        ]
      },
      {
        "formId": "02",
        "name": "거다이맥스 괴력몬",
        "image": "/images/pokemon/68-02.png",
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
        "image": "/images/pokemon/69-01.png",
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
        "image": "/images/pokemon/70-01.png",
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
        "image": "/images/pokemon/71-01.png",
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
        "image": "/images/pokemon/72-01.png",
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
        "image": "/images/pokemon/73-01.png",
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
        "image": "/images/pokemon/74-01.png",
        "types": [
          "바위",
          "땅"
        ]
      },
      {
        "formId": "02",
        "name": "알로라 꼬마돌",
        "image": "/images/pokemon/74-02.png",
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
        "image": "/images/pokemon/75-01.png",
        "types": [
          "바위",
          "땅"
        ]
      },
      {
        "formId": "02",
        "name": "알로라 데구리",
        "image": "/images/pokemon/75-02.png",
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
        "image": "/images/pokemon/76-01.png",
        "types": [
          "바위",
          "땅"
        ]
      },
      {
        "formId": "02",
        "name": "알로라 딱구리",
        "image": "/images/pokemon/76-02.png",
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
        "image": "/images/pokemon/77-01.png",
        "types": [
          "불꽃"
        ]
      },
      {
        "formId": "02",
        "name": "가라르 포니타",
        "image": "/images/pokemon/77-02.png",
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
        "image": "/images/pokemon/78-01.png",
        "types": [
          "불꽃"
        ]
      },
      {
        "formId": "02",
        "name": "가라르 날쌩마",
        "image": "/images/pokemon/78-02.png",
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
        "image": "/images/pokemon/79-01.png",
        "types": [
          "물",
          "에스퍼"
        ]
      },
      {
        "formId": "02",
        "name": "가라르 야돈",
        "image": "/images/pokemon/79-02.png",
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
        "image": "/images/pokemon/80-01.png",
        "types": [
          "물",
          "에스퍼"
        ]
      },
      {
        "formId": "02",
        "name": "메가야도란",
        "image": "/images/pokemon/80-02.png",
        "types": [
          "물",
          "에스퍼"
        ]
      },
      {
        "formId": "03",
        "name": "가라르 야도란",
        "image": "/images/pokemon/80-03.png",
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
        "image": "/images/pokemon/81-01.png",
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
        "image": "/images/pokemon/82-01.png",
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
        "image": "/images/pokemon/83-01.png",
        "types": [
          "노말",
          "비행"
        ]
      },
      {
        "formId": "02",
        "name": "가라르 파오리",
        "image": "/images/pokemon/83-02.png",
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
        "image": "/images/pokemon/84-01.png",
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
        "image": "/images/pokemon/85-01.png",
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
        "image": "/images/pokemon/86-01.png",
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
        "image": "/images/pokemon/87-01.png",
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
        "image": "/images/pokemon/88-01.png",
        "types": [
          "독"
        ]
      },
      {
        "formId": "02",
        "name": "알로라 질퍽이",
        "image": "/images/pokemon/88-02.png",
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
        "image": "/images/pokemon/89-01.png",
        "types": [
          "독"
        ]
      },
      {
        "formId": "02",
        "name": "알로라 질뻐기",
        "image": "/images/pokemon/89-02.png",
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
        "image": "/images/pokemon/90-01.png",
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
        "image": "/images/pokemon/91-01.png",
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
        "image": "/images/pokemon/92-01.png",
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
        "image": "/images/pokemon/93-01.png",
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
        "image": "/images/pokemon/94-01.png",
        "types": [
          "고스트",
          "독"
        ]
      },
      {
        "formId": "02",
        "name": "메가팬텀",
        "image": "/images/pokemon/94-02.png",
        "types": [
          "고스트",
          "독"
        ]
      },
      {
        "formId": "03",
        "name": "거다이맥스 팬텀",
        "image": "/images/pokemon/94-03.png",
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
        "image": "/images/pokemon/95-01.png",
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
        "image": "/images/pokemon/96-01.png",
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
        "image": "/images/pokemon/97-01.png",
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
        "image": "/images/pokemon/98-01.png",
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
        "image": "/images/pokemon/99-01.png",
        "types": [
          "물"
        ]
      },
      {
        "formId": "02",
        "name": "거다이맥스 킹크랩",
        "image": "/images/pokemon/99-02.png",
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
        "image": "/images/pokemon/100-01.png",
        "types": [
          "전기"
        ]
      },
      {
        "formId": "02",
        "name": "히스이 찌리리공",
        "image": "/images/pokemon/100-02.png",
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
        "image": "/images/pokemon/101-01.png",
        "types": [
          "전기"
        ]
      },
      {
        "formId": "02",
        "name": "히스이 붐볼",
        "image": "/images/pokemon/101-02.png",
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
        "image": "/images/pokemon/102-01.png",
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
        "image": "/images/pokemon/103-01.png",
        "types": [
          "풀",
          "에스퍼"
        ]
      },
      {
        "formId": "02",
        "name": "알로라 나시",
        "image": "/images/pokemon/103-02.png",
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
        "image": "/images/pokemon/104-01.png",
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
        "image": "/images/pokemon/105-01.png",
        "types": [
          "땅"
        ]
      },
      {
        "formId": "02",
        "name": "알로라 텅구리",
        "image": "/images/pokemon/105-02.png",
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
        "image": "/images/pokemon/106-01.png",
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
        "image": "/images/pokemon/107-01.png",
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
        "image": "/images/pokemon/108-01.png",
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
        "image": "/images/pokemon/109-01.png",
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
        "image": "/images/pokemon/110-01.png",
        "types": [
          "독"
        ]
      },
      {
        "formId": "02",
        "name": "가라르 또도가스",
        "image": "/images/pokemon/110-02.png",
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
        "image": "/images/pokemon/111-01.png",
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
        "image": "/images/pokemon/112-01.png",
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
        "image": "/images/pokemon/113-01.png",
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
        "image": "/images/pokemon/114-01.png",
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
        "image": "/images/pokemon/115-01.png",
        "types": [
          "노말"
        ]
      },
      {
        "formId": "02",
        "name": "메가캥카",
        "image": "/images/pokemon/115-02.png",
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
        "image": "/images/pokemon/116-01.png",
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
        "image": "/images/pokemon/117-01.png",
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
        "image": "/images/pokemon/118-01.png",
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
        "image": "/images/pokemon/119-01.png",
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
        "image": "/images/pokemon/120-01.png",
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
        "image": "/images/pokemon/121-01.png",
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
        "image": "/images/pokemon/122-01.png",
        "types": [
          "에스퍼",
          "페어리"
        ]
      },
      {
        "formId": "02",
        "name": "가라르 마임맨",
        "image": "/images/pokemon/122-02.png",
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
        "image": "/images/pokemon/123-01.png",
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
        "image": "/images/pokemon/124-01.png",
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
        "image": "/images/pokemon/125-01.png",
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
        "image": "/images/pokemon/126-01.png",
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
        "image": "/images/pokemon/127-01.png",
        "types": [
          "벌레"
        ]
      },
      {
        "formId": "02",
        "name": "메가쁘사이저",
        "image": "/images/pokemon/127-02.png",
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
        "image": "/images/pokemon/128-01.png",
        "types": [
          "노말"
        ]
      },
      {
        "formId": "02",
        "name": "팔데아 켄타로스(컴뱃)",
        "image": "/images/pokemon/128-02.png",
        "types": [
          "격투"
        ]
      },
      {
        "formId": "03",
        "name": "팔데아 켄타로스(블레이즈)",
        "image": "/images/pokemon/128-03.png",
        "types": [
          "격투",
          "불꽃"
        ]
      },
      {
        "formId": "04",
        "name": "팔데아 켄타로스(워터)",
        "image": "/images/pokemon/128-04.png",
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
        "image": "/images/pokemon/129-01.png",
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
        "image": "/images/pokemon/130-01.png",
        "types": [
          "물",
          "비행"
        ]
      },
      {
        "formId": "02",
        "name": "메가갸라도스",
        "image": "/images/pokemon/130-02.png",
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
        "image": "/images/pokemon/131-01.png",
        "types": [
          "물",
          "얼음"
        ]
      },
      {
        "formId": "02",
        "name": "거다이맥스 라프라스",
        "image": "/images/pokemon/131-02.png",
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
        "image": "/images/pokemon/132-01.png",
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
        "image": "/images/pokemon/133-01.png",
        "types": [
          "노말"
        ]
      },
      {
        "formId": "02",
        "name": "거다이맥스 이브이",
        "image": "/images/pokemon/133-02.png",
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
        "image": "/images/pokemon/134-01.png",
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
        "image": "/images/pokemon/135-01.png",
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
        "image": "/images/pokemon/136-01.png",
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
        "image": "/images/pokemon/137-01.png",
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
        "image": "/images/pokemon/138-01.png",
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
        "image": "/images/pokemon/139-01.png",
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
        "image": "/images/pokemon/140-01.png",
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
        "image": "/images/pokemon/141-01.png",
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
        "image": "/images/pokemon/142-01.png",
        "types": [
          "바위",
          "비행"
        ]
      },
      {
        "formId": "02",
        "name": "메가프테라",
        "image": "/images/pokemon/142-02.png",
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
        "image": "/images/pokemon/143-01.png",
        "types": [
          "노말"
        ]
      },
      {
        "formId": "02",
        "name": "거다이맥스 잠만보",
        "image": "/images/pokemon/143-02.png",
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
        "image": "/images/pokemon/144-01.png",
        "types": [
          "얼음",
          "비행"
        ]
      },
      {
        "formId": "02",
        "name": "가라르 프리져",
        "image": "/images/pokemon/144-02.png",
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
        "image": "/images/pokemon/145-01.png",
        "types": [
          "전기",
          "비행"
        ]
      },
      {
        "formId": "02",
        "name": "가라르 썬더",
        "image": "/images/pokemon/145-02.png",
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
        "image": "/images/pokemon/146-01.png",
        "types": [
          "불꽃",
          "비행"
        ]
      },
      {
        "formId": "02",
        "name": "가라르 파이어",
        "image": "/images/pokemon/146-02.png",
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
        "image": "/images/pokemon/147-01.png",
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
        "image": "/images/pokemon/148-01.png",
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
        "image": "/images/pokemon/149-01.png",
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
        "image": "/images/pokemon/150-01.png",
        "types": [
          "에스퍼"
        ]
      },
      {
        "formId": "02",
        "name": "메가뮤츠X",
        "image": "/images/pokemon/150-02.png",
        "types": [
          "에스퍼",
          "격투"
        ]
      },
      {
        "formId": "03",
        "name": "메가뮤츠Y",
        "image": "/images/pokemon/150-03.png",
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
        "image": "/images/pokemon/151-01.png",
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
        "image": "/images/pokemon/152-01.png",
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
        "image": "/images/pokemon/153-01.png",
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
        "image": "/images/pokemon/154-01.png",
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
        "image": "/images/pokemon/155-01.png",
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
        "image": "/images/pokemon/156-01.png",
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
        "image": "/images/pokemon/157-01.png",
        "types": [
          "불꽃"
        ]
      },
      {
        "formId": "02",
        "name": "히스이 블레이범",
        "image": "/images/pokemon/157-02.png",
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
        "image": "/images/pokemon/158-01.png",
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
        "image": "/images/pokemon/159-01.png",
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
        "image": "/images/pokemon/160-01.png",
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
        "image": "/images/pokemon/161-01.png",
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
        "image": "/images/pokemon/162-01.png",
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
        "image": "/images/pokemon/163-01.png",
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
        "image": "/images/pokemon/164-01.png",
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
        "image": "/images/pokemon/165-01.png",
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
        "image": "/images/pokemon/166-01.png",
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
        "image": "/images/pokemon/167-01.png",
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
        "image": "/images/pokemon/168-01.png",
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
        "image": "/images/pokemon/169-01.png",
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
        "image": "/images/pokemon/170-01.png",
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
        "image": "/images/pokemon/171-01.png",
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
        "image": "/images/pokemon/172-01.png",
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
        "image": "/images/pokemon/173-01.png",
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
        "image": "/images/pokemon/174-01.png",
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
        "image": "/images/pokemon/175-01.png",
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
        "image": "/images/pokemon/176-01.png",
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
        "image": "/images/pokemon/177-01.png",
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
        "image": "/images/pokemon/178-01.png",
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
        "image": "/images/pokemon/179-01.png",
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
        "image": "/images/pokemon/180-01.png",
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
        "image": "/images/pokemon/181-01.png",
        "types": [
          "전기"
        ]
      },
      {
        "formId": "02",
        "name": "메가전룡",
        "image": "/images/pokemon/181-02.png",
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
        "image": "/images/pokemon/182-01.png",
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
        "image": "/images/pokemon/183-01.png",
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
        "image": "/images/pokemon/184-01.png",
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
        "image": "/images/pokemon/185-01.png",
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
        "image": "/images/pokemon/186-01.png",
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
        "image": "/images/pokemon/187-01.png",
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
        "image": "/images/pokemon/188-01.png",
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
        "image": "/images/pokemon/189-01.png",
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
        "image": "/images/pokemon/190-01.png",
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
        "image": "/images/pokemon/191-01.png",
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
        "image": "/images/pokemon/192-01.png",
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
        "image": "/images/pokemon/193-01.png",
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
        "image": "/images/pokemon/194-01.png",
        "types": [
          "물",
          "땅"
        ]
      },
      {
        "formId": "02",
        "name": "팔데아 우파",
        "image": "/images/pokemon/194-02.png",
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
        "image": "/images/pokemon/195-01.png",
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
        "image": "/images/pokemon/196-01.png",
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
        "image": "/images/pokemon/197-01.png",
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
        "image": "/images/pokemon/198-01.png",
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
        "image": "/images/pokemon/199-01.png",
        "types": [
          "물",
          "에스퍼"
        ]
      },
      {
        "formId": "02",
        "name": "가라르 야도킹",
        "image": "/images/pokemon/199-02.png",
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
        "image": "/images/pokemon/200-01.png",
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
        "image": "/images/pokemon/201-01.png",
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
        "image": "/images/pokemon/202-01.png",
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
        "image": "/images/pokemon/203-01.png",
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
        "image": "/images/pokemon/204-01.png",
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
        "image": "/images/pokemon/205-01.png",
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
        "image": "/images/pokemon/206-01.png",
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
        "image": "/images/pokemon/207-01.png",
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
        "image": "/images/pokemon/208-01.png",
        "types": [
          "강철",
          "땅"
        ]
      },
      {
        "formId": "02",
        "name": "메가강철톤",
        "image": "/images/pokemon/208-02.png",
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
        "image": "/images/pokemon/209-01.png",
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
        "image": "/images/pokemon/210-01.png",
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
        "image": "/images/pokemon/211-01.png",
        "types": [
          "물",
          "독"
        ]
      },
      {
        "formId": "02",
        "name": "히스이 침바루",
        "image": "/images/pokemon/211-02.png",
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
        "image": "/images/pokemon/212-01.png",
        "types": [
          "벌레",
          "강철"
        ]
      },
      {
        "formId": "02",
        "name": "메가핫삼",
        "image": "/images/pokemon/212-02.png",
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
        "image": "/images/pokemon/213-01.png",
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
        "image": "/images/pokemon/214-01.png",
        "types": [
          "벌레",
          "격투"
        ]
      },
      {
        "formId": "02",
        "name": "메가헤라크로스",
        "image": "/images/pokemon/214-02.png",
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
        "image": "/images/pokemon/215-01.png",
        "types": [
          "악",
          "얼음"
        ]
      },
      {
        "formId": "02",
        "name": "히스이 포푸니",
        "image": "/images/pokemon/215-02.png",
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
        "image": "/images/pokemon/216-01.png",
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
        "image": "/images/pokemon/217-01.png",
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
        "image": "/images/pokemon/218-01.png",
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
        "image": "/images/pokemon/219-01.png",
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
        "image": "/images/pokemon/220-01.png",
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
        "image": "/images/pokemon/221-01.png",
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
        "image": "/images/pokemon/222-01.png",
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
        "image": "/images/pokemon/223-01.png",
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
        "image": "/images/pokemon/224-01.png",
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
        "image": "/images/pokemon/225-01.png",
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
        "image": "/images/pokemon/226-01.png",
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
        "image": "/images/pokemon/227-01.png",
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
        "image": "/images/pokemon/228-01.png",
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
        "image": "/images/pokemon/229-01.png",
        "types": [
          "악",
          "불꽃"
        ]
      },
      {
        "formId": "02",
        "name": "메가헬가",
        "image": "/images/pokemon/229-02.png",
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
        "image": "/images/pokemon/230-01.png",
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
        "image": "/images/pokemon/231-01.png",
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
        "image": "/images/pokemon/232-01.png",
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
        "image": "/images/pokemon/233-01.png",
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
        "image": "/images/pokemon/234-01.png",
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
        "image": "/images/pokemon/235-01.png",
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
        "image": "/images/pokemon/236-01.png",
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
        "image": "/images/pokemon/237-01.png",
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
        "image": "/images/pokemon/238-01.png",
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
        "image": "/images/pokemon/239-01.png",
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
        "image": "/images/pokemon/240-01.png",
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
        "image": "/images/pokemon/241-01.png",
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
        "image": "/images/pokemon/242-01.png",
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
        "image": "/images/pokemon/243-01.png",
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
        "image": "/images/pokemon/244-01.png",
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
        "image": "/images/pokemon/245-01.png",
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
        "image": "/images/pokemon/246-01.png",
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
        "image": "/images/pokemon/247-01.png",
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
        "image": "/images/pokemon/248-01.png",
        "types": [
          "바위",
          "악"
        ]
      },
      {
        "formId": "02",
        "name": "메가마기라스",
        "image": "/images/pokemon/248-02.png",
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
        "image": "/images/pokemon/249-01.png",
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
        "image": "/images/pokemon/250-01.png",
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
        "image": "/images/pokemon/251-01.png",
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
        "image": "/images/pokemon/252-01.png",
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
        "image": "/images/pokemon/253-01.png",
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
        "image": "/images/pokemon/254-01.png",
        "types": [
          "풀"
        ]
      },
      {
        "formId": "02",
        "name": "메가나무킹",
        "image": "/images/pokemon/254-02.png",
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
        "image": "/images/pokemon/255-01.png",
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
        "image": "/images/pokemon/256-01.png",
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
        "image": "/images/pokemon/257-01.png",
        "types": [
          "불꽃",
          "격투"
        ]
      },
      {
        "formId": "02",
        "name": "메가번치코",
        "image": "/images/pokemon/257-02.png",
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
        "image": "/images/pokemon/258-01.png",
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
        "image": "/images/pokemon/259-01.png",
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
        "image": "/images/pokemon/260-01.png",
        "types": [
          "물",
          "땅"
        ]
      },
      {
        "formId": "02",
        "name": "메가대짱이",
        "image": "/images/pokemon/260-02.png",
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
        "image": "/images/pokemon/261-01.png",
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
        "image": "/images/pokemon/262-01.png",
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
        "image": "/images/pokemon/263-01.png",
        "types": [
          "노말"
        ]
      },
      {
        "formId": "02",
        "name": "가라르 지그제구리",
        "image": "/images/pokemon/263-02.png",
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
        "image": "/images/pokemon/264-01.png",
        "types": [
          "노말"
        ]
      },
      {
        "formId": "02",
        "name": "가라르 직구리",
        "image": "/images/pokemon/264-02.png",
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
        "image": "/images/pokemon/265-01.png",
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
        "image": "/images/pokemon/266-01.png",
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
        "image": "/images/pokemon/267-01.png",
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
        "image": "/images/pokemon/268-01.png",
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
        "image": "/images/pokemon/269-01.png",
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
        "image": "/images/pokemon/270-01.png",
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
        "image": "/images/pokemon/271-01.png",
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
        "image": "/images/pokemon/272-01.png",
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
        "image": "/images/pokemon/273-01.png",
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
        "image": "/images/pokemon/274-01.png",
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
        "image": "/images/pokemon/275-01.png",
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
        "image": "/images/pokemon/276-01.png",
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
        "image": "/images/pokemon/277-01.png",
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
        "image": "/images/pokemon/278-01.png",
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
        "image": "/images/pokemon/279-01.png",
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
        "image": "/images/pokemon/280-01.png",
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
        "image": "/images/pokemon/281-01.png",
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
        "image": "/images/pokemon/282-01.png",
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
        "image": "/images/pokemon/283-01.png",
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
        "image": "/images/pokemon/284-01.png",
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
        "image": "/images/pokemon/285-01.png",
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
        "image": "/images/pokemon/286-01.png",
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
        "image": "/images/pokemon/287-01.png",
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
        "image": "/images/pokemon/288-01.png",
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
        "image": "/images/pokemon/289-01.png",
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
        "image": "/images/pokemon/290-01.png",
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
        "image": "/images/pokemon/291-01.png",
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
        "image": "/images/pokemon/292-01.png",
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
        "image": "/images/pokemon/293-01.png",
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
        "image": "/images/pokemon/294-01.png",
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
        "image": "/images/pokemon/295-01.png",
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
        "image": "/images/pokemon/296-01.png",
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
        "image": "/images/pokemon/297-01.png",
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
        "image": "/images/pokemon/298-01.png",
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
        "image": "/images/pokemon/299-01.png",
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
        "image": "/images/pokemon/300-01.png",
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
        "image": "/images/pokemon/301-01.png",
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
        "image": "/images/pokemon/302-01.png",
        "types": [
          "악",
          "고스트"
        ]
      },
      {
        "formId": "02",
        "name": "메가깜까미",
        "image": "/images/pokemon/302-02.png",
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
        "image": "/images/pokemon/303-01.png",
        "types": [
          "강철",
          "페어리"
        ]
      },
      {
        "formId": "02",
        "name": "메가입치트",
        "image": "/images/pokemon/303-02.png",
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
        "image": "/images/pokemon/304-01.png",
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
        "image": "/images/pokemon/305-01.png",
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
        "image": "/images/pokemon/306-01.png",
        "types": [
          "강철",
          "바위"
        ]
      },
      {
        "formId": "02",
        "name": "메가보스로라",
        "image": "/images/pokemon/306-02.png",
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
        "image": "/images/pokemon/307-01.png",
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
        "image": "/images/pokemon/308-01.png",
        "types": [
          "격투",
          "에스퍼"
        ]
      },
      {
        "formId": "02",
        "name": "메가요가램",
        "image": "/images/pokemon/308-02.png",
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
        "image": "/images/pokemon/309-01.png",
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
        "image": "/images/pokemon/310-01.png",
        "types": [
          "전기"
        ]
      },
      {
        "formId": "02",
        "name": "메가썬더볼트",
        "image": "/images/pokemon/310-02.png",
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
        "image": "/images/pokemon/311-01.png",
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
        "image": "/images/pokemon/312-01.png",
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
        "image": "/images/pokemon/313-01.png",
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
        "image": "/images/pokemon/314-01.png",
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
        "image": "/images/pokemon/315-01.png",
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
        "image": "/images/pokemon/316-01.png",
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
        "image": "/images/pokemon/317-01.png",
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
        "image": "/images/pokemon/318-01.png",
        "types": [
          "물",
          "악"
        ]
      },
      {
        "formId": "02",
        "name": "메가샤크니아",
        "image": "/images/pokemon/318-02.png",
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
        "image": "/images/pokemon/319-01.png",
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
        "image": "/images/pokemon/320-01.png",
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
        "image": "/images/pokemon/321-01.png",
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
        "image": "/images/pokemon/322-01.png",
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
        "image": "/images/pokemon/323-01.png",
        "types": [
          "불꽃",
          "땅"
        ]
      },
      {
        "formId": "02",
        "name": "메가폭타",
        "image": "/images/pokemon/323-02.png",
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
        "image": "/images/pokemon/324-01.png",
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
        "image": "/images/pokemon/325-01.png",
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
        "image": "/images/pokemon/326-01.png",
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
        "image": "/images/pokemon/327-01.png",
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
        "image": "/images/pokemon/328-01.png",
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
        "image": "/images/pokemon/329-01.png",
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
        "image": "/images/pokemon/330-01.png",
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
        "image": "/images/pokemon/331-01.png",
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
        "image": "/images/pokemon/332-01.png",
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
        "image": "/images/pokemon/333-01.png",
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
        "image": "/images/pokemon/334-01.png",
        "types": [
          "드래곤",
          "비행"
        ]
      },
      {
        "formId": "02",
        "name": "메가파비코리",
        "image": "/images/pokemon/334-02.png",
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
        "image": "/images/pokemon/335-01.png",
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
        "image": "/images/pokemon/336-01.png",
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
        "image": "/images/pokemon/337-01.png",
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
        "image": "/images/pokemon/338-01.png",
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
        "image": "/images/pokemon/339-01.png",
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
        "image": "/images/pokemon/340-01.png",
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
        "image": "/images/pokemon/341-01.png",
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
        "image": "/images/pokemon/342-01.png",
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
        "image": "/images/pokemon/343-01.png",
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
        "image": "/images/pokemon/344-01.png",
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
        "image": "/images/pokemon/345-01.png",
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
        "image": "/images/pokemon/346-01.png",
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
        "image": "/images/pokemon/347-01.png",
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
        "image": "/images/pokemon/348-01.png",
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
        "image": "/images/pokemon/349-01.png",
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
        "image": "/images/pokemon/350-01.png",
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
        "image": "/images/pokemon/351-01.png",
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
        "image": "/images/pokemon/352-01.png",
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
        "image": "/images/pokemon/353-01.png",
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
        "image": "/images/pokemon/354-01.png",
        "types": [
          "고스트"
        ]
      },
      {
        "formId": "02",
        "name": "메가다크펫",
        "image": "/images/pokemon/354-02.png",
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
        "image": "/images/pokemon/355-01.png",
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
        "image": "/images/pokemon/356-01.png",
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
        "image": "/images/pokemon/357-01.png",
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
        "image": "/images/pokemon/358-01.png",
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
        "image": "/images/pokemon/359-01.png",
        "types": [
          "악"
        ]
      },
      {
        "formId": "02",
        "name": "메가앱솔",
        "image": "/images/pokemon/359-02.png",
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
        "image": "/images/pokemon/360-01.png",
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
        "image": "/images/pokemon/361-01.png",
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
        "image": "/images/pokemon/362-01.png",
        "types": [
          "얼음"
        ]
      },
      {
        "formId": "02",
        "name": "메가얼음귀신",
        "image": "/images/pokemon/362-02.png",
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
        "image": "/images/pokemon/363-01.png",
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
        "image": "/images/pokemon/364-01.png",
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
        "image": "/images/pokemon/365-01.png",
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
        "image": "/images/pokemon/366-01.png",
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
        "image": "/images/pokemon/367-01.png",
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
        "image": "/images/pokemon/368-01.png",
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
        "image": "/images/pokemon/369-01.png",
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
        "image": "/images/pokemon/370-01.png",
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
        "image": "/images/pokemon/371-01.png",
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
        "image": "/images/pokemon/372-01.png",
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
        "image": "/images/pokemon/373-01.png",
        "types": [
          "드래곤",
          "비행"
        ]
      },
      {
        "formId": "02",
        "name": "메가보만다",
        "image": "/images/pokemon/373-02.png",
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
        "image": "/images/pokemon/374-01.png",
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
        "image": "/images/pokemon/375-01.png",
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
        "image": "/images/pokemon/376-01.png",
        "types": [
          "강철",
          "에스퍼"
        ]
      },
      {
        "formId": "02",
        "name": "메가메타그로스",
        "image": "/images/pokemon/376-02.png",
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
        "image": "/images/pokemon/377-01.png",
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
        "image": "/images/pokemon/378-01.png",
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
        "image": "/images/pokemon/379-01.png",
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
        "image": "/images/pokemon/380-01.png",
        "types": [
          "드래곤",
          "에스퍼"
        ]
      },
      {
        "formId": "02",
        "name": "메가라티아스",
        "image": "/images/pokemon/380-02.png",
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
        "image": "/images/pokemon/381-01.png",
        "types": [
          "드래곤",
          "에스퍼"
        ]
      },
      {
        "formId": "02",
        "name": "메가라티오스",
        "image": "/images/pokemon/381-02.png",
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
        "image": "/images/pokemon/382-01.png",
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
        "image": "/images/pokemon/383-01.png",
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
        "image": "/images/pokemon/384-01.png",
        "types": [
          "드래곤",
          "비행"
        ]
      },
      {
        "formId": "02",
        "name": "메가레쿠쟈",
        "image": "/images/pokemon/384-02.png",
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
        "image": "/images/pokemon/385-01.png",
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
        "image": "/images/pokemon/386-01.png",
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
        "image": "/images/pokemon/387-01.png",
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
        "image": "/images/pokemon/388-01.png",
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
        "image": "/images/pokemon/389-01.png",
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
        "image": "/images/pokemon/390-01.png",
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
        "image": "/images/pokemon/391-01.png",
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
        "image": "/images/pokemon/392-01.png",
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
        "image": "/images/pokemon/393-01.png",
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
        "image": "/images/pokemon/394-01.png",
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
        "image": "/images/pokemon/395-01.png",
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
        "image": "/images/pokemon/396-01.png",
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
        "image": "/images/pokemon/397-01.png",
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
        "image": "/images/pokemon/398-01.png",
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
        "image": "/images/pokemon/399-01.png",
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
        "image": "/images/pokemon/400-01.png",
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
        "image": "/images/pokemon/401-01.png",
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
        "image": "/images/pokemon/402-01.png",
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
        "image": "/images/pokemon/403-01.png",
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
        "image": "/images/pokemon/404-01.png",
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
        "image": "/images/pokemon/405-01.png",
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
        "image": "/images/pokemon/406-01.png",
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
        "image": "/images/pokemon/407-01.png",
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
        "image": "/images/pokemon/408-01.png",
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
        "image": "/images/pokemon/409-01.png",
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
        "image": "/images/pokemon/410-01.png",
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
        "image": "/images/pokemon/411-01.png",
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
        "image": "/images/pokemon/412-01.png",
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
        "image": "/images/pokemon/413-01.png",
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
        "image": "/images/pokemon/414-01.png",
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
        "image": "/images/pokemon/415-01.png",
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
        "image": "/images/pokemon/416-01.png",
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
        "image": "/images/pokemon/417-01.png",
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
        "image": "/images/pokemon/418-01.png",
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
        "image": "/images/pokemon/419-01.png",
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
        "image": "/images/pokemon/420-01.png",
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
        "image": "/images/pokemon/421-01.png",
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
        "image": "/images/pokemon/422-01.png",
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
        "image": "/images/pokemon/423-01.png",
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
        "image": "/images/pokemon/424-01.png",
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
        "image": "/images/pokemon/425-01.png",
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
        "image": "/images/pokemon/426-01.png",
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
        "image": "/images/pokemon/427-01.png",
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
        "image": "/images/pokemon/428-01.png",
        "types": [
          "노말"
        ]
      },
      {
        "formId": "02",
        "name": "메가이어롭",
        "image": "/images/pokemon/428-02.png",
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
        "image": "/images/pokemon/429-01.png",
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
        "image": "/images/pokemon/430-01.png",
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
        "image": "/images/pokemon/431-01.png",
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
        "image": "/images/pokemon/432-01.png",
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
        "image": "/images/pokemon/433-01.png",
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
        "image": "/images/pokemon/434-01.png",
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
        "image": "/images/pokemon/435-01.png",
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
        "image": "/images/pokemon/436-01.png",
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
        "image": "/images/pokemon/437-01.png",
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
        "image": "/images/pokemon/438-01.png",
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
        "image": "/images/pokemon/439-01.png",
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
        "image": "/images/pokemon/440-01.png",
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
        "image": "/images/pokemon/441-01.png",
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
        "image": "/images/pokemon/442-01.png",
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
        "image": "/images/pokemon/443-01.png",
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
        "image": "/images/pokemon/444-01.png",
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
        "image": "/images/pokemon/445-01.png",
        "types": [
          "드래곤",
          "땅"
        ]
      },
      {
        "formId": "02",
        "name": "메가한카리아스",
        "image": "/images/pokemon/445-02.png",
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
        "image": "/images/pokemon/446-01.png",
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
        "image": "/images/pokemon/447-01.png",
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
        "image": "/images/pokemon/448-01.png",
        "types": [
          "격투",
          "강철"
        ]
      },
      {
        "formId": "02",
        "name": "메가루카리오",
        "image": "/images/pokemon/448-02.png",
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
        "image": "/images/pokemon/449-01.png",
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
        "image": "/images/pokemon/450-01.png",
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
        "image": "/images/pokemon/451-01.png",
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
        "image": "/images/pokemon/452-01.png",
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
        "image": "/images/pokemon/453-01.png",
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
        "image": "/images/pokemon/454-01.png",
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
        "image": "/images/pokemon/455-01.png",
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
        "image": "/images/pokemon/456-01.png",
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
        "image": "/images/pokemon/457-01.png",
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
        "image": "/images/pokemon/458-01.png",
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
        "image": "/images/pokemon/459-01.png",
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
        "image": "/images/pokemon/460-01.png",
        "types": [
          "풀",
          "얼음"
        ]
      },
      {
        "formId": "02",
        "name": "메가눈설왕",
        "image": "/images/pokemon/460-02.png",
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
        "image": "/images/pokemon/461-01.png",
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
        "image": "/images/pokemon/462-01.png",
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
        "image": "/images/pokemon/463-01.png",
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
        "image": "/images/pokemon/464-01.png",
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
        "image": "/images/pokemon/465-01.png",
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
        "image": "/images/pokemon/466-01.png",
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
        "image": "/images/pokemon/467-01.png",
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
        "image": "/images/pokemon/468-01.png",
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
        "image": "/images/pokemon/469-01.png",
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
        "image": "/images/pokemon/470-01.png",
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
        "image": "/images/pokemon/471-01.png",
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
        "image": "/images/pokemon/472-01.png",
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
        "image": "/images/pokemon/473-01.png",
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
        "image": "/images/pokemon/474-01.png",
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
        "image": "/images/pokemon/475-01.png",
        "types": [
          "에스퍼",
          "격투"
        ]
      },
      {
        "formId": "02",
        "name": "메가엘레이드",
        "image": "/images/pokemon/475-02.png",
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
        "image": "/images/pokemon/476-01.png",
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
        "image": "/images/pokemon/477-01.png",
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
        "image": "/images/pokemon/478-01.png",
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
        "image": "/images/pokemon/479-01.png",
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
        "image": "/images/pokemon/480-01.png",
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
        "image": "/images/pokemon/481-01.png",
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
        "image": "/images/pokemon/482-01.png",
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
        "image": "/images/pokemon/483-01.png",
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
        "image": "/images/pokemon/484-01.png",
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
        "image": "/images/pokemon/485-01.png",
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
        "image": "/images/pokemon/486-01.png",
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
        "image": "/images/pokemon/487-01.png",
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
        "image": "/images/pokemon/488-01.png",
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
        "image": "/images/pokemon/489-01.png",
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
        "image": "/images/pokemon/490-01.png",
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
        "image": "/images/pokemon/491-01.png",
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
        "image": "/images/pokemon/492-01.png",
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
        "image": "/images/pokemon/493-01.png",
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
        "image": "/images/pokemon/494-01.png",
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
        "image": "/images/pokemon/495-01.png",
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
        "image": "/images/pokemon/496-01.png",
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
        "image": "/images/pokemon/497-01.png",
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
        "image": "/images/pokemon/498-01.png",
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
        "image": "/images/pokemon/499-01.png",
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
        "image": "/images/pokemon/500-01.png",
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
        "image": "/images/pokemon/501-01.png",
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
        "image": "/images/pokemon/502-01.png",
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
        "image": "/images/pokemon/503-01.png",
        "types": [
          "물"
        ]
      },
      {
        "formId": "02",
        "name": "히스이 대검귀",
        "image": "/images/pokemon/503-02.png",
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
        "image": "/images/pokemon/504-01.png",
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
        "image": "/images/pokemon/505-01.png",
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
        "image": "/images/pokemon/506-01.png",
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
        "image": "/images/pokemon/507-01.png",
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
        "image": "/images/pokemon/508-01.png",
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
        "image": "/images/pokemon/509-01.png",
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
        "image": "/images/pokemon/510-01.png",
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
        "image": "/images/pokemon/511-01.png",
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
        "image": "/images/pokemon/512-01.png",
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
        "image": "/images/pokemon/513-01.png",
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
        "image": "/images/pokemon/514-01.png",
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
        "image": "/images/pokemon/515-01.png",
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
        "image": "/images/pokemon/516-01.png",
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
        "image": "/images/pokemon/517-01.png",
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
        "image": "/images/pokemon/518-01.png",
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
        "image": "/images/pokemon/519-01.png",
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
        "image": "/images/pokemon/520-01.png",
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
        "image": "/images/pokemon/521-01.png",
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
        "image": "/images/pokemon/522-01.png",
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
        "image": "/images/pokemon/523-01.png",
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
        "image": "/images/pokemon/524-01.png",
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
        "image": "/images/pokemon/525-01.png",
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
        "image": "/images/pokemon/526-01.png",
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
        "image": "/images/pokemon/527-01.png",
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
        "image": "/images/pokemon/528-01.png",
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
        "image": "/images/pokemon/529-01.png",
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
        "image": "/images/pokemon/530-01.png",
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
        "image": "/images/pokemon/531-01.png",
        "types": [
          "노말"
        ]
      },
      {
        "formId": "02",
        "name": "메가다부니",
        "image": "/images/pokemon/531-02.png",
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
        "image": "/images/pokemon/532-01.png",
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
        "image": "/images/pokemon/533-01.png",
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
        "image": "/images/pokemon/534-01.png",
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
        "image": "/images/pokemon/535-01.png",
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
        "image": "/images/pokemon/536-01.png",
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
        "image": "/images/pokemon/537-01.png",
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
        "image": "/images/pokemon/538-01.png",
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
        "image": "/images/pokemon/539-01.png",
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
        "image": "/images/pokemon/540-01.png",
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
        "image": "/images/pokemon/541-01.png",
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
        "image": "/images/pokemon/542-01.png",
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
        "image": "/images/pokemon/543-01.png",
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
        "image": "/images/pokemon/544-01.png",
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
        "image": "/images/pokemon/545-01.png",
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
        "image": "/images/pokemon/546-01.png",
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
        "image": "/images/pokemon/547-01.png",
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
        "image": "/images/pokemon/548-01.png",
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
        "image": "/images/pokemon/549-01.png",
        "types": [
          "풀"
        ]
      },
      {
        "formId": "02",
        "name": "히스이 드레디어",
        "image": "/images/pokemon/549-02.png",
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
        "image": "/images/pokemon/550-01.png",
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
        "image": "/images/pokemon/551-01.png",
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
        "image": "/images/pokemon/552-01.png",
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
        "image": "/images/pokemon/553-01.png",
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
        "image": "/images/pokemon/554-01.png",
        "types": [
          "불꽃"
        ]
      },
      {
        "formId": "02",
        "name": "가라르 달막화",
        "image": "/images/pokemon/554-02.png",
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
        "image": "/images/pokemon/555-01.png",
        "types": [
          "불꽃"
        ]
      },
      {
        "formId": "02",
        "name": "가라르 불비달마",
        "image": "/images/pokemon/555-02.png",
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
        "image": "/images/pokemon/556-01.png",
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
        "image": "/images/pokemon/557-01.png",
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
        "image": "/images/pokemon/558-01.png",
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
        "image": "/images/pokemon/559-01.png",
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
        "image": "/images/pokemon/560-01.png",
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
        "image": "/images/pokemon/561-01.png",
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
        "image": "/images/pokemon/562-01.png",
        "types": [
          "고스트"
        ]
      },
      {
        "formId": "02",
        "name": "가라르 데스마스",
        "image": "/images/pokemon/562-02.png",
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
        "image": "/images/pokemon/563-01.png",
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
        "image": "/images/pokemon/564-01.png",
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
        "image": "/images/pokemon/565-01.png",
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
        "image": "/images/pokemon/566-01.png",
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
        "image": "/images/pokemon/567-01.png",
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
        "image": "/images/pokemon/568-01.png",
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
        "image": "/images/pokemon/569-01.png",
        "types": [
          "독"
        ]
      },
      {
        "formId": "02",
        "name": "거다이맥스 더스트나",
        "image": "/images/pokemon/569-02.png",
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
        "image": "/images/pokemon/570-01.png",
        "types": [
          "악"
        ]
      },
      {
        "formId": "02",
        "name": "히스이 조로아",
        "image": "/images/pokemon/570-02.png",
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
        "image": "/images/pokemon/571-01.png",
        "types": [
          "악"
        ]
      },
      {
        "formId": "02",
        "name": "히스이 Zoroark",
        "image": "/images/pokemon/571-02.png",
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
        "image": "/images/pokemon/572-01.png",
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
        "image": "/images/pokemon/573-01.png",
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
        "image": "/images/pokemon/574-01.png",
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
        "image": "/images/pokemon/575-01.png",
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
        "image": "/images/pokemon/576-01.png",
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
        "image": "/images/pokemon/577-01.png",
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
        "image": "/images/pokemon/578-01.png",
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
        "image": "/images/pokemon/579-01.png",
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
        "image": "/images/pokemon/580-01.png",
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
        "image": "/images/pokemon/581-01.png",
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
        "image": "/images/pokemon/582-01.png",
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
        "image": "/images/pokemon/583-01.png",
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
        "image": "/images/pokemon/584-01.png",
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
        "image": "/images/pokemon/585-01.png",
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
        "image": "/images/pokemon/586-01.png",
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
        "image": "/images/pokemon/587-01.png",
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
        "image": "/images/pokemon/588-01.png",
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
        "image": "/images/pokemon/589-01.png",
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
        "image": "/images/pokemon/590-01.png",
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
        "image": "/images/pokemon/591-01.png",
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
        "image": "/images/pokemon/592-01.png",
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
        "image": "/images/pokemon/593-01.png",
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
        "image": "/images/pokemon/594-01.png",
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
        "image": "/images/pokemon/595-01.png",
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
        "image": "/images/pokemon/596-01.png",
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
        "image": "/images/pokemon/597-01.png",
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
        "image": "/images/pokemon/598-01.png",
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
        "image": "/images/pokemon/599-01.png",
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
        "image": "/images/pokemon/600-01.png",
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
        "image": "/images/pokemon/601-01.png",
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
        "image": "/images/pokemon/602-01.png",
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
        "image": "/images/pokemon/603-01.png",
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
        "image": "/images/pokemon/604-01.png",
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
        "image": "/images/pokemon/605-01.png",
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
        "image": "/images/pokemon/606-01.png",
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
        "image": "/images/pokemon/607-01.png",
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
        "image": "/images/pokemon/608-01.png",
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
        "image": "/images/pokemon/609-01.png",
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
        "image": "/images/pokemon/610-01.png",
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
        "image": "/images/pokemon/611-01.png",
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
        "image": "/images/pokemon/612-01.png",
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
        "image": "/images/pokemon/613-01.png",
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
        "image": "/images/pokemon/614-01.png",
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
        "image": "/images/pokemon/615-01.png",
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
        "image": "/images/pokemon/616-01.png",
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
        "image": "/images/pokemon/617-01.png",
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
        "image": "/images/pokemon/618-01.png",
        "types": [
          "땅",
          "전기"
        ]
      },
      {
        "formId": "02",
        "name": "가라르 메더",
        "image": "/images/pokemon/618-02.png",
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
        "image": "/images/pokemon/619-01.png",
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
        "image": "/images/pokemon/620-01.png",
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
        "image": "/images/pokemon/621-01.png",
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
        "image": "/images/pokemon/622-01.png",
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
        "image": "/images/pokemon/623-01.png",
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
        "image": "/images/pokemon/624-01.png",
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
        "image": "/images/pokemon/625-01.png",
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
        "image": "/images/pokemon/626-01.png",
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
        "image": "/images/pokemon/627-01.png",
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
        "image": "/images/pokemon/628-01.png",
        "types": [
          "노말",
          "비행"
        ]
      },
      {
        "formId": "02",
        "name": "히스이 워글",
        "image": "/images/pokemon/628-02.png",
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
        "image": "/images/pokemon/629-01.png",
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
        "image": "/images/pokemon/630-01.png",
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
        "image": "/images/pokemon/631-01.png",
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
        "image": "/images/pokemon/632-01.png",
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
        "image": "/images/pokemon/633-01.png",
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
        "image": "/images/pokemon/634-01.png",
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
        "image": "/images/pokemon/635-01.png",
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
        "image": "/images/pokemon/636-01.png",
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
        "image": "/images/pokemon/637-01.png",
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
        "image": "/images/pokemon/638-01.png",
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
        "image": "/images/pokemon/639-01.png",
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
        "image": "/images/pokemon/640-01.png",
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
        "image": "/images/pokemon/641-01.png",
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
        "image": "/images/pokemon/642-01.png",
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
        "image": "/images/pokemon/643-01.png",
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
        "image": "/images/pokemon/644-01.png",
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
        "image": "/images/pokemon/645-01.png",
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
        "image": "/images/pokemon/646-01.png",
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
        "image": "/images/pokemon/647-01.png",
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
        "image": "/images/pokemon/648-01.png",
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
        "image": "/images/pokemon/649-01.png",
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
        "image": "/images/pokemon/650-01.png",
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
        "image": "/images/pokemon/651-01.png",
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
        "image": "/images/pokemon/652-01.png",
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
        "image": "/images/pokemon/653-01.png",
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
        "image": "/images/pokemon/654-01.png",
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
        "image": "/images/pokemon/655-01.png",
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
        "image": "/images/pokemon/656-01.png",
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
        "image": "/images/pokemon/657-01.png",
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
        "image": "/images/pokemon/658-01.png",
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
        "image": "/images/pokemon/659-01.png",
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
        "image": "/images/pokemon/660-01.png",
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
        "image": "/images/pokemon/661-01.png",
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
        "image": "/images/pokemon/662-01.png",
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
        "image": "/images/pokemon/663-01.png",
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
        "image": "/images/pokemon/664-01.png",
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
        "image": "/images/pokemon/665-01.png",
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
        "image": "/images/pokemon/666-01.png",
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
        "image": "/images/pokemon/667-01.png",
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
        "image": "/images/pokemon/668-01.png",
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
        "image": "/images/pokemon/669-01.png",
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
        "image": "/images/pokemon/670-01.png",
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
        "image": "/images/pokemon/671-01.png",
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
        "image": "/images/pokemon/672-01.png",
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
        "image": "/images/pokemon/673-01.png",
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
        "image": "/images/pokemon/674-01.png",
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
        "image": "/images/pokemon/675-01.png",
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
        "image": "/images/pokemon/676-01.png",
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
        "image": "/images/pokemon/677-01.png",
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
        "image": "/images/pokemon/678-01.png",
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
        "image": "/images/pokemon/679-01.png",
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
        "image": "/images/pokemon/680-01.png",
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
        "image": "/images/pokemon/681-01.png",
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
        "image": "/images/pokemon/682-01.png",
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
        "image": "/images/pokemon/683-01.png",
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
        "image": "/images/pokemon/684-01.png",
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
        "image": "/images/pokemon/685-01.png",
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
        "image": "/images/pokemon/686-01.png",
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
        "image": "/images/pokemon/687-01.png",
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
        "image": "/images/pokemon/688-01.png",
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
        "image": "/images/pokemon/689-01.png",
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
        "image": "/images/pokemon/690-01.png",
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
        "image": "/images/pokemon/691-01.png",
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
        "image": "/images/pokemon/692-01.png",
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
        "image": "/images/pokemon/693-01.png",
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
        "image": "/images/pokemon/694-01.png",
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
        "image": "/images/pokemon/695-01.png",
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
        "image": "/images/pokemon/696-01.png",
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
        "image": "/images/pokemon/697-01.png",
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
        "image": "/images/pokemon/698-01.png",
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
        "image": "/images/pokemon/699-01.png",
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
        "image": "/images/pokemon/700-01.png",
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
        "image": "/images/pokemon/701-01.png",
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
        "image": "/images/pokemon/702-01.png",
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
        "image": "/images/pokemon/703-01.png",
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
        "image": "/images/pokemon/704-01.png",
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
        "image": "/images/pokemon/705-01.png",
        "types": [
          "드래곤"
        ]
      },
      {
        "formId": "02",
        "name": "히스이 미끄네일",
        "image": "/images/pokemon/705-02.png",
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
        "image": "/images/pokemon/706-01.png",
        "types": [
          "드래곤"
        ]
      },
      {
        "formId": "02",
        "name": "히스이 미끄래곤",
        "image": "/images/pokemon/706-02.png",
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
        "image": "/images/pokemon/707-01.png",
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
        "image": "/images/pokemon/708-01.png",
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
        "image": "/images/pokemon/709-01.png",
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
        "image": "/images/pokemon/710-01.png",
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
        "image": "/images/pokemon/711-01.png",
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
        "image": "/images/pokemon/712-01.png",
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
        "image": "/images/pokemon/713-01.png",
        "types": [
          "얼음"
        ]
      },
      {
        "formId": "02",
        "name": "히스이 크레베이스",
        "image": "/images/pokemon/713-02.png",
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
        "image": "/images/pokemon/714-01.png",
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
        "image": "/images/pokemon/715-01.png",
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
        "image": "/images/pokemon/716-01.png",
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
        "image": "/images/pokemon/717-01.png",
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
        "image": "/images/pokemon/718-01.png",
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
        "image": "/images/pokemon/719-01.png",
        "types": [
          "바위",
          "페어리"
        ]
      },
      {
        "formId": "02",
        "name": "메가디안시",
        "image": "/images/pokemon/719-02.png",
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
        "image": "/images/pokemon/720-01.png",
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
        "image": "/images/pokemon/721-01.png",
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
        "image": "/images/pokemon/722-01.png",
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
        "image": "/images/pokemon/723-01.png",
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
        "image": "/images/pokemon/724-01.png",
        "types": [
          "풀",
          "고스트"
        ]
      },
      {
        "formId": "02",
        "name": "히스이 모크나이퍼",
        "image": "/images/pokemon/724-02.png",
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
        "image": "/images/pokemon/725-01.png",
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
        "image": "/images/pokemon/726-01.png",
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
        "image": "/images/pokemon/727-01.png",
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
        "image": "/images/pokemon/728-01.png",
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
        "image": "/images/pokemon/729-01.png",
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
        "image": "/images/pokemon/730-01.png",
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
        "image": "/images/pokemon/731-01.png",
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
        "image": "/images/pokemon/732-01.png",
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
        "image": "/images/pokemon/733-01.png",
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
        "image": "/images/pokemon/734-01.png",
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
        "image": "/images/pokemon/735-01.png",
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
        "image": "/images/pokemon/736-01.png",
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
        "image": "/images/pokemon/737-01.png",
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
        "image": "/images/pokemon/738-01.png",
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
        "image": "/images/pokemon/739-01.png",
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
        "image": "/images/pokemon/740-01.png",
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
        "image": "/images/pokemon/741-01.png",
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
        "image": "/images/pokemon/742-01.png",
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
        "image": "/images/pokemon/743-01.png",
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
        "image": "/images/pokemon/744-01.png",
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
        "image": "/images/pokemon/745-01.png",
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
        "image": "/images/pokemon/746-01.png",
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
        "image": "/images/pokemon/747-01.png",
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
        "image": "/images/pokemon/748-01.png",
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
        "image": "/images/pokemon/749-01.png",
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
        "image": "/images/pokemon/750-01.png",
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
        "image": "/images/pokemon/751-01.png",
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
        "image": "/images/pokemon/752-01.png",
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
        "image": "/images/pokemon/753-01.png",
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
        "image": "/images/pokemon/754-01.png",
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
        "image": "/images/pokemon/755-01.png",
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
        "image": "/images/pokemon/756-01.png",
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
        "image": "/images/pokemon/757-01.png",
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
        "image": "/images/pokemon/758-01.png",
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
        "image": "/images/pokemon/759-01.png",
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
        "image": "/images/pokemon/760-01.png",
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
        "image": "/images/pokemon/761-01.png",
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
        "image": "/images/pokemon/762-01.png",
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
        "image": "/images/pokemon/763-01.png",
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
        "image": "/images/pokemon/764-01.png",
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
        "image": "/images/pokemon/765-01.png",
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
        "image": "/images/pokemon/766-01.png",
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
        "image": "/images/pokemon/767-01.png",
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
        "image": "/images/pokemon/768-01.png",
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
        "image": "/images/pokemon/769-01.png",
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
        "image": "/images/pokemon/770-01.png",
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
        "image": "/images/pokemon/771-01.png",
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
        "image": "/images/pokemon/772-01.png",
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
        "image": "/images/pokemon/773-01.png",
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
        "image": "/images/pokemon/774-01.png",
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
        "image": "/images/pokemon/775-01.png",
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
        "image": "/images/pokemon/776-01.png",
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
        "image": "/images/pokemon/777-01.png",
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
        "image": "/images/pokemon/778-01.png",
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
        "image": "/images/pokemon/779-01.png",
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
        "image": "/images/pokemon/780-01.png",
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
        "image": "/images/pokemon/781-01.png",
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
        "image": "/images/pokemon/782-01.png",
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
        "image": "/images/pokemon/783-01.png",
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
        "image": "/images/pokemon/784-01.png",
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
        "image": "/images/pokemon/785-01.png",
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
        "image": "/images/pokemon/786-01.png",
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
        "image": "/images/pokemon/787-01.png",
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
        "image": "/images/pokemon/788-01.png",
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
        "image": "/images/pokemon/789-01.png",
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
        "image": "/images/pokemon/790-01.png",
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
        "image": "/images/pokemon/791-01.png",
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
        "image": "/images/pokemon/792-01.png",
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
        "image": "/images/pokemon/793-01.png",
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
        "image": "/images/pokemon/794-01.png",
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
        "image": "/images/pokemon/795-01.png",
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
        "image": "/images/pokemon/796-01.png",
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
        "image": "/images/pokemon/797-01.png",
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
        "image": "/images/pokemon/798-01.png",
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
        "image": "/images/pokemon/799-01.png",
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
        "image": "/images/pokemon/800-01.png",
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
        "image": "/images/pokemon/801-01.png",
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
        "image": "/images/pokemon/802-01.png",
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
        "image": "/images/pokemon/803-01.png",
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
        "image": "/images/pokemon/804-01.png",
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
        "image": "/images/pokemon/805-01.png",
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
        "image": "/images/pokemon/806-01.png",
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
        "image": "/images/pokemon/807-01.png",
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
        "image": "/images/pokemon/808-01.png",
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
        "image": "/images/pokemon/809-01.png",
        "types": [
          "강철"
        ]
      },
      {
        "formId": "02",
        "name": "거다이맥스 멜메탈",
        "image": "/images/pokemon/809-02.png",
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
        "image": "/images/pokemon/810-01.png",
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
        "image": "/images/pokemon/811-01.png",
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
        "image": "/images/pokemon/812-01.png",
        "types": [
          "풀"
        ]
      },
      {
        "formId": "02",
        "name": "거다이맥스 고릴타",
        "image": "/images/pokemon/812-02.png",
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
        "image": "/images/pokemon/813-01.png",
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
        "image": "/images/pokemon/814-01.png",
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
        "image": "/images/pokemon/815-01.png",
        "types": [
          "불꽃"
        ]
      },
      {
        "formId": "02",
        "name": "거다이맥스 에이스번",
        "image": "/images/pokemon/815-02.png",
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
        "image": "/images/pokemon/816-01.png",
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
        "image": "/images/pokemon/817-01.png",
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
        "image": "/images/pokemon/818-01.png",
        "types": [
          "물"
        ]
      },
      {
        "formId": "02",
        "name": "거다이맥스 인텔리레온",
        "image": "/images/pokemon/818-02.png",
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
        "image": "/images/pokemon/819-01.png",
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
        "image": "/images/pokemon/820-01.png",
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
        "image": "/images/pokemon/821-01.png",
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
        "image": "/images/pokemon/822-01.png",
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
        "image": "/images/pokemon/823-01.png",
        "types": [
          "비행",
          "강철"
        ]
      },
      {
        "formId": "02",
        "name": "거다이맥스 아머까오",
        "image": "/images/pokemon/823-02.png",
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
        "image": "/images/pokemon/824-01.png",
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
        "image": "/images/pokemon/825-01.png",
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
        "image": "/images/pokemon/826-01.png",
        "types": [
          "벌레",
          "에스퍼"
        ]
      },
      {
        "formId": "02",
        "name": "거다이맥스 이올브",
        "image": "/images/pokemon/826-02.png",
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
        "image": "/images/pokemon/827-01.png",
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
        "image": "/images/pokemon/828-01.png",
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
        "image": "/images/pokemon/829-01.png",
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
        "image": "/images/pokemon/830-01.png",
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
        "image": "/images/pokemon/831-01.png",
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
        "image": "/images/pokemon/832-01.png",
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
        "image": "/images/pokemon/833-01.png",
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
        "image": "/images/pokemon/834-01.png",
        "types": [
          "물",
          "바위"
        ]
      },
      {
        "formId": "02",
        "name": "거다이맥스 갈가부기",
        "image": "/images/pokemon/834-02.png",
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
        "image": "/images/pokemon/835-01.png",
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
        "image": "/images/pokemon/836-01.png",
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
        "image": "/images/pokemon/837-01.png",
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
        "image": "/images/pokemon/838-01.png",
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
        "image": "/images/pokemon/839-01.png",
        "types": [
          "바위",
          "불꽃"
        ]
      },
      {
        "formId": "02",
        "name": "거다이맥스 석탄산",
        "image": "/images/pokemon/839-02.png",
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
        "image": "/images/pokemon/840-01.png",
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
        "image": "/images/pokemon/841-01.png",
        "types": [
          "풀",
          "드래곤"
        ]
      },
      {
        "formId": "02",
        "name": "거다이맥스 애프룡",
        "image": "/images/pokemon/841-02.png",
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
        "image": "/images/pokemon/842-01.png",
        "types": [
          "풀",
          "드래곤"
        ]
      },
      {
        "formId": "02",
        "name": "거다이맥스 단지래플",
        "image": "/images/pokemon/842-02.png",
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
        "image": "/images/pokemon/843-01.png",
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
        "image": "/images/pokemon/844-01.png",
        "types": [
          "땅"
        ]
      },
      {
        "formId": "02",
        "name": "거다이맥스 사다이사",
        "image": "/images/pokemon/844-02.png",
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
        "image": "/images/pokemon/845-01.png",
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
        "image": "/images/pokemon/846-01.png",
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
        "image": "/images/pokemon/847-01.png",
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
        "image": "/images/pokemon/848-01.png",
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
        "image": "/images/pokemon/849-01.png",
        "types": [
          "전기",
          "독"
        ]
      },
      {
        "formId": "03",
        "name": "거다이맥스 스트린더(하이)",
        "image": "/images/pokemon/849-03.png",
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
        "image": "/images/pokemon/850-01.png",
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
        "image": "/images/pokemon/851-01.png",
        "types": [
          "불꽃",
          "벌레"
        ]
      },
      {
        "formId": "02",
        "name": "거다이맥스 다태우지네",
        "image": "/images/pokemon/851-02.png",
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
        "image": "/images/pokemon/852-01.png",
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
        "image": "/images/pokemon/853-01.png",
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
        "image": "/images/pokemon/854-01.png",
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
        "image": "/images/pokemon/855-01.png",
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
        "image": "/images/pokemon/856-01.png",
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
        "image": "/images/pokemon/857-01.png",
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
        "image": "/images/pokemon/858-01.png",
        "types": [
          "에스퍼",
          "페어리"
        ]
      },
      {
        "formId": "02",
        "name": "거다이맥스 브리무음",
        "image": "/images/pokemon/858-02.png",
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
        "image": "/images/pokemon/859-01.png",
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
        "image": "/images/pokemon/860-01.png",
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
        "image": "/images/pokemon/861-01.png",
        "types": [
          "악",
          "페어리"
        ]
      },
      {
        "formId": "02",
        "name": "거다이맥스 오롱털",
        "image": "/images/pokemon/861-02.png",
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
        "image": "/images/pokemon/862-01.png",
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
        "image": "/images/pokemon/863-01.png",
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
        "image": "/images/pokemon/864-01.png",
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
        "image": "/images/pokemon/865-01.png",
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
        "image": "/images/pokemon/866-01.png",
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
        "image": "/images/pokemon/867-01.png",
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
        "image": "/images/pokemon/868-01.png",
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
        "image": "/images/pokemon/869-01.png",
        "types": [
          "페어리"
        ]
      },
      {
        "formId": "02",
        "name": "거다이맥스 마휘핑",
        "image": "/images/pokemon/869-02.png",
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
        "image": "/images/pokemon/870-01.png",
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
        "image": "/images/pokemon/871-01.png",
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
        "image": "/images/pokemon/872-01.png",
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
        "image": "/images/pokemon/873-01.png",
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
        "image": "/images/pokemon/874-01.png",
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
        "image": "/images/pokemon/875-01.png",
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
        "image": "/images/pokemon/876-01.png",
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
        "image": "/images/pokemon/877-01.png",
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
        "image": "/images/pokemon/878-01.png",
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
        "image": "/images/pokemon/879-01.png",
        "types": [
          "강철"
        ]
      },
      {
        "formId": "02",
        "name": "거다이맥스 대왕끼리동",
        "image": "/images/pokemon/879-02.png",
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
        "image": "/images/pokemon/880-01.png",
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
        "image": "/images/pokemon/881-01.png",
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
        "image": "/images/pokemon/882-01.png",
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
        "image": "/images/pokemon/883-01.png",
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
        "image": "/images/pokemon/884-01.png",
        "types": [
          "강철",
          "드래곤"
        ]
      },
      {
        "formId": "02",
        "name": "거다이맥스 두랄루돈",
        "image": "/images/pokemon/884-02.png",
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
        "image": "/images/pokemon/885-01.png",
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
        "image": "/images/pokemon/886-01.png",
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
        "image": "/images/pokemon/887-01.png",
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
        "image": "/images/pokemon/888-01.png",
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
        "image": "/images/pokemon/889-01.png",
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
        "image": "/images/pokemon/890-01.png",
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
        "image": "/images/pokemon/891-01.png",
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
        "image": "/images/pokemon/892-01.png",
        "types": [
          "격투",
          "악"
        ]
      },
      {
        "formId": "03",
        "name": "거다이맥스 우라오스(일격)",
        "image": "/images/pokemon/892-03.png",
        "types": [
          "격투",
          "악"
        ]
      },
      {
        "formId": "04",
        "name": "거다이맥스 우라오스(연격)",
        "image": "/images/pokemon/892-04.png",
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
        "image": "/images/pokemon/893-01.png",
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
        "image": "/images/pokemon/894-01.png",
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
        "image": "/images/pokemon/895-01.png",
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
        "image": "/images/pokemon/896-01.png",
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
        "image": "/images/pokemon/897-01.png",
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
        "image": "/images/pokemon/898-01.png",
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
        "image": "/images/pokemon/899-01.png",
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
        "image": "/images/pokemon/900-01.png",
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
        "image": "/images/pokemon/901-01.png",
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
        "image": "/images/pokemon/902-01.png",
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
        "image": "/images/pokemon/903-01.png",
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
        "image": "/images/pokemon/904-01.png",
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
        "image": "/images/pokemon/905-01.png",
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
        "image": "/images/pokemon/906-01.png",
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
        "image": "/images/pokemon/907-01.png",
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
        "image": "/images/pokemon/908-01.png",
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
        "image": "/images/pokemon/909-01.png",
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
        "image": "/images/pokemon/910-01.png",
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
        "image": "/images/pokemon/911-01.png",
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
        "image": "/images/pokemon/912-01.png",
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
        "image": "/images/pokemon/913-01.png",
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
        "image": "/images/pokemon/914-01.png",
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
        "image": "/images/pokemon/915-01.png",
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
        "image": "/images/pokemon/916-01.png",
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
        "image": "/images/pokemon/917-01.png",
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
        "image": "/images/pokemon/918-01.png",
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
        "image": "/images/pokemon/919-01.png",
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
        "image": "/images/pokemon/920-01.png",
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
        "image": "/images/pokemon/921-01.png",
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
        "image": "/images/pokemon/922-01.png",
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
        "image": "/images/pokemon/923-01.png",
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
        "image": "/images/pokemon/924-01.png",
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
        "image": "/images/pokemon/925-01.png",
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
        "image": "/images/pokemon/926-01.png",
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
        "image": "/images/pokemon/927-01.png",
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
        "image": "/images/pokemon/928-01.png",
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
        "image": "/images/pokemon/929-01.png",
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
        "image": "/images/pokemon/930-01.png",
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
        "image": "/images/pokemon/931-01.png",
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
        "image": "/images/pokemon/932-01.png",
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
        "image": "/images/pokemon/933-01.png",
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
        "image": "/images/pokemon/934-01.png",
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
        "image": "/images/pokemon/935-01.png",
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
        "image": "/images/pokemon/936-01.png",
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
        "image": "/images/pokemon/937-01.png",
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
        "image": "/images/pokemon/938-01.png",
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
        "image": "/images/pokemon/939-01.png",
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
        "image": "/images/pokemon/940-01.png",
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
        "image": "/images/pokemon/941-01.png",
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
        "image": "/images/pokemon/942-01.png",
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
        "image": "/images/pokemon/943-01.png",
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
        "image": "/images/pokemon/944-01.png",
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
        "image": "/images/pokemon/945-01.png",
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
        "image": "/images/pokemon/946-01.png",
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
        "image": "/images/pokemon/947-01.png",
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
        "image": "/images/pokemon/948-01.png",
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
        "image": "/images/pokemon/949-01.png",
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
        "image": "/images/pokemon/950-01.png",
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
        "image": "/images/pokemon/951-01.png",
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
        "image": "/images/pokemon/952-01.png",
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
        "image": "/images/pokemon/953-01.png",
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
        "image": "/images/pokemon/954-01.png",
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
        "image": "/images/pokemon/955-01.png",
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
        "image": "/images/pokemon/956-01.png",
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
        "image": "/images/pokemon/957-01.png",
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
        "image": "/images/pokemon/958-01.png",
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
        "image": "/images/pokemon/959-01.png",
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
        "image": "/images/pokemon/960-01.png",
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
        "image": "/images/pokemon/961-01.png",
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
        "image": "/images/pokemon/962-01.png",
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
        "image": "/images/pokemon/963-01.png",
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
        "image": "/images/pokemon/964-01.png",
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
        "image": "/images/pokemon/965-01.png",
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
        "image": "/images/pokemon/966-01.png",
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
        "image": "/images/pokemon/967-01.png",
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
        "image": "/images/pokemon/968-01.png",
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
        "image": "/images/pokemon/969-01.png",
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
        "image": "/images/pokemon/970-01.png",
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
        "image": "/images/pokemon/971-01.png",
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
        "image": "/images/pokemon/972-01.png",
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
        "image": "/images/pokemon/973-01.png",
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
        "image": "/images/pokemon/974-01.png",
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
        "image": "/images/pokemon/975-01.png",
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
        "image": "/images/pokemon/976-01.png",
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
        "image": "/images/pokemon/977-01.png",
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
        "image": "/images/pokemon/978-01.png",
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
        "image": "/images/pokemon/979-01.png",
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
        "image": "/images/pokemon/980-01.png",
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
        "image": "/images/pokemon/981-01.png",
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
        "image": "/images/pokemon/982-01.png",
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
        "image": "/images/pokemon/983-01.png",
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
        "image": "/images/pokemon/984-01.png",
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
        "image": "/images/pokemon/985-01.png",
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
        "image": "/images/pokemon/986-01.png",
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
        "image": "/images/pokemon/987-01.png",
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
        "image": "/images/pokemon/988-01.png",
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
        "image": "/images/pokemon/989-01.png",
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
        "image": "/images/pokemon/990-01.png",
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
        "image": "/images/pokemon/991-01.png",
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
        "image": "/images/pokemon/992-01.png",
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
        "image": "/images/pokemon/993-01.png",
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
        "image": "/images/pokemon/994-01.png",
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
        "image": "/images/pokemon/995-01.png",
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
        "image": "/images/pokemon/996-01.png",
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
        "image": "/images/pokemon/997-01.png",
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
        "image": "/images/pokemon/998-01.png",
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
        "image": "/images/pokemon/999-01.png",
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
        "image": "/images/pokemon/1000-01.png",
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
        "image": "/images/pokemon/1001-01.png",
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
        "image": "/images/pokemon/1002-01.png",
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
        "image": "/images/pokemon/1003-01.png",
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
        "image": "/images/pokemon/1004-01.png",
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
        "image": "/images/pokemon/1005-01.png",
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
        "image": "/images/pokemon/1006-01.png",
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
        "image": "/images/pokemon/1007-01.png",
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
        "image": "/images/pokemon/1008-01.png",
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
        "image": "/images/pokemon/1009-01.png",
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
        "image": "/images/pokemon/1010-01.png",
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
        "image": "/images/pokemon/1011-01.png",
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
        "image": "/images/pokemon/1012-01.png",
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
        "image": "/images/pokemon/1013-01.png",
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
        "image": "/images/pokemon/1014-01.png",
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
        "image": "/images/pokemon/1015-01.png",
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
        "image": "/images/pokemon/1016-01.png",
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
        "image": "/images/pokemon/1017-01.png",
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
        "image": "/images/pokemon/1018-01.png",
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
        "image": "/images/pokemon/1019-01.png",
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
        "image": "/images/pokemon/1020-01.png",
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
        "image": "/images/pokemon/1021-01.png",
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
        "image": "/images/pokemon/1022-01.png",
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
        "image": "/images/pokemon/1023-01.png",
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
        "image": "/images/pokemon/1024-01.png",
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
        "image": "/images/pokemon/1025-01.png",
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
