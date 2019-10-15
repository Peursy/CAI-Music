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

function setVisibility(anId, visibility)
    {
      node = document.getElementById(anId);
      node.style.visibility = visibility;
      if (visibility=="hidden")
      {
        // Contenu caché, le montrer
        node.style.height = "0";     // Optionnel rétablir la hauteur
      }
      else
      {
        // Contenu visible, le cacher
        node.style.height = "auto";      // Optionnel libérer l'espace
      }
    }
