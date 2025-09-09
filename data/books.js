// ============================================
// 그림책 데이터베이스
// 교사용 수업 레시피 데이터
// ============================================

export const booksData = [
    {
        id: 1,
        title: "무지개 물고기",
        author: "마르쿠스 피스터",
        illustrator: "마르쿠스 피스터",
        publisher: "시공주니어",
        year: 1992,
        isbn: "978-89-527-2843-0",
        emoji: "🐠",
        
        // 수업 정보
        grade: ["1-2학년", "3-4학년"],
        subject: ["국어", "도덕"],
        tags: ["우정", "나눔", "자아성찰"],
        duration: "40분",
        
        // 교사용 정보
        teachingTips: {
            preparation: "반짝이 스티커, 물고기 그림 도안 준비",
            keyPoints: [
                "나눔의 가치를 자연스럽게 이해하도록 유도",
                "각자의 특별함을 인정하는 것의 중요성 강조"
            ],
            difficulty: "반짝이는 비늘에만 집중하지 않도록 주의",
            extension: "나만의 무지개 물고기 만들기 활동"
        },
        
        // 수업 활동
        activities: {
            before: {
                storytelling: "반짝이는 비늘을 가진 물고기가 있었어요. 친구들이 부러워하지만 혼자인 이 물고기는 어떤 고민을 하고 있을까요?",
                prediction: [
                    "표지의 반짝이는 물고기를 보며 이야기 예상하기",
                    "제목의 '무지개'가 의미하는 것 생각해보기",
                    "물고기의 표정에서 감정 읽어내기"
                ]
            },
            during: {
                factCheck: [
                    "무지개 물고기의 비늘은 어떤 특징이 있나요?",
                    "다른 물고기들은 왜 무지개 물고기를 피하게 되었나요?",
                    "문어 할머니는 무지개 물고기에게 어떤 조언을 했나요?"
                ],
                interaction: [
                    "만약 여러분이 무지개 물고기라면 어떤 선택을 했을까요?",
                    "친구들과 나누었던 특별한 경험이 있나요?",
                    "혼자 특별한 것을 가지고 있을 때와 함께 나눌 때의 기분은 어떻게 다를까요?"
                ]
            },
            after: {
                reflection: [
                    "진정한 아름다움은 무엇일까요?",
                    "나눔이 우리 삶에 가져다주는 변화는 무엇인가요?",
                    "내가 가진 것 중 친구들과 나눌 수 있는 것은 무엇이 있을까요?"
                ],
                worksheetUrl: "https://forms.gle/example1"
            }
        }
    },
    {
        id: 2,
        title: "괜찮아",
        author: "최숙희",
        illustrator: "최숙희",
        publisher: "웅진주니어",
        year: 2005,
        emoji: "🤗",
        
        grade: ["1-2학년"],
        subject: ["국어", "도덕"],
        tags: ["위로", "공감", "성장"],
        duration: "30분",
        
        teachingTips: {
            preparation: "감정 카드, 위로의 말 카드 준비",
            keyPoints: [
                "실수를 두려워하지 않는 마음가짐",
                "서로를 격려하는 교실 문화 조성"
            ],
            difficulty: "학생들이 자신의 실수 경험을 나누기 어려워할 수 있음",
            extension: "'괜찮아' 캠페인 - 일주일간 친구 격려하기"
        },
        
        activities: {
            before: {
                storytelling: "넘어진 아이, 실수한 아이, 혼자인 아이... 모두에게 필요한 한 마디가 있다면 무엇일까요?",
                prediction: [
                    "표지 속 아이의 표정과 자세 관찰하기",
                    "'괜찮아'라는 말이 주는 느낌 나누기",
                    "누군가에게 위로받았던 경험 떠올리기"
                ]
            },
            during: {
                factCheck: [
                    "이야기 속에 등장하는 아이들은 어떤 상황에 있나요?",
                    "어른들은 아이들에게 어떤 말을 해주나요?",
                    "아이들의 표정은 어떻게 변화하나요?"
                ],
                interaction: [
                    "'괜찮아'라는 말을 들었을 때 어떤 기분이 드나요?",
                    "친구가 힘들어할 때 어떻게 위로해주나요?",
                    "실수했을 때 자신에게 해주고 싶은 말은?"
                ]
            },
            after: {
                reflection: [
                    "실수와 실패를 대하는 우리의 자세는 어떠해야 할까요?",
                    "나 자신을 격려하는 방법은 무엇이 있을까요?",
                    "주변 사람들에게 힘이 되는 말 한마디를 전한다면?"
                ],
                worksheetUrl: "https://forms.gle/example2"
            }
        }
    },
    {
        id: 3,
        title: "알사탕",
        author: "백희나",
        illustrator: "백희나",
        publisher: "책읽는곰",
        year: 2017,
        emoji: "🍬",
        
        grade: ["3-4학년"],
        subject: ["국어", "도덕"],
        tags: ["소통", "이해", "마법", "가족"],
        duration: "40분",
        
        teachingTips: {
            preparation: "사탕 모형, 마음 말풍선 카드",
            keyPoints: [
                "겉모습과 속마음의 차이 이해하기",
                "진정한 소통의 의미 탐구"
            ],
            difficulty: "가족 관계가 민감한 학생들을 배려",
            extension: "우리 반 마음 우체통 만들기"
        },
        
        activities: {
            before: {
                storytelling: "만약 다른 사람의 마음을 들을 수 있는 마법 사탕이 있다면, 어떤 일이 일어날까요?",
                prediction: [
                    "제목 '알사탕'의 의미 추측하기",
                    "표지 속 구슬들의 정체 상상하기",
                    "마음을 읽을 수 있다면 좋은 점과 나쁜 점 생각하기"
                ]
            },
            during: {
                factCheck: [
                    "동동이는 어디서 알사탕을 얻게 되었나요?",
                    "알사탕을 먹으면 어떤 일이 일어나나요?",
                    "동동이가 들은 마음의 소리들은 무엇이었나요?"
                ],
                interaction: [
                    "아빠, 엄마, 강아지의 진짜 마음을 알게 된 동동이의 기분은?",
                    "내 마음을 다른 사람이 알게 된다면 어떨까요?",
                    "말하지 않아도 알아주었으면 하는 내 마음은?"
                ]
            },
            after: {
                reflection: [
                    "겉으로 보이는 모습과 속마음이 다를 때가 있나요?",
                    "진정한 소통을 위해 필요한 것은 무엇일까요?",
                    "오늘 가족이나 친구에게 전하고 싶은 마음은?"
                ],
                worksheetUrl: "https://forms.gle/example3"
            }
        }
    },
    {
        id: 4,
        title: "치킨 마스크",
        author: "우쓰기 미호",
        illustrator: "우쓰기 미호",
        publisher: "책읽는곰",
        year: 2019,
        emoji: "🐔",
        
        grade: ["1-2학년", "3-4학년"],
        subject: ["국어", "도덕", "체육"],
        tags: ["용기", "자신감", "변화"],
        duration: "35분",
        
        teachingTips: {
            preparation: "다양한 가면 준비, 용기 배지 만들기 재료",
            keyPoints: [
                "내면의 용기 발견하기",
                "자신감의 원천 찾기"
            ],
            difficulty: "소극적인 학생들의 참여 유도 필요",
            extension: "나만의 용기 마스크 디자인하기"
        },
        
        activities: {
            before: {
                storytelling: "소심한 아이가 특별한 가면을 쓰면 어떤 일이 일어날까요? 가면이 주는 힘은 무엇일까요?",
                prediction: [
                    "표지의 닭 가면이 주는 느낌 이야기하기",
                    "가면을 쓰면 달라지는 것들 상상하기",
                    "나에게도 필요한 '마스크'가 있을까?"
                ]
            },
            during: {
                factCheck: [
                    "주인공은 왜 치킨 마스크를 쓰게 되었나요?",
                    "마스크를 쓴 후 어떤 변화가 있었나요?",
                    "결국 마스크 없이도 할 수 있게 된 것은?"
                ],
                interaction: [
                    "용기가 필요했던 순간이 있었나요?",
                    "나를 더 강하게 만들어주는 것은 무엇인가요?",
                    "진짜 용기란 무엇일까요?"
                ]
            },
            after: {
                reflection: [
                    "외부의 도움 없이도 용기를 낼 수 있는 방법은?",
                    "나의 숨겨진 능력은 무엇일까요?",
                    "자신감을 키우는 나만의 방법 만들기"
                ],
                worksheetUrl: "https://forms.gle/example4"
            }
        }
    },
    {
        id: 5,
        title: "책먹는 여우",
        author: "프란치스카 비어만",
        illustrator: "프란치스카 비어만",
        publisher: "주니어김영사",
        year: 2001,
        emoji: "🦊",
        
        grade: ["3-4학년", "5-6학년"],
        subject: ["국어", "독서"],
        tags: ["독서", "창의성", "도전"],
        duration: "45분",
        
        teachingTips: {
            preparation: "다양한 장르의 책 표지, 이야기 카드",
            keyPoints: [
                "독서의 즐거움과 가치 발견",
                "창작의 어려움과 보람 이해"
            ],
            difficulty: "독서 경험이 부족한 학생들을 위한 배려 필요",
            extension: "우리 반 창작 도서 만들기 프로젝트"
        },
        
        activities: {
            before: {
                storytelling: "책을 정말로 '먹는' 여우가 있다면? 그 여우에게는 어떤 일이 일어날까요?",
                prediction: [
                    "제목의 '책먹는'이 의미하는 것 추측하기",
                    "여우가 책을 먹는 이유 상상하기",
                    "책을 먹으면 어떤 일이 일어날까?"
                ]
            },
            during: {
                factCheck: [
                    "여우는 어떻게 책을 먹게 되었나요?",
                    "책을 먹은 여우에게 일어난 변화는?",
                    "여우가 직접 쓴 이야기는 어땠나요?"
                ],
                interaction: [
                    "책을 '먹는다'는 것의 진짜 의미는?",
                    "내가 가장 '맛있게' 읽은 책은?",
                    "나도 이야기를 만들고 싶어진 적이 있나요?"
                ]
            },
            after: {
                reflection: [
                    "독서가 우리에게 주는 것은 무엇일까요?",
                    "읽기와 쓰기의 관계는?",
                    "나만의 이야기를 만든다면?"
                ],
                worksheetUrl: "https://forms.gle/example5"
            }
        }
    },
    {
        id: 6,
        title: "나는 나의 주인",
        author: "채인선",
        illustrator: "안은진",
        publisher: "토토북",
        year: 2020,
        emoji: "👑",
        
        grade: ["5-6학년"],
        subject: ["도덕", "국어"],
        tags: ["자존감", "정체성", "용기"],
        duration: "45분",
        
        teachingTips: {
            preparation: "자아 탐색 워크시트, 강점 카드",
            keyPoints: [
                "자기 결정권의 중요성",
                "타인과의 비교가 아닌 자기 기준 세우기"
            ],
            difficulty: "사춘기 학생들의 민감한 감정 배려",
            extension: "나의 인생 로드맵 그리기"
        },
        
        activities: {
            before: {
                storytelling: "남들이 정해준 길이 아닌, 내가 선택한 나만의 길을 간다는 것은 어떤 의미일까요?",
                prediction: [
                    "'나의 주인'이 된다는 것의 의미",
                    "표지 속 인물의 당당한 표정 관찰하기",
                    "스스로 결정한다는 것의 중요성"
                ]
            },
            during: {
                factCheck: [
                    "주인공은 어떤 선택의 순간들을 맞이하나요?",
                    "주변 사람들의 반응은 어떠했나요?",
                    "주인공이 깨달은 것은 무엇인가요?"
                ],
                interaction: [
                    "스스로 결정했을 때와 남이 정해줬을 때의 차이는?",
                    "나만의 개성과 장점은 무엇인가요?",
                    "다른 사람과 다르다는 것이 주는 의미는?"
                ]
            },
            after: {
                reflection: [
                    "진정한 나 자신이 된다는 것은?",
                    "남과 비교하지 않고 나를 사랑하는 방법은?",
                    "내 삶의 주인공으로 살아가기 위해 필요한 것은?"
                ],
                worksheetUrl: "https://forms.gle/example6"
            }
        }
    },
    {
        id: 7,
        title: "똥은 참 대단해!",
        author: "후지타 노리코",
        illustrator: "후지타 노리코",
        publisher: "아이세움",
        year: 2018,
        emoji: "💩",
        
        grade: ["1-2학년", "3-4학년"],
        subject: ["과학", "환경"],
        tags: ["과학", "유머", "자연", "환경"],
        duration: "40분",
        
        teachingTips: {
            preparation: "동물 똥 사진 자료, 순환 과정 차트",
            keyPoints: [
                "자연 순환의 중요성 이해",
                "선입견 없이 과학적 사실 받아들이기"
            ],
            difficulty: "주제에 대한 거부감을 유머로 극복",
            extension: "생태계 순환 보드게임 만들기"
        },
        
        activities: {
            before: {
                storytelling: "모든 동물이 누는 똥! 그런데 똥이 왜 대단할까요? 똥에는 어떤 비밀이 숨어있을까요?",
                prediction: [
                    "표지를 보고 등장할 동물들 예상하기",
                    "'대단하다'는 표현의 의미 생각하기",
                    "똥이 필요한 이유 추측해보기"
                ]
            },
            during: {
                factCheck: [
                    "동물마다 똥의 모양이 다른 이유는?",
                    "똥이 자연에서 하는 역할은 무엇인가요?",
                    "어떤 동물의 똥이 가장 특별했나요?"
                ],
                interaction: [
                    "가장 신기했던 동물의 똥은?",
                    "똥이 없다면 지구는 어떻게 될까요?",
                    "동물들의 똥으로 알 수 있는 정보는?"
                ]
            },
            after: {
                reflection: [
                    "자연의 순환에서 똥의 역할은 무엇일까요?",
                    "우리가 버리는 것들도 쓸모가 있을까요?",
                    "환경을 위해 우리가 할 수 있는 일은?"
                ],
                worksheetUrl: "https://forms.gle/example7"
            }
        }
    },
    {
        id: 8,
        title: "고맙습니다, 선생님",
        author: "패트리샤 폴라코",
        illustrator: "패트리샤 폴라코",
        publisher: "아이세움",
        year: 2012,
        emoji: "👩‍🏫",
        
        grade: ["3-4학년", "5-6학년"],
        subject: ["국어", "도덕"],
        tags: ["감사", "성장", "멘토", "교육"],
        duration: "45분",
        
        teachingTips: {
            preparation: "감사 편지지, 교사의 날 관련 자료",
            keyPoints: [
                "어려움을 극복하는 과정의 가치",
                "도움을 주고받는 관계의 소중함"
            ],
            difficulty: "학습 부진 학생들의 자존감 고려",
            extension: "감사한 사람에게 편지 쓰기"
        },
        
        activities: {
            before: {
                storytelling: "읽기를 어려워하는 한 아이가 있었습니다. 이 아이를 변화시킨 특별한 선생님의 이야기를 들어볼까요?",
                prediction: [
                    "제목에서 느껴지는 감정 나누기",
                    "나에게 고마운 선생님 떠올리기",
                    "선생님이 학생에게 줄 수 있는 가장 큰 선물은?"
                ]
            },
            during: {
                factCheck: [
                    "주인공은 어떤 어려움을 겪고 있었나요?",
                    "선생님은 어떤 방법으로 도움을 주었나요?",
                    "주인공에게 일어난 변화는 무엇인가요?"
                ],
                interaction: [
                    "어려움을 극복하는데 도움을 준 사람이 있나요?",
                    "누군가를 진심으로 이해한다는 것은?",
                    "포기하지 않고 계속 도전하는 힘은 어디서 올까요?"
                ]
            },
            after: {
                reflection: [
                    "진정한 가르침이란 무엇일까요?",
                    "감사의 마음을 표현하는 방법은?",
                    "나도 누군가에게 힘이 되어줄 수 있을까요?"
                ],
                worksheetUrl: "https://forms.gle/example8"
            }
        }
    },
    {
        id: 9,
        title: "내 이름은 자가주",
        author: "르네 고시니",
        illustrator: "장자크 상페",
        publisher: "문학동네",
        year: 2021,
        emoji: "👦",
        
        grade: ["3-4학년", "5-6학년"],
        subject: ["국어", "창체"],
        tags: ["모험", "우정", "상상력"],
        duration: "40분",
        
        teachingTips: {
            preparation: "일상 모험 카드, 상상력 게임 준비",
            keyPoints: [
                "일상 속 특별함 발견하기",
                "친구 관계의 다양한 모습 이해"
            ],
            difficulty: "프랑스 문화적 배경 설명 필요",
            extension: "우리 반 일상 모험 일기 쓰기"
        },
        
        activities: {
            before: {
                storytelling: "평범한 일상도 특별한 모험이 될 수 있을까요? 자가주의 눈으로 본 세상은 어떤 모습일까요?",
                prediction: [
                    "제목의 주인공 이름이 주는 느낌",
                    "표지에서 느껴지는 이야기 분위기",
                    "나의 일상 속 특별한 순간들"
                ]
            },
            during: {
                factCheck: [
                    "자가주는 어떤 성격의 아이인가요?",
                    "자가주와 친구들 사이에 일어난 사건들은?",
                    "어른들은 자가주를 어떻게 바라보나요?"
                ],
                interaction: [
                    "자가주처럼 상상력이 풍부했던 순간은?",
                    "일상을 특별하게 만드는 방법은?",
                    "친구들과의 추억 중 가장 기억에 남는 것은?"
                ]
            },
            after: {
                reflection: [
                    "어린 시절의 상상력이 주는 의미는?",
                    "평범한 일상을 특별하게 만드는 것은?",
                    "나만의 이야기를 만든다면?"
                ],
                worksheetUrl: "https://forms.gle/example9"
            }
        }
    },
    {
        id: 10,
        title: "까만 아기 양",
        author: "엘리자베스 쇼",
        illustrator: "엘리자베스 쇼",
        publisher: "보림",
        year: 2019,
        emoji: "🐑",
        
        grade: ["1-2학년", "3-4학년"],
        subject: ["도덕", "국어"],
        tags: ["다양성", "포용", "자아정체성"],
        duration: "35분",
        
        teachingTips: {
            preparation: "다양성 카드, 양 인형 또는 그림",
            keyPoints: [
                "차이를 인정하고 존중하기",
                "자신만의 특별함 발견하기"
            ],
            difficulty: "외모나 특성으로 놀림받은 경험이 있는 학생 배려",
            extension: "우리 반 다양성 나무 만들기"
        },
        
        activities: {
            before: {
                storytelling: "하얀 양들 사이에 태어난 까만 아기 양. 다르다는 것은 약점일까요, 아니면 특별함일까요?",
                prediction: [
                    "표지의 까만 양이 느끼는 감정 추측하기",
                    "'다르다'는 것의 의미 생각하기",
                    "나와 다른 친구를 대하는 방법"
                ]
            },
            during: {
                factCheck: [
                    "까만 아기 양은 어떤 일을 겪었나요?",
                    "다른 양들의 반응은 어떠했나요?",
                    "까만 양이 특별해진 이유는?"
                ],
                interaction: [
                    "다르다고 느꼈던 순간이 있나요?",
                    "차이를 인정하고 존중하는 방법은?",
                    "나만의 특별함은 무엇인가요?"
                ]
            },
            after: {
                reflection: [
                    "다양성이 우리 사회에 주는 의미는?",
                    "서로 다름을 인정하는 것이 왜 중요할까요?",
                    "나와 다른 사람을 이해하는 방법은?"
                ],
                worksheetUrl: "https://forms.gle/example10"
            }
        }
    }
];

// 데이터 검증 함수
export function validateBookData(book) {
    const required = ['id', 'title', 'author', 'activities'];
    return required.every(field => book.hasOwnProperty(field));
}

// 데이터 필터링 헬퍼
export function filterBooksByGrade(books, grade) {
    return books.filter(book => 
        book.grade && book.grade.includes(grade)
    );
}

export function filterBooksByTag(books, tag) {
    return books.filter(book => 
        book.tags && book.tags.includes(tag)
    );
}

export function filterBooksBySubject(books, subject) {
    return books.filter(book => 
        book.subject && book.subject.includes(subject)
    );
}