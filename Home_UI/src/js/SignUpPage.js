// Utilities
// =======================================================
 function check() {
 if(document.getElementById('password2').value !=''){
  if ((document.getElementById('password1').value ==
    document.getElementById('password2').value)) {
    document.getElementById('message').style.color = 'green';
    document.getElementById('message').innerHTML = 'matching';
  } else {
    document.getElementById('message').style.color = 'red';
    document.getElementById('message').innerHTML = 'not matching';
  }}
}