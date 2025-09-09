// ============================================
// 렌더링 함수 모듈
// ============================================

// 그림책 카드 렌더링
export function renderBooks(books) {
    const grid = document.getElementById('booksGrid');
    
    if (!grid) return;
    
    if (books.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; background: white; border-radius: 15px;">
                <div style="font-size: 4rem; margin-bottom: 20px;">📚</div>
                <h3 style="color: #333; margin-bottom: 10px;">검색 결과가 없습니다</h3>
                <p style="color: #666;">다른 검색어나 필터를 시도해보세요</p>
            </div>
        `;
        return;
    }
    
    grid.innerHTML = books.map(book => createBookCard(book)).join('');
}

// 개별 그림책 카드 생성
function createBookCard(book) {
    const gradeText = book.grade ? book.grade.join(', ') : '전학년';
    const subjectText = book.subject ? book.subject.join(', ') : '';
    
    return `
        <div class="book-card fade-in">
            <div class="book-cover" onclick="openModal(${book.id})">
                <div class="book-cover-emoji">${book.emoji || '📖'}</div>
            </div>
            <div class="book-info">
                <div class="book-title">${book.title}</div>
                <div class="book-author">${book.author}</div>
                
                <div class="book-meta">
                    <span class="book-meta-item">
                        <span>📚</span> ${gradeText}
                    </span>
                    ${subjectText ? `
                        <span class="book-meta-item">
                            <span>📝</span> ${subjectText}
                        </span>
                    ` : ''}
                    ${book.duration ? `
                        <span class="book-meta-item">
                            <span>⏱️</span> ${book.duration}
                        </span>
                    ` : ''}
                </div>
                
                <div class="book-tags">
                    ${book.tags.map(tag => `<span class="tag">#${tag}</span>`).join('')}
                </div>
                
                <div class="book-actions">
                    <button class="action-btn" onclick="openModal(${book.id})">
                        <span>📖</span> 수업안
                    </button>
                    ${book.activities?.after?.worksheetUrl ? `
                        <button class="action-btn" onclick="openWorksheet('${book.activities.after.worksheetUrl}')">
                            <span>📝</span> 학습지
                        </button>
                    ` : ''}
                    <button class="action-btn" onclick="shareBook(${book.id})">
                        <span>🔗</span> 공유
                    </button>
                </div>
            </div>
        </div>
    `;
}

// 필터 태그 렌더링
export function renderFilterTags(books, categories) {
    const container = document.getElementById('filterTags');
    if (!container) return;
    
    // 태그 수집
    const allTags = new Set();
    const allGrades = new Set();
    const allSubjects = new Set();
    
    books.forEach(book => {
        book.tags.forEach(tag => allTags.add(tag));
        book.grade?.forEach(grade => allGrades.add(grade));
        book.subject?.forEach(subject => allSubjects.add(subject));
    });
    
    let html = '';
    
    // 학년 필터
    if (allGrades.size > 0) {
        html += `
            <div class="filter-section">
                <span class="filter-label">📚 학년별</span>
                <div class="filter-tags">
                    ${Array.from(allGrades).sort().map(grade => 
                        `<span class="filter-tag" data-type="grade" data-value="${grade}">${grade}</span>`
                    ).join('')}
                </div>
            </div>
        `;
    }
    
    // 과목 필터
    if (allSubjects.size > 0) {
        html += `
            <div class="filter-section">
                <span class="filter-label">📝 과목별</span>
                <div class="filter-tags">
                    ${Array.from(allSubjects).sort().map(subject => 
                        `<span class="filter-tag" data-type="subject" data-value="${subject}">${subject}</span>`
                    ).join('')}
                </div>
            </div>
        `;
    }
    
    // 주제 필터
    html += `
        <div class="filter-section">
            <span class="filter-label">🏷️ 주제별</span>
            <div class="filter-tags">
                ${Array.from(allTags).sort().map(tag => 
                    `<span class="filter-tag" data-type="tag" data-value="${tag}">#${tag}</span>`
                ).join('')}
            </div>
        </div>
    `;
    
    container.innerHTML = html;
}

// 통계 업데이트
export function updateStats(books) {
    // 그림책 수
    const totalBooksEl = document.getElementById('totalBooks');
    if (totalBooksEl) {
        totalBooksEl.textContent = books.length;
    }
    
    // 주제 수
    const allTags = new Set();
    books.forEach(book => {
        book.tags.forEach(tag => allTags.add(tag));
    });
    
    const totalTagsEl = document.getElementById('totalTags');
    if (totalTagsEl) {
        totalTagsEl.textContent = allTags.size;
    }
    
    // 총 활동 수
    const totalActivities = books.reduce((sum, book) => {
        return sum + 6; // 각 책당 평균 6개 활동 (읽기 전 2, 중 2, 후 2)
    }, 0);
    
    const totalActivitiesEl = document.getElementById('totalActivities');
    if (totalActivitiesEl) {
        totalActivitiesEl.textContent = totalActivities;
    }
    
    // 수업 시간
    const totalHours = books.reduce((sum, book) => {
        const duration = parseInt(book.duration) || 40;
        return sum + duration;
    }, 0);
    
    const totalTimeEl = document.getElementById('totalTime');
    if (totalTimeEl) {
        totalTimeEl.textContent = Math.round(totalHours / 60) + '시간';
    }
}

// 모달 렌더링
export function renderModal(book) {
    const modalTitle = document.getElementById('modalTitle');
    const modalMeta = document.getElementById('modalMeta');
    const modalBody = document.getElementById('modalBody');
    
    if (!modalTitle || !modalBody) return;
    
    // 헤더 정보
    modalTitle.textContent = book.title;
    
    if (modalMeta) {
        modalMeta.innerHTML = `
            <span>✍️ ${book.author}</span>
            ${book.illustrator ? `<span>🎨 ${book.illustrator}</span>` : ''}
            ${book.publisher ? `<span>📚 ${book.publisher}</span>` : ''}
            <span>📖 ${book.grade ? book.grade.join(', ') : '전학년'}</span>
            ${book.duration ? `<span>⏱️ ${book.duration}</span>` : ''}
        `;
    }
    
    // 바디 내용
    let bodyHTML = '';
    
    // 교사용 팁
    if (book.teachingTips) {
        bodyHTML += `
            <div class="teacher-tips">
                <h3>💡 교사용 지도 팁</h3>
                ${book.teachingTips.preparation ? `
                    <div class="tip-section">
                        <strong>준비사항:</strong> ${book.teachingTips.preparation}
                    </div>
                ` : ''}
                ${book.teachingTips.keyPoints ? `
                    <div class="tip-section">
                        <strong>핵심 포인트:</strong>
                        <ul>
                            ${book.teachingTips.keyPoints.map(point => `<li>${point}</li>`).join('')}
                        </ul>
                    </div>
                ` : ''}
                ${book.teachingTips.difficulty ? `
                    <div class="tip-section">
                        <strong>주의사항:</strong> ${book.teachingTips.difficulty}
                    </div>
                ` : ''}
            </div>
        `;
    }
    
    // 읽기 전 활동
    bodyHTML += `
        <div class="activity-section">
            <div class="activity-title">
                <div class="activity-icon">🎯</div>
                읽기 전 활동
                <span class="time-guide">약 10분</span>
            </div>
            
            ${book.activities.before.storytelling ? `
                <div class="activity-content">
                    <h4>📖 도입 스토리텔링</h4>
                    <p>${book.activities.before.storytelling}</p>
                </div>
            ` : ''}
            
            ${book.activities.before.prediction ? `
                <div class="activity-content">
                    <h4>🔮 내용 예상하기</h4>
                    <ul style="list-style: none; padding: 0;">
                        ${book.activities.before.prediction.map(item => 
                            `<li style="padding: 8px 0;">✓ ${item}</li>`
                        ).join('')}
                    </ul>
                </div>
            ` : ''}
        </div>
    `;
    
    // 읽기 중 활동
    bodyHTML += `
        <div class="activity-section">
            <div class="activity-title">
                <div class="activity-icon">📚</div>
                읽기 중 활동
                <span class="time-guide">약 20분</span>
            </div>
            
            ${book.activities.during.factCheck ? `
                <div class="activity-content">
                    <h4>🔍 사실확인 질문</h4>
                    ${book.activities.during.factCheck.map(q => `
                        <div class="question-box">
                            <div class="question-type">사실확인</div>
                            ${q}
                        </div>
                    `).join('')}
                </div>
            ` : ''}
            
            ${book.activities.during.interaction ? `
                <div class="activity-content">
                    <h4>💬 상호교류 질문</h4>
                    ${book.activities.during.interaction.map(q => `
                        <div class="question-box">
                            <div class="question-type">상호교류</div>
                            ${q}
                        </div>
                    `).join('')}
                </div>
            ` : ''}
        </div>
    `;
    
    // 읽기 후 활동
    bodyHTML += `
        <div class="activity-section">
            <div class="activity-title">
                <div class="activity-icon">✨</div>
                읽기 후 활동
                <span class="time-guide">약 10분</span>
            </div>
            
            ${book.activities.after.reflection ? `
                <div class="activity-content">
                    <h4>🌟 성찰 및 확장 질문</h4>
                    ${book.activities.after.reflection.map(q => `
                        <div class="question-box">
                            <div class="question-type">성찰</div>
                            ${q}
                        </div>
                    `).join('')}
                </div>
            ` : ''}
            
            ${book.activities.after.worksheetUrl ? `
                <div class="activity-content">
                    <h4>📝 추가 활동 자료</h4>
                    <p>학생들과 함께 진행할 수 있는 워크시트와 활동 자료입니다.</p>
                    <button class="download-btn" onclick="openWorksheet('${book.activities.after.worksheetUrl}')">
                        📝 웹 학습지 바로가기
                    </button>
                </div>
            ` : ''}
            
            ${book.teachingTips?.extension ? `
                <div class="activity-content">
                    <h4>🚀 심화 활동</h4>
                    <p>${book.teachingTips.extension}</p>
                </div>
            ` : ''}
        </div>
    `;
    
    // 다운로드 버튼 그룹
    bodyHTML += `
        <div class="download-group">
            <button class="download-btn" onclick="printLesson(${book.id})">
                🖨️ 수업안 인쇄
            </button>
            <button class="download-btn" onclick="exportLesson(${book.id})">
                💾 PDF 저장
            </button>
            <button class="download-btn" onclick="shareBook(${book.id})">
                🔗 링크 공유
            </button>
        </div>
    `;
    
    modalBody.innerHTML = bodyHTML;
}