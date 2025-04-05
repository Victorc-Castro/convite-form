// Estrutura JS do input file
document.getElementById("file-input").addEventListener("change", function() {
  let file = this.files[0];
  let erroMsg = document.getElementById("errorMsg");

  if (file) {
    let allowedTypes = ["image/png", "image/jpeg"];
    if (!allowedTypes.includes(file.type)) { 
      errorMsg.textContent = "Apenas arquivos PNG e JPG são permitidos";
      document.getElementById("img-error").innerHTML = `<div style="width: 1.2rem; height: 1.2rem;"></div>`;
      document.getElementById("file-name").innerHTML = "Nenhum arquivo selecionado";
      this.value = "";
    } else {
      erroMsg.textContent = "";
      document.getElementById("file-name").innerHTML = "img.png"; 
      document.getElementById("img-error").innerHTML = "";
    }
  }
});

// Estrutura JS do input local
let input = document.getElementById("local-info");
let error2 = document.getElementById("error-2");

input.addEventListener("input", () => {
  if (input.value.trim() === "") {
    error2.style.opacity = "1";
  } else {
    error2.style.opacity = "0";
  }
});

input.addEventListener("blur", () => {
  if (input.value.trim() === "") {
    error2.style.opacity = "1";
  }
});

let input2 = document.getElementById("contat-email");
let error3 = document.getElementById("error-3");

input2.addEventListener("input", () => {
  if (input2.value.trim() === "") {
    error3.style.opacity = "1";
  } else {
    error3.style.opacity = "0";
  }
});

input2.addEventListener("blur", () => {
  if (input2.value.trim() === "") {
    error3.style.opacity = "1";
  }
});

let input3 = document.getElementById("phone-info");
let error4 = document.getElementById("error-4");

input3.addEventListener("input", () => {
  if (input3.value.trim() === "") {
    error4.style.opacity = "1";
  } else {
    error4.style.opacity = "0";
  }
});

input3.addEventListener("blur", () => {
  if (input3.value.trim() === "") {
    error4.style.opacity = "1";
  }
});


// Estrutura JS do input checkbox
var checkbox = document.getElementById("switch");
var text = document.getElementById("switch-text");

checkbox.addEventListener("change", function() {
  text.textContent = this.checked ? "Claro" : "Escuro";
});