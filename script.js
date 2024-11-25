// 設置倒數時間
let countdownTime = 180;
let countdownInterval;

// 初始化倒數計時
function startCountdown() {
    const countdownElement = document.getElementById("countdown");
    countdownElement.textContent = countdownTime; // 顯示初始倒數時間

    countdownInterval = setInterval(() => {
        countdownTime--;
        countdownElement.textContent = countdownTime;

        // 倒數時間結束
        if (countdownTime <= 0) {
            clearInterval(countdownInterval);
            countdownElement.textContent = "倒數結束，請重傳驗證碼！";
        }
    }, 1000); // 每秒執行一次
}

// 重置倒數計時
function resetCountdown() {
    clearInterval(countdownInterval); // 清除現有的倒數
    countdownTime = 180; // 重置時間
    startCountdown(); // 重新啟動倒數
}

// 成功驗證後跳轉
function verifySuccess() {
    // 模擬驗證，這裡可以加上實際驗證邏輯
    window.location.href = "https://signupsuccess.vercel.app"; // 跳轉至成功頁面
}

// 輸入框自動切換功能
function setupCodeInput() {
    const inputs = document.querySelectorAll(".code-input");

    inputs.forEach((input, index) => {
        input.addEventListener("input", () => {
            if (input.value.length === 1 && index < inputs.length - 1) {
                inputs[index + 1].focus(); // 跳到下一個輸入框
            }
        });

        input.addEventListener("keydown", (event) => {
            if (event.key === "Backspace" && input.value === "" && index > 0) {
                inputs[index - 1].focus(); // 回到上一個輸入框
            }
        });
    });
}

// 初始化事件監聽器
document.addEventListener("DOMContentLoaded", () => {
    // 啟動倒數計時
    startCountdown();

    // 綁定重傳驗證碼按鈕事件
    document.querySelector(".btn-retry").addEventListener("click", resetCountdown);

    // 綁定確定送出按鈕事件
    document.querySelector(".btn-confirm").addEventListener("click", verifySuccess);

    // 設置驗證碼輸入框自動切換
    setupCodeInput();
});
