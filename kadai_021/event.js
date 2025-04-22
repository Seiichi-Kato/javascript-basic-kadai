// ボタンとテキスト要素を取得
const btn = document.getElementById('btn');
const text = document.getElementById('text');

// ボタンのクリック時のイベント処理
btn.addEventListener('click', () => {
    // 2秒後にテキストを変更
    setTimeout(() => {
        text.innerText = "ボタンをクリックしました";
    }, 2000); // 2000ミリ秒（2秒）
});
