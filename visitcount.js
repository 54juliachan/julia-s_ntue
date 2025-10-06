// visitcount.js

document.addEventListener('DOMContentLoaded', () => {
    // 使用合法 namespace 和 key
    const namespace = 'julia_s_ntue';
    const key = 'visits';
    const apiUrl = `https://api.countapi.xyz/hit/${namespace}/${key}`;

    fetch(apiUrl)
        .then(res => {
            if (!res.ok) throw new Error('網路回應非 OK');
            return res.json();
        })
        .then(data => {
            document.getElementById('count').textContent = data.value;
        })
        .catch(err => {
            console.error('訪問次數載入失敗：', err);
            document.getElementById('count').textContent = '無法取得';
        });
});
