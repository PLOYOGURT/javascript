
// const submit = document.querySelector(".random"); 

// const num1 = document.getElementById('num1');
// const num2 = document.getElementById('num2');
// const num3 = document.getElementById('num3');
// const num4 = document.getElementById('num4');
// const num5 = document.getElementById('num5');
// const num6 = document.getElementById('num6');

// const numarr = [num1, num2, num3, num4, num5, num6]; 

// submit.addEventListener('click', function(){
//     const randNums = [];
//     for (let i = 0; i < 6; i++) {
//         let rand;
//         do {
//             rand = Math.floor(Math.random() * 45) + 1; 
//         } while (randNums.includes(rand)); 
//         randNums.push(rand);
//     }
//     for (let i = 0; i < 6; i++) {
//         setTimeout(function(){
//             numarr[i].textContent = randNums[i];
//           }, 500*i);
        
//     }
// });



const submit = document.querySelector(".random");
const reset = document.querySelector(".reset");

const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const num3 = document.getElementById('num3');
const num4 = document.getElementById('num4');
const num5 = document.getElementById('num5');
const num6 = document.getElementById('num6');

const numarr = [num1, num2, num3, num4, num5, num6];

submit.addEventListener('click', function(){
    const randNums = [];
    for (let i = 0; i < 6; i++) {
        let rand;
        do {
            rand = Math.floor(Math.random() * 45) + 1;
        } while (randNums.includes(rand));
        randNums.push(rand);
    }

    const updateCounter = (element, targetNum) => {
        const increment = targetNum / 100;
        const update = () => {
            const count = +element.textContent;
            const nextCount = Math.ceil(count + increment);
            element.textContent = nextCount > targetNum ? targetNum : nextCount;
            if (count < targetNum) {
                requestAnimationFrame(update);
            }
        };
        update();
    };

    for (let i = 0; i < 6; i++) {
        setTimeout(function(){
            updateCounter(numarr[i], randNums[i], 500);
        }, 500 * i);
    }
});

reset.addEventListener('click', function(){
    for(let i = 0; i<6; i++){
        numarr[i].textContent = 0;
    }
});