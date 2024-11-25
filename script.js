// 倒數計時功能
let countdownElement = document.getElementById('countdown');
let timeLeft = 180;

const timer = setInterval(() => {
    if (timeLeft > 0) {
        timeLeft -= 1;
        countdownElement.textContent = timeLeft;
    } else {
        clearInterval(timer);
        alert('驗證碼已過期！');
    }
}, 1000);

// 驗證碼輸入框切換焦點
const codeInputs = document.querySelectorAll('.code-input');

codeInputs.forEach((input, index) => {
    input.addEventListener('input', (e) => {
        if (e.target.value.length === 1 && index < codeInputs.length - 1) {
            codeInputs[index + 1].focus();
        }
    });

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace' && index > 0 && e.target.value === '') {
            codeInputs[index - 1].focus();
        }
    });
});

// 重傳驗證碼按鈕功能 (範例)
document.querySelector('.btn-retry').addEventListener('click', () => {
    timeLeft = 180;
    clearInterval(timer);
    countdownElement.textContent = timeLeft;
    setInterval(timer, 1000);
});

// 確定送出按鈕功能 (範例)
document.querySelector('.btn-confirm').addEventListener('click', () => {
    let code = Array.from(codeInputs).map(input => input.value).join('');
    if (code.length === codeInputs.length) {
        alert(`驗證碼為：${code}`);
    } else {
        alert('請輸入完整的驗證碼！');
    }
});
