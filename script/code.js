let btnConvert = document.querySelector('[data-btn]')
let output = document.querySelector('[data-output]')

function convert (){
    let minutes = document.getElementById('input').value 
    let seconds = minutes*60
    output.textContent = seconds + ' seconds'

}

btnConvert.addEventListener('click', convert)