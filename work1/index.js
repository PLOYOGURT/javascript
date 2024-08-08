// 숫자 버튼 채워 넣기
const numberBtn = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const $numberUl = document.querySelector('.number');

for (let i = 0; i < numberBtn.length; i++) {
    const num = numberBtn[i];

    const $input = document.createElement('input');
    $input.classList.add('num-btn');
    $input.setAttribute('type', 'button');
    $input.setAttribute('value', num);

    $numberUl.appendChild($input);
}

// 연산자 버튼 넣기
const calculatorBtn = ['=', '+', '-', 'x', '/'];
const $calUl = document.querySelector('.cal');

for (let i = 0; i < calculatorBtn.length; i++) {
    const cal = calculatorBtn[i];

    const $input = document.createElement('input');
    $input.classList.add('cal-btn');
    $input.setAttribute('type', 'button');
    $input.setAttribute('value', cal);

    $calUl.appendChild($input);
}

// 숫자 버튼이 눌려졌을때
const $numInput = document.querySelectorAll('.number input');
const $calInput = document.querySelectorAll('.cal input');
const $span = document.querySelector('span');

let number1 = '', number2 = '', symbol = '', display = '';

for (let i = 0; i < $numInput.length; i++) {
    const $num = $numInput[i];

    $num.addEventListener('click', () => {
        if (symbol) {
            number2 += $num.value;
        } else {
            number1 += $num.value;
        }
        display += $num.value;
        $span.textContent = display;
    });
}

for (let i = 0; i < $calInput.length; i++) {
    const $cal = $calInput[i];

    $cal.addEventListener('click', () => {
        const calValue = $cal.value;

        if (calValue == '=') {
            if (number2) {
                let result;
                switch (symbol) {
                    case '+':
                        result = parseInt(number1) + parseInt(number2);
                        break;
                    case '-':
                        result = parseInt(number1) - parseInt(number2);
                        break;
                    case 'x':
                        result = parseInt(number1) * parseInt(number2);
                        break;
                    case '/':
                        result = parseFloat(number1) / parseFloat(number2);
                        break;
                }
                $span.textContent = result;
                display = result.toString();
            } else {
                alert('2번째 숫자를 입력하세요');
            }
        } else {
            if (number1) {
                if (!symbol) {
                    symbol = calValue;
                    display += symbol;
                    $span.textContent = display;
                } else {
                    alert('이미 연산자가 있습니다.');
                }
            } else {
                alert('첫 번째 숫자를 입력하세요.');
            }
        }
    });
}

//초기화 버튼을 눌렀을때
const $delete = document.querySelector('button[type=reset]')

$delete.addEventListener('click', () =>{
    $span.innerText = '';
    number1 = '', number2 = '', symbol = '', display = '';
});