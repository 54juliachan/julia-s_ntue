// 固定 namespace 和 key
const namespace = 'ntue-visitcount';
const key = 'visits';

// 等 DOM 載入完成再執行
document.addEventListener('DOMContentLoaded', () => {
  const countEl = document.getElementById('count');

  fetch(`https://api.countapi.xyz/hit/${namespace}/${key}`)
    .then(res => res.json())
    .then(data => {
      countEl.textContent = data.value;
    })
    .catch(err => {
      console.error('訪問次數載入失敗：', err);
      countEl.textContent = '無法取得';
    });
});
