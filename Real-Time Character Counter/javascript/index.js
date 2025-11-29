const textBox = document.querySelector('#textbox');
const totalChar = document.querySelector('#totalChar');
const remainingChar = document.querySelector('#remainingChar');

textBox.addEventListener('keydown',()=>{
    totalChar.innerHTML = textBox.value.length + 1;
    remainingChar.innerHTML = textBox.getAttribute("maxLength") - textBox.value.length;
})