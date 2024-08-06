// 네비게이션 항목들 추가
const headerNavs = [
    { title: '얄코강좌는', link: '#about' },
    { title: 'HTML', link: '#html' },
    { title: 'CSS', link: '#css' },
    { title: '커리큘럼', link: '#curriculum' },
    { title: '문의하기', link: '#contact' }
];

const $headerNavUl = document.querySelector('.header__nav ul'); //html 요소는 주로 변수 | 상수 앞에 '$'붙임! 

for (const nav of headerNavs) {
    const $li = document.createElement('li'); //createElement('html요소') == html 요소를 만듬
    $li.classList.add('header__nav-item');

    const $a = document.createElement('a');
    $a.textContent = nav.title; //a에 nav.title 적기
    $a.setAttribute('href', nav.link); //a의 속성, href 에 nav.link 넣기

    $li.appendChild($a); //li에 밑에 a 추가
    $headerNavUl.appendChild($li); //$headerNavUl 밑에 li 추가
}

//about 항목들 추가
