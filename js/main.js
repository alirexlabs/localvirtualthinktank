// ==========================================================================
// Local Virtual ThinkTank (LVTT) - Zen UI Interactions
// ==========================================================================

// タブ切り替え（実機ショーケース）
function switchZenTab(index) {
  const tabs = document.querySelectorAll('.tab-btn');
  const views = document.querySelectorAll('.view-pane');

  tabs.forEach((tab, i) => {
    if (i === index) {
      tab.classList.add('active');
    } else {
      tab.classList.remove('active');
    }
  });

  views.forEach((view, i) => {
    if (i === index) {
      view.classList.add('active');
    } else {
      view.classList.remove('active');
    }
  });
}

// 禅ライト ⇄ 漆ダーク 切り替え機能
function toggleZenTheme() {
  const htmlEl = document.documentElement;
  const currentTheme = htmlEl.getAttribute('data-theme') || 'light';
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  htmlEl.setAttribute('data-theme', newTheme);

  const toggleBtn = document.getElementById('themeToggle');
  if (toggleBtn) {
    toggleBtn.textContent = newTheme === 'dark' ? '☀️' : '🌙';
  }
  localStorage.setItem('lvtt-zen-theme', newTheme);
}

// 初期テーマ復元
(function initTheme() {
  const saved = localStorage.getItem('lvtt-zen-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = saved || (prefersDark ? 'dark' : 'light');

  document.documentElement.setAttribute('data-theme', theme);
  document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('themeToggle');
    if (toggleBtn) {
      toggleBtn.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
  });
})();
