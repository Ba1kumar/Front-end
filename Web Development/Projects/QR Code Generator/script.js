let qrimgbox = document.getElementById('qrimgbox');
let qrimg = document.getElementById('qrimg');
let qrtext = document.getElementById('qrtext');


function qrCodeGenerator(){
      if(qrtext.value.length > 0) {
        qrimg.src =  "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrtext.value;
        qrimgbox.classList.add('show-img');
      }
}