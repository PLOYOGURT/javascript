// 숫자를 올바르게 입력했는지
const $form = document.querySelector('.input');  // form 요소 선택
const $num = document.querySelector('#numInput');

$form.addEventListener('submit', (event) => {
    event.preventDefault();
    const string = event.target.input.value;
    if (!string.trim()) {
        return alert('숫자를 입력하세요.');
    }
    const number = string.split(',').map((v) => parseInt(v.trim()));
    if (number.length !== 6) {
        return alert("숫자 6개를 입력하세요.");
    }
    if (new Set(number).size !== 6) {
        return alert("중복된 숫자를 입력하셨습니다.");
    }
    if (number.find((v) => v > 45 || v < 1)) {
        return alert("1부터 45까지의 숫자만 입력가능합니다.");
    }
});

// 숫자 랜덤 돌리기



