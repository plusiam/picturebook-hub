// ============================================
// 그림책 수업 레시피 - 메인 애플리케이션
// ============================================

import { booksData } from '../data/books.js';
import { categories } from '../data/categories.js';
import { renderBooks, renderFilterTags, updateStats, renderModal } from './render.js';
import { exportToPDF, exportToJSON, shareContent, printLesson } from './utils.js';

// 전역 상태 관리
const state = {
    currentBooks: [...booksData],
    selectedTags: [],
    selectedGrades: [],
    selectedSubjects: [],
    searchQuery: ''
};

// DOM 요소 캐싱
const elements = {
    searchInput: null,
    booksGrid: null,
    filterTags: null,
    modal: null,
    fabMenu: null
};

// ============================================
// 초기화
// ============================================
document.addEventListener('DOMContentLoaded', initializeApp);

function initializeApp() {
    // DOM 요소 초기화
    elements.searchInput = document.getElementById('searchInput');
    elements.booksGrid = document.getElementById('booksGrid');
    elements.filterTags = document.getElementById('filterTags');
    elements.modal = document.getElementById('bookModal');
    elements.fabMenu = document.getElementById('fabMenu');
    
    // 초기 렌더링
    renderBooks(state.currentBooks);
    renderFilterTags(booksData, categories);
    updateStats(state.currentBooks);
    
    // 이벤트 리스너 설정
    setupEventListeners();
    
    // URL 해시 처리
    handleHashChange();
}

// ============================================
// 이벤트 리스너 설정
// ============================================
function setupEventListeners() {
    // 검색
    elements.searchInput?.addEventListener('input', debounce(handleSearch, 300));
    elements.searchInput?.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleSearch();
    });
    
    // 모달 닫기
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });
    
    elements.modal?.addEventListener('click', (e) => {
        if (e.target === elements.modal) closeModal();
    });
    
    // URL 해시 변경 감지
    window.addEventListener('hashchange', handleHashChange);
    
    // 필터 태그 이벤트 위임
    elements.filterTags?.addEventListener('click', handleFilterClick);
}

// ============================================
// 검색 및 필터링
// ============================================
function handleSearch() {
    const query = elements.searchInput.value.toLowerCase().trim();
    state.searchQuery = query;
    applyFilters();
}

function handleFilterClick(e) {
    const target = e.target;
    
    if (target.classList.contains('filter-tag')) {
        const filterType = target.dataset.type;
        const filterValue = target.dataset.value;
        
        target.classList.toggle('active');
        
        if (filterType === 'tag') {
            toggleArrayItem(state.selectedTags, filterValue);
        } else if (filterType === 'grade') {
            toggleArrayItem(state.selectedGrades, filterValue);
        } else if (filterType === 'subject') {
            toggleArrayItem(state.selectedSubjects, filterValue);
        }
        
        applyFilters();
    }
}

function applyFilters() {
    let filtered = [...booksData];
    
    // 검색어 필터
    if (state.searchQuery) {
        filtered = filtered.filter(book => 
            book.title.toLowerCase().includes(state.searchQuery) ||
            book.author.toLowerCase().includes(state.searchQuery) ||
            book.tags.some(tag => tag.toLowerCase().includes(state.searchQuery)) ||
            book.subject?.some(sub => sub.toLowerCase().includes(state.searchQuery))
        );
    }
    
    // 태그 필터
    if (state.selectedTags.length > 0) {
        filtered = filtered.filter(book =>
            state.selectedTags.some(tag => book.tags.includes(tag))
        );
    }
    
    // 학년 필터
    if (state.selectedGrades.length > 0) {
        filtered = filtered.filter(book =>
            state.selectedGrades.some(grade => book.grade.includes(grade))
        );
    }
    
    // 과목 필터
    if (state.selectedSubjects.length > 0) {
        filtered = filtered.filter(book =>
            book.subject && state.selectedSubjects.some(subject => book.subject.includes(subject))
        );
    }
    
    state.currentBooks = filtered;
    renderBooks(state.currentBooks);
    updateStats(state.currentBooks);
}

function resetFilters() {
    state.searchQuery = '';
    state.selectedTags = [];
    state.selectedGrades = [];
    state.selectedSubjects = [];
    
    if (elements.searchInput) elements.searchInput.value = '';
    
    document.querySelectorAll('.filter-tag.active').forEach(tag => {
        tag.classList.remove('active');
    });
    
    state.currentBooks = [...booksData];
    renderBooks(state.currentBooks);
    updateStats(state.currentBooks);
}

// ============================================
// 모달 관리
// ============================================
window.openModal = function(bookId) {
    const book = booksData.find(b => b.id === bookId);
    if (!book) return;
    
    renderModal(book);
    elements.modal.classList.add('active');
    document.body.style.overflow = 'hidden';
};

window.closeModal = function() {
    elements.modal.classList.remove('active');
    document.body.style.overflow = '';
};

// ============================================
// FAB 메뉴
// ============================================
window.toggleFabMenu = function() {
    elements.fabMenu.classList.toggle('active');
};

// ============================================
// 액션 함수들 (전역 노출)
// ============================================
window.searchBooks = handleSearch;
window.resetFilter = resetFilters;

window.printLesson = function(bookId) {
    const book = booksData.find(b => b.id === bookId);
    if (book) printLesson(book);
};

window.exportLesson = function(bookId) {
    const book = booksData.find(b => b.id === bookId);
    if (book) exportToPDF(book);
};

window.shareBook = function(bookId) {
    const book = booksData.find(b => b.id === bookId);
    if (book) shareContent(book);
};

window.openWorksheet = function(url) {
    if (url && url.startsWith('http')) {
        window.open(url, '_blank');
    } else {
        alert('학습지 링크가 아직 준비되지 않았습니다.');
    }
};

window.addNewBook = function() {
    alert(`📚 새 그림책 추가 방법:

1. GitHub에서 이 저장소를 Fork하세요
2. data/books.js 파일을 편집하세요
3. Pull Request를 보내주세요

자세한 방법은 README.md를 참고해주세요.`);
};

window.exportData = function() {
    exportToJSON(booksData, 'picturebook_hub_data.json');
};

window.openGitHub = function() {
    window.open('https://github.com/plusiam/picturebook-hub/issues/new', '_blank');
};

// ============================================
// 유틸리티 함수
// ============================================
function toggleArrayItem(array, item) {
    const index = array.indexOf(item);
    if (index > -1) {
        array.splice(index, 1);
    } else {
        array.push(item);
    }
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function handleHashChange() {
    const hash = window.location.hash;
    if (hash.startsWith('#book-')) {
        const bookId = parseInt(hash.replace('#book-', ''));
        if (bookId) {
            setTimeout(() => openModal(bookId), 100);
        }
    }
}

// 개발 모드 디버그
if (window.location.hostname === 'localhost') {
    window.appState = state;
    console.log('📚 그림책 수업 레시피 - 개발 모드');
    console.log('전역 상태:', state);
}