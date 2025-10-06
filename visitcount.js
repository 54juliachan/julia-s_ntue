// 使用 countapi，這是可以自由使用的公開 namespace
fetch('https://api.countapi.xyz/hit/julia-s-ntue.vercel.app/visits')
  .then(res => res.json())
  .then(data => {
    document.getElementById('count').textContent = data.value;
  })
  .catch(err => {
    console.error('訪問次數載入失敗：', err);
    document.getElementById('count').textContent = '無法取得';
  });

  fetch('https://api.countapi.xyz/hit/julia-s-ntue.vercel.app/visits')
  .then(res => res.json())
  .then(data => document.getElementById('count').textContent = data.value);
