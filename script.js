let password = document.getElementById("password");
let message = document.getElementById("message");
passwordStatus = document.getElementById("passwordStatus");
let strengthBar = document.getElementById("strengthBar");
function eyeCLoseEye() {
  let eyeIcon = document.querySelector(".eyeIcon");
  let isPassword = password.type === "password";
  if (isPassword) {
    password.type = "text";
    eyeIcon.classList.remove("fa-eye-slash");
    eyeIcon.classList.add("fa-eye");
  } else {
    password.type = "password";
    eyeIcon.classList.remove("fa-eye");
    eyeIcon.classList.add("fa-eye-slash");
  }
}

function shake() {
  password.classList.add("error");
  setTimeout(function () {
    password.classList.remove("error");
  }, 1000);
}  

function checkCondition() {
   let number= document.getElementById("number");
   let lowercase = document.getElementById("lowercase");
   let uppercase = document.getElementById("uppercase");
   let symbol = document.getElementById("symbol");
   let length = document.getElementById('length')
    
number.innerHTML = "";
lowercase.innerHTML = "";
uppercase.innerHTML = "";
symbol.innerHTML = "";
length.innerHTML = "";
    if (password.value.match(/[0-9]/)) {
        number.innerHTML = '<i class="fa-solid fa-circle-check"></i>'; 
    }
    if (password.value.match(/[a-z]/)) {
        lowercase.innerHTML ='<i class="fa-solid fa-circle-check"></i>';
    }
    if (password.value.match(/[A-Z]/)) {
      uppercase.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    }
    if (password.value.match(/[!@#$%^&*]/)) {
      symbol.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    }
    if (password.value.length >= 8) {
      length.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    }

    calculateStrength();
    

}



function calculateStrength() {
  let strength = 0;
  let hasNumber = /[0-9]/.test(password.value); // Output: true
  if (hasNumber) {
    strength++;
  } else {
    number.innerHTML = "";
  }

  let hasLowereCase = /[a-z]/.test(password.value); // Output: true
  if (hasLowereCase) {
    strength++;
  } else {
    lowercase.innerHTML = "";
  }

  let hasUpperCase = /[A-Z]/.test(password.value); // Output: true
  if (hasUpperCase) {
    strength++;
  } else {
    uppercase.innerHTML = "";
  }

  let hasSymbol = /[!@#$%^&*]/.test(password.value); // Output: true
  if (hasSymbol) {
    strength++;
  } else {
    symbol.innerHTML = "";
  }

  if (password.value.length >= 8) {
    strength++;
  } else {
    length.innerHTML = "";
  }

  if (strength === 0) {
      strengthBar.style.width = "0%";
      passwordStatus.innerHTML = "";
      message.innerHTML=''
    shake();
  }
  if (strength === 1) {
    strengthBar.style.width = "20%";
    strengthBar.style.backgroundColor = "#ff3d02"; // إعطاء لون واصل
    shake();
    message.style.display = "block"; //show error massage
    passwordStatus.innerHTML = "very weak"; //show state of pass
    password.style.borderColor = "#ff4d4d"; //change the border of input
    message.style.color = "#ff4d4d"; //change the color of message
    passwordStatus.style.color = "#ff4d4d";
    console.log(strength);
  }
  if (strength === 2) {
    strengthBar.style.width = "40%";
    strengthBar.style.backgroundColor = "#ff5925"; // إعطاء لون واصل
    message.style.display = "block";
    passwordStatus.innerHTML = "weak";
    password.style.borderColor = "#ff5925";
    message.style.color = "#ff5925";
    passwordStatus.style.color = "#ff5925";
  }
  if (strength === 3) {
    strengthBar.style.width = "60%";
    strengthBar.style.backgroundColor = "#ffd166"; // إعطاء لون واصل
    message.style.display = "block";
    passwordStatus.innerHTML = "medium";
    password.style.borderColor = "#ffd166";
    message.style.color = "#ffd166";
    passwordStatus.style.color = "#ffd166";
  }
  if (strength === 4) {
    strengthBar.style.width = "80%";
    strengthBar.style.backgroundColor = "#2ecc71"; // إعطاء لون واصل
    message.style.display = "block";
    passwordStatus.innerHTML = "strong";
    password.style.borderColor = "#2ecc71";
    message.style.color = "#2ecc71";
    passwordStatus.style.color = "#2ecc71";
  }
  if (strength === 5) {
    strengthBar.style.width = "100%";
    strengthBar.style.backgroundColor = "#0b833d"; // إعطاء لون واصل
    message.style.display = "block";
    passwordStatus.innerHTML = "very strong";
    password.style.borderColor = "#0b833d";
    message.style.color = "#0b833d";
    passwordStatus.style.color = "#0b833d";
  }
}
    // console.log("القيمة الحسابية النهائية:", strength);

