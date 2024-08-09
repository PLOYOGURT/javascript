document.addEventListener('DOMContentLoaded', function(){
    
    let num1 = document.getElementById('num1');
    let num2 = document.getElementById('num2');
    const submit = document.querySelector('.submit');
    const result = document.getElementById('result');
    const Operator = document.getElementById('Operator');

    function selectedoperator(){
        const operator = Operator.value
        return operator;
    }

    function getnum(num) {
        const valuee = parseFloat(num.value) || '?'; 
        return valuee
        
    }

    function calculate(){
        if(selectedoperator() == '+'){
            return getnum(num1)+getnum(num2);
        }
        else if(selectedoperator() == '-'){
            return getnum(num1)-getnum(num2);
        }
        else if(selectedoperator() == '*'){
            return getnum(num1) * getnum(num2);
        }
        else if(selectedoperator() == "/"){
            return getnum(num1)/getnum(num2);
        }
    }

    submit.addEventListener('click', function (){
        result.textContent = calculate();
    });

});