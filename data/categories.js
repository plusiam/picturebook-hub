// ============================================
// 카테고리 및 분류 체계
// ============================================

export const categories = {
    // 학년별 분류
    grades: [
        { id: 'g1-2', name: '1-2학년', description: '저학년' },
        { id: 'g3-4', name: '3-4학년', description: '중학년' },
        { id: 'g5-6', name: '5-6학년', description: '고학년' }
    ],
    
    // 교과목 연계
    subjects: [
        { id: 'korean', name: '국어', icon: '📖' },
        { id: 'ethics', name: '도덕', icon: '🤝' },
        { id: 'science', name: '과학', icon: '🔬' },
        { id: 'social', name: '사회', icon: '🌍' },
        { id: 'art', name: '미술', icon: '🎨' },
        { id: 'pe', name: '체육', icon: '⚽' },
        { id: 'music', name: '음악', icon: '🎵' },
        { id: 'reading', name: '독서', icon: '📚' },
        { id: 'environment', name: '환경', icon: '🌱' },
        { id: 'creative', name: '창체', icon: '💡' }
    ],
    
    // 주제 태그
    themes: [
        // 정서 발달
        { category: '정서', tags: ['우정', '사랑', '가족', '위로', '공감', '감사'] },
        
        // 인성 교육
        { category: '인성', tags: ['나눔', '배려', '정직', '책임', '협동', '존중'] },
        
        // 자아 성장
        { category: '성장', tags: ['자존감', '정체성', '용기', '도전', '자신감', '꿈'] },
        
        // 사회성
        { category: '사회', tags: ['소통', '이해', '다양성', '포용', '평등', '문화'] },
        
        // 창의성
        { category: '창의', tags: ['상상력', '창의성', '모험', '호기심', '탐구', '발견'] },
        
        // 학습
        { category: '학습', tags: ['독서', '지식', '과학', '역사', '예술', '수학'] },
        
        // 환경/자연
        { category: '환경', tags: ['자연', '동물', '환경', '생태', '계절', '지구'] },
        
        // 생활
        { category: '생활', tags: ['습관', '건강', '안전', '예절', '규칙', '일상'] }
    ],
    
    // 수업 시간별 분류
    durations: [
        { id: 'd30', name: '30분', description: '짧은 수업' },
        { id: 'd40', name: '40분', description: '정규 수업' },
        { id: 'd45', name: '45분', description: '정규 수업' },
        { id: 'd60', name: '60분+', description: '블록 수업' }
    ],
    
    // 활동 유형
    activityTypes: [
        { id: 'discussion', name: '토론형', icon: '💬' },
        { id: 'creative', name: '창작형', icon: '🎨' },
        { id: 'activity', name: '활동형', icon: '🏃' },
        { id: 'writing', name: '글쓰기형', icon: '✍️' },
        { id: 'research', name: '탐구형', icon: '🔍' },
        { id: 'presentation', name: '발표형', icon: '🎤' }
    ],
    
    // 난이도
    difficulties: [
        { id: 'easy', name: '쉬움', color: '#48bb78' },
        { id: 'medium', name: '보통', color: '#f6ad55' },
        { id: 'hard', name: '어려움', color: '#f56565' }
    ]
};

// 태그 색상 매핑
export const tagColors = {
    '우정': '#667eea',
    '나눔': '#48bb78',
    '자아성찰': '#ed8936',
    '위로': '#f687b3',
    '공감': '#9f7aea',
    '성장': '#38b2ac',
    '소통': '#4299e1',
    '이해': '#0bc5ea',
    '마법': '#d69e2e',
    '가족': '#e53e3e',
    '용기': '#dd6b20',
    '자신감': '#38a169',
    '변화': '#3182ce',
    '독서': '#805ad5',
    '창의성': '#d69e2e',
    '도전': '#e53e3e',
    '자존감': '#319795',
    '정체성': '#5a67d8',
    '과학': '#48bb78',
    '유머': '#f6ad55',
    '자연': '#68d391',
    '환경': '#4fd1c5',
    '감사': '#fc8181',
    '멘토': '#b794f4',
    '교육': '#667eea',
    '모험': '#f6ad55',
    '상상력': '#fbd38d',
    '다양성': '#c6f6d5',
    '포용': '#fed7d7',
    '자아정체성': '#bee3f8'
};

// 학년별 추천 도서 ID
export const gradeRecommendations = {
    '1-2학년': [1, 2, 4, 7, 10],
    '3-4학년': [1, 3, 4, 5, 7, 8, 9, 10],
    '5-6학년': [5, 6, 8, 9]
};

// 주제별 추천 도서 ID
export const themeRecommendations = {
    '정서발달': [1, 2, 3, 8],
    '인성교육': [1, 2, 10],
    '자아성장': [4, 6],
    '창의력': [5, 9],
    '과학탐구': [7]
};