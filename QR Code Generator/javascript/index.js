let inputfield = document.getElementById('input-value');
let result = document.getElementById('result');
let inputvalue = inputfield.value;
let QR_CODE = document.getElementById("QR-code"); 

function QRCODE(){
    let response = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + inputvalue;
    console.log(response)
    QR_CODE.src = response;

}
const error = ()=>{
    if(!inputfield.value){
        result.innerHTML = `<span style="color:red">Enter text first.</span>`
    }else{
        QRCODE();
    }
}
document.getElementById('btn').addEventListener('click',error);

