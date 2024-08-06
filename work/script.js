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

const aboutCards = [
    {
        img: './asset/about_1.svg',
        title: '빠른 강의',
        descs: [    
            '군더더기 없는 진행으로',
            '여러분의 시간을 절약합니다.'
        ]
        },
    {
        img: './asset/about_2.svg',
        title: '손쉬운 학습',
        descs: [
            '강의 페이지를 활용해서',
            '편리하게 실습할 수 있습니다.'
        ]
    },
    {
        img: './asset/about_2.svg',
        title: '플레이그라운드',
        descs: [
            '강의를 위해 제작한 도구가',
            '반복학습을 도와줍니다.'
        ]
    }
];

const $aboutDiv = document.querySelector('.about');

for (let i = 0; i < aboutCards.length; i++) {
    const card = aboutCards[i]; 

    const $div = document.createElement('div');
    $div.classList.add('about__card');//about__card라는 클래스를 가진 div만들기

    const $img = document.createElement('img');
    $img.classList.add('about__icon');//about__icon이라는 클래스를 가진 img를 만들고
    $img.setAttribute('src', card.img);//img 속성인 src에 card.img넣기!

    const $h2 = document.createElement('h2');
    $h2.classList.add('about__title')
    $h2.classList.add('_' + (i + 1));//about__title_i번째 클래스를 가진 h2태그를 만들고
    $h2.textContent = card.title;//h2태그 안에 card.title 를 적는다

    const $p = document.createElement('p'); //p태그를 만듬
    $p.classList.add('about__text');//만든 p 태그안에 about__text를 적기

    for (const desc of card.descs) {
        const $word = document.createElement('div'); //div를 만듬
        $word.textContent = desc;//div에 desc(card.descs배열의 요소)를 적기
        $p.appendChild($word);//p태그 아래에 div넣기
    }

    $div.appendChild($img);
    $div.appendChild($h2);
    $div.appendChild($p);//div태그 아래에 img, h2, p 태그 넣기

    $aboutDiv.appendChild($div);//이하동문
}

//커리큘럼 마우스오버 애니메이션

$currLis = document.querySelectorAll('.curriculum__list > li');//

$currProgBar = document.querySelector('.curriculum__progress .bar');

for (let i = 0; i < $currLis.length; i++) {
    const $li = $currLis[i];

    $li.addEventListener('mouseenter', () => {//커서가 i번째 li 위에 있을떄
      $currProgBar.style.width = (200 * i) + 'px'; // currProgBar의 width를 i*200만큼 늘린다
    });
    $li.addEventListener('mouseleave', () => {//커서가 i번째 li 위에 없을때
        $currProgBar.style.width = 0; // currProgBar의 width를 없앤다.
    });
}

//문의하기 탭 기능

const $contactTabs = document.querySelectorAll('input[name=contact]');
const $contactSlideCon = document.querySelector('.contact__slide-con');

for (let i = 0; i < $contactTabs.length; i++) {
    const $tab = $contactTabs[i];
    const marginLeft = [0, '-100vw'][i];

    $tab.addEventListener('click', () => { //i번째 input에 클릭 했을때
    $contactSlideCon.style.marginLeft = marginLeft; //contact__slide-con 클래스에 왼쪽 마진을 배열 marginLeft i번째 만큼 설정
    });
}