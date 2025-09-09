// ============================================
// 유틸리티 함수 모듈
// ============================================

// PDF 내보내기 (실제로는 인쇄 다이얼로그를 통해)
export function exportToPDF(book) {
    const printWindow = window.open('', '_blank');
    const html = generatePrintHTML(book);
    
    printWindow.document.write(html);
    printWindow.document.close();
    
    // 인쇄 다이얼로그 자동 실행
    printWindow.onload = function() {
        printWindow.print();
    };
}

// JSON 내보내기
export function exportToJSON(data, filename) {
    const dataStr = JSON.stringify(data, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
    
    const exportLink = document.createElement('a');
    exportLink.setAttribute('href', dataUri);
    exportLink.setAttribute('download', filename);
    document.body.appendChild(exportLink);
    exportLink.click();
    document.body.removeChild(exportLink);
}

// 공유 기능
export function shareContent(book) {
    const shareUrl = `${window.location.origin}${window.location.pathname}#book-${book.id}`;
    const shareText = `📚 ${book.title} - 그림책 수업 레시피\n작가: ${book.author}\n${book.tags.map(t => '#' + t).join(' ')}`;
    
    // Web Share API 지원 확인
    if (navigator.share) {
        navigator.share({
            title: `${book.title} - 그림책 수업 레시피`,
            text: shareText,
            url: shareUrl
        }).catch(err => {
            // 공유 취소 시 무시
            if (err.name !== 'AbortError') {
                copyToClipboard(shareUrl);
            }
        });
    } else {
        // 클립보드에 복사
        copyToClipboard(shareUrl);
    }
}

// 클립보드 복사
function copyToClipboard(text) {
    // 새로운 Clipboard API 사용
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(() => {
            showToast('링크가 클립보드에 복사되었습니다!');
        }).catch(() => {
            fallbackCopyToClipboard(text);
        });
    } else {
        // 폴백 방식
        fallbackCopyToClipboard(text);
    }
}

// 클립보드 복사 폴백
function fallbackCopyToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        document.execCommand('copy');
        showToast('링크가 클립보드에 복사되었습니다!');
    } catch (err) {
        console.error('클립보드 복사 실패:', err);
        showToast('클립보드 복사에 실패했습니다.');
    }
    
    document.body.removeChild(textArea);
}

// 토스트 메시지 표시
function showToast(message) {
    // 기존 토스트 제거
    const existingToast = document.querySelector('.toast');
    if (existingToast) {
        existingToast.remove();
    }
    
    // 새 토스트 생성
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        bottom: 100px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 12px 24px;
        border-radius: 8px;
        z-index: 10000;
        animation: slideUp 0.3s ease;
    `;
    
    document.body.appendChild(toast);
    
    // 3초 후 제거
    setTimeout(() => {
        toast.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// 수업안 인쇄용 HTML 생성
export function printLesson(book) {
    const printWindow = window.open('', '_blank');
    const html = generatePrintHTML(book);
    
    printWindow.document.write(html);
    printWindow.document.close();
    printWindow.print();
}

// 인쇄용 HTML 생성
function generatePrintHTML(book) {
    const gradeText = book.grade ? book.grade.join(', ') : '전학년';
    const subjectText = book.subject ? book.subject.join(', ') : '';
    
    return `
        <!DOCTYPE html>
        <html lang="ko">
        <head>
            <meta charset="UTF-8">
            <title>${book.title} - 그림책 수업안</title>
            <style>
                @page {
                    size: A4;
                    margin: 20mm;
                }
                
                body {
                    font-family: 'Malgun Gothic', '맑은 고딕', sans-serif;
                    line-height: 1.8;
                    color: #333;
                }
                
                h1 {
                    color: #667eea;
                    border-bottom: 3px solid #667eea;
                    padding-bottom: 10px;
                    margin-bottom: 20px;
                }
                
                h2 {
                    color: #764ba2;
                    margin-top: 30px;
                    margin-bottom: 15px;
                    page-break-after: avoid;
                }
                
                h3 {
                    color: #555;
                    margin-top: 20px;
                    margin-bottom: 10px;
                }
                
                .header-info {
                    background: #f8f9fa;
                    padding: 15px;
                    border-radius: 8px;
                    margin-bottom: 30px;
                }
                
                .header-info p {
                    margin: 5px 0;
                }
                
                .section {
                    margin: 25px 0;
                    page-break-inside: avoid;
                }
                
                .question {
                    background: #f0f4ff;
                    border-left: 4px solid #667eea;
                    padding: 10px 15px;
                    margin: 10px 0;
                }
                
                .question-type {
                    font-weight: bold;
                    color: #667eea;
                    font-size: 0.9em;
                    margin-bottom: 5px;
                }
                
                .tips {
                    background: #fff9e6;
                    border: 1px solid #f6ad55;
                    border-radius: 8px;
                    padding: 15px;
                    margin: 20px 0;
                }
                
                .tips h3 {
                    color: #d97706;
                    margin-top: 0;
                }
                
                ul {
                    margin: 10px 0;
                    padding-left: 25px;
                }
                
                li {
                    margin: 5px 0;
                }
                
                .footer {
                    margin-top: 40px;
                    padding-top: 20px;
                    border-top: 1px solid #ddd;
                    text-align: center;
                    color: #666;
                    font-size: 0.9em;
                }
                
                @media print {
                    .no-print {
                        display: none;
                    }
                }
            </style>
        </head>
        <body>
            <h1>📚 ${book.title}</h1>
            
            <div class="header-info">
                <p><strong>작가:</strong> ${book.author}</p>
                ${book.illustrator ? `<p><strong>그림:</strong> ${book.illustrator}</p>` : ''}
                ${book.publisher ? `<p><strong>출판사:</strong> ${book.publisher}</p>` : ''}
                <p><strong>대상 학년:</strong> ${gradeText}</p>
                ${subjectText ? `<p><strong>연계 과목:</strong> ${subjectText}</p>` : ''}
                ${book.duration ? `<p><strong>수업 시간:</strong> ${book.duration}</p>` : ''}
                <p><strong>주제:</strong> ${book.tags.join(', ')}</p>
            </div>
            
            ${book.teachingTips ? `
                <div class="tips">
                    <h3>💡 교사용 지도 팁</h3>
                    ${book.teachingTips.preparation ? `<p><strong>준비사항:</strong> ${book.teachingTips.preparation}</p>` : ''}
                    ${book.teachingTips.keyPoints ? `
                        <p><strong>핵심 포인트:</strong></p>
                        <ul>
                            ${book.teachingTips.keyPoints.map(point => `<li>${point}</li>`).join('')}
                        </ul>
                    ` : ''}
                    ${book.teachingTips.difficulty ? `<p><strong>주의사항:</strong> ${book.teachingTips.difficulty}</p>` : ''}
                </div>
            ` : ''}
            
            <h2>📖 읽기 전 활동</h2>
            <div class="section">
                ${book.activities.before.storytelling ? `
                    <h3>도입 스토리텔링</h3>
                    <p>${book.activities.before.storytelling}</p>
                ` : ''}
                
                ${book.activities.before.prediction ? `
                    <h3>내용 예상하기</h3>
                    <ul>
                        ${book.activities.before.prediction.map(p => `<li>${p}</li>`).join('')}
                    </ul>
                ` : ''}
            </div>
            
            <h2>📚 읽기 중 활동</h2>
            <div class="section">
                ${book.activities.during.factCheck ? `
                    <h3>사실확인 질문</h3>
                    ${book.activities.during.factCheck.map((q, i) => `
                        <div class="question">
                            <div class="question-type">질문 ${i + 1}</div>
                            ${q}
                        </div>
                    `).join('')}
                ` : ''}
                
                ${book.activities.during.interaction ? `
                    <h3>상호교류 질문</h3>
                    ${book.activities.during.interaction.map((q, i) => `
                        <div class="question">
                            <div class="question-type">질문 ${i + 1}</div>
                            ${q}
                        </div>
                    `).join('')}
                ` : ''}
            </div>
            
            <h2>✨ 읽기 후 활동</h2>
            <div class="section">
                ${book.activities.after.reflection ? `
                    <h3>성찰 및 확장 질문</h3>
                    ${book.activities.after.reflection.map((q, i) => `
                        <div class="question">
                            <div class="question-type">질문 ${i + 1}</div>
                            ${q}
                        </div>
                    `).join('')}
                ` : ''}
                
                ${book.teachingTips?.extension ? `
                    <h3>심화 활동</h3>
                    <p>${book.teachingTips.extension}</p>
                ` : ''}
            </div>
            
            <div class="footer">
                <p>그림책 수업 레시피 | ${new Date().toLocaleDateString('ko-KR')}</p>
                <p class="no-print">
                    <button onclick="window.print()">🖨️ 인쇄하기</button>
                </p>
            </div>
        </body>
        </html>
    `;
}

// 날짜 포맷팅
export function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('ko-KR', options);
}

// 시간 포맷팅
export function formatDuration(minutes) {
    if (minutes < 60) {
        return `${minutes}분`;
    }
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return mins > 0 ? `${hours}시간 ${mins}분` : `${hours}시간`;
}