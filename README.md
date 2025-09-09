# 📚 그림책 수업 레시피 (Picturebook Teaching Recipes)

> 교사를 위한 체계적인 그림책 수업 설계 플랫폼

## 🎯 프로젝트 소개

이 플랫폼은 **교사들이 그림책을 활용한 수업을 체계적으로 설계**할 수 있도록 돕는 리소스 허브입니다.
각 그림책마다 읽기 전·중·후 활동을 단계별로 제공하며, 즉시 수업에 활용 가능한 질문과 활동을 제시합니다.

## ✨ 주요 기능

### 교사를 위한 기능
- 📖 **체계적인 수업 구성**: 읽기 전/중/후 3단계 활동
- 🎯 **학년별 맞춤 분류**: 초등 1-6학년 수준별 구성  
- 💡 **즉시 활용 가능한 질문**: 사실확인, 상호교류, 성찰 질문
- 📝 **수업 지도안 다운로드**: PDF/인쇄용 지도안 제공
- 🔗 **웹 학습지 연동**: Google Forms 등 외부 도구 연결
- 🏷️ **주제별 검색**: 다양한 주제 태그로 빠른 검색
- 📊 **수업 시간 가이드**: 각 활동별 예상 소요 시간

## 📂 프로젝트 구조

```
picturebook-hub/
├── index.html           # 메인 페이지
├── css/
│   └── style.css       # 스타일시트
├── js/
│   ├── app.js          # 메인 애플리케이션 로직
│   ├── render.js       # UI 렌더링 함수
│   └── utils.js        # 유틸리티 함수
├── data/
│   ├── books.js        # 그림책 데이터베이스
│   └── categories.js   # 카테고리 및 태그 정의
└── assets/
    └── covers/         # 그림책 표지 이미지 (선택사항)
```

## 🚀 사용 방법

### 온라인 접속
- https://plusiam.github.io/picturebook-hub

### 로컬 실행
```bash
# 저장소 클론
git clone https://github.com/plusiam/picturebook-hub.git

# 디렉토리 이동
cd picturebook-hub

# 로컬 서버 실행 (Python)
python -m http.server 8000
# 또는 (Node.js)
npx http-server

# 브라우저에서 열기
open http://localhost:8000
```

## 📝 그림책 추가 방법

### 1. Fork & Clone
```bash
git fork https://github.com/plusiam/picturebook-hub
git clone https://github.com/[your-username]/picturebook-hub
```

### 2. 그림책 데이터 추가
`data/books.js` 파일에 새로운 그림책 정보를 추가:

```javascript
{
    id: 11,  // 고유 ID
    title: "그림책 제목",
    author: "작가명",
    illustrator: "그림작가명",
    publisher: "출판사",
    year: 2024,
    isbn: "978-89-XXXX-XXXX-X",
    
    // 수업 정보
    grade: ["3-4학년"],
    subject: ["국어", "도덕"],
    tags: ["우정", "성장", "자아정체성"],
    duration: "40분",
    
    // 교사용 정보
    teachingTips: {
        preparation: "준비물 및 사전 준비사항",
        keyPoints: ["핵심 교육 포인트"],
        difficulty: "수업 진행 시 주의사항",
        extension: "심화 활동 제안"
    },
    
    // 수업 활동
    activities: {
        before: { /* 읽기 전 활동 */ },
        during: { /* 읽기 중 활동 */ },
        after: { /* 읽기 후 활동 */ }
    }
}
```

### 3. Pull Request
변경사항을 커밋하고 Pull Request를 보내주세요.

## 👥 기여하기

### 기여 방법
1. **그림책 추가**: 새로운 그림책과 수업 레시피 추가
2. **수업 개선**: 기존 수업 활동 개선 및 보완
3. **버그 수정**: 오류 발견 및 수정
4. **기능 제안**: 새로운 기능 아이디어 제안

### 기여 가이드라인
- 교사 관점에서 실제 활용 가능한 내용으로 작성
- 학년별 수준을 고려한 활동 구성
- 명확하고 구체적인 질문과 활동 제시
- 저작권을 준수하는 콘텐츠만 포함

## 📄 라이선스

MIT License - 자유롭게 사용, 수정, 배포 가능합니다.

## 💬 문의 및 피드백

- GitHub Issues: [버그 신고 및 기능 제안](https://github.com/plusiam/picturebook-hub/issues)
- Discussions: [아이디어 공유 및 토론](https://github.com/plusiam/picturebook-hub/discussions)

## 🙏 감사의 말

이 프로젝트는 그림책을 사랑하는 교사들의 경험과 노하우를 바탕으로 만들어졌습니다.
더 나은 교육을 위해 기여해주신 모든 선생님들께 감사드립니다.

---

**Made with ❤️ by Teachers, for Teachers**