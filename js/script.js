function sendMessage(){
  alert('Aidan Lish: '+ msg.value);
}

var alertButton = document.getElementById('entrybutton');
var output = document.getElementById('textoutput');
var msg = document.getElementById('entryinput');
alertButton.addEventListener('click', sendMessage);
alertButton.addEventListener('click', function(){
  output.innerHTML = msg.value;
});