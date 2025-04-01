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


// Estrutura JS do input checkbox
var checkbox = document.getElementById("switch");
var text = document.getElementById("switch-text");

checkbox.addEventListener("change", function() {
  text.textContent = this.checked ? "Claro" : "Escuro";
});