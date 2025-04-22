document.addEventListener("DOMContentLoaded", function() {
    // ボタンとテキスト要素を取得
    const button = document.getElementById("btn");
    const text = document.getElementById("text");

    // ボタンのクリック時のイベント処理
    button.addEventListener("click", function() {
        text.innerText = "ボタンをクリックしました";
    });
});
