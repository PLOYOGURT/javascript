const $form = document.querySelector('.input');  // form 요소 선택
const $num = document.querySelector('#numInput');

$form.addEventListener('submit', (event) => {
    event.preventDefault();
    // 숫자를 올바르게 입력했는지
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

    // 숫자 랜덤 돌리기
    const rotto = Array(45).fill().map((e,i) => i+1);
    const randomNum = [];
    
    //피셔에이츠 셔플
    while(rotto.length > 0){
        const random = Math.floor(Math.random() * rotto.length);
        const spliceArray = rotto.splice(random,1);
        const value = spliceArray[0];
        randomNum.push(value);
    }
    console.log(randomNum);

    const winNum = randomNum.slice(0,6).sort((a,b) => a - b);
    const bonus = randomNum[6];
    console.log(winNum,bonus);

});


