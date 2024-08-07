

// const submit = document.querySelector("random");

// const num1 = document.getElementById('num1');
// const num2 = document.getElementById('num2');
// const num3 = document.getElementById('num3');
// const num4 = document.getElementById('num4');
// const num5 = document.getElementById('num5');
// const num6 = document.getElementById('num6');

// const numarr = [num1, num2, num3, num4, num5, num6];

// submit.addEventListener('click', function(){
//     const rand1 = Math.floor(Math.random() * 46);
//     const rand2 = Math.floor(Math.random() * 46);
//     const rand3 = Math.floor(Math.random() * 46);
//     const rand4 = Math.floor(Math.random() * 46);
//     const rand5 = Math.floor(Math.random() * 46);
//     const rand6 = Math.floor(Math.random() * 46);
//     for(let i = 1; i<=6; i++){
//         numarr['num'+i].
//     }
// });
const submit = document.querySelector(".random"); 

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
    for (let i = 0; i < 6; i++) {
        setTimeout(function(){
            numarr[i].textContent = randNums[i];
          }, 500*i);
        
    }
});
