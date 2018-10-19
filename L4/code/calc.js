function calculate() {
    var num1 = document.getElementById('num1');
    var num2 = document.getElementById('num2');
    var result = document.getElementById('result');
    result.innerHTML = '<div class="alert alert-primary" role="alert">' + num1.value + ' + ' + num2.value + ' = ' + (Number(num1.value) + Number(num2.value)) +' </div> ';
}

document.getElementById('calculate').onclick = calculate;
