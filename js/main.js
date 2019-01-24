// listen to the submit 
document.getElementById('myForm').addEventListener('submit',QRgen);

function QRgen(event){
  
  var url = document.getElementById('url').value;
  var qrcode = new QRCode("Result", {
    text: url,
    width: 177,
    height: 177,
    colorDark : "#06679b",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
});
  //prevent form from submitting
  event.preventDefault();
}

