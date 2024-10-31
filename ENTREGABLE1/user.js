
function updateProfile() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    if (name && email && password) {
     
  
      document.getElementById("confirmationMessage").textContent = "¡Perfil actualizado exitosamente!";
    } else {
    
      document.getElementById("confirmationMessage").textContent = "Por favor complete todos los campos.";
    }
  }
  document.getElementById('profileImageInput').addEventListener('change', function(event) {
    const reader = new FileReader();
    reader.onload = function() {
        const profileImage = document.getElementById('profileImage');
        profileImage.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
});

  