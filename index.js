


function apagar() {
    let displayvisor = document.getElementById("display").innerHTML = 0;
}

function calculate() {
        let expression = document.getElementById('display').value;
        let result = eval(expression);
        document.getElementById('display').value = result;
}


function visor(num) {
   let append = document.getElementById('display').value;
   return append.innerHTML = num;
}