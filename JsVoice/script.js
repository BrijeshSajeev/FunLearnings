const btn = document.querySelector('.btn');
const input = document.querySelector('.input');
const form = document.querySelector('.container');
let text;

form.addEventListener('submit',function(e){
    e.preventDefault();
    text = input.value;
    let utr= new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utr);
})
